import { Environment } from './../../../environment/environment';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../../../service/profile.service';
import { CustomerTransaction } from '../../../models/customer.transaction';
import { Utils } from '../../../Utils.ts/utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from '../../../models/customer.model';
import { DatePipe } from '@angular/common';
import { CustomerService } from '../../../service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef;
  customerTransaction: CustomerTransaction | undefined;
  trxTransaction: any;
  totalPrice: number = 0;
  totalorder: number = 0;
  protected readonly Utils = Utils;
  Environment = Environment;
  avatarSrc: string = '';

  // static PENDING = 'PENDING';
  // static ONHOLD = 'ONHOLD';
  // static WAITINGFORPICKUP = 'WAITINGFORPICKUP';
  // static WAITINGFORDELIVERY = 'WAITINGFORDELIVERY';
  // static DELIVERED = 'DELIVERED';
  // static CANCELLED = 'CANCELLED';

  totalOrder = 0;
  totalPending: number = 0;
  totalOnHold: number = 0;
  totalWaitingForPickup: number = 0;
  totalWaitingForDelivery: number = 0;
  totalDelivered: number = 0;
  totalCancel: number = 0;

  birthday: Date | undefined;
  isDisplayNone: boolean = false;
  errorMessage: string = '';
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    fullName: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.pattern(Utils.textPattern),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern(Utils.phoneNumberPattern),
    ]),
    gender: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    userId: new FormControl(null),
  });

  constructor(
    private profileService: ProfileService,
    private datePipe: DatePipe,
    private customerService: CustomerService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getProfile();
  }
  file: File | null = null;

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarSrc = e.target.result;
      };
      reader.readAsDataURL(this.file);
    }
    console.log('file', this.avatarSrc);
  }
  onSubmit() {
    if (this.customerForm.invalid) {
      return;
    }
    this.update();
  }

  selectStatusOrder(status: string) {
    console.log('data gốc', this.customerTransaction);

    if (status === 'ALL') {
      this.trxTransaction = this.customerTransaction?.trxTransactions;
      return;
    }

    this.trxTransaction = this.customerTransaction?.trxTransactions?.filter(
      (order) => order.orderStatus === status
    );
  }

  getProfile() {
    this.profileService.getProfile().subscribe((respon: any) => {
      this.customerTransaction = respon.data;
      this.trxTransaction = respon.data.trxTransactions;

      this.trxTransaction.forEach((order: any) => {
        if (order.orderStatus === Utils.PENDING) {
          this.totalPending += 1;
        } else if (order.orderStatus === Utils.ONHOLD) {
          this.totalOnHold += 1;
        } else if (order.orderStatus === Utils.WAITINGFORPICKUP) {
          this.totalWaitingForPickup += 1;
        } else if (order.orderStatus === Utils.WAITINGFORDELIVERY) {
          this.totalWaitingForDelivery += 1;
        } else if (order.orderStatus === Utils.DELIVERED) {
          this.totalDelivered += 1;
        } else if (order.orderStatus === Utils.CANCELLED) {
          this.totalCancel += 1;
        }
        this.totalOrder += 1;
      });

      this.getTotalPrice();
      console.log('profile', this.customerTransaction);
      console.log('trxTransactions', this.customerTransaction?.trxTransactions);
    });
  }

  openModalUpdate(customer: CustomerModel | undefined) {
    this.customerForm.patchValue({
      id: customer?.id,
      fullName: customer?.fullName,
      phoneNumber: customer?.phoneNumber,
      gender: customer?.gender,
      birthday: customer?.birthday,
      userId: customer?.userId,
      email: customer?.user.email,
      address: customer?.address,
    });
    // this.birthday = customer?.birthday;
    this.customerForm
      .get('birthday')
      ?.setValue(this.datePipe.transform(customer?.birthday, 'yyyy-MM-dd'));
    this.avatarSrc = Environment.apiBaseRoot + customer?.user.avatar;
  }
  // tỉnh tốngr tiefn bằng foreach
  getTotalPrice() {
    if (this.customerTransaction && this.customerTransaction.trxTransactions) {
      this.customerTransaction.trxTransactions.forEach((order) => {
        if (
          order.orderStatus === Utils.DELIVERED ||
          order.paymentStatus === Utils.PaymentStatusApproved
        ) {
          this.totalPrice += order.orderTotal + order.priceShip;
          this.totalorder += 1;
        }
      });
    } else {
      console.log('customerTransaction or trxTransactions is undefined');
    }
  }

  update() {
    this.customerService.Update(this.customerForm.value, this.file).subscribe({
      next: (response: any) => {
        if (response.message === 'Cập nhật thành công') {
          this.customerForm.reset();
          this.btnCloseModal.nativeElement.click();
          this.getProfile();
          this.toastr.success(response.message, 'Thông báo');
        } else {
          this.toastr.error(response.message, 'Thông báo');
        }
      },
      error: (error: any) => {
        this.errorMessage = error.error;
        this.isDisplayNone = false;
      },
    });
  }
}
