import { CategoryService } from './../../../../service/category-product.service';
import { ProductModel } from './../../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Environment } from '../../../../environment/environment';
import { Utils } from '../../../../Utils.ts/utils';
import { CategoryProduct } from '../../../../models/category.product';
import { TrademarkModel } from '../../../../models/trademark.model';
import { ProductImage } from '../../../../models/product.image';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../../../service/products.service';
import { TrademarkService } from '../../../../service/trademark.service';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SupplierService } from '../../../../service/supplier.service';
import { SupplierModel } from '../../../../models/supplier.model';
import { ProductDTO } from '../../../../dtos/product.dto';
import { InventorryReceiptsService } from '../../../../service/inventory.receipts.service';
import { TokenService } from '../../../../service/token.service';

@Component({
  selector: 'app-insert.inventory.receipts',
  templateUrl: './insert.inventory.receipts.component.html',
  styleUrl: './insert.inventory.receipts.component.css',
})
export class InsertInventoryReceiptsComponent implements OnInit {
  protected readonly Environment = Environment;
  protected readonly Utils = Utils;
  product: ProductModel | undefined = undefined;
  titleString: string = '';
  suppliers: SupplierModel[] = [];
  products: ProductModel[] = [];
  originalProducts: ProductModel[] = [];
  isStatus: boolean = true;
  totalMoney: number = 0;
  isDisplayNone: boolean = false;
  btnSave: string = '';
  employeeName: string = '';
  receiptForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    notes: new FormControl(''),
    supplierId: new FormControl(null, [Validators.required]),
    employeeId: new FormControl('', [Validators.required]),
    isActive: new FormControl(false),
    inventoryReceiptDetails: new FormArray([
      new FormGroup({
        id: new FormControl(0),
        inventoryReceiptId: new FormControl(0),
        price: new FormControl(null, [
          Validators.required,
          Validators.min(0),
          Validators.max(1000000000),
        ]),
        quantity: new FormControl(null, [
          Validators.required,
          Validators.min(1),
          Validators.max(1000),
        ]),
        productId: new FormControl(null, [Validators.required]),
        batchNumber: new FormControl(0),
      }),
    ]),
  });

  get inventoryReceiptDetails() {
    return this.receiptForm.get('inventoryReceiptDetails') as FormArray;
  }

  constructor(
    private title: Title,
    private productService: ProductsService,
    private supplierService: SupplierService,
    private inventoryService: InventorryReceiptsService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.receiptForm = this.fb.group({
      id: [0],
      notes: [''],
      employeeId: [null, Validators.required],
      supplierId: [null, Validators.required],
      inventoryReceiptDetails: this.fb.array([this.createReceiptDetail()]),
    });
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === undefined) {
      this.title.setTitle('Thêm hóa đơn nhập hàng');
      this.titleString = 'Thêm hóa đơn nhập hàng';
      this.btnSave = 'Thêm mới';
      // thumbnailFileControl?.setValidators([Validators.required]);
    } else {
      this.title.setTitle('Cập nhật hóa đơn nhập hàng');
      this.titleString = 'Cập nhật hóa đơn nhập hàng';
      this.btnSave = 'Xác nhận';
      this.findProductById(this.activatedRoute.snapshot.params['id']);
    }

    const inventoryReceiptDetailsArray = this.receiptForm.get(
      'inventoryReceiptDetails'
    ) as FormArray;

    inventoryReceiptDetailsArray.valueChanges.subscribe(() => {
      this.totalMoney = this.getTotalMoney();
    });

    this.title.setTitle(this.titleString);
    this.getDatacombobox();
    this.receiptForm
      .get('employeeId')
      ?.setValue(this.tokenService.getUserEmail());
  }

  getDatacombobox() {
    this.supplierService.findAll().subscribe((data: any) => {
      this.suppliers = data.data.items;
      console.log(data.data.items);
    });

    this.inventoryService.findAll().subscribe((respon: any) => {
      console.log('productData', respon.data);
      this.products = respon.data;
      this.originalProducts = respon.data.map((item: ProductDTO) => ({
        ...item.product,
      }));
      console.log(respon.data);
    });
  }

  removeProductDetails(index: number) {
    const productDetails = this.receiptForm.get('productDetails') as FormArray;

    if (productDetails.at(index).get('id')?.value !== null) {
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
          this.productService
            .deleteProductDetails(productDetails.at(index).get('id')?.value)
            .subscribe({
              next: () => {
                this.toastr.success('Xóa chi tiết sản phẩm thành công');
                productDetails.removeAt(index);
              },
              error: (err: any) => {
                this.toastr.error(err.error, 'Thất bại');
              },
            });
        }
      });
    } else {
      productDetails.removeAt(index);
    }
  }

  onSubmit() {
    console.log(this.receiptForm.value);
    if (this.receiptForm.invalid) {
      const formErrors = this.receiptForm.errors;

      // Log các lỗi để kiểm tra
      console.log(formErrors);

      // Trả về để dừng tiến trình nếu form không hợp lệ
      return;
    }
    if (this.activatedRoute.snapshot.params['id'] === undefined) {
      this.create();
    } else {
      this.update();
    }
  }

  findProductById(id: number) {
    this.inventoryService.findById(id).subscribe({
      next: (response: any) => {
        const data = response.data;
        if (data === null) {
          this.toastr.error('Không tìm thấy sản phẩm', 'Thất bại');
          this.router.navigate(['/admin/inventory_receipts']);
        }
        if (data.isActive === true) {
          this.isStatus = false;
        }
        this.isDisplayNone = true;
        this.employeeName = data.fullName;
        // Set values for top-level controls
        this.receiptForm.get('id')?.setValue(data.id);
        this.receiptForm.get('notes')?.setValue(data.notes);
        this.receiptForm.get('supplierId')?.setValue(data.supplierId);
        this.receiptForm
          .get('employeeId')
          ?.setValue(this.tokenService.getUserEmail());

        // Clear existing controls in inventoryReceiptDetails FormArray
        while (this.inventoryReceiptDetails.length !== 0) {
          this.inventoryReceiptDetails.removeAt(0);
        }

        // Iterate through inventoryReceiptDetails in response data and add each detail to FormArray
        data.inventoryReceiptDetails.forEach((detail: any) => {
          const detailFormGroup = new FormGroup({
            id: new FormControl(detail.id),
            inventoryReceiptId: new FormControl(detail.inventoryReceiptId),
            price: new FormControl(detail.price),
            quantity: new FormControl(detail.quantity),
            productId: new FormControl(detail.product?.id), // Assuming product is available in detail
            batchNumber: new FormControl(detail.batchNumber),
          });

          this.inventoryReceiptDetails.push(detailFormGroup);
        });
      },
      error: (err: any) => {
        this.toastr.error(err.error, 'Thất bại');
      },
    });
  }

  createReceiptDetail(): FormGroup {
    return this.fb.group({
      id: [0],
      inventoryReceiptId: [0],
      price: [
        null,
        [Validators.required, Validators.min(0), Validators.max(1000000000)],
      ],
      quantity: [
        null,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(1000),
          this.customTotalValidator.bind(this),
        ],
      ],
      productId: [null, [Validators.required]],
      batchNumber: new FormControl(0),
    });
  }

  customTotalValidator(control: any) {
    if (control.value > 1000) {
      return { maxExceeded: true };
    }
    return null;
  }

  addProduct() {
    // Kiểm tra tất cả các trường có giá trị không
    const allFieldsFilled = this.inventoryReceiptDetails.controls.every(
      (control) => {
        const productId = control.get('productId')?.value;
        const price = control.get('price')?.value;
        const total = control.get('quantity')?.value;
        return productId && price && total;
      }
    );

    if (allFieldsFilled) {
      this.inventoryReceiptDetails.push(this.createReceiptDetail());
      this.updateOriginalProducts();
    } else {
      this.toastr.error('Vui lòng điền đầy đủ thông tin sản phẩm', 'Thông báo');
    }
  }

  updateOriginalProducts() {
    // lấy ra sản phẩm được chọn trong inventoryReceiptDetails
    let selectedProducts = this.receiptForm.value.inventoryReceiptDetails.map(
      (detail: { productId: any }) => detail.productId
    );
    console.log('listItemId: ', selectedProducts.toString());
    if (!Array.isArray(selectedProducts)) {
      selectedProducts = [selectedProducts];
    }

    console.log('Các productId đã chọn: ', selectedProducts.toString());

    // Cập nhật mảng products bằng cách lọc ra các sản phẩm chưa được chọn từ mảng gốc là productdtos.product và đảm bảo không trùng với selectedProducts
    this.products = this.products
      .map((productDto) => productDto)
      .filter((product) => !selectedProducts.includes(product.id));

    console.log('Mảng sản phẩm được cập nhật:', selectedProducts);
    console.log('mảng product update', this.products);
  }

  getTotalMoney(): number {
    const inventoryReceiptDetails = this.receiptForm.get(
      'inventoryReceiptDetails'
    ) as FormArray;
    let total = 0;

    inventoryReceiptDetails.controls.forEach(
      (control: AbstractControl<any, any>) => {
        const price = (control.get('price') as FormControl)?.value || 0;
        const quantity = (control.get('quantity') as FormControl)?.value || 0;
        total += price * quantity;
      }
    );

    return total;
  }

  create() {
    this.inventoryService.create(this.receiptForm.value).subscribe({
      next: (respon: any) => {
        if (respon.message === 'Tạo phiếu nhập thành công') {
          this.toastr.success(respon.message, 'Thành công');
          this.router.navigateByUrl('/admin/inventory_receipts');
        } else {
          this.toastr.error(respon.message, 'Thất bại');
        }
        // this.router.navigateByUrl('/admin/products');
      },
      error: (err: any) => {
        this.toastr.error(err.error, 'Thất bại');
      },
    });
  }

  onProductSelection(event: any, index: number) {
    const receiptDetails = this.receiptForm.get(
      'inventoryReceiptDetails'
    ) as FormArray;
    const formGroup = receiptDetails.at(index) as FormGroup;
    if (formGroup !== null) {
      formGroup.get('batchNumber')?.setValue(event.batchNumber);
    }
  }
  update() {
    this.inventoryService.update(this.receiptForm.value).subscribe({
      next: (respon: any) => {
        if (respon.message === 'Cập nhật hóa đơn nhập thành công') {
          this.toastr.success(respon.message, 'Thành công');
          this.router.navigateByUrl('/admin/inventory_receipts');
        } else {
          this.toastr.error(respon.message, 'Thất bại');
        }
        // this.router.navigateByUrl('/admin/products');
      },
      error: (err: any) => {
        this.toastr.error(err.error, 'Thất bại');
      },
    });
  }

  deleteImageProduct(imageName: string) {
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
      }
    });
  }

  deleteProduct(id: number) {
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
        this.productService.deleteProductDetails(id).subscribe({
          next: () => {
            this.toastr.success('Xóa sản phẩm thành công');
            this.router.navigateByUrl('/admin/products');
          },
          error: (err: any) => {
            this.toastr.error(err.error, 'Thất bại');
          },
        });
      }
    });
  }

  getTotalPrice(): number[] {
    const inventoryReceiptDetails = this.receiptForm.get(
      'inventoryReceiptDetails'
    ) as FormArray;
    const totals: number[] = [];

    inventoryReceiptDetails.controls.forEach(
      (control: AbstractControl<any, any>) => {
        const price = (control.get('price') as FormControl)?.value || 0;
        const quantity = (control.get('quantity') as FormControl)?.value || 0;
        const total = price * quantity;
        totals.push(total);
      }
    );

    return totals;
  }

  removeProduct(index: number) {
    if (this.inventoryReceiptDetails.length > 1) {
      this.inventoryReceiptDetails.removeAt(index);
      const productIdToRemove = this.products[index].id;
      // Loại bỏ sản phẩm đã xóa khỏi mảng originalProducts
      this.originalProducts = this.originalProducts.filter(
        (item) => item.id !== productIdToRemove
      );
      console.log(this.originalProducts);
    }
  }

  onKeyDown(event: any, type: boolean) {
    const input = event.target as HTMLInputElement;
    const isBackspaceOrDelete =
      event.key === 'Backspace' || event.key === 'Delete';
    const hasSelection = input.selectionStart !== input.selectionEnd;

    if (type) {
      // Kiểm tra nếu số lượng ký tự vượt quá maxLength
      if (input.value.length >= 9 && !isBackspaceOrDelete && !hasSelection) {
        // Ngăn chặn sự kiện và không cho phép nhập
        event.preventDefault();
      }
    } else {
      // Kiểm tra nếu số lượng ký tự vượt quá maxLength
      if (input.value.length >= 3 && !isBackspaceOrDelete && !hasSelection) {
        // Ngăn chặn sự kiện và không cho phép nhập
        event.preventDefault();
      }
    }
  }
}
