import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SupplierModel } from '../../../../models/supplier.model';
import { CommonModule } from '@angular/common';
import { PaginationDTO } from '../../../../dtos/pagination.dto';
import { SupplierService } from '../../../../service/supplier.service';
import Swal from 'sweetalert2';
import { Utils } from '../../../../Utils.ts/utils';

@Component({
  selector: 'app-supplier.admin',
  templateUrl: './supplier.admin.component.html',
  styleUrl: './supplier.admin.component.css',
})
export class SupplierAdminComponent implements OnInit {
  protected readonly Utils = Utils;
  paginationModel: PaginationDTO<SupplierModel> = PaginationDTO.createEmpty();
  searchTemp: any = this.activatedRoute.snapshot.queryParams['Search'] || '';
  selectAll: boolean = false;
  sortDir: string = 'ASC';
  SortBy: string = 'id';

  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef;
  titleModal: string = '';
  btnSave: string = '';
  isDisplayNone: boolean = false;
  errorMessage: string = '';
  supplierForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    supplierName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(Utils.textPattern),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(100),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern(Utils.textPhoneNumber),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(Utils.checkEmail),
    ]),
    taxCode: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(13),
      Validators.pattern(Utils.numberPattern),
    ]),
    bankAccount: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
    ]),
    bankName: new FormControl('', [
      Validators.required,
      Validators.pattern(Utils.textPattern),
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
  });

  constructor(
    private title: Title,
    private supplierService: SupplierService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.title.setTitle('Quản lý nhà cung cấp');
    this.activatedRoute.queryParams.subscribe((params) => {
      const search = params['search'] || '';
      const pageSize = +params['page-size'] || 10;
      const pageNumber = +params['page-number'] || 1;
      const sortDir = params['sort-direction'] || 'DESC';
      const sortBy = params['sort-by'] || 'CreateDate';
      this.findAll(pageSize, pageNumber, sortBy, sortDir, search);
    });
  }

  toggleSelectAll() {
    this.selectAll = !this.selectAll;
  }

  findAll(
    pageSize: number,
    pageNumber: number,
    sortBy: string,
    sortDir: string,
    search: string
  ) {
    this.supplierService
      .findAllByName(pageNumber, pageSize, sortDir, sortBy, search)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.paginationModel.content = response.data.items;
          this.paginationModel.totalPages = response.data.pageCount;
          this.paginationModel.totalElements = response.data.totalCount;
          this.paginationModel.numberOfElements = response.numberOfElements;
          this.paginationModel.pageSize = response.data.pageSize;
          this.paginationModel.pageNumber = response.data.currentPage;
          this.paginationModel.firstElementOnPage = response.firstElementOnPage;
          this.paginationModel.lastElementOnPage = response.lastElementOnPage;
          this.paginationModel.sortBy = response.sortBy;
          this.paginationModel.sortDirection = response.sortDirection;
          console.log(this.paginationModel);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }

  changePageNumber(pageNumber: number): void {
    this.router
      .navigate(['/admin/supplier'], {
        queryParams: { 'page-number': pageNumber },
        queryParamsHandling: 'merge',
      })
      .then((r) => {});
  }

  changePageSize(pageSize: number): void {
    this.router
      .navigate(['/admin/supplier'], {
        queryParams: { 'page-size': pageSize, 'page-number': 1 },
        queryParamsHandling: 'merge',
      })
      .then((r) => {});
  }

  sortByField(sortBy: string): void {
    this.router
      .navigate(['/admin/supplier'], {
        queryParams: { 'sort-by': sortBy, 'sort-direction': this.sortDir },
        queryParamsHandling: 'merge',
      })
      .then((r) => {});
    this.sortDir = this.sortDir === 'ASC' ? 'DESC' : 'ASC';
    this.SortBy = sortBy;
  }

  search() {
    this.router
      .navigate(['/admin/supplier'], {
        queryParams: { search: this.searchTemp, 'page-number': 1 },
        queryParamsHandling: 'merge',
      })
      .then((r) => {});
  }

  onSubmit() {
    if (this.supplierForm.invalid) {
      return;
    }
    if (this.supplierForm.value.id == null) this.create();
    else this.update();
  }

  create() {
    this.isDisplayNone = true;
    this.supplierForm.value.id = 0;
    this.supplierService.create(this.supplierForm.value).subscribe({
      next: (response: any) => {
        if (response.message === 'Tạo mới thành công') {
          this.supplierForm.reset();
          this.btnCloseModal.nativeElement.click();
          this.updateTable();
          this.toastr.success(response.message, 'Thông báo');
        } else {
          this.errorMessage = response.message;
          this.isDisplayNone = false;
          this.supplierForm.value.id = null;
        }
      },
      error: (error: any) => {
        this.errorMessage = error.error;
        this.isDisplayNone = false;
        this.supplierForm.value.id = null;
      },
    });
  }

  update() {
    this.isDisplayNone = true;
    this.supplierService.update(this.supplierForm.value).subscribe({
      next: (response: any) => {
        if (response.message === 'Cập nhật nhà cung cấp thành công') {
          this.supplierForm.reset();
          this.btnCloseModal.nativeElement.click();
          this.updateTable();
          this.toastr.success(response.message, 'Thông báo');
        } else {
          this.toastr.error(response.message, 'Thất bại');
        }
      },
      error: (error: any) => {
        this.errorMessage = error.error;
        this.isDisplayNone = false;
      },
    });
  }

  delete(id: number) {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa?',
      text: 'Dữ liệu sẽ không thể phục hồi sau khi xóa!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xác nhận',
      cancelButtonText: 'Hủy',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-danger me-1',
        cancelButton: 'btn btn-secondary',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.supplierService.delete(id).subscribe({
          next: (response: any) => {
            if (response.message === 'Xóa nhà cung cấp thành công') {
              this.updateTable();
              this.toastr.success(response.message, 'Thông báo');
            } else {
              this.toastr.error(response.message, 'Thất bại');
            }
          },
          error: (error: any) => {
            this.toastr.error(error.error, 'Thất bại');
          },
        });
      }
    });
  }

  openModalCreate() {
    this.supplierForm.reset();
    this.titleModal = 'Thêm nhà cung cấp';
    this.btnSave = 'Thêm mới';
    this.errorMessage = '';
    this.isDisplayNone = false;
  }

  openModalUpdate(supplier: SupplierModel) {
    this.supplierForm.patchValue({
      id: supplier.id,
      bankName: supplier.bankName,
      phoneNumber: supplier.phoneNumber,
      address: supplier.address,
      email: supplier.email,
      taxCode: supplier.taxCode,
      bankAccount: supplier.bankAccount,
      supplierCode: supplier.supplierCode,
      supplierName: supplier.supplierName,
    });
    this.titleModal = 'Cập nhật nhà cung cấp';
    this.btnSave = 'Cập nhật';
  }

  updateTable() {
    this.isDisplayNone = false;
    this.errorMessage = '';
    this.findAll(this.paginationModel.pageSize, 1, '', '', '');
  }
}
