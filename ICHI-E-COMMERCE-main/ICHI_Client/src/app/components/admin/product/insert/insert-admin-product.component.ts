import { CategoryProduct } from './../../../../models/category.product';
import { Utils } from './../../../../Utils.ts/utils';
import { Component, OnInit } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
import Swal from 'sweetalert2';
import { ProductsService } from '../../../../service/products.service';
import { CommonModule } from '@angular/common';
import { Environment } from '../../../../environment/environment';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CategoryService } from '../../../../service/category-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { TrademarkService } from '../../../../service/trademark.service';
import { ProductModel } from '../../../../models/product.model';
import { ApiResponse } from '../../../../models/api.response.model';
import { ProductDTO } from '../../../../dtos/product.dto';
import { TrademarkModel } from '../../../../models/trademark.model';
import { ProductImage } from '../../../../models/product.image';

@Component({
  selector: 'app-insert-admin-product',
  templateUrl: './insert-admin-product.component.html',
  styleUrl: './insert-admin-product.component.css',
})
export class InsertAdminProductComponent implements OnInit {
  protected readonly Environment = Environment;
  protected readonly Utils = Utils;
  product: ProductModel | undefined = undefined;
  titleString: string = '';
  selectedImageUrl: string = '';
  selectedImageFile: File = new File([''], 'filename');
  selectedImageProductUrl: string[] = [];
  selectedImageProductFiles: File[] = [];
  categories: CategoryProduct[] = [];
  trademarks: TrademarkModel[] = [];
  productImage: ProductImage[] = [];

  color: any;
  selectedItem: any; // Biến để lưu trữ giá trị được chọn

  isDisplayNone: boolean = false;
  btnSave: string = '';
  productForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    trademarkId: new FormControl(null, [Validators.required]),
    categoryId: new FormControl(null, [Validators.required]),
    productName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(100),
    ]),
    price: new FormControl(0),
    imageProductFiles: new FormControl(null, [Validators.required]),
    color: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.pattern(Utils.textPattern),
    ]),
    priorityLevel: new FormControl(0, [Validators.required]),
    notes: new FormControl('', [Validators.maxLength(200)]),
    isActive: new FormControl(true, [Validators.required]),
    quantity: new FormControl(0, [Validators.required]),
    // isActive: new FormControl('false', [Validators.required]),
  });

  get productDetails() {
    return this.productForm.get('productDetails') as FormArray;
  }

  constructor(
    private title: Title,
    private productService: ProductsService,
    private categoryService: CategoryService,
    private trademarkService: TrademarkService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // const thumbnailFileControl = this.productForm.get('thumbnailFile');
    const imageProductFilesControl = this.productForm.get('imageProductFiles');
    if (this.activatedRoute.snapshot.params['id'] === undefined) {
      this.titleString = 'Thêm sản phẩm';
      this.btnSave = 'Thêm mới';
      // thumbnailFileControl?.setValidators([Validators.required]);
      imageProductFilesControl?.setValidators([Validators.required]);
    } else {
      this.titleString = 'Cập nhật sản phẩm';
      this.btnSave = 'Cập nhật';
      this.isDisplayNone = true;
      // thumbnailFileControl?.setValidators([Validators.nullValidator]);
      imageProductFilesControl?.setValidators([Validators.nullValidator]);
      this.findProductById(this.activatedRoute.snapshot.params['id']);
    }
    // thumbnailFileControl?.updateValueAndValidity();
    imageProductFilesControl?.updateValueAndValidity();

    this.title.setTitle(this.titleString);
    this.getDatacombobox();
  }

  getDatacombobox() {
    this.categoryService.findAll().subscribe((data: any) => {
      this.categories = data.data;
      console.log(data.data);
    });
    this.trademarkService.findAll().subscribe((data: any) => {
      this.trademarks = data.data.items;
      console.log(data.data.items);
    });
    this.color = Utils.createColorList();
  }

  // onFileSelected(event: any) {
  //   const maxFileSize = 5 * 1024 * 1024; // 5MB
  //   this.file = event.target.files[0];

  //   // Kiểm tra xem tệp đã được chọn chưa
  //   if (this.file) {
  //     // Kiểm tra kích thước của tệp
  //     if (this.file.size > maxFileSize) {
  //       // Hiển thị thông báo lỗi về kích thước của tệp
  //       this.toastr.error('Kích thước của tệp lớn hơn 5MB', 'Lỗi');
  //       return; // Ngưng xử lý tiếp theo
  //     }

  //     // Kiểm tra kiểu MIME của tệp
  //     if (!this.file.type.startsWith('image/')) {
  //       // Hiển thị thông báo lỗi về kiểu MIME của tệp
  //       this.toastr.error('Tệp không phải là ảnh', 'Lỗi');
  //       return; // Ngưng xử lý tiếp theo
  //     }

  //     // Tiếp tục xử lý tệp nếu không có lỗi
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.avatarSrc = e.target.result;
  //     };
  //     reader.readAsDataURL(this.file);
  //   }
  // }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const maxFile = 5 * 1024 * 1024;
    this.selectedImageFile = file;
    if (file) {
      if (file.size > maxFile) {
        this.toastr.error('Kích thước ảnh lớn hơn 5MB', 'Thất bại');
        return;
      }
      if (!file.type.startsWith('image/')) {
        this.toastr.error('Tệp không phải là ảnh', 'Thất bại');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSelect(event: any) {
    // xử lý khi chọn ảnh từ  dropzone nếu ảnh > 5MB và không phải là ảnh thì thông báo lỗi
    if (event.addedFiles[0].size > 5 * 1024 * 1024) {
      this.toastr.error('Kích thước ảnh lớn hơn 5MB', 'Thất bại');
      return;
    }
    if (!event.addedFiles[0].type.startsWith('image/')) {
      this.toastr.error('Tệp không phải là ảnh', 'Thất bại');
      return;
    }

    this.selectedImageProductFiles.push(...event.addedFiles);
    this.productForm
      .get('imageProductFiles')
      ?.setValue(this.selectedImageProductFiles);
    console.log(this.selectedImageProductFiles);
  }

  onRemove(event: any) {
    this.selectedImageProductFiles.splice(
      this.selectedImageProductFiles.indexOf(event),
      1
    );
    this.productForm
      .get('imageProductFiles')
      ?.setValue(this.selectedImageProductFiles);
  }

  addProductDetails() {
    const productDetails = this.productForm.get('productDetails') as FormArray;
    productDetails.push(
      new FormGroup({
        id: new FormControl(null),
        color: new FormControl('', [Validators.required]),
        quantity: new FormControl(0),
      })
    );
  }

  removeProductDetails(index: number) {
    const productDetails = this.productForm.get('productDetails') as FormArray;

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
    if (this.productForm.invalid) {
      return;
    }
    this.create();
  }

  findProductById(id: number) {
    this.productService.findById(id).subscribe({
      next: (respon: any) => {
        this.productForm.get('id')?.setValue(respon.data.product.id);
        this.productForm
          .get('productName')
          ?.setValue(respon.data.product.productName);
        this.productForm
          .get('description')
          ?.setValue(respon.data.product.description);
        this.productForm.get('price')?.setValue(respon.data.product.price);
        this.productForm
          .get('priorityLevel')
          ?.setValue(respon.data.product.priorityLevel);
        this.productForm.get('notes')?.setValue(respon.data.product.notes);
        this.productForm.get('color')?.setValue(respon.data.product.color);
        this.productForm
          .get('quantity')
          ?.setValue(respon.data.product.quantity);
        this.productForm
          .get('categoryId')
          ?.setValue(respon.data.product.categoryId);
        this.productForm
          .get('trademarkId')
          ?.setValue(respon.data.product.trademarkId);

        this.productForm
          .get('isActive')
          ?.setValue(respon.data.product.isActive);
        this.productImage = respon.data.productImages;
        console.log('image', this.productImage);

        this.selectedImageUrl =
          Environment.apiBaseUrl + '/images/' + respon.data.product.thumbnail;
        this.selectedImageFile = new File([''], 'filename');
        respon.data.productImages.forEach((productImage: ProductImage) => {
          this.selectedImageProductUrl.push(productImage.imagePath);
        });
        console.log(this.selectedImageProductUrl);
      },
      error: (err: any) => {
        this.toastr.error(err.error, 'Thất bại');
      },
    });
  }

  create() {
    if (
      this.selectedImageProductFiles.length === 0 &&
      this.productImage.length === 0
    ) {
      this.toastr.error('Chưa chọn ảnh sản phẩm', 'Thất bại');
      return;
    }
    this.productService
      .create(this.productForm.value, this.selectedImageProductFiles)
      .subscribe({
        next: (respon: any) => {
          if (
            respon.message === 'Thêm sản phẩm thành công' ||
            respon.message === 'Cập nhật sản phẩm thành công'
          ) {
            this.toastr.success(respon.message, 'Thành công');
            this.router.navigateByUrl('/admin/products');
          } else {
            this.toastr.error(respon.message, 'Thất bại');
          }
        },
        error: (err: any) => {
          this.toastr.error(err.error, 'Thất bại');
        },
      });
  }

  updateProduct() {
    // this.productForm.value.id = 0;
    if (this.productForm.value.productImages === null) {
      this.toastr.error('Yêu cầu chọn thêm hình ảnh sản phẩm', 'Thất bại');
      return;
    }
    this.productService
      .update(this.productForm.value, this.selectedImageProductFiles)
      .subscribe({
        next: () => {
          this.toastr.success('Cập nhật sản phẩm thành công');
          this.router.navigateByUrl('/admin/product');
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
        this.productService
          .deleteImage(this.activatedRoute.snapshot.params['id'], imageName)
          .subscribe({
            next: () => {
              this.productImage = this.productImage.filter(
                (image) => image.imageName !== imageName
              );

              this.toastr.success('Xóa ảnh thành công');
            },
            error: (err: any) => {
              this.toastr.error(err.error, 'Thất bại');
            },
          });
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
}
