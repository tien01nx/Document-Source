import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElementRef, ViewChild } from '@angular/core';
import { Environment } from '../../../../../environment/environment';
import { ProductsService } from '../../../../../service/products.service';
import { ReturnProductService } from '../../../../../service/ReturnService.service';
import { ProductReturnVM } from '../../../../../dtos/product.return.vm';
import { ProductReturnMV } from '../../../../../models/product.return.dto';

@Component({
  selector: 'app-detail-return',
  templateUrl: './detail-return.component.html',
  styleUrls: ['./detail-return.component.css'],
})
export class DetailReturnComponent implements OnInit {
  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef;
  @ViewChild('textAreaReason') textAreaReason!: ElementRef;
  productReturnVM: any;
  titleString = '';
  productId: any;
  Environment = Environment;

  updateReturnStatusForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    status: new FormControl(null, [Validators.required]),
    reason: new FormControl(null),
  });

  constructor(
    private title: Title,
    private productService: ProductsService,
    private returnService: ReturnProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.title.setTitle('Chi tiết phiếu đổi trả');
    this.findById(this.activatedRoute.snapshot.params['id']);

    this.updateReturnStatusForm
      .get('status')
      ?.valueChanges.subscribe((status: string) => {
        if (status == 'RETURN_REJECTED') {
          this.updateReturnStatusForm
            .get('reason')
            ?.setValidators([Validators.required, Validators.maxLength(100)]);
          this.updateReturnStatusForm.get('reason')?.updateValueAndValidity();
          this.textAreaReason.nativeElement.focus();
          this.textAreaReason.nativeElement.classList.remove('d-none');
        } else {
          this.textAreaReason.nativeElement.classList.add('d-none');
          this.updateReturnStatusForm.get('reason')?.reset();
          this.updateReturnStatusForm.get('reason')?.clearValidators();
          this.updateReturnStatusForm.get('reason')?.updateValueAndValidity();
        }
      });
  }

  findById(id: number) {
    this.returnService.findById(id).subscribe({
      next: (response: any) => {
        this.productReturnVM = response.data;
        console.log(response);
      },
      error: (err: any) => {
        console.log(err);
        this.toastr.error('Không tìm thấy phiếu đổi trả này', 'Thông báo');
      },
    });
  }

  resetForm() {
    this.updateReturnStatusForm.reset();
    this.updateReturnStatusForm.patchValue(this.productReturnVM);
  }

  updateReturnStatus() {
    this.updateReturnStatusForm.patchValue({
      id: this.productReturnVM.productReturn.id,
    });

    console.log(this.updateReturnStatusForm.value);
    debugger;
    this.returnService.findById(this.updateReturnStatusForm.value).subscribe({
      next: (data: any) => {
        this.toastr.success('Xử lý đổi trả thành công', 'Thông báo');
        // this.findById(this.returnProduct.id);
        this.btnCloseModal.nativeElement.click();
      },
      error: (error: any) => {
        console.log(error);
        if (error.status == 400 && error.error == 'RETURN_PRODUCT_NOT_FOUND') {
          this.toastr.error('Phiếu đổi trả không tồn tại', 'Thông báo');
        } else if (
          error.status == 400 &&
          error.error == 'RETURN_PRODUCT_STATUS_CANNOT_BE_CHANGED'
        ) {
          this.toastr.error('Phiếu đổi trả đã được xử lý', 'Thông báo');
        } else {
          this.toastr.error('Lỗi không xác định', 'Thông báo');
        }
      },
    });
  }
}
