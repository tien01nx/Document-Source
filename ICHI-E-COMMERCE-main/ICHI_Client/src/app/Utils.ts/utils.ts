export class Utils {
  static getVisiblePages(
    currentPage: number,
    totalPages: number,
    visibleCount: number
  ): number[] {
    // start = Giá trị nhỏ nhất của trang hiển thị
    let start = Math.max(
      1,
      Math.min(
        currentPage - Math.floor(visibleCount / 2),
        totalPages - visibleCount + 1
      )
    );
    // end = Giá trị lớn nhất của trang hiển thị
    let end = Math.min(totalPages, start + visibleCount - 1);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }
  static createColorList() {
    return [
      { name: 'Đen' },
      { name: 'Trắng' },
      { name: 'Đỏ' },
      { name: 'Xanh' },
      { name: 'Vàng' },
      { name: 'Hồng' },
      { name: 'Xám' },
      { name: 'Nâu' },
      { name: 'Cam' },
      { name: 'Tím' },
      { name: 'Xanh dương' },
    ];
  }

  static cartBuyNow = 'cartBuyNow';

  static passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  static textPattern = /^[a-zA-ZÀ-ỹ\s]*$/;
  static text = /^[^\\d\\W_ ]+$/;
  static textPattern1 = /^[a-zA-ZÀ-ỹ\s]*$/;

  static phoneNumberPattern = /^[0-9]{10}$/;

  static numberPattern = /^[0-9]*$/;

  static textPhoneNumber = /^0\d{9}$/;

  static cartList = 'cartList';

  static checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  static onKeyPressNumber(event: KeyboardEvent) {
    const charCode = event.key; // Lấy mã ký tự từ sự kiện
    // Kiểm tra nếu ký tự không phải số (0-9) hoặc không phải phím điều hướng
    if (
      isNaN(Number(charCode)) &&
      !['ArrowLeft', 'ArrowRight', 'Delete', 'Backspace'].includes(charCode)
    ) {
      event.preventDefault(); // Ngăn chặn hành động mặc định của phím
    }
  }

  static onKeyPressText(event: KeyboardEvent) {
    const charCode = event.key; // Lấy mã ký tự từ sự kiện
    const isText = /^[a-zA-Z\s]*$/.test(charCode); // Kiểm tra xem ký tự là văn bản
    // Nếu không phải là văn bản, ngăn chặn hành động mặc định của phím
    if (!isText) {
      event.preventDefault();
    }
  }

  static onKeyPressTextNumberNoSpacebar(event: KeyboardEvent) {
    const charCode = event.key; // Lấy mã ký tự từ sự kiện
    const isAlphanumeric = /^[a-zA-Z0-9]*$/.test(charCode); // Kiểm tra xem ký tự là văn bản hoặc số
    // Nếu không phải là văn bản hoặc số, ngăn chặn hành động mặc định của phím
    if (!isAlphanumeric) {
      event.preventDefault();
    }
  }

  static onKeyPressTextNumber(event: KeyboardEvent) {
    const charCode = event.key; // Lấy mã ký tự từ sự kiện
    const isAllowedChar = /^[a-zA-Z0-9\s]*$/.test(charCode); // Kiểm tra xem ký tự là văn bản, số hoặc khoảng trắng
    // Nếu không phải là văn bản, số hoặc khoảng trắng, ngăn chặn hành động mặc định của phím
    if (!isAllowedChar) {
      event.preventDefault();
    }
  }

  static handleKeyPress(
    event: KeyboardEvent,
    minValue: number,
    maxValue: number
  ) {
    const keyPressed = event.key;

    // Kiểm tra xem phím được nhấn có phải là số từ 0-9 hoặc không
    const isNumberKey = /^\d$/.test(keyPressed);

    if (!isNumberKey) {
      event.preventDefault(); // Ngăn chặn sự kiện keypress nếu không phải là số từ 0-9
      return;
    }

    const currentValue = +(event.target as HTMLInputElement).value;
    const newValue = +(currentValue.toString() + keyPressed);

    // Kiểm tra xem newValue có nằm trong khoảng min và max không
    if (newValue < minValue || newValue > maxValue) {
      event.preventDefault(); // Ngăn chặn sự kiện keypress
    }
  }

  // nguyên dương

  static handleKeyPressNguyen(event: KeyboardEvent) {
    const keyPressed = event.key;

    // Kiểm tra xem phím được nhấn có phải là số từ 0-9 hoặc không
    const isNumberKey = /^\d$/.test(keyPressed);

    if (!isNumberKey) {
      event.preventDefault(); // Ngăn chặn sự kiện keypress nếu không phải là số từ 0-9
      return;
    }

    // Kiểm tra xem giá trị sau khi nhập vào có phải là số nguyên dương hay không
    const currentValue = +(event.target as HTMLInputElement).value;
    const newValue = +(currentValue.toString() + keyPressed);

    if (newValue <= 0) {
      event.preventDefault(); // Ngăn chặn sự kiện keypress nếu không phải là số nguyên dương
    }
  }
  //   sách https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_8.png?v=20386
  // buts https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_1.png?v=20386
  // dungj cuj hoc tap
  // https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_2.png?v=20386
  // vanw phong
  // https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_9.png?v=20386

  static categories = [
    {
      name: 'Giấy in',
      image:
        'https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_8.png?v=20386',
    },
    {
      name: 'Bút',
      image:
        'https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_1.png?v=20386',
    },
    {
      name: 'Đồ dùng học tập',
      image:
        'https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_2.png?v=20386',
    },
    {
      name: 'Đồ dùng văn phòng',
      image:
        'https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_7.png?v=20386',
    },
    {
      name: 'Thiết bị văn phòng',
      image:
        'https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_6.png?v=20387',
    },
    {
      name: 'Băng keo - Dao - Kéo',
      image:
        'https://theme.hstatic.net/1000230347/1000782290/14/menu_icon_9.png?v=20386',
    },
  ];

  // Pending: Đơn hàng chưa được xử lý hoặc chưa được xác nhận.
  // Processing: Đơn hàng đang được xử lý.
  // Shipped: Đơn hàng đã được gửi đi.
  // Delivered: Đơn hàng đã được giao thành công.
  // Cancelled: Đơn hàng đã bị hủy.
  // Refunded: Đơn hàng đã được hoàn lại tiền.
  // On hold: Đơn hàng đang bị tạm dừng.
  // Completed: Đơn hàng đã được hoàn thành.
  // Failed: Đơn hàng thất bại trong quá trình xử lý.
  // Returned: Đơn hàng đã được trả lại.

  // Các loại thanh toán
  static paymentTypes = [
    { name: 'PAYMENTONDELIVERY', value: 'Thanh toán khi nhận hàng' },
    { name: 'PAYMENTVIACARD', value: 'Thanh toán qua thẻ' },
    { name: 'CASH', value: 'Tiền mặt' },
  ];

  static PaymentOnDelivery = 'PAYMENTONDELIVERY';
  static PaymentViaCard = 'PAYMENTVIACARD';
  static PaymentStatusPenDing = 'PENDING';
  static PaymentStatusApproved = 'APPROVED';

  // Trạng thái đơn hàng
  // Chưa xác nhận - Pending
  // Chờ xác nhận - On hold
  // Chờ lấy hàng - WaitingForPickup
  // Chờ giao hàng - WaitingForDelivery
  // Đã giao hàng - Delivered
  // Đã hủy - Cancelled
  // sửa thành name có có giá trị viết hoa  hết
  static PENDING = 'PENDING';
  static ONHOLD = 'ONHOLD';
  static WAITINGFORPICKUP = 'WAITINGFORPICKUP';
  static WAITINGFORDELIVERY = 'WAITINGFORDELIVERY';
  static DELIVERED = 'DELIVERED';
  static CANCELLED = 'CANCELLED';

  static PENDING_VALUE = 'Chưa xác nhận';
  static ONHOLD_VALUE = 'Đã xác nhận';
  static WAITINGFORPICKUP_VALUE = 'Chờ lấy hàng';
  static WAITINGFORDELIVERY_VALUE = 'Đang giao hàng';
  static DELIVERED_VALUE = 'Đã giao hàng';
  static CANCELLED_VALUE = 'Đã hủy';

  static statusOrder = [
    { name: 'PENDING', value: 'Chưa xác nhận' },
    { name: 'ONHOLD', value: 'Đã xác nhận' },
    { name: 'WAITINGFORPICKUP', value: 'Chờ lấy hàng' },
    { name: 'WAITINGFORDELIVERY', value: 'Đang giao hàng' },
    { name: 'DELIVERED', value: 'Đã giao hàng' },
    { name: 'CANCELLED', value: 'Đã hủy' },
  ];

  static paymentStatus = [
    { name: 'PENDING', value: 'Chưa thanh toán' },
    { name: 'APPROVED', value: 'Đã thanh toán' },
  ];

   static productReturn = [
    { name: 'PENDING', value: 'Chưa xử lý' },
    { name: 'APPROVED', value: 'Đã xử lý' },
    { name: 'REJECTED', value: 'Từ chối xử lý' },
  ];

   static getProductReturnStatus(status: string): string {
    const orderStatus = this.productReturn.find((x) => x.name === status);
    return orderStatus ? orderStatus.value : '';
  }

  static getOrdersStatus(status: string): string {
    const orderStatus = this.statusOrder.find((x) => x.name === status);
    return orderStatus ? orderStatus.value : '';
  }

  static getPaymentStatus(status: string): string {
    const paymentStatus = this.paymentStatus.find((x) => x.name === status);
    return paymentStatus ? paymentStatus.value : '';
  }
  static getPaymentType(paymentType: string): string {
    const paymentTypes = this.paymentTypes.find((x) => x.name === paymentType);
    return paymentTypes ? paymentTypes.value : '';
  }

  static city = [
    {
      id: '100000',
      name: 'Hà Nội',
    },
    {
      id: '700000',
      name: 'Hồ Chí Minh',
    },
    {
      id: '880000',
      name: 'An Giang',
    },
    {
      id: '790000',
      name: 'Bà Rịa - Vũng Tàu',
    },
    {
      id: '220000',
      name: 'Bắc Ninh',
    },
    {
      id: '230000',
      name: 'Bắc Giang',
    },
    {
      id: '820000',
      name: 'Bình Dương',
    },
    {
      id: '590000',
      name: 'Bình Định',
    },
    {
      id: '830000',
      name: 'Bình Phước',
    },
    {
      id: '800000',
      name: 'Bình Thuận',
    },
    {
      id: '960000',
      name: 'Bạc Liêu',
    },
    {
      id: '930000',
      name: 'Bến Tre',
    },
    {
      id: '260000',
      name: 'Bắc Cạn',
    },
    {
      id: '900000',
      name: 'Cần Thơ',
    },
    {
      id: '650000',
      name: 'Khánh Hòa',
    },
    {
      id: '530000',
      name: 'Thừa Thiên Huế',
    },
    {
      id: '330000',
      name: 'Lào Cai',
    },
    {
      id: '200000',
      name: 'Quảng Ninh',
    },
    {
      id: '810000',
      name: 'Đồng Nai',
    },
    {
      id: '420000',
      name: 'Nam Định',
    },
    {
      id: '970000',
      name: 'Cà Mau',
    },
    {
      id: '270000',
      name: 'Cao Bằng',
    },
    {
      id: '600000',
      name: 'Gia Lai',
    },
    {
      id: '310000',
      name: 'Hà Giang',
    },
    {
      id: '400000',
      name: 'Hà Nam',
    },
    {
      id: '480000',
      name: 'Hà Tĩnh',
    },
    {
      id: '170000',
      name: 'Hải Dương',
    },
    {
      id: '180000',
      name: 'Hải Phòng',
    },
    {
      id: '350000',
      name: 'Hòa Bình',
    },
    {
      id: '160000',
      name: 'Hưng Yên',
    },
    {
      id: '920000',
      name: 'Kiên Giang',
    },
    {
      id: '580000',
      name: 'Kon Tum',
    },
    {
      id: '390000',
      name: 'Lai Châu',
    },
    {
      id: '670000',
      name: 'Lâm Đồng',
    },
    {
      id: '240000',
      name: 'Lạng Sơn',
    },
    {
      id: '850000',
      name: 'Long An',
    },
    {
      id: '460000',
      name: 'Nghệ An',
    },
    {
      id: '430000',
      name: 'Ninh Bình',
    },
    {
      id: '660000',
      name: 'Ninh Thuận',
    },
    {
      id: '290000',
      name: 'Phú Thọ',
    },
    {
      id: '620000',
      name: 'Phú Yên',
    },
    {
      id: '510000',
      name: 'Quảng Bình',
    },
    {
      id: '560000',
      name: 'Quảng Nam',
    },
    {
      id: '570000',
      name: 'Quảng Ngãi',
    },
    {
      id: '520000',
      name: 'Quảng Trị',
    },
    {
      id: '950000',
      name: 'Sóc Trăng',
    },
    {
      id: '360000',
      name: 'Sơn La',
    },
    {
      id: '840000',
      name: 'Tây Ninh',
    },
    {
      id: '410000',
      name: 'Thái Bình',
    },
    {
      id: '250000',
      name: 'Thái Nguyên',
    },
    {
      id: '440000',
      name: 'Thanh Hóa',
    },
    {
      id: '860000',
      name: 'Tiền Giang',
    },
    {
      id: '940000',
      name: 'Trà Vinh',
    },
    {
      id: '300000',
      name: 'Tuyên Quang',
    },
    {
      id: '890000',
      name: 'Vĩnh Long',
    },
    {
      id: '280000',
      name: 'Vĩnh Phúc',
    },
    {
      id: '320000',
      name: 'Yên Bái',
    },
    {
      id: '630000',
      name: 'Đắk Lắk',
    },
    {
      id: '870000',
      name: 'Đồng Tháp',
    },
    {
      id: '550000',
      name: 'Đà Nẵng',
    },
    {
      id: '640000',
      name: 'Đắk Nông',
    },
    {
      id: '910000',
      name: 'Hậu Giang',
    },
    {
      id: '380000',
      name: 'Điện Biên',
    },
  ];
  static district = [
    {
      id: '700100',
      name: 'Quận 1',
      city_id: '700000',
    },
    {
      id: '701000',
      name: 'Quận 10',
      city_id: '700000',
    },
    {
      id: '700400',
      name: 'Quận 4',
      city_id: '700000',
    },
    {
      id: '700500',
      name: 'Quận 5',
      city_id: '700000',
    },
    {
      id: '550700',
      name: 'Quận Cẩm Lệ',
      city_id: '550000',
    },
    {
      id: '550100',
      name: 'Quận Hải Châu',
      city_id: '550000',
    },
    {
      id: '550500',
      name: 'Quận Liên Chiểu',
      city_id: '550000',
    },
    {
      id: '550400',
      name: 'Quận Ngũ Hành Sơn',
      city_id: '550000',
    },
    {
      id: '550300',
      name: 'Quận Sơn Trà',
      city_id: '550000',
    },
    {
      id: '550200',
      name: 'Quận Thanh Khê',
      city_id: '550000',
    },
    {
      id: '550600',
      name: 'Huyện Hòa Vang',
      city_id: '550000',
    },
    {
      id: '100300',
      name: 'Quận Hai Bà Trưng',
      city_id: '100000',
    },
    {
      id: '700600',
      name: 'Quận 6',
      city_id: '700000',
    },
    {
      id: '700700',
      name: 'Quận 7',
      city_id: '700000',
    },
    {
      id: '700800',
      name: 'Quận 8',
      city_id: '700000',
    },
    {
      id: '701100',
      name: 'Quận 11',
      city_id: '700000',
    },
    {
      id: '701200',
      name: 'Quận 12',
      city_id: '700000',
    },
    {
      id: '880300',
      name: 'Huyện An Phú',
      city_id: '880000',
    },
    {
      id: '880800',
      name: 'Huyện Châu Phú',
      city_id: '880000',
    },
    {
      id: '881000',
      name: 'Huyện Châu Thành',
      city_id: '880000',
    },
    {
      id: '880900',
      name: 'Huyện Chợ Mới',
      city_id: '880000',
    },
    {
      id: '880100',
      name: 'Thành phố Long Xuyên',
      city_id: '880000',
    },
    {
      id: '880400',
      name: 'Thị xã Tân Châu',
      city_id: '880000',
    },
    {
      id: '881100',
      name: 'Huyện Thoại Sơn',
      city_id: '880000',
    },
    {
      id: '880600',
      name: 'Huyện Tịnh Biên',
      city_id: '880000',
    },
    {
      id: '880700',
      name: 'Huyện Tri Tôn',
      city_id: '880000',
    },
    {
      id: '790700',
      name: 'Huyện Châu Đức',
      city_id: '790000',
    },
    {
      id: '790800',
      name: 'Huyện Đất Đỏ',
      city_id: '790000',
    },
    {
      id: '790400',
      name: 'Huyện Long Điền',
      city_id: '790000',
    },
    {
      id: '790200',
      name: 'Thành phố Bà Rịa',
      city_id: '790000',
    },
    {
      id: '790100',
      name: 'Thành phố Vũng Tàu',
      city_id: '790000',
    },
    {
      id: '790300',
      name: 'Huyện Xuyên Mộc',
      city_id: '790000',
    },
    {
      id: '220100',
      name: 'Thành phố Bắc Ninh',
      city_id: '220000',
    },
    {
      id: '220700',
      name: 'Huyện Gia Bình',
      city_id: '220000',
    },
    {
      id: '220300',
      name: 'Huyện Quế Võ',
      city_id: '220000',
    },
    {
      id: '220600',
      name: 'Huyện Thuận Thành',
      city_id: '220000',
    },
    {
      id: '220400',
      name: 'Huyện Tiên Du',
      city_id: '220000',
    },
    {
      id: '220500',
      name: 'Thành Phố Từ Sơn',
      city_id: '220000',
    },
    {
      id: '220200',
      name: 'Huyện Yên Phong',
      city_id: '220000',
    },
    {
      id: '220800',
      name: 'Huyện Lương Tài',
      city_id: '220000',
    },
    {
      id: '230100',
      name: 'Thành phố Bắc Giang',
      city_id: '230000',
    },
    {
      id: '230500',
      name: 'Huyện Lục Nam',
      city_id: '230000',
    },
    {
      id: '230300',
      name: 'Huyện Lục Ngạn',
      city_id: '230000',
    },
    {
      id: '230400',
      name: 'Huyện Sơn Động',
      city_id: '230000',
    },
    {
      id: '230600',
      name: 'Huyện Tân Yên',
      city_id: '230000',
    },
    {
      id: '231000',
      name: 'Huyện Yên Dũng',
      city_id: '230000',
    },
    {
      id: '230200',
      name: 'Huyện Yên Thế',
      city_id: '230000',
    },
    {
      id: '230700',
      name: 'Huyện Hiệp Hòa',
      city_id: '230000',
    },
    {
      id: '230800',
      name: 'Huyện Lạng Giang',
      city_id: '230000',
    },
    {
      id: '230900',
      name: 'Huyện Việt Yên',
      city_id: '230000',
    },
    {
      id: '820200',
      name: 'Thị xã Bến Cát',
      city_id: '820000',
    },
    {
      id: '820700',
      name: 'Huyện Dầu Tiếng',
      city_id: '820000',
    },
    {
      id: '820500',
      name: 'Thành Phố Dĩ An',
      city_id: '820000',
    },
    {
      id: '820600',
      name: 'Huyện Phú Giáo',
      city_id: '820000',
    },
    {
      id: '820100',
      name: 'Thành phố Thủ Dầu Một',
      city_id: '820000',
    },
    {
      id: '820400',
      name: 'Thành Phố Thuận An',
      city_id: '820000',
    },
    {
      id: '590200',
      name: 'Huyện An Lão',
      city_id: '590000',
    },
    {
      id: '591000',
      name: 'Thị xã An Nhơn',
      city_id: '590000',
    },
    {
      id: '590400',
      name: 'Thị Xã Hoài Nhơn',
      city_id: '590000',
    },
    {
      id: '590600',
      name: 'Huyện Phù Cát',
      city_id: '590000',
    },
    {
      id: '590500',
      name: 'Huyện Phù Mỹ',
      city_id: '590000',
    },
    {
      id: '590100',
      name: 'Thành phố Quy Nhơn',
      city_id: '590000',
    },
    {
      id: '590800',
      name: 'Huyện Tây Sơn',
      city_id: '590000',
    },
    {
      id: '591100',
      name: 'Huyện Tuy Phước',
      city_id: '590000',
    },
    {
      id: '590900',
      name: 'Huyện Vân Canh',
      city_id: '590000',
    },
    {
      id: '590700',
      name: 'Huyện Vĩnh Thạnh',
      city_id: '590000',
    },
    {
      id: '590300',
      name: 'Huyện Hoài Ân',
      city_id: '590000',
    },
    {
      id: '830400',
      name: 'Thị xã Bình Long',
      city_id: '830000',
    },
    {
      id: '830800',
      name: 'Huyện Bù Đăng',
      city_id: '830000',
    },
    {
      id: '830100',
      name: 'Thành Phố Đồng Xoài',
      city_id: '830000',
    },
    {
      id: '830500',
      name: 'Huyện Lộc Ninh',
      city_id: '830000',
    },
    {
      id: '830700',
      name: 'Thị xã Phước Long',
      city_id: '830000',
    },
    {
      id: '831000',
      name: 'Huyện Bù Gia Mập',
      city_id: '830000',
    },
    {
      id: '830600',
      name: 'Huyện Bù Đốp',
      city_id: '830000',
    },
    {
      id: '830300',
      name: 'Thị Xã Chơn Thành',
      city_id: '830000',
    },
    {
      id: '830200',
      name: 'Huyện Đồng Phú',
      city_id: '830000',
    },
    {
      id: '830900',
      name: 'Huyện Hớn Quản',
      city_id: '830000',
    },
    {
      id: '800600',
      name: 'Huyện Hàm Tân',
      city_id: '800000',
    },
    {
      id: '801000',
      name: 'Thị xã La Gi',
      city_id: '800000',
    },
    {
      id: '800100',
      name: 'Thành phố Phan Thiết',
      city_id: '800000',
    },
    {
      id: '800200',
      name: 'Huyện Tuy Phong',
      city_id: '800000',
    },
    {
      id: '800300',
      name: 'Huyện Bắc Bình',
      city_id: '800000',
    },
    {
      id: '800700',
      name: 'Huyện Đức Linh',
      city_id: '800000',
    },
    {
      id: '800400',
      name: 'Huyện Hàm Thuận Bắc',
      city_id: '800000',
    },
    {
      id: '800500',
      name: 'Huyện Hàm Thuận Nam',
      city_id: '800000',
    },
    {
      id: '800900',
      name: 'Huyện Phú Quí',
      city_id: '800000',
    },
    {
      id: '800800',
      name: 'Huyện Tánh Linh',
      city_id: '800000',
    },
    {
      id: '930700',
      name: 'Huyện Ba Tri',
      city_id: '930000',
    },
    {
      id: '930100',
      name: 'Thành phố Bến Tre',
      city_id: '930000',
    },
    {
      id: '930600',
      name: 'Huyện Bình Đại',
      city_id: '930000',
    },
    {
      id: '930200',
      name: 'Huyện Châu Thành',
      city_id: '930000',
    },
    {
      id: '930300',
      name: 'Huyện Chợ Lách',
      city_id: '930000',
    },
    {
      id: '930500',
      name: 'Huyện Giồng Trôm',
      city_id: '930000',
    },
    {
      id: '930900',
      name: 'Huyện Mỏ Cày Nam',
      city_id: '930000',
    },
    {
      id: '930800',
      name: 'Huyện Thạnh Phú',
      city_id: '930000',
    },
    {
      id: '930400',
      name: 'Huyện Mỏ Cày Bắc',
      city_id: '930000',
    },
    {
      id: '260100',
      name: 'Thành phố Bắc Kạn',
      city_id: '260000',
    },
    {
      id: '260700',
      name: 'Huyện Chợ Mới',
      city_id: '260000',
    },
    {
      id: '260400',
      name: 'Huyện Na Rì',
      city_id: '260000',
    },
    {
      id: '260500',
      name: 'Huyện Ngân Sơn',
      city_id: '260000',
    },
    {
      id: '260600',
      name: 'Huyện Ba Bể',
      city_id: '260000',
    },
    {
      id: '260300',
      name: 'Huyện Bạch Thông',
      city_id: '260000',
    },
    {
      id: '260800',
      name: 'Huyện Pác Nặm',
      city_id: '260000',
    },
    {
      id: '900100',
      name: 'Quận Ninh Kiều',
      city_id: '900000',
    },
    {
      id: '900200',
      name: 'Quận Bình Thủy',
      city_id: '900000',
    },
    {
      id: '900300',
      name: 'Quận Cái Răng',
      city_id: '900000',
    },
    {
      id: '900800',
      name: 'Quận Thốt Nốt',
      city_id: '900000',
    },
    {
      id: '900400',
      name: 'Quận Ô môn',
      city_id: '900000',
    },
    {
      id: '900600',
      name: 'Huyện Cờ Đỏ',
      city_id: '900000',
    },
    {
      id: '900500',
      name: 'Huyện Phong Điền',
      city_id: '900000',
    },
    {
      id: '900700',
      name: 'Huyện Vĩnh Thạnh',
      city_id: '900000',
    },
    {
      id: '900900',
      name: 'Huyện Thới Lai',
      city_id: '900000',
    },
    {
      id: '650600',
      name: 'Thành phố Cam Ranh',
      city_id: '650000',
    },
    {
      id: '650400',
      name: 'Huyện Diên Khánh',
      city_id: '650000',
    },
    {
      id: '650700',
      name: 'Huyện Khánh Sơn',
      city_id: '650000',
    },
    {
      id: '650500',
      name: 'Huyện Khánh Vĩnh',
      city_id: '650000',
    },
    {
      id: '650100',
      name: 'Thành phố Nha Trang',
      city_id: '650000',
    },
    {
      id: '650300',
      name: 'Thị xã Ninh Hòa',
      city_id: '650000',
    },
    {
      id: '650200',
      name: 'Huyện Vạn Ninh',
      city_id: '650000',
    },
    {
      id: '650900',
      name: 'Huyện Cam Lâm',
      city_id: '650000',
    },
    {
      id: '530900',
      name: 'Huyện A Lưới',
      city_id: '530000',
    },
    {
      id: '530200',
      name: 'Huyện Phong Điền',
      city_id: '530000',
    },
    {
      id: '530700',
      name: 'Huyện Phú Lộc',
      city_id: '530000',
    },
    {
      id: '530500',
      name: 'Huyện Phú Vang',
      city_id: '530000',
    },
    {
      id: '530300',
      name: 'Huyện Quảng Điền',
      city_id: '530000',
    },
    {
      id: '530100',
      name: 'Thành phố Huế',
      city_id: '530000',
    },
    {
      id: '330300',
      name: 'Huyện Bát Xát',
      city_id: '330000',
    },
    {
      id: '330800',
      name: 'Huyện Bắc Hà',
      city_id: '330000',
    },
    {
      id: '330100',
      name: 'Thành phố Lào Cai',
      city_id: '330000',
    },
    {
      id: '330900',
      name: 'Huyện Mường Khương',
      city_id: '330000',
    },
    {
      id: '330500',
      name: 'Thị Xã Sapa',
      city_id: '330000',
    },
    {
      id: '330200',
      name: 'Huyện Si Ma Cai',
      city_id: '330000',
    },
    {
      id: '330600',
      name: 'Huyện Văn Bàn',
      city_id: '330000',
    },
    {
      id: '330400',
      name: 'Huyện Bảo Thắng',
      city_id: '330000',
    },
    {
      id: '330700',
      name: 'Huyện Bảo Yên',
      city_id: '330000',
    },
    {
      id: '200900',
      name: 'Huyện Ba Chẽ',
      city_id: '200000',
    },
    {
      id: '200500',
      name: 'Huyện Bình Liêu',
      city_id: '200000',
    },
    {
      id: '200200',
      name: 'Thành phố Cẩm Phả',
      city_id: '200000',
    },
    {
      id: '201400',
      name: 'Huyện đảo Cô Tô',
      city_id: '200000',
    },
    {
      id: '200100',
      name: 'Thành phố Hạ Long',
      city_id: '200000',
    },
    {
      id: '200400',
      name: 'Thành phố Móng Cái',
      city_id: '200000',
    },
    {
      id: '200800',
      name: 'Huyện Tiên Yên',
      city_id: '200000',
    },
    {
      id: '200300',
      name: 'Thành phố Uông Bí',
      city_id: '200000',
    },
    {
      id: '201300',
      name: 'Huyện đảo Vân Đồn',
      city_id: '200000',
    },
    {
      id: '200700',
      name: 'Huyện Hải Hà',
      city_id: '200000',
    },
    {
      id: '810100',
      name: 'Thành phố Biên Hòa',
      city_id: '810000',
    },
    {
      id: '811100',
      name: 'Huyện Cẩm Mỹ',
      city_id: '810000',
    },
    {
      id: '810400',
      name: 'Huyện Định Quán',
      city_id: '810000',
    },
    {
      id: '810600',
      name: 'Thành Phố Long Khánh',
      city_id: '810000',
    },
    {
      id: '810800',
      name: 'Huyện Long Thành',
      city_id: '810000',
    },
    {
      id: '810900',
      name: 'Huyện Nhơn Trạch',
      city_id: '810000',
    },
    {
      id: '810500',
      name: 'Huyện Thống Nhất',
      city_id: '810000',
    },
    {
      id: '811000',
      name: 'Huyện Trảng Bom',
      city_id: '810000',
    },
    {
      id: '810200',
      name: 'Huyện Vĩnh Cửu',
      city_id: '810000',
    },
    {
      id: '810700',
      name: 'Huyện Xuân Lộc',
      city_id: '810000',
    },
    {
      id: '810300',
      name: 'Huyện Tân Phú',
      city_id: '810000',
    },
    {
      id: '420400',
      name: 'Huyện Giao Thủy',
      city_id: '420000',
    },
    {
      id: '421000',
      name: 'Huyện Hải Hậu',
      city_id: '420000',
    },
    {
      id: '420200',
      name: 'Huyện Mỹ Lộc',
      city_id: '420000',
    },
    {
      id: '420100',
      name: 'Thành phố Nam Định',
      city_id: '420000',
    },
    {
      id: '420700',
      name: 'Huyện Nam Trực',
      city_id: '420000',
    },
    {
      id: '420900',
      name: 'Huyện Nghĩa Hưng',
      city_id: '420000',
    },
    {
      id: '420800',
      name: 'Huyện Trực Ninh',
      city_id: '420000',
    },
    {
      id: '420600',
      name: 'Huyện Vụ Bản',
      city_id: '420000',
    },
    {
      id: '420300',
      name: 'Huyện Xuân Trường',
      city_id: '420000',
    },
    {
      id: '420500',
      name: 'Huyện Ý Yên',
      city_id: '420000',
    },
    {
      id: '970100',
      name: 'Thành phố Cà Mau',
      city_id: '970000',
    },
    {
      id: '970500',
      name: 'Huyện Cái Nước',
      city_id: '970000',
    },
    {
      id: '970600',
      name: 'Huyện Đầm Dơi',
      city_id: '970000',
    },
    {
      id: '970800',
      name: 'Huyện Năm Căn',
      city_id: '970000',
    },
    {
      id: '970900',
      name: 'Huyện Phú Tân',
      city_id: '970000',
    },
    {
      id: '970200',
      name: 'Huyện Thới Bình',
      city_id: '970000',
    },
    {
      id: '970400',
      name: 'Huyện Trần Văn Thời',
      city_id: '970000',
    },
    {
      id: '970300',
      name: 'Huyện U Minh',
      city_id: '970000',
    },
    {
      id: '270200',
      name: 'Huyện Bảo Lạc',
      city_id: '270000',
    },
    {
      id: '271200',
      name: 'Huyện Bảo Lâm',
      city_id: '270000',
    },
    {
      id: '270100',
      name: 'Thành phố Cao Bằng',
      city_id: '270000',
    },
    {
      id: '270700',
      name: 'Huyện Nguyên Bình',
      city_id: '270000',
    },
    {
      id: '270900',
      name: 'Huyện Quảng Uyên',
      city_id: '270000',
    },
    {
      id: '270600',
      name: 'Huyện Trùng Khánh',
      city_id: '270000',
    },
    {
      id: '270400',
      name: 'Huyện Hà Quảng',
      city_id: '270000',
    },
    {
      id: '271100',
      name: 'Huyện Hạ Lang',
      city_id: '270000',
    },
    {
      id: '270800',
      name: 'Huyện Hòa An',
      city_id: '270000',
    },
    {
      id: '271300',
      name: 'Huyện Phục Hòa',
      city_id: '270000',
    },
    {
      id: '271000',
      name: 'Huyện Thạch An',
      city_id: '270000',
    },
    {
      id: '600500',
      name: 'Thị xã An Khê',
      city_id: '600000',
    },
    {
      id: '601000',
      name: 'Thị xã Ayun Pa',
      city_id: '600000',
    },
    {
      id: '600800',
      name: 'Huyện Chư Prông',
      city_id: '600000',
    },
    {
      id: '600900',
      name: 'Huyện Chư Sê',
      city_id: '600000',
    },
    {
      id: '600400',
      name: 'Huyện KBang',
      city_id: '600000',
    },
    {
      id: '600600',
      name: 'Huyện Kông Chro',
      city_id: '600000',
    },
    {
      id: '601100',
      name: 'Huyện Krông Pa',
      city_id: '600000',
    },
    {
      id: '600300',
      name: 'Huyện Mang Yang',
      city_id: '600000',
    },
    {
      id: '601600',
      name: 'Huyện Phú Thiện',
      city_id: '600000',
    },
    {
      id: '600100',
      name: 'Thành phố Pleiku',
      city_id: '600000',
    },
    {
      id: '601700',
      name: 'Huyện Chư Pưh',
      city_id: '600000',
    },
    {
      id: '600200',
      name: 'Huyện Chư Păh',
      city_id: '600000',
    },
    {
      id: '601200',
      name: 'Huyện Ia Grai',
      city_id: '600000',
    },
    {
      id: '601400',
      name: 'Huyện Ia Pa',
      city_id: '600000',
    },
    {
      id: '310200',
      name: 'Huyện Đồng Văn',
      city_id: '310000',
    },
    {
      id: '310100',
      name: 'Thành phố Hà Giang',
      city_id: '310000',
    },
    {
      id: '310300',
      name: 'Huyện Mèo Vạc',
      city_id: '310000',
    },
    {
      id: '310500',
      name: 'Huyện Quản Bạ',
      city_id: '310000',
    },
    {
      id: '310600',
      name: 'Huyện Vị Xuyên',
      city_id: '310000',
    },
    {
      id: '310900',
      name: 'Huyện Xín Mần',
      city_id: '310000',
    },
    {
      id: '310400',
      name: 'Huyện Yên Minh',
      city_id: '310000',
    },
    {
      id: '310700',
      name: 'Huyện Bắc Mê',
      city_id: '310000',
    },
    {
      id: '311000',
      name: 'Huyện Bắc Quang',
      city_id: '310000',
    },
    {
      id: '310800',
      name: 'Huyện Hoàng Su Phì',
      city_id: '310000',
    },
    {
      id: '311100',
      name: 'Huyện Quang Bình',
      city_id: '310000',
    },
    {
      id: '400600',
      name: 'Huyện Bình Lục',
      city_id: '400000',
    },
    {
      id: '400200',
      name: 'Thị Xã Duy Tiên',
      city_id: '400000',
    },
    {
      id: '400300',
      name: 'Huyện Kim Bảng',
      city_id: '400000',
    },
    {
      id: '400400',
      name: 'Huyện Lý Nhân',
      city_id: '400000',
    },
    {
      id: '400100',
      name: 'Thành phố Phủ Lý',
      city_id: '400000',
    },
    {
      id: '400500',
      name: 'Huyện Thanh Liêm',
      city_id: '400000',
    },
    {
      id: '480600',
      name: 'Huyện Can Lộc',
      city_id: '480000',
    },
    {
      id: '480900',
      name: 'Huyện Cẩm Xuyên',
      city_id: '480000',
    },
    {
      id: '480100',
      name: 'Thành phố Hà Tĩnh',
      city_id: '480000',
    },
    {
      id: '480200',
      name: 'Thị xã Hồng Lĩnh',
      city_id: '480000',
    },
    {
      id: '480700',
      name: 'Huyện Hương Khê',
      city_id: '480000',
    },
    {
      id: '480300',
      name: 'Huyện Hương Sơn',
      city_id: '480000',
    },
    {
      id: '481000',
      name: 'Huyện Kỳ Anh',
      city_id: '480000',
    },
    {
      id: '481100',
      name: 'Huyện Vũ Quang',
      city_id: '480000',
    },
    {
      id: '480800',
      name: 'Huyện Thạch Hà',
      city_id: '480000',
    },
    {
      id: '480500',
      name: 'Huyện Nghi Xuân',
      city_id: '480000',
    },
    {
      id: '481200',
      name: 'Huyện Lộc Hà',
      city_id: '480000',
    },
    {
      id: '171200',
      name: 'Huyện Bình Giang',
      city_id: '170000',
    },
    {
      id: '170900',
      name: 'Huyện Cẩm Giàng',
      city_id: '170000',
    },
    {
      id: '170200',
      name: 'Thị xã Chí Linh',
      city_id: '170000',
    },
    {
      id: '170500',
      name: 'Huyện Gia Lộc',
      city_id: '170000',
    },
    {
      id: '170100',
      name: 'Thành phố Hải Dương',
      city_id: '170000',
    },
    {
      id: '171100',
      name: 'Huyện Kim Thành',
      city_id: '170000',
    },
    {
      id: '170400',
      name: 'Thị Xã Kinh Môn',
      city_id: '170000',
    },
    {
      id: '170300',
      name: 'Huyện Nam Sách',
      city_id: '170000',
    },
    {
      id: '170800',
      name: 'Huyện Ninh Giang',
      city_id: '170000',
    },
    {
      id: '171000',
      name: 'Huyện Thanh Hà',
      city_id: '170000',
    },
    {
      id: '170700',
      name: 'Huyện Thanh Miện',
      city_id: '170000',
    },
    {
      id: '170600',
      name: 'Huyện Tứ Kỳ',
      city_id: '170000',
    },
    {
      id: '180100',
      name: 'Quận Hồng Bàng',
      city_id: '180000',
    },
    {
      id: '181810',
      name: 'Quận Ngô Quyền',
      city_id: '180000',
    },
    {
      id: '180200',
      name: 'Quận Lê Chân',
      city_id: '180000',
    },
    {
      id: '180400',
      name: 'Quận Kiến An',
      city_id: '180000',
    },
    {
      id: '180500',
      name: 'Quận Hải An',
      city_id: '180000',
    },
    {
      id: '181500',
      name: 'Quận Dương Kinh',
      city_id: '180000',
    },
    {
      id: '180600',
      name: 'Quận Đồ Sơn',
      city_id: '180000',
    },
    {
      id: '181000',
      name: 'Huyện An Dương',
      city_id: '180000',
    },
    {
      id: '181300',
      name: 'Huyện đảo Cát Hải',
      city_id: '180000',
    },
    {
      id: '180800',
      name: 'Huyện Kiến Thụy',
      city_id: '180000',
    },
    {
      id: '181100',
      name: 'Huyện Tiên Lãng',
      city_id: '180000',
    },
    {
      id: '181200',
      name: 'Huyện Vĩnh Bảo',
      city_id: '180000',
    },
    {
      id: '180700',
      name: 'Huyện An Lão',
      city_id: '180000',
    },
    {
      id: '181400',
      name: 'Huyện đảo Bạch Long Vĩ',
      city_id: '180000',
    },
    {
      id: '180900',
      name: 'Huyện Thuỷ Nguyên',
      city_id: '180000',
    },
    {
      id: '351100',
      name: 'Huyện Cao Phong',
      city_id: '350000',
    },
    {
      id: '350200',
      name: 'Huyện Đà Bắc',
      city_id: '350000',
    },
    {
      id: '350100',
      name: 'Thành phố Hòa Bình',
      city_id: '350000',
    },
    {
      id: '350800',
      name: 'Huyện Kim Bôi',
      city_id: '350000',
    },
    {
      id: '350500',
      name: 'Huyện Lạc Sơn',
      city_id: '350000',
    },
    {
      id: '350900',
      name: 'Huyện Lạc Thủy',
      city_id: '350000',
    },
    {
      id: '350700',
      name: 'Huyện Lương Sơn',
      city_id: '350000',
    },
    {
      id: '350300',
      name: 'Huyện Mai Châu',
      city_id: '350000',
    },
    {
      id: '351000',
      name: 'Huyện Yên Thủy',
      city_id: '350000',
    },
    {
      id: '350600',
      name: 'Huyện Kỳ Sơn',
      city_id: '350000',
    },
    {
      id: '160300',
      name: 'Huyện Ân Thi',
      city_id: '160000',
    },
    {
      id: '160100',
      name: 'Thành phố Hưng Yên',
      city_id: '160000',
    },
    {
      id: '160400',
      name: 'Huyện Khoái Châu',
      city_id: '160000',
    },
    {
      id: '160800',
      name: 'Huyện Mỹ Hào',
      city_id: '160000',
    },
    {
      id: '161000',
      name: 'Huyện Văn Giang',
      city_id: '160000',
    },
    {
      id: '160900',
      name: 'Huyện Văn Lâm',
      city_id: '160000',
    },
    {
      id: '160500',
      name: 'Huyện Yên Mỹ',
      city_id: '160000',
    },
    {
      id: '160200',
      name: 'Huyện Kim Động',
      city_id: '160000',
    },
    {
      id: '160700',
      name: 'Huyện Phù Cừ',
      city_id: '160000',
    },
    {
      id: '160600',
      name: 'Huyện Tiên Lữ',
      city_id: '160000',
    },
    {
      id: '920900',
      name: 'Huyện An Biên',
      city_id: '920000',
    },
    {
      id: '921000',
      name: 'Huyện An Minh',
      city_id: '920000',
    },
    {
      id: '920600',
      name: 'Huyện Châu Thành',
      city_id: '920000',
    },
    {
      id: '920700',
      name: 'Huyện Giồng Riềng',
      city_id: '920000',
    },
    {
      id: '920800',
      name: 'Huyện Gò Quao',
      city_id: '920000',
    },
    {
      id: '920200',
      name: 'Thành Phố Hà Tiên',
      city_id: '920000',
    },
    {
      id: '920400',
      name: 'Huyện Hòn Đất',
      city_id: '920000',
    },
    {
      id: '920300',
      name: 'Huyện Kiên Lương',
      city_id: '920000',
    },
    {
      id: '921200',
      name: 'Thành Phố Phú Quốc',
      city_id: '920000',
    },
    {
      id: '920100',
      name: 'Thành phố Rạch Giá',
      city_id: '920000',
    },
    {
      id: '920500',
      name: 'Huyện Tân Hiệp',
      city_id: '920000',
    },
    {
      id: '921400',
      name: 'Huyện U Minh Thượng',
      city_id: '920000',
    },
    {
      id: '921100',
      name: 'Huyện Vĩnh Thuận',
      city_id: '920000',
    },
    {
      id: '921300',
      name: 'Huyện đảo Kiên Hải',
      city_id: '920000',
    },
    {
      id: '921500',
      name: 'Huyện Giang Thành',
      city_id: '920000',
    },
    {
      id: '580400',
      name: 'Huyện Đăk Tô',
      city_id: '580000',
    },
    {
      id: '580600',
      name: 'Huyện Kon Plông',
      city_id: '580000',
    },
    {
      id: '580800',
      name: 'Huyện Kon Rẫy',
      city_id: '580000',
    },
    {
      id: '580500',
      name: 'Huyện Sa Thầy',
      city_id: '580000',
    },
    {
      id: '580100',
      name: 'Thành phố Kon Tum',
      city_id: '580000',
    },
    {
      id: '580300',
      name: 'Huyện Ngọc Hồi',
      city_id: '580000',
    },
    {
      id: '390100',
      name: 'Thành phố Lai Châu',
      city_id: '390000',
    },
    {
      id: '390300',
      name: 'Huyện Phong Thổ',
      city_id: '390000',
    },
    {
      id: '390400',
      name: 'Huyện Sìn Hồ',
      city_id: '390000',
    },
    {
      id: '390600',
      name: 'Huyện Than Uyên',
      city_id: '390000',
    },
    {
      id: '390500',
      name: 'Huyện Mường Tè',
      city_id: '390000',
    },
    {
      id: '390700',
      name: 'Huyện Tân Uyên',
      city_id: '390000',
    },
    {
      id: '671100',
      name: 'Huyện Bảo Lâm',
      city_id: '670000',
    },
    {
      id: '670200',
      name: 'Thành phố Bảo Lộc',
      city_id: '670000',
    },
    {
      id: '670400',
      name: 'Huyện Di Linh',
      city_id: '670000',
    },
    {
      id: '670100',
      name: 'Thành phố Đà Lạt',
      city_id: '670000',
    },
    {
      id: '670600',
      name: 'Huyện Lạc Dương',
      city_id: '670000',
    },
    {
      id: '671000',
      name: 'Huyện Lâm Hà',
      city_id: '670000',
    },
    {
      id: '670900',
      name: 'Huyện Cát Tiên',
      city_id: '670000',
    },
    {
      id: '240500',
      name: 'Huyện Bắc Sơn',
      city_id: '240000',
    },
    {
      id: '240300',
      name: 'Huyện Bình Gia',
      city_id: '240000',
    },
    {
      id: '240900',
      name: 'Huyện Chi Lăng',
      city_id: '240000',
    },
    {
      id: '241000',
      name: 'Huyện Đình Lập',
      city_id: '240000',
    },
    {
      id: '241100',
      name: 'Huyện Hữu Lũng',
      city_id: '240000',
    },
    {
      id: '240100',
      name: 'Thành phố Lạng Sơn',
      city_id: '240000',
    },
    {
      id: '240800',
      name: 'Huyện Lộc Bình',
      city_id: '240000',
    },
    {
      id: '240600',
      name: 'Huyện Văn Quan',
      city_id: '240000',
    },
    {
      id: '240700',
      name: 'Huyện Cao Lộc',
      city_id: '240000',
    },
    {
      id: '240200',
      name: 'Huyện Tràng Định',
      city_id: '240000',
    },
    {
      id: '240400',
      name: 'Huyện Văn Lãng',
      city_id: '240000',
    },
    {
      id: '850800',
      name: 'Huyện Bến Lức',
      city_id: '850000',
    },
    {
      id: '851200',
      name: 'Huyện Cần Đước',
      city_id: '850000',
    },
    {
      id: '851300',
      name: 'Huyện Cần Giuộc',
      city_id: '850000',
    },
    {
      id: '851000',
      name: 'Huyện Châu Thành',
      city_id: '850000',
    },
    {
      id: '850700',
      name: 'Huyện Đức Hòa',
      city_id: '850000',
    },
    {
      id: '850600',
      name: 'Huyện Đức Huệ',
      city_id: '850000',
    },
    {
      id: '850300',
      name: 'Huyện Mộc Hóa',
      city_id: '850000',
    },
    {
      id: '851400',
      name: 'Huyện Tân Hưng',
      city_id: '850000',
    },
    {
      id: '850400',
      name: 'Huyện Tân Thạnh',
      city_id: '850000',
    },
    {
      id: '851100',
      name: 'Huyện Tân Trụ',
      city_id: '850000',
    },
    {
      id: '850500',
      name: 'Huyện Thạnh Hóa',
      city_id: '850000',
    },
    {
      id: '850900',
      name: 'Huyện Thủ Thừa',
      city_id: '850000',
    },
    {
      id: '850200',
      name: 'Huyện Vĩnh Hưng',
      city_id: '850000',
    },
    {
      id: '461300',
      name: 'Huyện Anh Sơn',
      city_id: '460000',
    },
    {
      id: '460900',
      name: 'Huyện Con Cuông',
      city_id: '460000',
    },
    {
      id: '460200',
      name: 'Thị xã Cửa Lò',
      city_id: '460000',
    },
    {
      id: '461200',
      name: 'Huyện Diễn Châu',
      city_id: '460000',
    },
    {
      id: '461400',
      name: 'Huyện Đô Lương',
      city_id: '460000',
    },
    {
      id: '461800',
      name: 'Huyện Hưng Nguyên',
      city_id: '460000',
    },
    {
      id: '460700',
      name: 'Huyện Kỳ Sơn',
      city_id: '460000',
    },
    {
      id: '461600',
      name: 'Huyện Nghi Lộc',
      city_id: '460000',
    },
    {
      id: '460400',
      name: 'Huyện Quỳ Hợp',
      city_id: '460000',
    },
    {
      id: '460600',
      name: 'Huyện Quỳnh Lưu',
      city_id: '460000',
    },
    {
      id: '461000',
      name: 'Huyện Tân Kỳ',
      city_id: '460000',
    },
    {
      id: '462000',
      name: 'Thị xã Thái Hòa',
      city_id: '460000',
    },
    {
      id: '461500',
      name: 'Huyện Thanh Chương',
      city_id: '460000',
    },
    {
      id: '460100',
      name: 'Thành phố Vinh',
      city_id: '460000',
    },
    {
      id: '461100',
      name: 'Huyện Yên Thành',
      city_id: '460000',
    },
    {
      id: '461900',
      name: 'Huyện Quế Phong',
      city_id: '460000',
    },
    {
      id: '460300',
      name: 'Huyện Quỳ Châu',
      city_id: '460000',
    },
    {
      id: '460800',
      name: 'Huyện Tương Dương',
      city_id: '460000',
    },
    {
      id: '430400',
      name: 'Huyện Gia Viễn',
      city_id: '430000',
    },
    {
      id: '430700',
      name: 'Huyện Kim Sơn',
      city_id: '430000',
    },
    {
      id: '430300',
      name: 'Huyện Nho Quan',
      city_id: '430000',
    },
    {
      id: '430100',
      name: 'Thành phố Ninh Bình',
      city_id: '430000',
    },
    {
      id: '430200',
      name: 'Thành Phố Tam Điệp',
      city_id: '430000',
    },
    {
      id: '430500',
      name: 'Huyện Hoa Lư',
      city_id: '430000',
    },
    {
      id: '430800',
      name: 'Huyện Yên Khánh',
      city_id: '430000',
    },
    {
      id: '430600',
      name: 'Huyện Yên Mô',
      city_id: '430000',
    },
    {
      id: '660200',
      name: 'Huyện Ninh Sơn',
      city_id: '660000',
    },
    {
      id: '660500',
      name: 'Huyện Bác Ái',
      city_id: '660000',
    },
    {
      id: '660300',
      name: 'Huyện Ninh Hải',
      city_id: '660000',
    },
    {
      id: '660400',
      name: 'Huyện Ninh Phước',
      city_id: '660000',
    },
    {
      id: '660600',
      name: 'Huyện Thuận Bắc',
      city_id: '660000',
    },
    {
      id: '660700',
      name: 'Huyện Thuận Nam',
      city_id: '660000',
    },
    {
      id: '290300',
      name: 'Huyện Đoan Hùng',
      city_id: '290000',
    },
    {
      id: '290500',
      name: 'Huyện Hạ Hòa',
      city_id: '290000',
    },
    {
      id: '291000',
      name: 'Huyện Lâm Thao',
      city_id: '290000',
    },
    {
      id: '290200',
      name: 'Thị xã Phú Thọ',
      city_id: '290000',
    },
    {
      id: '290400',
      name: 'Huyện Thanh Ba',
      city_id: '290000',
    },
    {
      id: '290800',
      name: 'Huyện Thanh Sơn',
      city_id: '290000',
    },
    {
      id: '291200',
      name: 'Huyện Thanh Thủy',
      city_id: '290000',
    },
    {
      id: '290100',
      name: 'Thành phố Việt Trì',
      city_id: '290000',
    },
    {
      id: '290700',
      name: 'Huyện Yên Lập',
      city_id: '290000',
    },
    {
      id: '290900',
      name: 'Huyện Phù Ninh',
      city_id: '290000',
    },
    {
      id: '291100',
      name: 'Huyện Tam Nông',
      city_id: '290000',
    },
    {
      id: '291300',
      name: 'Huyện Tân Sơn',
      city_id: '290000',
    },
    {
      id: '290600',
      name: 'Huyện Cẩm Khê',
      city_id: '290000',
    },
    {
      id: '620300',
      name: 'Thị xã Sông Cầu',
      city_id: '620000',
    },
    {
      id: '620400',
      name: 'Huyện Tuy An',
      city_id: '620000',
    },
    {
      id: '620100',
      name: 'Thành phố Tuy Hòa',
      city_id: '620000',
    },
    {
      id: '620800',
      name: 'Huyện Phú Hòa',
      city_id: '620000',
    },
    {
      id: '620600',
      name: 'Huyện Sông Hinh',
      city_id: '620000',
    },
    {
      id: '620500',
      name: 'Huyện Sơn Hòa',
      city_id: '620000',
    },
    {
      id: '620900',
      name: 'Huyện Tây Hòa',
      city_id: '620000',
    },
    {
      id: '510500',
      name: 'Huyện Bố Trạch',
      city_id: '510000',
    },
    {
      id: '510100',
      name: 'Thành phố Đồng Hới',
      city_id: '510000',
    },
    {
      id: '510700',
      name: 'Huyện Lệ Thủy',
      city_id: '510000',
    },
    {
      id: '510300',
      name: 'Huyện Minh Hóa',
      city_id: '510000',
    },
    {
      id: '510600',
      name: 'Huyện Quảng Ninh',
      city_id: '510000',
    },
    {
      id: '510400',
      name: 'Huyện Quảng Trạch',
      city_id: '510000',
    },
    {
      id: '510200',
      name: 'Huyện Tuyên Hóa',
      city_id: '510000',
    },
    {
      id: '560200',
      name: 'Thành phố Hội An',
      city_id: '560000',
    },
    {
      id: '560900',
      name: 'Huyện Núi Thành',
      city_id: '560000',
    },
    {
      id: '561700',
      name: 'Huyện Phú Ninh',
      city_id: '560000',
    },
    {
      id: '560800',
      name: 'Huyện Thăng Bình',
      city_id: '560000',
    },
    {
      id: '561000',
      name: 'Huyện Tiên Phước',
      city_id: '560000',
    },
    {
      id: '561500',
      name: 'Huyện Nam Trà My',
      city_id: '560000',
    },
    {
      id: '561100',
      name: 'Huyện Bắc Trà My',
      city_id: '560000',
    },
    {
      id: '560300',
      name: 'Huyện Duy Xuyên',
      city_id: '560000',
    },
    {
      id: '561300',
      name: 'Huyện Nam Giang',
      city_id: '560000',
    },
    {
      id: '561400',
      name: 'Huyện Phước Sơn',
      city_id: '560000',
    },
    {
      id: '560600',
      name: 'Huyện Quế Sơn',
      city_id: '560000',
    },
    {
      id: '561600',
      name: 'Huyện Tây Giang',
      city_id: '560000',
    },
    {
      id: '561800',
      name: 'Huyện Nông Sơn',
      city_id: '560000',
    },
    {
      id: '571200',
      name: 'Huyện Ba Tơ',
      city_id: '570000',
    },
    {
      id: '571100',
      name: 'Thị Xã Đức Phổ',
      city_id: '570000',
    },
    {
      id: '570200',
      name: 'Huyện đảo Lý Sơn',
      city_id: '570000',
    },
    {
      id: '570900',
      name: 'Huyện Minh Long',
      city_id: '570000',
    },
    {
      id: '571000',
      name: 'Huyện Mộ Đức',
      city_id: '570000',
    },
    {
      id: '570100',
      name: 'Thành phố Quảng Ngãi',
      city_id: '570000',
    },
    {
      id: '570600',
      name: 'Huyện Sơn Hà',
      city_id: '570000',
    },
    {
      id: '570500',
      name: 'Huyện Sơn Tịnh',
      city_id: '570000',
    },
    {
      id: '570400',
      name: 'Huyện Trà Bồng',
      city_id: '570000',
    },
    {
      id: '570300',
      name: 'Huyện Bình Sơn',
      city_id: '570000',
    },
    {
      id: '570800',
      name: 'Huyện Nghĩa Hành',
      city_id: '570000',
    },
    {
      id: '571300',
      name: 'Huyện Sơn Tây',
      city_id: '570000',
    },
    {
      id: '571400',
      name: 'Huyện Tây Trà',
      city_id: '570000',
    },
    {
      id: '520500',
      name: 'Huyện Cam Lộ',
      city_id: '520000',
    },
    {
      id: '521000',
      name: 'Huyện đảo Cồn Cỏ',
      city_id: '520000',
    },
    {
      id: '520400',
      name: 'Huyện Gio Linh',
      city_id: '520000',
    },
    {
      id: '520700',
      name: 'Huyện Hải Lăng',
      city_id: '520000',
    },
    {
      id: '520200',
      name: 'Thị xã Quảng Trị',
      city_id: '520000',
    },
    {
      id: '520300',
      name: 'Huyện Vĩnh Linh',
      city_id: '520000',
    },
    {
      id: '520800',
      name: 'Huyện Hướng Hóa',
      city_id: '520000',
    },
    {
      id: '520600',
      name: 'Huyện Triệu Phong',
      city_id: '520000',
    },
    {
      id: '950800',
      name: 'Huyện Cù Lao Dung',
      city_id: '950000',
    },
    {
      id: '950200',
      name: 'Huyện Kế Sách',
      city_id: '950000',
    },
    {
      id: '950600',
      name: 'Huyện Long Phú',
      city_id: '950000',
    },
    {
      id: '950300',
      name: 'Huyện Mỹ Tú',
      city_id: '950000',
    },
    {
      id: '950400',
      name: 'Huyện Mỹ Xuyên',
      city_id: '950000',
    },
    {
      id: '950900',
      name: 'Thị xã Ngã Năm',
      city_id: '950000',
    },
    {
      id: '950100',
      name: 'Thành phố Sóc Trăng',
      city_id: '950000',
    },
    {
      id: '950500',
      name: 'Huyện Thạnh Trị',
      city_id: '950000',
    },
    {
      id: '950700',
      name: 'Thị xã Vĩnh Châu',
      city_id: '950000',
    },
    {
      id: '951000',
      name: 'Huyện Châu Thành',
      city_id: '950000',
    },
    {
      id: '360500',
      name: 'Huyện Bắc Yên',
      city_id: '360000',
    },
    {
      id: '361000',
      name: 'Huyện Mộc Châu',
      city_id: '360000',
    },
    {
      id: '360600',
      name: 'Huyện Phù Yên',
      city_id: '360000',
    },
    {
      id: '360200',
      name: 'Huyện Quỳnh Nhai',
      city_id: '360000',
    },
    {
      id: '360900',
      name: 'Huyện Sông Mã',
      city_id: '360000',
    },
    {
      id: '361100',
      name: 'Huyện Sốp Cộp',
      city_id: '360000',
    },
    {
      id: '360100',
      name: 'Thành phố Sơn La',
      city_id: '360000',
    },
    {
      id: '360400',
      name: 'Huyện Thuận Châu',
      city_id: '360000',
    },
    {
      id: '360800',
      name: 'Huyện Yên Châu',
      city_id: '360000',
    },
    {
      id: '360700',
      name: 'Huyện Mai Sơn',
      city_id: '360000',
    },
    {
      id: '360300',
      name: 'Huyện Mường La',
      city_id: '360000',
    },
    {
      id: '840700',
      name: 'Huyện Bến Cầu',
      city_id: '840000',
    },
    {
      id: '840500',
      name: 'Huyện Châu Thành',
      city_id: '840000',
    },
    {
      id: '840400',
      name: 'Huyện Dương Minh Châu',
      city_id: '840000',
    },
    {
      id: '840800',
      name: 'Huyện Gò Dầu',
      city_id: '840000',
    },
    {
      id: '840600',
      name: 'Thị xã Hòa Thành',
      city_id: '840000',
    },
    {
      id: '840200',
      name: 'Huyện Tân Biên',
      city_id: '840000',
    },
    {
      id: '840300',
      name: 'Huyện Tân Châu',
      city_id: '840000',
    },
    {
      id: '840100',
      name: 'Thành phố Tây Ninh',
      city_id: '840000',
    },
    {
      id: '840900',
      name: 'Thị Xã Trảng Bàng',
      city_id: '840000',
    },
    {
      id: '410300',
      name: 'Huyện Hưng Hà',
      city_id: '410000',
    },
    {
      id: '410600',
      name: 'Huyện Kiến Xương',
      city_id: '410000',
    },
    {
      id: '410200',
      name: 'Huyện Quỳnh Phụ',
      city_id: '410000',
    },
    {
      id: '410100',
      name: 'Thành phố Thái Bình',
      city_id: '410000',
    },
    {
      id: '410800',
      name: 'Huyện Thái Thụy',
      city_id: '410000',
    },
    {
      id: '410700',
      name: 'Huyện Tiền Hải',
      city_id: '410000',
    },
    {
      id: '410500',
      name: 'Huyện Vũ Thư',
      city_id: '410000',
    },
    {
      id: '250200',
      name: 'Thành Phố Sông Công',
      city_id: '250000',
    },
    {
      id: '250100',
      name: 'Thành phố Thái Nguyên',
      city_id: '250000',
    },
    {
      id: '250900',
      name: 'Thành Phố Phổ Yên',
      city_id: '250000',
    },
    {
      id: '250800',
      name: 'Huyện Phú Bình',
      city_id: '250000',
    },
    {
      id: '250400',
      name: 'Huyện Phú Lương',
      city_id: '250000',
    },
    {
      id: '250500',
      name: 'Huyện Võ Nhai',
      city_id: '250000',
    },
    {
      id: '440700',
      name: 'Huyện Bá Thước',
      city_id: '440000',
    },
    {
      id: '440200',
      name: 'Thị Xã Bỉm Sơn',
      city_id: '440000',
    },
    {
      id: '441400',
      name: 'Huyện Cẩm Thủy',
      city_id: '440000',
    },
    {
      id: '442100',
      name: 'Huyện Hà Trung',
      city_id: '440000',
    },
    {
      id: '442400',
      name: 'Huyện Hậu Lộc',
      city_id: '440000',
    },
    {
      id: '442200',
      name: 'Huyện Hoằng Hóa',
      city_id: '440000',
    },
    {
      id: '441100',
      name: 'Huyện Lang Chánh',
      city_id: '440000',
    },
    {
      id: '440600',
      name: 'Huyện Mường Lát',
      city_id: '440000',
    },
    {
      id: '442300',
      name: 'Huyện Nga Sơn',
      city_id: '440000',
    },
    {
      id: '441200',
      name: 'Huyện Ngọc Lặc',
      city_id: '440000',
    },
    {
      id: '441900',
      name: 'Huyện Nông Cống',
      city_id: '440000',
    },
    {
      id: '440400',
      name: 'Huyện Quan Hóa',
      city_id: '440000',
    },
    {
      id: '440500',
      name: 'Huyện Quan Sơn',
      city_id: '440000',
    },
    {
      id: '442500',
      name: 'Huyện Quảng Xương',
      city_id: '440000',
    },
    {
      id: '440300',
      name: 'Thành phố Sầm Sơn',
      city_id: '440000',
    },
    {
      id: '441300',
      name: 'Huyện Thạch Thành',
      city_id: '440000',
    },
    {
      id: '440100',
      name: 'Thành phố Thanh Hóa',
      city_id: '440000',
    },
    {
      id: '441700',
      name: 'Huyện Thiệu Hóa',
      city_id: '440000',
    },
    {
      id: '441500',
      name: 'Huyện Thọ Xuân',
      city_id: '440000',
    },
    {
      id: '440800',
      name: 'Huyện Thường Xuân',
      city_id: '440000',
    },
    {
      id: '441800',
      name: 'Huyện Triệu Sơn',
      city_id: '440000',
    },
    {
      id: '441600',
      name: 'Huyện Vĩnh Lộc',
      city_id: '440000',
    },
    {
      id: '442700',
      name: 'Huyện Yên Định',
      city_id: '440000',
    },
    {
      id: '441000',
      name: 'Huyện Như Thanh',
      city_id: '440000',
    },
    {
      id: '440900',
      name: 'Huyện Như Xuân',
      city_id: '440000',
    },
    {
      id: '861100',
      name: 'Thị xã Cai Lậy',
      city_id: '860000',
    },
    {
      id: '860300',
      name: 'Huyện Cái Bè',
      city_id: '860000',
    },
    {
      id: '860600',
      name: 'Huyện Chợ Gạo',
      city_id: '860000',
    },
    {
      id: '860200',
      name: 'Thị xã Gò Công',
      city_id: '860000',
    },
    {
      id: '860100',
      name: 'Thành phố Mỹ Tho',
      city_id: '860000',
    },
    {
      id: '860900',
      name: 'Huyện Tân Phước',
      city_id: '860000',
    },
    {
      id: '860500',
      name: 'Huyện Châu Thành',
      city_id: '860000',
    },
    {
      id: '860800',
      name: 'Huyện Gò Công Đông',
      city_id: '860000',
    },
    {
      id: '860700',
      name: 'Huyện Gò Công Tây',
      city_id: '860000',
    },
    {
      id: '940200',
      name: 'Huyện Càng Long',
      city_id: '940000',
    },
    {
      id: '940300',
      name: 'Huyện Cầu Kè',
      city_id: '940000',
    },
    {
      id: '940700',
      name: 'Huyện Cầu Ngang',
      city_id: '940000',
    },
    {
      id: '940500',
      name: 'Huyện Châu Thành',
      city_id: '940000',
    },
    {
      id: '940900',
      name: 'Thị xã Duyên Hải',
      city_id: '940000',
    },
    {
      id: '940400',
      name: 'Huyện Tiểu Cần',
      city_id: '940000',
    },
    {
      id: '940600',
      name: 'Huyện Trà Cú',
      city_id: '940000',
    },
    {
      id: '940100',
      name: 'Thành phố Trà Vinh',
      city_id: '940000',
    },
    {
      id: '300400',
      name: 'Huyện Chiêm Hóa',
      city_id: '300000',
    },
    {
      id: '300500',
      name: 'Huyện Hàm Yên',
      city_id: '300000',
    },
    {
      id: '300300',
      name: 'Huyện Na Hang',
      city_id: '300000',
    },
    {
      id: '300700',
      name: 'Huyện Sơn Dương',
      city_id: '300000',
    },
    {
      id: '300100',
      name: 'Thành phố Tuyên Quang',
      city_id: '300000',
    },
    {
      id: '300600',
      name: 'Huyện Yên Sơn',
      city_id: '300000',
    },
    {
      id: '300200',
      name: 'Huyện Lâm Bình',
      city_id: '300000',
    },
    {
      id: '890400',
      name: 'Thị xã Bình Minh',
      city_id: '890000',
    },
    {
      id: '890800',
      name: 'Huyện Bình Tân',
      city_id: '890000',
    },
    {
      id: '890200',
      name: 'Huyện Long Hồ',
      city_id: '890000',
    },
    {
      id: '890300',
      name: 'Huyện Mang Thít',
      city_id: '890000',
    },
    {
      id: '890500',
      name: 'Huyện Tam Bình',
      city_id: '890000',
    },
    {
      id: '890600',
      name: 'Huyện Trà Ôn',
      city_id: '890000',
    },
    {
      id: '890100',
      name: 'Thành phố Vĩnh Long',
      city_id: '890000',
    },
    {
      id: '890700',
      name: 'Huyện Vũng Liêm',
      city_id: '890000',
    },
    {
      id: '280600',
      name: 'Huyện Bình Xuyên',
      city_id: '280000',
    },
    {
      id: '280300',
      name: 'Huyện Lập Thạch',
      city_id: '280000',
    },
    {
      id: '280800',
      name: 'Thành Phố Phúc Yên',
      city_id: '280000',
    },
    {
      id: '280400',
      name: 'Huyện Vĩnh Tường',
      city_id: '280000',
    },
    {
      id: '280100',
      name: 'Thành phố Vĩnh Yên',
      city_id: '280000',
    },
    {
      id: '280500',
      name: 'Huyện Yên Lạc',
      city_id: '280000',
    },
    {
      id: '280700',
      name: 'Huyện Sông Lô',
      city_id: '280000',
    },
    {
      id: '280200',
      name: 'Huyện Tam Dương',
      city_id: '280000',
    },
    {
      id: '320500',
      name: 'Huyện Mù Căng Chải',
      city_id: '320000',
    },
    {
      id: '320200',
      name: 'Thị xã Nghĩa Lộ',
      city_id: '320000',
    },
    {
      id: '320800',
      name: 'Huyện Trạm Tấu',
      city_id: '320000',
    },
    {
      id: '320100',
      name: 'Thành phố Yên Bái',
      city_id: '320000',
    },
    {
      id: '320400',
      name: 'Huyện Yên Bình',
      city_id: '320000',
    },
    {
      id: '320900',
      name: 'Huyện Lục Yên',
      city_id: '320000',
    },
    {
      id: '320700',
      name: 'Huyện Trấn Yên',
      city_id: '320000',
    },
    {
      id: '320600',
      name: 'Huyện Văn Chấn',
      city_id: '320000',
    },
    {
      id: '320300',
      name: 'Huyện Văn Yên',
      city_id: '320000',
    },
    {
      id: '630100',
      name: 'Thành phố Buôn Ma Thuột',
      city_id: '630000',
    },
    {
      id: '631400',
      name: 'Huyện Cư Kuin',
      city_id: '630000',
    },
    {
      id: '630800',
      name: 'Huyện Ea Kar',
      city_id: '630000',
    },
    {
      id: '630500',
      name: 'Huyện Ea Súp',
      city_id: '630000',
    },
    {
      id: '631000',
      name: 'Huyện Krông Ana',
      city_id: '630000',
    },
    {
      id: '631100',
      name: 'Huyện Krông Bông',
      city_id: '630000',
    },
    {
      id: '630300',
      name: 'Huyện Krông Búk',
      city_id: '630000',
    },
    {
      id: '630400',
      name: 'Huyện Krông Năng',
      city_id: '630000',
    },
    {
      id: '630700',
      name: 'Huyện Krông Pắk',
      city_id: '630000',
    },
    {
      id: '631500',
      name: 'Thị xã Buôn Hồ',
      city_id: '630000',
    },
    {
      id: '630600',
      name: "Huyện Cư M'gar",
      city_id: '630000',
    },
    {
      id: '631200',
      name: 'Huyện Lắk',
      city_id: '630000',
    },
    {
      id: '870100',
      name: 'Thành phố Cao Lãnh',
      city_id: '870000',
    },
    {
      id: '870700',
      name: 'Huyện Cao Lãnh',
      city_id: '870000',
    },
    {
      id: '871100',
      name: 'Huyện Châu Thành',
      city_id: '870000',
    },
    {
      id: '871000',
      name: 'Huyện Lai Vung',
      city_id: '870000',
    },
    {
      id: '871200',
      name: 'Thành Phố Hồng Ngự',
      city_id: '870000',
    },
    {
      id: '870800',
      name: 'Huyện Lấp Vò',
      city_id: '870000',
    },
    {
      id: '870200',
      name: 'Thành Phố Sa Đéc',
      city_id: '870000',
    },
    {
      id: '870500',
      name: 'Huyện Tam Nông',
      city_id: '870000',
    },
    {
      id: '870300',
      name: 'Huyện Tân Hồng',
      city_id: '870000',
    },
    {
      id: '870600',
      name: 'Huyện Thanh Bình',
      city_id: '870000',
    },
    {
      id: '870900',
      name: 'Huyện Tháp Mười',
      city_id: '870000',
    },
    {
      id: '702000',
      name: 'Huyện Bình Chánh',
      city_id: '700000',
    },
    {
      id: '640100',
      name: 'Thị xã Gia Nghĩa',
      city_id: '640000',
    },
    {
      id: '640400',
      name: 'Huyện Cư Jút',
      city_id: '640000',
    },
    {
      id: '640600',
      name: 'Huyện Krông Nô',
      city_id: '640000',
    },
    {
      id: '910500',
      name: 'Huyện Châu Thành',
      city_id: '910000',
    },
    {
      id: '910600',
      name: 'Huyện Châu Thành A',
      city_id: '910000',
    },
    {
      id: '910300',
      name: 'Thị xã Long Mỹ',
      city_id: '910000',
    },
    {
      id: '910400',
      name: 'Huyện Phụng Hiệp',
      city_id: '910000',
    },
    {
      id: '910700',
      name: 'Thành phố Ngã Bảy',
      city_id: '910000',
    },
    {
      id: '910100',
      name: 'Thành phố Vị Thanh',
      city_id: '910000',
    },
    {
      id: '910200',
      name: 'Huyện Vị Thủy',
      city_id: '910000',
    },
    {
      id: '960600',
      name: 'Huyện Đông Hải',
      city_id: '960000',
    },
    {
      id: '960100',
      name: 'Thành phố Bạc Liêu',
      city_id: '960000',
    },
    {
      id: '960400',
      name: 'Huyện Giá Rai',
      city_id: '960000',
    },
    {
      id: '960700',
      name: 'Huyện Hoà Bình',
      city_id: '960000',
    },
    {
      id: '960300',
      name: 'Huyện Hồng Dân',
      city_id: '960000',
    },
    {
      id: '960500',
      name: 'Huyện Phước Long',
      city_id: '960000',
    },
    {
      id: '960200',
      name: 'Huyện Vĩnh Lợi',
      city_id: '960000',
    },
    {
      id: '380300',
      name: 'Huyện Điện Biên',
      city_id: '380000',
    },
    {
      id: '380700',
      name: 'Huyện Điện Biên Đông',
      city_id: '380000',
    },
    {
      id: '380100',
      name: 'Thành phố Điện Biên Phủ',
      city_id: '380000',
    },
    {
      id: '380900',
      name: 'Huyện Mường Ảng',
      city_id: '380000',
    },
    {
      id: '380500',
      name: 'Huyện Mường Chà',
      city_id: '380000',
    },
    {
      id: '380200',
      name: 'Thị xã Mường Lay',
      city_id: '380000',
    },
    {
      id: '380800',
      name: 'Huyện Mường Nhé',
      city_id: '380000',
    },
    {
      id: '380600',
      name: 'Huyện Tủa Chùa',
      city_id: '380000',
    },
    {
      id: '380400',
      name: 'Huyện Tuần Giáo',
      city_id: '380000',
    },
    {
      id: '101500',
      name: 'Quận Hà Đông',
      city_id: '100000',
    },
    {
      id: '102200',
      name: 'Huyện Đan Phượng',
      city_id: '100000',
    },
    {
      id: '102300',
      name: 'Huyện Hoài Đức',
      city_id: '100000',
    },
    {
      id: '102500',
      name: 'Huyện Mỹ Đức',
      city_id: '100000',
    },
    {
      id: '101800',
      name: 'Huyện Phúc Thọ',
      city_id: '100000',
    },
    {
      id: '102000',
      name: 'Huyện Quốc Oai',
      city_id: '100000',
    },
    {
      id: '101900',
      name: 'Huyện Thạch Thất',
      city_id: '100000',
    },
    {
      id: '102700',
      name: 'Huyện Thường Tín',
      city_id: '100000',
    },
    {
      id: '102600',
      name: 'Huyện Ứng Hòa',
      city_id: '100000',
    },
    {
      id: '102800',
      name: 'Huyện Phú Xuyên',
      city_id: '100000',
    },
    {
      id: '702400',
      name: 'Huyện Cần Giờ',
      city_id: '700000',
    },
    {
      id: '702300',
      name: 'Huyện Nhà Bè',
      city_id: '700000',
    },
    {
      id: '880500',
      name: 'Huyện Phú Tân',
      city_id: '880000',
    },
    {
      id: '350400',
      name: 'Huyện Tân Lạc',
      city_id: '350000',
    },
    {
      id: '390800',
      name: 'Huyện Nậm Nhùn',
      city_id: '390000',
    },
    {
      id: '570700',
      name: 'Huyện Tư Nghĩa',
      city_id: '570000',
    },
    {
      id: '530400',
      name: 'Thị xã Hương Trà',
      city_id: '530000',
    },
    {
      id: '361200',
      name: 'Huyện Vân Hồ',
      city_id: '360000',
    },
    {
      id: '462100',
      name: 'Thị xã Hoàng Mai',
      city_id: '460000',
    },
    {
      id: '851500',
      name: 'Thị xã Kiến Tường',
      city_id: '850000',
    },
    {
      id: '581000',
      name: "Huyện Ia H'Drai",
      city_id: '580000',
    },
    {
      id: '381000',
      name: 'Huyện Nậm Pồ',
      city_id: '380000',
    },
    {
      id: '823100',
      name: 'Huyện Bàu Bàng',
      city_id: '820000',
    },
    {
      id: '820300',
      name: 'Huyện Bắc Tân Uyên',
      city_id: '820000',
    },
    {
      id: '510800',
      name: 'Thị xã Ba Đồn',
      city_id: '510000',
    },
    {
      id: '201100',
      name: 'Thị Xã Quảng Yên',
      city_id: '200000',
    },
    {
      id: '260200',
      name: 'Huyện Chợ Đồn',
      city_id: '260000',
    },
    {
      id: '640700',
      name: 'Huyện Đắk Glong',
      city_id: '640000',
    },
    {
      id: '640300',
      name: 'Huyện ĐắK Mil',
      city_id: '640000',
    },
    {
      id: '640200',
      name: 'Huyện Đắk RLấp',
      city_id: '640000',
    },
    {
      id: '640500',
      name: 'Huyện Đắk Song',
      city_id: '640000',
    },
    {
      id: '640800',
      name: 'Huyện Tuy Đức',
      city_id: '640000',
    },
    {
      id: '631300',
      name: 'Huyện Buôn Đôn',
      city_id: '630000',
    },
    {
      id: '630200',
      name: "Huyện Ea H'leo",
      city_id: '630000',
    },
    {
      id: '630900',
      name: 'Huyện M`Đrăk',
      city_id: '630000',
    },
    {
      id: '600700',
      name: 'Huyện Đức Cơ',
      city_id: '600000',
    },
    {
      id: '601300',
      name: 'Huyện Đak Đoa',
      city_id: '600000',
    },
    {
      id: '601500',
      name: 'Huyện Đak Pơ',
      city_id: '600000',
    },
    {
      id: '701600',
      name: 'Quận Bình Thạnh',
      city_id: '700000',
    },
    {
      id: '701900',
      name: 'Quận Bình Tân',
      city_id: '700000',
    },
    {
      id: '702100',
      name: 'Huyện Củ Chi',
      city_id: '700000',
    },
    {
      id: '701300',
      name: 'Quận Gò Vấp',
      city_id: '700000',
    },
    {
      id: '702200',
      name: 'Huyện Hóc Môn',
      city_id: '700000',
    },
    {
      id: '701700',
      name: 'Quận Phú Nhuận',
      city_id: '700000',
    },
    {
      id: '701400',
      name: 'Quận Tân Bình',
      city_id: '700000',
    },
    {
      id: '701500',
      name: 'Quận Tân Phú',
      city_id: '700000',
    },
    {
      id: '100100',
      name: 'Quận Ba Đình',
      city_id: '100000',
    },
    {
      id: '101000',
      name: 'Quận Bắc Từ Liêm',
      city_id: '100000',
    },
    {
      id: '101700',
      name: 'Huyện Ba Vì',
      city_id: '100000',
    },
    {
      id: '100600',
      name: 'Quận Cầu Giấy',
      city_id: '100000',
    },
    {
      id: '101300',
      name: 'Huyện Đông Anh',
      city_id: '100000',
    },
    {
      id: '100400',
      name: 'Quận Đống Đa',
      city_id: '100000',
    },
    {
      id: '101200',
      name: 'Huyện Gia Lâm',
      city_id: '100000',
    },
    {
      id: '100200',
      name: 'Quận Hoàn Kiếm',
      city_id: '100000',
    },
    {
      id: '100800',
      name: 'Quận Hoàng Mai',
      city_id: '100000',
    },
    {
      id: '100900',
      name: 'Quận Long Biên',
      city_id: '100000',
    },
    {
      id: '102900',
      name: 'Huyện Mê Linh',
      city_id: '100000',
    },
    {
      id: '103000',
      name: 'Quận Nam Từ Liêm',
      city_id: '100000',
    },
    {
      id: '101400',
      name: 'Huyện Sóc Sơn',
      city_id: '100000',
    },
    {
      id: '101600',
      name: 'Thị xã Sơn Tây',
      city_id: '100000',
    },
    {
      id: '100500',
      name: 'Quận Tây Hồ',
      city_id: '100000',
    },
    {
      id: '102400',
      name: 'Huyện Thanh Oai',
      city_id: '100000',
    },
    {
      id: '101100',
      name: 'Huyện Thanh Trì',
      city_id: '100000',
    },
    {
      id: '100700',
      name: 'Quận Thanh Xuân',
      city_id: '100000',
    },
    {
      id: '480400',
      name: 'Huyện Đức Thọ',
      city_id: '480000',
    },
    {
      id: '530600',
      name: 'Thị xã Hương Thủy',
      city_id: '530000',
    },
    {
      id: '530800',
      name: 'Huyện Nam Đông',
      city_id: '530000',
    },
    {
      id: '650800',
      name: 'Huyện đảo Trường Sa',
      city_id: '650000',
    },
    {
      id: '580200',
      name: 'Huyện Đắk Glei',
      city_id: '580000',
    },
    {
      id: '580700',
      name: 'Huyện Đắk Hà',
      city_id: '580000',
    },
    {
      id: '390200',
      name: 'Huyện Tam Đường',
      city_id: '390000',
    },
    {
      id: '670500',
      name: 'Huyện Đơn Dương',
      city_id: '670000',
    },
    {
      id: '670700',
      name: 'Huyện Đạ Huoai',
      city_id: '670000',
    },
    {
      id: '671200',
      name: 'Huyện Đam Rông',
      city_id: '670000',
    },
    {
      id: '670300',
      name: 'Huyện Đức Trọng',
      city_id: '670000',
    },
    {
      id: '670800',
      name: 'Huyện Đạ Tẻh',
      city_id: '670000',
    },
    {
      id: '460500',
      name: 'Huyện Nghĩa Đàn',
      city_id: '460000',
    },
    {
      id: '461700',
      name: 'Huyện Nam Đàn',
      city_id: '460000',
    },
    {
      id: '660100',
      name: 'Thành phố Phan Rang-Tháp Chàm',
      city_id: '660000',
    },
    {
      id: '620700',
      name: 'Thị Xã Đông Hòa',
      city_id: '620000',
    },
    {
      id: '620200',
      name: 'Huyện Đồng Xuân',
      city_id: '620000',
    },
    {
      id: '200600',
      name: 'Huyện Đầm Hà',
      city_id: '200000',
    },
    {
      id: '201000',
      name: 'Thị Xã đông triều',
      city_id: '200000',
    },
    {
      id: '560400',
      name: 'Thị Xã Điện Bàn',
      city_id: '560000',
    },
    {
      id: '561200',
      name: 'Huyện Đông Giang',
      city_id: '560000',
    },
    {
      id: '560500',
      name: 'Huyện Đại Lộc',
      city_id: '560000',
    },
    {
      id: '560700',
      name: 'Huyện Hiệp Đức',
      city_id: '560000',
    },
    {
      id: '560100',
      name: 'Thành phố Tam Kỳ',
      city_id: '560000',
    },
    {
      id: '520100',
      name: 'Thành phố Đông Hà',
      city_id: '520000',
    },
    {
      id: '520900',
      name: 'Huyện Đa KRông',
      city_id: '520000',
    },
    {
      id: '951100',
      name: 'Huyện Trần Đề',
      city_id: '950000',
    },
    {
      id: '410400',
      name: 'Huyện Đông Hưng',
      city_id: '410000',
    },
    {
      id: '861000',
      name: 'Huyện Tân Phú Đông',
      city_id: '860000',
    },
    {
      id: '442000',
      name: 'Huyện Đông Sơn',
      city_id: '440000',
    },
    {
      id: '250300',
      name: 'Huyện Định Hóa',
      city_id: '250000',
    },
    {
      id: '250700',
      name: 'Huyện Đồng Hỷ',
      city_id: '250000',
    },
    {
      id: '250600',
      name: 'Huyện Đại Từ',
      city_id: '250000',
    },
    {
      id: '280900',
      name: 'Huyện Tam Đảo',
      city_id: '280000',
    },
    {
      id: '790500',
      name: 'Huyện đảo Côn Đảo',
      city_id: '790000',
    },
    {
      id: '102100',
      name: 'Huyện Chương Mỹ',
      city_id: '100000',
    },
    {
      id: '880200',
      name: 'Thành phố Châu Đốc',
      city_id: '880000',
    },
    {
      id: '850100',
      name: 'Thành phố Tân An',
      city_id: '850000',
    },
    {
      id: '820800',
      name: 'Thành Phố Tân Uyên',
      city_id: '820000',
    },
    {
      id: '870400',
      name: 'Huyện Hồng Ngự',
      city_id: '870000',
    },
    {
      id: '860400',
      name: 'Huyện Cai Lậy',
      city_id: '860000',
    },
    {
      id: '831100',
      name: 'Huyện Phú Riềng',
      city_id: '830000',
    },
    {
      id: '970700',
      name: 'Huyện Ngọc Hiển',
      city_id: '970000',
    },
    {
      id: '580900',
      name: 'Huyện Tu Mơ Rông',
      city_id: '580000',
    },
    {
      id: '700300',
      name: 'Quận 3',
      city_id: '700000',
    },
    {
      id: '910800',
      name: 'Huyện Long Mỹ',
      city_id: '910000',
    },
    {
      id: '301300',
      name: 'Thị xã Kỳ Anh',
      city_id: '480000',
    },
    {
      id: '78706',
      name: 'Thị xã Phú Mỹ',
      city_id: '790000',
    },
    {
      id: '16612',
      name: 'Thị Xã Nghi Sơn',
      city_id: '440000',
    },
    {
      id: '720300',
      name: 'Thành Phố Thủ Đức',
      city_id: '700000',
    },
    {
      id: '943900',
      name: 'Huyện Duyên Hải',
      city_id: '940000',
    },
  ];

  static wards = [
    {
      id: '8955',
      name: 'Phường bến nghé',
      district_id: '700100',
    },
    {
      id: '8956',
      name: 'Phường nguyễn thái bình',
      district_id: '700100',
    },
    {
      id: '8957',
      name: 'Phường nguyễn cư trinh',
      district_id: '700100',
    },
    {
      id: '8958',
      name: 'Phường tân định',
      district_id: '700100',
    },
    {
      id: '8960',
      name: 'Phường bến thành',
      district_id: '700100',
    },
    {
      id: '8961',
      name: 'Phường phạm ngũ lão',
      district_id: '700100',
    },
    {
      id: '8962',
      name: 'Phường cô giang',
      district_id: '700100',
    },
    {
      id: '8963',
      name: 'Phường cầu ông lãnh',
      district_id: '700100',
    },
    {
      id: '8964',
      name: 'Phường cầu kho',
      district_id: '700100',
    },
    {
      id: '12109',
      name: 'Phường đa kao',
      district_id: '700100',
    },
    {
      id: '9142',
      name: 'Phường 1',
      district_id: '701000',
    },
    {
      id: '9143',
      name: 'Phường 2',
      district_id: '701000',
    },
    {
      id: '9144',
      name: 'Phường 3',
      district_id: '701000',
    },
    {
      id: '9145',
      name: 'Phường 4',
      district_id: '701000',
    },
    {
      id: '9146',
      name: 'Phường 5',
      district_id: '701000',
    },
    {
      id: '9147',
      name: 'Phường 6',
      district_id: '701000',
    },
    {
      id: '9148',
      name: 'Phường 7',
      district_id: '701000',
    },
    {
      id: '9149',
      name: 'Phường 8',
      district_id: '701000',
    },
    {
      id: '9150',
      name: 'Phường 9',
      district_id: '701000',
    },
    {
      id: '9151',
      name: 'Phường 10',
      district_id: '701000',
    },
    {
      id: '9152',
      name: 'Phường 11',
      district_id: '701000',
    },
    {
      id: '9153',
      name: 'Phường 12',
      district_id: '701000',
    },
    {
      id: '9154',
      name: 'Phường 13',
      district_id: '701000',
    },
    {
      id: '9155',
      name: 'Phường 14',
      district_id: '701000',
    },
    {
      id: '9156',
      name: 'Phường 15',
      district_id: '701000',
    },
    {
      id: '9218',
      name: 'Phường 9',
      district_id: '700400',
    },
    {
      id: '9219',
      name: 'Phường 8',
      district_id: '700400',
    },
    {
      id: '9220',
      name: 'Phường 10',
      district_id: '700400',
    },
    {
      id: '9221',
      name: 'Phường 1',
      district_id: '700400',
    },
    {
      id: '9222',
      name: 'Phường 12',
      district_id: '700400',
    },
    {
      id: '9223',
      name: 'Phường 2',
      district_id: '700400',
    },
    {
      id: '9224',
      name: 'Phường 3',
      district_id: '700400',
    },
    {
      id: '9225',
      name: 'Phường 4',
      district_id: '700400',
    },
    {
      id: '9226',
      name: 'Phường 5',
      district_id: '700400',
    },
    {
      id: '9227',
      name: 'Phường 6',
      district_id: '700400',
    },
    {
      id: '9228',
      name: 'Phường 18',
      district_id: '700400',
    },
    {
      id: '9229',
      name: 'Phường 14',
      district_id: '700400',
    },
    {
      id: '9230',
      name: 'Phường 15',
      district_id: '700400',
    },
    {
      id: '9231',
      name: 'Phường 13',
      district_id: '700400',
    },
    {
      id: '9232',
      name: 'Phường 16',
      district_id: '700400',
    },
    {
      id: '9187',
      name: 'Phường  1',
      district_id: '700500',
    },
    {
      id: '9188',
      name: 'Phường 2',
      district_id: '700500',
    },
    {
      id: '9189',
      name: 'Phường 3',
      district_id: '700500',
    },
    {
      id: '9190',
      name: 'Phường 4',
      district_id: '700500',
    },
    {
      id: '9191',
      name: 'Phường 5',
      district_id: '700500',
    },
    {
      id: '9192',
      name: 'Phường 6',
      district_id: '700500',
    },
    {
      id: '9193',
      name: 'Phường 7',
      district_id: '700500',
    },
    {
      id: '9194',
      name: 'Phường 8',
      district_id: '700500',
    },
    {
      id: '9195',
      name: 'Phường 9',
      district_id: '700500',
    },
    {
      id: '9196',
      name: 'Phường 10',
      district_id: '700500',
    },
    {
      id: '9197',
      name: 'Phường 11',
      district_id: '700500',
    },
    {
      id: '9198',
      name: 'Phường 12',
      district_id: '700500',
    },
    {
      id: '9199',
      name: 'Phường 13',
      district_id: '700500',
    },
    {
      id: '9200',
      name: 'Phường 14',
      district_id: '700500',
    },
    {
      id: '9201',
      name: 'Phường 15',
      district_id: '700500',
    },
    {
      id: '7294',
      name: 'Phường khuê trung',
      district_id: '550700',
    },
    {
      id: '7295',
      name: 'Phường hòa thọ đông',
      district_id: '550700',
    },
    {
      id: '7296',
      name: 'Phường hòa thọ tây',
      district_id: '550700',
    },
    {
      id: '7297',
      name: 'Phường hòa phát',
      district_id: '550700',
    },
    {
      id: '7298',
      name: 'Phường hòa xuân',
      district_id: '550700',
    },
    {
      id: '7299',
      name: 'Phường hòa an',
      district_id: '550700',
    },
    {
      id: '7241',
      name: 'Phường hòa cường nam',
      district_id: '550100',
    },
    {
      id: '7242',
      name: 'Phường Hải Châu 1',
      district_id: '550100',
    },
    {
      id: '7243',
      name: 'Phường hải châu 2',
      district_id: '550100',
    },
    {
      id: '7244',
      name: 'Phường thạch thang',
      district_id: '550100',
    },
    {
      id: '7245',
      name: 'Phường thanh bình',
      district_id: '550100',
    },
    {
      id: '7246',
      name: 'Phường thuận phước',
      district_id: '550100',
    },
    {
      id: '7247',
      name: 'Phường hòa thuận đông',
      district_id: '550100',
    },
    {
      id: '7248',
      name: 'Phường hòa thuận tây',
      district_id: '550100',
    },
    {
      id: '7249',
      name: 'Phường nam dương',
      district_id: '550100',
    },
    {
      id: '7250',
      name: 'Phường phước ninh',
      district_id: '550100',
    },
    {
      id: '7251',
      name: 'Phường bình thuận',
      district_id: '550100',
    },
    {
      id: '7252',
      name: 'Phường bình hiên',
      district_id: '550100',
    },
    {
      id: '7253',
      name: 'Phường hòa cường bắc',
      district_id: '550100',
    },
    {
      id: '7273',
      name: 'Phường hòa khánh bắc',
      district_id: '550500',
    },
    {
      id: '7274',
      name: 'Phường hòa minh',
      district_id: '550500',
    },
    {
      id: '7275',
      name: 'Phường hòa hiệp nam',
      district_id: '550500',
    },
    {
      id: '7276',
      name: 'Phường hòa hiệp bắc',
      district_id: '550500',
    },
    {
      id: '7277',
      name: 'Phường hòa khánh nam',
      district_id: '550500',
    },
    {
      id: '7278',
      name: 'Phường thanh khê tây',
      district_id: '550500',
    },
    {
      id: '7290',
      name: 'Phường mỹ an',
      district_id: '550400',
    },
    {
      id: '7291',
      name: 'Phường khuê mỹ',
      district_id: '550400',
    },
    {
      id: '7292',
      name: 'Phường hòa quý',
      district_id: '550400',
    },
    {
      id: '7293',
      name: 'Phường hòa hải',
      district_id: '550400',
    },
    {
      id: '7254',
      name: 'Phường nại hiên đông',
      district_id: '550300',
    },
    {
      id: '7255',
      name: 'Phường an hải bắc',
      district_id: '550300',
    },
    {
      id: '7256',
      name: 'Phường an hải tây',
      district_id: '550300',
    },
    {
      id: '7257',
      name: 'Phường mân thái',
      district_id: '550300',
    },
    {
      id: '7258',
      name: 'Phường phước mỹ',
      district_id: '550300',
    },
    {
      id: '7259',
      name: 'Phường an hải đông',
      district_id: '550300',
    },
    {
      id: '7260',
      name: 'Phường thọ quang',
      district_id: '550300',
    },
    {
      id: '7261',
      name: 'Phường hòa khê',
      district_id: '550200',
    },
    {
      id: '7262',
      name: 'Phường thanh khê đông',
      district_id: '550200',
    },
    {
      id: '7263',
      name: 'Phường thanh khê tây',
      district_id: '550200',
    },
    {
      id: '7264',
      name: 'Phường an khê',
      district_id: '550200',
    },
    {
      id: '7265',
      name: 'Phường chính gián',
      district_id: '550200',
    },
    {
      id: '7266',
      name: 'Phường tam thuận',
      district_id: '550200',
    },
    {
      id: '7267',
      name: 'Phường tân chính',
      district_id: '550200',
    },
    {
      id: '7268',
      name: 'Phường thạc gián',
      district_id: '550200',
    },
    {
      id: '7269',
      name: 'Phường vĩnh trung',
      district_id: '550200',
    },
    {
      id: '7270',
      name: 'Phường xuân hà',
      district_id: '550200',
    },
    {
      id: '7279',
      name: 'Xã hòa liên',
      district_id: '550600',
    },
    {
      id: '7280',
      name: 'Xã hòa sơn',
      district_id: '550600',
    },
    {
      id: '7281',
      name: 'Xã hòa ninh',
      district_id: '550600',
    },
    {
      id: '7282',
      name: 'Xã hòa bắc',
      district_id: '550600',
    },
    {
      id: '7283',
      name: 'Xã hòa phong',
      district_id: '550600',
    },
    {
      id: '7284',
      name: 'Xã hòa phú',
      district_id: '550600',
    },
    {
      id: '7285',
      name: 'Xã hòa châu',
      district_id: '550600',
    },
    {
      id: '7286',
      name: 'Xã hòa khương',
      district_id: '550600',
    },
    {
      id: '7287',
      name: 'Xã hòa phước',
      district_id: '550600',
    },
    {
      id: '7288',
      name: 'Xã hòa tiến',
      district_id: '550600',
    },
    {
      id: '7289',
      name: 'Xã hòa nhơn',
      district_id: '550600',
    },
    {
      id: '20',
      name: 'Phường trương định',
      district_id: '100300',
    },
    {
      id: '23',
      name: 'Phường minh khai',
      district_id: '100300',
    },
    {
      id: '24',
      name: 'Phường thanh lương',
      district_id: '100300',
    },
    {
      id: '25',
      name: 'Phường bách khoa',
      district_id: '100300',
    },
    {
      id: '26',
      name: 'Phường bạch mai',
      district_id: '100300',
    },
    {
      id: '27',
      name: 'Phường cầu dền',
      district_id: '100300',
    },
    {
      id: '28',
      name: 'Phường thanh nhàn',
      district_id: '100300',
    },
    {
      id: '29',
      name: 'Phường đồng tâm',
      district_id: '100300',
    },
    {
      id: '30',
      name: 'Phường quỳnh mai',
      district_id: '100300',
    },
    {
      id: '31',
      name: 'Phường bạch đằng',
      district_id: '100300',
    },
    {
      id: '32',
      name: 'Phường vĩnh tuy',
      district_id: '100300',
    },
    {
      id: '33',
      name: 'Phường Đống Mác',
      district_id: '100300',
    },
    {
      id: '34',
      name: 'Phường phạm đình hổ',
      district_id: '100300',
    },
    {
      id: '35',
      name: 'Phường nguyễn du',
      district_id: '100300',
    },
    {
      id: '37',
      name: 'Phường lê đại hành',
      district_id: '100300',
    },
    {
      id: '39',
      name: 'Phường phố huế',
      district_id: '100300',
    },
    {
      id: '40',
      name: 'Phường đồng nhân',
      district_id: '100300',
    },
    {
      id: '11679',
      name: 'Phường quỳnh lôi',
      district_id: '100300',
    },
    {
      id: '9173',
      name: 'Phường 4',
      district_id: '700600',
    },
    {
      id: '9174',
      name: 'Phường 5',
      district_id: '700600',
    },
    {
      id: '9175',
      name: 'Phường 6',
      district_id: '700600',
    },
    {
      id: '9176',
      name: 'Phường 7',
      district_id: '700600',
    },
    {
      id: '9177',
      name: 'Phường 8',
      district_id: '700600',
    },
    {
      id: '9178',
      name: 'Phường 9',
      district_id: '700600',
    },
    {
      id: '9179',
      name: 'Phường 10',
      district_id: '700600',
    },
    {
      id: '9180',
      name: 'Phường 11',
      district_id: '700600',
    },
    {
      id: '9181',
      name: 'Phường 12',
      district_id: '700600',
    },
    {
      id: '9182',
      name: 'Phường 13',
      district_id: '700600',
    },
    {
      id: '9183',
      name: 'Phường 14',
      district_id: '700600',
    },
    {
      id: '9184',
      name: 'Phường 1',
      district_id: '700600',
    },
    {
      id: '9185',
      name: 'Phường 2',
      district_id: '700600',
    },
    {
      id: '9186',
      name: 'Phường 3',
      district_id: '700600',
    },
    {
      id: '9233',
      name: 'Phường tân phong',
      district_id: '700700',
    },
    {
      id: '9234',
      name: 'Phường Tân Phú',
      district_id: '700700',
    },
    {
      id: '9235',
      name: 'Phường tân hưng',
      district_id: '700700',
    },
    {
      id: '9236',
      name: 'Phường tân kiểng',
      district_id: '700700',
    },
    {
      id: '9237',
      name: 'Phường tân quy',
      district_id: '700700',
    },
    {
      id: '9238',
      name: 'Phường tân thuận đông',
      district_id: '700700',
    },
    {
      id: '9239',
      name: 'Phường tân thuận tây',
      district_id: '700700',
    },
    {
      id: '9240',
      name: 'Phường phú thuận',
      district_id: '700700',
    },
    {
      id: '9241',
      name: 'Phường bình thuận',
      district_id: '700700',
    },
    {
      id: '9242',
      name: 'Phường phú mỹ',
      district_id: '700700',
    },
    {
      id: '9202',
      name: 'Phường 1',
      district_id: '700800',
    },
    {
      id: '9203',
      name: 'Phường 2',
      district_id: '700800',
    },
    {
      id: '9204',
      name: 'Phường 3',
      district_id: '700800',
    },
    {
      id: '9205',
      name: 'Phường 4',
      district_id: '700800',
    },
    {
      id: '9206',
      name: 'Phường 5',
      district_id: '700800',
    },
    {
      id: '9207',
      name: 'Phường 6',
      district_id: '700800',
    },
    {
      id: '9208',
      name: 'Phường 7',
      district_id: '700800',
    },
    {
      id: '9209',
      name: 'Phường 8',
      district_id: '700800',
    },
    {
      id: '9210',
      name: 'Phường 9',
      district_id: '700800',
    },
    {
      id: '9211',
      name: 'Phường 10',
      district_id: '700800',
    },
    {
      id: '9212',
      name: 'Phường 11',
      district_id: '700800',
    },
    {
      id: '9213',
      name: 'Phường 12',
      district_id: '700800',
    },
    {
      id: '9214',
      name: 'Phường 13',
      district_id: '700800',
    },
    {
      id: '9215',
      name: 'Phường 14',
      district_id: '700800',
    },
    {
      id: '9216',
      name: 'Phường 15',
      district_id: '700800',
    },
    {
      id: '9217',
      name: 'Phường 16',
      district_id: '700800',
    },
    {
      id: '9157',
      name: 'Phường 3',
      district_id: '701100',
    },
    {
      id: '9158',
      name: 'Phường 4',
      district_id: '701100',
    },
    {
      id: '9159',
      name: 'Phường 5',
      district_id: '701100',
    },
    {
      id: '9160',
      name: 'Phường 6',
      district_id: '701100',
    },
    {
      id: '9161',
      name: 'Phường 7',
      district_id: '701100',
    },
    {
      id: '9162',
      name: 'Phường 8',
      district_id: '701100',
    },
    {
      id: '9163',
      name: 'Phường 9',
      district_id: '701100',
    },
    {
      id: '9164',
      name: 'Phường 10',
      district_id: '701100',
    },
    {
      id: '9165',
      name: 'Phường 11',
      district_id: '701100',
    },
    {
      id: '9166',
      name: 'Phường 12',
      district_id: '701100',
    },
    {
      id: '9167',
      name: 'Phường 13',
      district_id: '701100',
    },
    {
      id: '9168',
      name: 'Phường 14',
      district_id: '701100',
    },
    {
      id: '9169',
      name: 'Phường 16',
      district_id: '701100',
    },
    {
      id: '9170',
      name: 'Phường 15',
      district_id: '701100',
    },
    {
      id: '9171',
      name: 'Phường 1',
      district_id: '701100',
    },
    {
      id: '9172',
      name: 'Phường 2',
      district_id: '701100',
    },
    {
      id: '9065',
      name: 'Phường thạnh xuân',
      district_id: '701200',
    },
    {
      id: '9066',
      name: 'Phường an phú đông',
      district_id: '701200',
    },
    {
      id: '9067',
      name: 'Phường hiệp thành',
      district_id: '701200',
    },
    {
      id: '9068',
      name: 'Phường trung mỹ tây',
      district_id: '701200',
    },
    {
      id: '9069',
      name: 'Phường tân hưng thuận',
      district_id: '701200',
    },
    {
      id: '9070',
      name: 'Phường tân chánh hiệp',
      district_id: '701200',
    },
    {
      id: '9071',
      name: 'Phường tân thới nhất',
      district_id: '701200',
    },
    {
      id: '9072',
      name: 'Phường Đông Hưng Thuận',
      district_id: '701200',
    },
    {
      id: '9073',
      name: 'Phường thới an',
      district_id: '701200',
    },
    {
      id: '9074',
      name: 'Phường thạnh lộc',
      district_id: '701200',
    },
    {
      id: '9075',
      name: 'Phường tân thới hiệp',
      district_id: '701200',
    },
    {
      id: '10629',
      name: 'Xã phú hội',
      district_id: '880300',
    },
    {
      id: '10630',
      name: 'Xã phước hưng',
      district_id: '880300',
    },
    {
      id: '10631',
      name: 'Xã vĩnh lộc',
      district_id: '880300',
    },
    {
      id: '10632',
      name: 'Xã vĩnh hậu',
      district_id: '880300',
    },
    {
      id: '10633',
      name: 'Xã vĩnh trường',
      district_id: '880300',
    },
    {
      id: '10634',
      name: 'Xã vĩnh hội đông',
      district_id: '880300',
    },
    {
      id: '10635',
      name: 'Xã đa phước',
      district_id: '880300',
    },
    {
      id: '10636',
      name: 'Thị trấn an phú',
      district_id: '880300',
    },
    {
      id: '10637',
      name: 'Thị trấn long bình',
      district_id: '880300',
    },
    {
      id: '10638',
      name: 'Xã khánh an',
      district_id: '880300',
    },
    {
      id: '10639',
      name: 'Xã khánh bình',
      district_id: '880300',
    },
    {
      id: '10640',
      name: 'Xã quốc thái',
      district_id: '880300',
    },
    {
      id: '10641',
      name: 'Xã nhơn hội',
      district_id: '880300',
    },
    {
      id: '10642',
      name: 'Xã phú hữu',
      district_id: '880300',
    },
    {
      id: '10595',
      name: 'Xã mỹ đức',
      district_id: '880800',
    },
    {
      id: '10596',
      name: 'Thị trấn cái dầu',
      district_id: '880800',
    },
    {
      id: '10597',
      name: 'Xã khánh hoà',
      district_id: '880800',
    },
    {
      id: '10598',
      name: 'Xã mỹ phú',
      district_id: '880800',
    },
    {
      id: '10599',
      name: 'Xã ô long vỹ',
      district_id: '880800',
    },
    {
      id: '10600',
      name: 'Xã vĩnh thạnh trung',
      district_id: '880800',
    },
    {
      id: '10601',
      name: 'Xã thạnh mỹ tây',
      district_id: '880800',
    },
    {
      id: '10602',
      name: 'Xã bình long',
      district_id: '880800',
    },
    {
      id: '10603',
      name: 'Xã bình mỹ',
      district_id: '880800',
    },
    {
      id: '10604',
      name: 'Xã bình thuỷ',
      district_id: '880800',
    },
    {
      id: '10605',
      name: 'Xã bình chánh',
      district_id: '880800',
    },
    {
      id: '10606',
      name: 'Đào Hửu Cảnh',
      district_id: '880800',
    },
    {
      id: '10607',
      name: 'Xã bình phú',
      district_id: '880800',
    },
    {
      id: '12408',
      name: 'Xã đào hữu cảnh',
      district_id: '880800',
    },
    {
      id: '10564',
      name: 'Thị trấn an châu',
      district_id: '881000',
    },
    {
      id: '10565',
      name: 'Xã an hoà',
      district_id: '881000',
    },
    {
      id: '10566',
      name: 'Xã cần đăng',
      district_id: '881000',
    },
    {
      id: '10567',
      name: 'Xã vĩnh hanh',
      district_id: '881000',
    },
    {
      id: '10568',
      name: 'Xã bình thạnh',
      district_id: '881000',
    },
    {
      id: '10569',
      name: 'Xã vĩnh bình',
      district_id: '881000',
    },
    {
      id: '10570',
      name: 'Xã Bình Hoà',
      district_id: '881000',
    },
    {
      id: '10571',
      name: 'Xã vình an',
      district_id: '881000',
    },
    {
      id: '10572',
      name: 'Xã hoà bình thạnh',
      district_id: '881000',
    },
    {
      id: '10573',
      name: 'Xã vĩnh lợi',
      district_id: '881000',
    },
    {
      id: '10574',
      name: 'Xã vĩnh nhuận',
      district_id: '881000',
    },
    {
      id: '10575',
      name: 'Xã tân phú',
      district_id: '881000',
    },
    {
      id: '10576',
      name: 'Xã vĩnh thành',
      district_id: '881000',
    },
    {
      id: '10546',
      name: 'Xã bình phước xuân',
      district_id: '880900',
    },
    {
      id: '10547',
      name: 'Xã an thạnh trung',
      district_id: '880900',
    },
    {
      id: '10548',
      name: 'Xã hội an',
      district_id: '880900',
    },
    {
      id: '10549',
      name: 'Xã hoà bình',
      district_id: '880900',
    },
    {
      id: '10550',
      name: 'Xã hoà an',
      district_id: '880900',
    },
    {
      id: '10551',
      name: 'Thị trấn chợ mới',
      district_id: '880900',
    },
    {
      id: '10552',
      name: 'Thị trấn mỹ luông',
      district_id: '880900',
    },
    {
      id: '10553',
      name: 'Xã kiến an',
      district_id: '880900',
    },
    {
      id: '10554',
      name: 'Xã mỹ hội đông',
      district_id: '880900',
    },
    {
      id: '10555',
      name: 'Xã long điền a',
      district_id: '880900',
    },
    {
      id: '10556',
      name: 'Xã tấn mỹ',
      district_id: '880900',
    },
    {
      id: '10557',
      name: 'Xã long điền b',
      district_id: '880900',
    },
    {
      id: '10558',
      name: 'Xã kiến thành',
      district_id: '880900',
    },
    {
      id: '10559',
      name: 'Xã mỹ hiệp',
      district_id: '880900',
    },
    {
      id: '10560',
      name: 'Xã mỹ an',
      district_id: '880900',
    },
    {
      id: '10561',
      name: 'Xã nhơn mỹ',
      district_id: '880900',
    },
    {
      id: '10562',
      name: 'Xã long giang',
      district_id: '880900',
    },
    {
      id: '10563',
      name: 'Xã long kiến',
      district_id: '880900',
    },
    {
      id: '10533',
      name: 'Phường mỹ long',
      district_id: '880100',
    },
    {
      id: '10534',
      name: 'Phường mỹ bình',
      district_id: '880100',
    },
    {
      id: '10535',
      name: 'Phường mỹ phước',
      district_id: '880100',
    },
    {
      id: '10536',
      name: 'Phường mỹ quý',
      district_id: '880100',
    },
    {
      id: '10537',
      name: 'Phường mỹ thới',
      district_id: '880100',
    },
    {
      id: '10538',
      name: 'Phường mỹ thạnh',
      district_id: '880100',
    },
    {
      id: '10539',
      name: 'Phường mỹ hoà',
      district_id: '880100',
    },
    {
      id: '10540',
      name: 'Phường đông xuyên',
      district_id: '880100',
    },
    {
      id: '10541',
      name: 'Phường mỹ xuyên',
      district_id: '880100',
    },
    {
      id: '10542',
      name: 'Phường bình khánh',
      district_id: '880100',
    },
    {
      id: '10543',
      name: 'Phường bình đức',
      district_id: '880100',
    },
    {
      id: '10544',
      name: 'Xã mỹ khánh',
      district_id: '880100',
    },
    {
      id: '10545',
      name: 'Xã mỹ hoà hưng',
      district_id: '880100',
    },
    {
      id: '10615',
      name: 'Xã phú lộc',
      district_id: '880400',
    },
    {
      id: '10616',
      name: 'Xã vĩnh xương',
      district_id: '880400',
    },
    {
      id: '10617',
      name: 'Xã vĩnh hoà',
      district_id: '880400',
    },
    {
      id: '10618',
      name: 'Xã tân thạnh',
      district_id: '880400',
    },
    {
      id: '10619',
      name: 'Xã tân an',
      district_id: '880400',
    },
    {
      id: '10620',
      name: 'Xã long an',
      district_id: '880400',
    },
    {
      id: '10621',
      name: 'Phường long phú',
      district_id: '880400',
    },
    {
      id: '10622',
      name: 'Xã châu phong',
      district_id: '880400',
    },
    {
      id: '10623',
      name: 'Xã phú vĩnh',
      district_id: '880400',
    },
    {
      id: '10624',
      name: 'Xã lê chánh',
      district_id: '880400',
    },
    {
      id: '10625',
      name: 'Phường long sơn',
      district_id: '880400',
    },
    {
      id: '10626',
      name: 'Phường long châu',
      district_id: '880400',
    },
    {
      id: '10627',
      name: 'Phường long thạnh',
      district_id: '880400',
    },
    {
      id: '10628',
      name: 'Phường long hưng',
      district_id: '880400',
    },
    {
      id: '10672',
      name: 'Xã định thành',
      district_id: '881100',
    },
    {
      id: '10673',
      name: 'Xã mỹ phú đông',
      district_id: '881100',
    },
    {
      id: '10674',
      name: 'Thị trấn núi sập',
      district_id: '881100',
    },
    {
      id: '10675',
      name: 'Thị Trấn Phú Hòa',
      district_id: '881100',
    },
    {
      id: '10676',
      name: 'Thị trấn óc eo',
      district_id: '881100',
    },
    {
      id: '10677',
      name: 'Xã tây phú',
      district_id: '881100',
    },
    {
      id: '10678',
      name: 'Xã vĩnh trạch',
      district_id: '881100',
    },
    {
      id: '10679',
      name: 'Xã phú thuận',
      district_id: '881100',
    },
    {
      id: '10680',
      name: 'Xã vĩnh chánh',
      district_id: '881100',
    },
    {
      id: '10681',
      name: 'Xã định mỹ',
      district_id: '881100',
    },
    {
      id: '10682',
      name: 'Xã vọng đông',
      district_id: '881100',
    },
    {
      id: '10683',
      name: 'Xã vĩnh khánh',
      district_id: '881100',
    },
    {
      id: '10684',
      name: 'Xã thoại giang',
      district_id: '881100',
    },
    {
      id: '10685',
      name: 'Xã bình thành',
      district_id: '881100',
    },
    {
      id: '10686',
      name: 'Xã vọng thê',
      district_id: '881100',
    },
    {
      id: '10687',
      name: 'Xã vĩnh phú',
      district_id: '881100',
    },
    {
      id: '10688',
      name: 'Xã an bình',
      district_id: '881100',
    },
    {
      id: '10689',
      name: 'Xã định thành',
      district_id: '881100',
    },
    {
      id: '10643',
      name: 'Thị trấn nhà bàn',
      district_id: '880600',
    },
    {
      id: '10644',
      name: 'Thị trấn chi lăng',
      district_id: '880600',
    },
    {
      id: '10645',
      name: 'Thị trấn tịnh biên',
      district_id: '880600',
    },
    {
      id: '10646',
      name: 'Xã núi voi',
      district_id: '880600',
    },
    {
      id: '10647',
      name: 'Xã nhơn hưng',
      district_id: '880600',
    },
    {
      id: '10648',
      name: 'Xã an phú',
      district_id: '880600',
    },
    {
      id: '10649',
      name: 'Xã thới sơn',
      district_id: '880600',
    },
    {
      id: '10650',
      name: 'Xã văn giáo',
      district_id: '880600',
    },
    {
      id: '10651',
      name: 'Xã an cư',
      district_id: '880600',
    },
    {
      id: '10652',
      name: 'Xã vĩnh trung',
      district_id: '880600',
    },
    {
      id: '10653',
      name: 'Xã tân lợi',
      district_id: '880600',
    },
    {
      id: '10654',
      name: 'Xã an hảo',
      district_id: '880600',
    },
    {
      id: '10655',
      name: 'Xã tân lập',
      district_id: '880600',
    },
    {
      id: '10656',
      name: 'Xã an nông',
      district_id: '880600',
    },
    {
      id: '12407',
      name: 'Thị trấn nhà bàng',
      district_id: '880600',
    },
    {
      id: '10657',
      name: 'Thị trấn tri tôn',
      district_id: '880700',
    },
    {
      id: '10658',
      name: 'Thị trấn ba chúc',
      district_id: '880700',
    },
    {
      id: '10659',
      name: 'Xã lạc qưới',
      district_id: '880700',
    },
    {
      id: '10660',
      name: 'Xã lê trì',
      district_id: '880700',
    },
    {
      id: '10661',
      name: 'Xã vĩnh gia',
      district_id: '880700',
    },
    {
      id: '10662',
      name: 'Xã vĩnh phước',
      district_id: '880700',
    },
    {
      id: '10663',
      name: 'Xã châu lăng',
      district_id: '880700',
    },
    {
      id: '10664',
      name: 'Xã lương phi',
      district_id: '880700',
    },
    {
      id: '10665',
      name: 'Xã lương an trà',
      district_id: '880700',
    },
    {
      id: '10666',
      name: 'Xã tà đảnh',
      district_id: '880700',
    },
    {
      id: '10667',
      name: 'Xã núi tô',
      district_id: '880700',
    },
    {
      id: '10668',
      name: 'Xã an tức',
      district_id: '880700',
    },
    {
      id: '10669',
      name: 'Xã cô tô',
      district_id: '880700',
    },
    {
      id: '10670',
      name: 'Xã tân tuyến',
      district_id: '880700',
    },
    {
      id: '10671',
      name: 'Xã ô lâm',
      district_id: '880700',
    },
    {
      id: '9339',
      name: 'Xã cù bị',
      district_id: '790700',
    },
    {
      id: '9340',
      name: 'Xã xà bang',
      district_id: '790700',
    },
    {
      id: '9341',
      name: 'Xã quảng thành',
      district_id: '790700',
    },
    {
      id: '9342',
      name: 'Xã láng lớn',
      district_id: '790700',
    },
    {
      id: '9343',
      name: 'Xã bầu chinh',
      district_id: '790700',
    },
    {
      id: '9344',
      name: 'Xã bình ba',
      district_id: '790700',
    },
    {
      id: '9345',
      name: 'Xã suối nghệ',
      district_id: '790700',
    },
    {
      id: '9346',
      name: 'Xã bình trung',
      district_id: '790700',
    },
    {
      id: '9347',
      name: 'Xã bình giã',
      district_id: '790700',
    },
    {
      id: '9348',
      name: 'Xã xuân sơn',
      district_id: '790700',
    },
    {
      id: '9349',
      name: 'Xã sơn bình',
      district_id: '790700',
    },
    {
      id: '9350',
      name: 'Xã suối rao',
      district_id: '790700',
    },
    {
      id: '9351',
      name: 'Xã đá bạc',
      district_id: '790700',
    },
    {
      id: '9352',
      name: 'Xã nghĩa thành',
      district_id: '790700',
    },
    {
      id: '12200',
      name: 'Thị trấn ngãi giao',
      district_id: '790700',
    },
    {
      id: '12201',
      name: 'Thị Trấn Kim Long',
      district_id: '790700',
    },
    {
      id: '9304',
      name: 'Xã long tân',
      district_id: '790800',
    },
    {
      id: '9305',
      name: 'Xã phước long thọ',
      district_id: '790800',
    },
    {
      id: '9307',
      name: 'Xã láng dài',
      district_id: '790800',
    },
    {
      id: '9308',
      name: 'Xã phước hội',
      district_id: '790800',
    },
    {
      id: '9309',
      name: 'Xã long mỹ',
      district_id: '790800',
    },
    {
      id: '9310',
      name: 'Xã lộc an',
      district_id: '790800',
    },
    {
      id: '9311',
      name: 'Thị trấn phước hải',
      district_id: '790800',
    },
    {
      id: '9312',
      name: 'Thị trấn đất đỏ',
      district_id: '790800',
    },
    {
      id: '9297',
      name: 'Xã an ngãi',
      district_id: '790400',
    },
    {
      id: '9298',
      name: 'Xã tam phước',
      district_id: '790400',
    },
    {
      id: '9299',
      name: 'Xã an nhứt',
      district_id: '790400',
    },
    {
      id: '9300',
      name: 'Xã phước hưng',
      district_id: '790400',
    },
    {
      id: '9301',
      name: 'Xã phước tỉnh',
      district_id: '790400',
    },
    {
      id: '9302',
      name: 'Thị trấn long điền',
      district_id: '790400',
    },
    {
      id: '9303',
      name: 'Thị trấn long hải',
      district_id: '790400',
    },
    {
      id: '9326',
      name: 'Phường long tâm',
      district_id: '790200',
    },
    {
      id: '9327',
      name: 'Phường kim dinh',
      district_id: '790200',
    },
    {
      id: '9328',
      name: 'Phường phước hưng',
      district_id: '790200',
    },
    {
      id: '9329',
      name: 'Xã long phước',
      district_id: '790200',
    },
    {
      id: '9330',
      name: 'Phường phước nguyên',
      district_id: '790200',
    },
    {
      id: '9331',
      name: 'Phường long hương',
      district_id: '790200',
    },
    {
      id: '9332',
      name: 'Phường long toàn',
      district_id: '790200',
    },
    {
      id: '9333',
      name: 'Phường phước hiệp',
      district_id: '790200',
    },
    {
      id: '9334',
      name: 'Phường phước trung',
      district_id: '790200',
    },
    {
      id: '9335',
      name: 'Xã hoà long',
      district_id: '790200',
    },
    {
      id: '9336',
      name: 'Xã tân hưng',
      district_id: '790200',
    },
    {
      id: '9278',
      name: 'Phường 11',
      district_id: '790100',
    },
    {
      id: '9279',
      name: 'Phường 12',
      district_id: '790100',
    },
    {
      id: '9280',
      name: 'Phường 10',
      district_id: '790100',
    },
    {
      id: '9281',
      name: 'Phường 1',
      district_id: '790100',
    },
    {
      id: '9282',
      name: 'Phường 8',
      district_id: '790100',
    },
    {
      id: '9283',
      name: 'Phường nguyễn an ninh',
      district_id: '790100',
    },
    {
      id: '9284',
      name: 'Phường thắng tam',
      district_id: '790100',
    },
    {
      id: '9285',
      name: 'Phường 2',
      district_id: '790100',
    },
    {
      id: '9286',
      name: 'Phường rạch dừa',
      district_id: '790100',
    },
    {
      id: '9287',
      name: 'Phường 9',
      district_id: '790100',
    },
    {
      id: '9288',
      name: 'Phường thắng nhất',
      district_id: '790100',
    },
    {
      id: '9289',
      name: 'Phường 3',
      district_id: '790100',
    },
    {
      id: '9290',
      name: 'Phường 4',
      district_id: '790100',
    },
    {
      id: '9291',
      name: 'Phường 5',
      district_id: '790100',
    },
    {
      id: '9293',
      name: 'Phường 7',
      district_id: '790100',
    },
    {
      id: '9294',
      name: 'Xã long sơn',
      district_id: '790100',
    },
    {
      id: '9295',
      name: 'Phường thắng nhì',
      district_id: '790100',
    },
    {
      id: '9313',
      name: 'Xã phước thuận',
      district_id: '790300',
    },
    {
      id: '9315',
      name: 'Xã phước tân',
      district_id: '790300',
    },
    {
      id: '9316',
      name: 'Xã xuyên mộc',
      district_id: '790300',
    },
    {
      id: '9317',
      name: 'Xã bông trang',
      district_id: '790300',
    },
    {
      id: '9318',
      name: 'Xã bàu lâm',
      district_id: '790300',
    },
    {
      id: '9320',
      name: 'Xã hòa hưng',
      district_id: '790300',
    },
    {
      id: '9321',
      name: 'Xã hòa hiệp',
      district_id: '790300',
    },
    {
      id: '9322',
      name: 'Xã hòa hội',
      district_id: '790300',
    },
    {
      id: '9323',
      name: 'Xã bưng riềng',
      district_id: '790300',
    },
    {
      id: '9324',
      name: 'Xã tân lâm',
      district_id: '790300',
    },
    {
      id: '9325',
      name: 'Xã bình châu',
      district_id: '790300',
    },
    {
      id: '12198',
      name: 'Thị trấn phước bửu',
      district_id: '790300',
    },
    {
      id: '12199',
      name: 'Xã Hòa Bình',
      district_id: '790300',
    },
    {
      id: '1490',
      name: 'Phường ninh xá',
      district_id: '220100',
    },
    {
      id: '1491',
      name: 'Phường tiền an',
      district_id: '220100',
    },
    {
      id: '1492',
      name: 'Phường suối hoa',
      district_id: '220100',
    },
    {
      id: '1493',
      name: 'Phường đại phúc',
      district_id: '220100',
    },
    {
      id: '1494',
      name: 'Phường đáp cầu',
      district_id: '220100',
    },
    {
      id: '1495',
      name: 'Phường kinh bắc',
      district_id: '220100',
    },
    {
      id: '1496',
      name: 'Phường vệ an',
      district_id: '220100',
    },
    {
      id: '1497',
      name: 'Phường vũ ninh',
      district_id: '220100',
    },
    {
      id: '1498',
      name: 'Phường võ cường',
      district_id: '220100',
    },
    {
      id: '1499',
      name: 'Phường thị cầu',
      district_id: '220100',
    },
    {
      id: '1500',
      name: 'Xã kim chân',
      district_id: '220100',
    },
    {
      id: '1501',
      name: 'Phường vân dương',
      district_id: '220100',
    },
    {
      id: '1502',
      name: 'Phường Nam Sơn',
      district_id: '220100',
    },
    {
      id: '1503',
      name: 'Phường hạp lĩnh',
      district_id: '220100',
    },
    {
      id: '1508',
      name: 'Xã hòa long',
      district_id: '220100',
    },
    {
      id: '11756',
      name: 'Phường khắc niệm',
      district_id: '220100',
    },
    {
      id: '11757',
      name: 'Phường khúc xuyên',
      district_id: '220100',
    },
    {
      id: '11758',
      name: 'Phường phong khê',
      district_id: '220100',
    },
    {
      id: '11759',
      name: 'Phường vạn an',
      district_id: '220100',
    },
    {
      id: '1593',
      name: 'Xã thái bảo',
      district_id: '220700',
    },
    {
      id: '1594',
      name: 'Xã đại bái',
      district_id: '220700',
    },
    {
      id: '1595',
      name: 'Thị trấn gia bình',
      district_id: '220700',
    },
    {
      id: '1596',
      name: 'Xã quỳnh phú',
      district_id: '220700',
    },
    {
      id: '1597',
      name: 'Xã đông cứu',
      district_id: '220700',
    },
    {
      id: '1598',
      name: 'Xã lãng ngâm',
      district_id: '220700',
    },
    {
      id: '1599',
      name: 'Xã giang sơn',
      district_id: '220700',
    },
    {
      id: '1600',
      name: 'Xã song giang',
      district_id: '220700',
    },
    {
      id: '1601',
      name: 'Xã xuân lai',
      district_id: '220700',
    },
    {
      id: '1602',
      name: 'Xã nhân thắng',
      district_id: '220700',
    },
    {
      id: '1603',
      name: 'Xã bình dương',
      district_id: '220700',
    },
    {
      id: '1604',
      name: 'Xã cao đức',
      district_id: '220700',
    },
    {
      id: '1605',
      name: 'Xã vạn ninh',
      district_id: '220700',
    },
    {
      id: '1606',
      name: 'Xã đại lai',
      district_id: '220700',
    },
    {
      id: '1571',
      name: 'Xã ngọc xá',
      district_id: '220300',
    },
    {
      id: '1572',
      name: 'Xã phù lương',
      district_id: '220300',
    },
    {
      id: '1573',
      name: 'Xã đức long',
      district_id: '220300',
    },
    {
      id: '1574',
      name: 'Xã châu phong',
      district_id: '220300',
    },
    {
      id: '1575',
      name: 'Xã phù lãng',
      district_id: '220300',
    },
    {
      id: '1576',
      name: 'Xã việt hùng',
      district_id: '220300',
    },
    {
      id: '1577',
      name: 'Xã quế tân',
      district_id: '220300',
    },
    {
      id: '1578',
      name: 'Xã cách bi',
      district_id: '220300',
    },
    {
      id: '1579',
      name: 'Xã đào viên',
      district_id: '220300',
    },
    {
      id: '1580',
      name: 'Xã chi lăng',
      district_id: '220300',
    },
    {
      id: '1581',
      name: 'Xã mộ đạo',
      district_id: '220300',
    },
    {
      id: '1582',
      name: 'Xã yên giả',
      district_id: '220300',
    },
    {
      id: '1583',
      name: 'Xã bồng lai',
      district_id: '220300',
    },
    {
      id: '1584',
      name: 'Xã hán quảng',
      district_id: '220300',
    },
    {
      id: '1585',
      name: 'Xã phương liễu',
      district_id: '220300',
    },
    {
      id: '1586',
      name: 'Xã phượng mao',
      district_id: '220300',
    },
    {
      id: '1587',
      name: 'Thị trấn phố mới',
      district_id: '220300',
    },
    {
      id: '1588',
      name: 'Xã bằng an',
      district_id: '220300',
    },
    {
      id: '1589',
      name: 'Xã nhân hòa',
      district_id: '220300',
    },
    {
      id: '1590',
      name: 'Xã việt thống',
      district_id: '220300',
    },
    {
      id: '1591',
      name: 'Xã đại xuân',
      district_id: '220300',
    },
    {
      id: '1552',
      name: 'Thị trấn hồ',
      district_id: '220600',
    },
    {
      id: '1553',
      name: 'Xã song hồ',
      district_id: '220600',
    },
    {
      id: '1554',
      name: 'Xã gia đông',
      district_id: '220600',
    },
    {
      id: '1555',
      name: 'Xã mão điền',
      district_id: '220600',
    },
    {
      id: '1556',
      name: 'Xã an bình',
      district_id: '220600',
    },
    {
      id: '1557',
      name: 'Xã hoài thượng',
      district_id: '220600',
    },
    {
      id: '1558',
      name: 'Xã đình tổ',
      district_id: '220600',
    },
    {
      id: '1559',
      name: 'Xã đại đồng thành',
      district_id: '220600',
    },
    {
      id: '1560',
      name: 'Xã ninh xá',
      district_id: '220600',
    },
    {
      id: '1561',
      name: 'Xã trạm lộ',
      district_id: '220600',
    },
    {
      id: '1562',
      name: 'Xã nghĩa đạo',
      district_id: '220600',
    },
    {
      id: '1563',
      name: 'Xã nguyệt đức',
      district_id: '220600',
    },
    {
      id: '1564',
      name: 'Xã ngũ thái',
      district_id: '220600',
    },
    {
      id: '1565',
      name: 'Xã trí quả',
      district_id: '220600',
    },
    {
      id: '1566',
      name: 'Xã thanh khương',
      district_id: '220600',
    },
    {
      id: '1567',
      name: 'Xã xuân lâm',
      district_id: '220600',
    },
    {
      id: '1568',
      name: 'Xã hà mãn',
      district_id: '220600',
    },
    {
      id: '1569',
      name: 'Xã song liễu',
      district_id: '220600',
    },
    {
      id: '1523',
      name: 'Xã tri phương',
      district_id: '220400',
    },
    {
      id: '1524',
      name: 'Xã tân chi',
      district_id: '220400',
    },
    {
      id: '1525',
      name: 'Xã lạc vệ',
      district_id: '220400',
    },
    {
      id: '1526',
      name: 'Xã hiên vân',
      district_id: '220400',
    },
    {
      id: '1527',
      name: 'Xã phú lâm',
      district_id: '220400',
    },
    {
      id: '1528',
      name: 'Thị trấn lim',
      district_id: '220400',
    },
    {
      id: '1529',
      name: 'Xã nội duệ',
      district_id: '220400',
    },
    {
      id: '1530',
      name: 'Xã hoàn sơn',
      district_id: '220400',
    },
    {
      id: '1531',
      name: 'Xã đại đồng',
      district_id: '220400',
    },
    {
      id: '1532',
      name: 'Xã liên bão',
      district_id: '220400',
    },
    {
      id: '1533',
      name: 'Xã việt đoàn',
      district_id: '220400',
    },
    {
      id: '1534',
      name: 'Xã phật tích',
      district_id: '220400',
    },
    {
      id: '1535',
      name: 'Xã cảnh hưng',
      district_id: '220400',
    },
    {
      id: '1536',
      name: 'Xã minh đạo',
      district_id: '220400',
    },
    {
      id: '1538',
      name: 'Phường Đình Bảng',
      district_id: '220500',
    },
    {
      id: '1539',
      name: 'Phường Châu Khê',
      district_id: '220500',
    },
    {
      id: '1540',
      name: 'Phường Đồng Nguyên',
      district_id: '220500',
    },
    {
      id: '1541',
      name: 'Phường Tân Hồng',
      district_id: '220500',
    },
    {
      id: '1542',
      name: 'Xã Hương Mạc',
      district_id: '220500',
    },
    {
      id: '1543',
      name: 'Xã Phù Khê',
      district_id: '220500',
    },
    {
      id: '1544',
      name: 'Xã Tam Sơn',
      district_id: '220500',
    },
    {
      id: '1545',
      name: 'Xã Tương Giang',
      district_id: '220500',
    },
    {
      id: '1546',
      name: 'Phường Đông Ngàn',
      district_id: '220500',
    },
    {
      id: '1547',
      name: 'Xã Phù Chẩn',
      district_id: '220500',
    },
    {
      id: '1548',
      name: 'Phường Trang Hạ',
      district_id: '220500',
    },
    {
      id: '1549',
      name: 'Phường Đồng Kỵ',
      district_id: '220500',
    },
    {
      id: '1509',
      name: 'Xã yên trung',
      district_id: '220200',
    },
    {
      id: '1510',
      name: 'Xã thụy hòa',
      district_id: '220200',
    },
    {
      id: '1511',
      name: 'Xã dũng liệt',
      district_id: '220200',
    },
    {
      id: '1512',
      name: 'Xã đông tiến',
      district_id: '220200',
    },
    {
      id: '1513',
      name: 'Thị trấn chờ',
      district_id: '220200',
    },
    {
      id: '1514',
      name: 'Xã văn môn',
      district_id: '220200',
    },
    {
      id: '1515',
      name: 'Xã đông thọ',
      district_id: '220200',
    },
    {
      id: '1516',
      name: 'Xã yên phụ',
      district_id: '220200',
    },
    {
      id: '1517',
      name: 'Xã hòa tiến',
      district_id: '220200',
    },
    {
      id: '1518',
      name: 'Xã tam giang',
      district_id: '220200',
    },
    {
      id: '1519',
      name: 'Xã trung nghĩa',
      district_id: '220200',
    },
    {
      id: '1520',
      name: 'Xã long châu',
      district_id: '220200',
    },
    {
      id: '1521',
      name: 'Xã đông phong',
      district_id: '220200',
    },
    {
      id: '1522',
      name: 'Xã tam đa',
      district_id: '220200',
    },
    {
      id: '1607',
      name: 'Xã quảng phú',
      district_id: '220800',
    },
    {
      id: '1608',
      name: 'Xã bình định',
      district_id: '220800',
    },
    {
      id: '1609',
      name: 'Xã lâm thao',
      district_id: '220800',
    },
    {
      id: '1610',
      name: 'Xã phú lương',
      district_id: '220800',
    },
    {
      id: '1611',
      name: 'Thị trấn thứa',
      district_id: '220800',
    },
    {
      id: '1612',
      name: 'Xã an thịnh',
      district_id: '220800',
    },
    {
      id: '1613',
      name: 'Xã trung kênh',
      district_id: '220800',
    },
    {
      id: '1614',
      name: 'Xã mỹ hương',
      district_id: '220800',
    },
    {
      id: '1615',
      name: 'Xã phú hòa',
      district_id: '220800',
    },
    {
      id: '1616',
      name: 'Xã trung chính',
      district_id: '220800',
    },
    {
      id: '1617',
      name: 'Xã minh tân',
      district_id: '220800',
    },
    {
      id: '1618',
      name: 'Xã trừng xá',
      district_id: '220800',
    },
    {
      id: '1619',
      name: 'Xã lai hạ',
      district_id: '220800',
    },
    {
      id: '1620',
      name: 'Xã tân lãng',
      district_id: '220800',
    },
    {
      id: '1621',
      name: 'Phường thọ xương',
      district_id: '230100',
    },
    {
      id: '1622',
      name: 'Phường trần nguyên hãn',
      district_id: '230100',
    },
    {
      id: '1623',
      name: 'Phường hoàng văn thụ',
      district_id: '230100',
    },
    {
      id: '1624',
      name: 'Phường trần phú',
      district_id: '230100',
    },
    {
      id: '1625',
      name: 'Phường ngô quyền',
      district_id: '230100',
    },
    {
      id: '1626',
      name: 'Phường mỹ độ',
      district_id: '230100',
    },
    {
      id: '1628',
      name: 'Phường lê lợi',
      district_id: '230100',
    },
    {
      id: '1632',
      name: 'Xã song mai',
      district_id: '230100',
    },
    {
      id: '1633',
      name: 'Xã song khê',
      district_id: '230100',
    },
    {
      id: '1634',
      name: 'Xã tân mỹ',
      district_id: '230100',
    },
    {
      id: '1635',
      name: 'Xã tân tiến',
      district_id: '230100',
    },
    {
      id: '1636',
      name: 'Xã dĩnh trì',
      district_id: '230100',
    },
    {
      id: '1637',
      name: 'Xã đồng sơn',
      district_id: '230100',
    },
    {
      id: '11753',
      name: 'Phường đa mai',
      district_id: '230100',
    },
    {
      id: '11754',
      name: 'Phường dĩnh kế',
      district_id: '230100',
    },
    {
      id: '11755',
      name: 'Phường xương giang',
      district_id: '230100',
    },
    {
      id: '1638',
      name: 'Thị trấn đồi ngô',
      district_id: '230500',
    },
    {
      id: '1639',
      name: 'Thị trấn lục nam',
      district_id: '230500',
    },
    {
      id: '1640',
      name: 'Xã đông hưng',
      district_id: '230500',
    },
    {
      id: '1641',
      name: 'Xã đồng phú',
      district_id: '230500',
    },
    {
      id: '1642',
      name: 'Xã tam dị',
      district_id: '230500',
    },
    {
      id: '1643',
      name: 'Xã bảo sơn',
      district_id: '230500',
    },
    {
      id: '1644',
      name: 'Xã bảo đài',
      district_id: '230500',
    },
    {
      id: '1645',
      name: 'Xã thanh lâm',
      district_id: '230500',
    },
    {
      id: '1646',
      name: 'Xã tiên nha',
      district_id: '230500',
    },
    {
      id: '1647',
      name: 'Xã trường giang',
      district_id: '230500',
    },
    {
      id: '1648',
      name: 'Xã tiên hưng',
      district_id: '230500',
    },
    {
      id: '1649',
      name: 'Xã phương sơn',
      district_id: '230500',
    },
    {
      id: '1650',
      name: 'Xã chu điện',
      district_id: '230500',
    },
    {
      id: '1651',
      name: 'Xã Cương Sơn',
      district_id: '230500',
    },
    {
      id: '1652',
      name: 'Xã nghĩa phương',
      district_id: '230500',
    },
    {
      id: '1653',
      name: 'Xã vô tranh',
      district_id: '230500',
    },
    {
      id: '1654',
      name: 'Xã bình sơn',
      district_id: '230500',
    },
    {
      id: '1655',
      name: 'Xã khám lạng',
      district_id: '230500',
    },
    {
      id: '1656',
      name: 'Xã huyền sơn',
      district_id: '230500',
    },
    {
      id: '1657',
      name: 'Xã trường sơn',
      district_id: '230500',
    },
    {
      id: '1658',
      name: 'Xã lục sơn',
      district_id: '230500',
    },
    {
      id: '1659',
      name: 'Xã bắc lũng',
      district_id: '230500',
    },
    {
      id: '1660',
      name: 'Xã vũ xá',
      district_id: '230500',
    },
    {
      id: '1661',
      name: 'Xã cẩm lý',
      district_id: '230500',
    },
    {
      id: '1663',
      name: 'Xã yên sơn',
      district_id: '230500',
    },
    {
      id: '1664',
      name: 'Xã lan mẫu',
      district_id: '230500',
    },
    {
      id: '1665',
      name: 'Xã đan hội',
      district_id: '230500',
    },
    {
      id: '1690',
      name: 'Thị trấn chũ',
      district_id: '230300',
    },
    {
      id: '1691',
      name: 'Xã cấm sơn',
      district_id: '230300',
    },
    {
      id: '1692',
      name: 'Xã tân sơn',
      district_id: '230300',
    },
    {
      id: '1693',
      name: 'Xã phong minh',
      district_id: '230300',
    },
    {
      id: '1694',
      name: 'Xã phong vân',
      district_id: '230300',
    },
    {
      id: '1695',
      name: 'Xã xa lý',
      district_id: '230300',
    },
    {
      id: '1696',
      name: 'Xã hộ đáp',
      district_id: '230300',
    },
    {
      id: '1697',
      name: 'Xã sơn hải',
      district_id: '230300',
    },
    {
      id: '1698',
      name: 'Xã thanh hải',
      district_id: '230300',
    },
    {
      id: '1699',
      name: 'Xã kiên lao',
      district_id: '230300',
    },
    {
      id: '1700',
      name: 'Xã biên sơn',
      district_id: '230300',
    },
    {
      id: '1701',
      name: 'Xã kiên thành',
      district_id: '230300',
    },
    {
      id: '1702',
      name: 'Xã hồng giang',
      district_id: '230300',
    },
    {
      id: '1703',
      name: 'Xã kim sơn',
      district_id: '230300',
    },
    {
      id: '1704',
      name: 'Xã tân hoa',
      district_id: '230300',
    },
    {
      id: '1705',
      name: 'Xã giáp sơn',
      district_id: '230300',
    },
    {
      id: '1706',
      name: 'Xã biển động',
      district_id: '230300',
    },
    {
      id: '1707',
      name: 'Xã quý sơn',
      district_id: '230300',
    },
    {
      id: '1708',
      name: 'Xã trù hựu',
      district_id: '230300',
    },
    {
      id: '1709',
      name: 'Xã phì điền',
      district_id: '230300',
    },
    {
      id: '1710',
      name: 'Xã nghĩa hồ',
      district_id: '230300',
    },
    {
      id: '1711',
      name: 'Xã tân quang',
      district_id: '230300',
    },
    {
      id: '1712',
      name: 'Xã đồng cốc',
      district_id: '230300',
    },
    {
      id: '1713',
      name: 'Xã tân lập',
      district_id: '230300',
    },
    {
      id: '1714',
      name: 'Xã phú nhuận',
      district_id: '230300',
    },
    {
      id: '1715',
      name: 'Xã nam dương',
      district_id: '230300',
    },
    {
      id: '1716',
      name: 'Xã mỹ an',
      district_id: '230300',
    },
    {
      id: '1717',
      name: 'Xã tân mộc',
      district_id: '230300',
    },
    {
      id: '1718',
      name: 'Xã đèo gia',
      district_id: '230300',
    },
    {
      id: '1719',
      name: 'Xã Phượng Sơn',
      district_id: '230300',
    },
    {
      id: '1666',
      name: 'Thị trấn an châu',
      district_id: '230400',
    },
    {
      id: '1667',
      name: 'Xã thạch sơn',
      district_id: '230400',
    },
    {
      id: '1668',
      name: 'Xã vân sơn',
      district_id: '230400',
    },
    {
      id: '1670',
      name: 'Xã hữu sản',
      district_id: '230400',
    },
    {
      id: '1671',
      name: 'Xã phúc thắng',
      district_id: '230400',
    },
    {
      id: '1672',
      name: 'Xã an bá',
      district_id: '230400',
    },
    {
      id: '1673',
      name: 'Xã yên định',
      district_id: '230400',
    },
    {
      id: '1674',
      name: 'Xã lệ viễn',
      district_id: '230400',
    },
    {
      id: '1675',
      name: 'Xã tuấn đạo',
      district_id: '230400',
    },
    {
      id: '1676',
      name: 'Xã dương hưu',
      district_id: '230400',
    },
    {
      id: '1677',
      name: 'Xã bồng am',
      district_id: '230400',
    },
    {
      id: '1678',
      name: 'Xã long sơn',
      district_id: '230400',
    },
    {
      id: '1679',
      name: 'Thị trấn thanh sơn',
      district_id: '230400',
    },
    {
      id: '1680',
      name: 'Xã thanh luận',
      district_id: '230400',
    },
    {
      id: '1681',
      name: 'Xã quế sơn',
      district_id: '230400',
    },
    {
      id: '1682',
      name: 'Xã chiên sơn',
      district_id: '230400',
    },
    {
      id: '1683',
      name: 'Xã giáo liêm',
      district_id: '230400',
    },
    {
      id: '1684',
      name: 'Xã vĩnh khương',
      district_id: '230400',
    },
    {
      id: '1685',
      name: 'Xã cẩm đàn',
      district_id: '230400',
    },
    {
      id: '1686',
      name: 'Xã an lạc',
      district_id: '230400',
    },
    {
      id: '1687',
      name: 'Xã an lập',
      district_id: '230400',
    },
    {
      id: '1688',
      name: 'Xã an châu',
      district_id: '230400',
    },
    {
      id: '1689',
      name: 'Xã tuấn mậu',
      district_id: '230400',
    },
    {
      id: '12564',
      name: 'Xã Phúc Sơn',
      district_id: '230400',
    },
    {
      id: '12565',
      name: 'Thị Trấn Tây Yên Tử',
      district_id: '230400',
    },
    {
      id: '12566',
      name: 'Xã Vĩnh An',
      district_id: '230400',
    },
    {
      id: '12567',
      name: 'Xã Đại Sơn',
      district_id: '230400',
    },
    {
      id: '1767',
      name: 'Thị trấn cao thượng',
      district_id: '230600',
    },
    {
      id: '1768',
      name: 'Thị trấn nhã nam',
      district_id: '230600',
    },
    {
      id: '1769',
      name: 'Xã tân trung',
      district_id: '230600',
    },
    {
      id: '1770',
      name: 'Xã đại hóa',
      district_id: '230600',
    },
    {
      id: '1771',
      name: 'Xã quang tiến',
      district_id: '230600',
    },
    {
      id: '1772',
      name: 'Xã phúc sơn',
      district_id: '230600',
    },
    {
      id: '1773',
      name: 'Xã an dương',
      district_id: '230600',
    },
    {
      id: '1774',
      name: 'Xã phúc hòa',
      district_id: '230600',
    },
    {
      id: '1775',
      name: 'Xã liên sơn',
      district_id: '230600',
    },
    {
      id: '1776',
      name: 'Xã hợp đức',
      district_id: '230600',
    },
    {
      id: '1777',
      name: 'Xã lam cốt',
      district_id: '230600',
    },
    {
      id: '1778',
      name: 'Xã cao xá',
      district_id: '230600',
    },
    {
      id: '1779',
      name: 'Xã cao thượng',
      district_id: '230600',
    },
    {
      id: '1780',
      name: 'Xã song vân',
      district_id: '230600',
    },
    {
      id: '1781',
      name: 'Xã ngọc châu',
      district_id: '230600',
    },
    {
      id: '1782',
      name: 'Xã việt lập',
      district_id: '230600',
    },
    {
      id: '1783',
      name: 'Xã việt ngọc',
      district_id: '230600',
    },
    {
      id: '1784',
      name: 'Xã liên chung',
      district_id: '230600',
    },
    {
      id: '1785',
      name: 'Xã ngọc thiện',
      district_id: '230600',
    },
    {
      id: '1786',
      name: 'Xã ngọc lý',
      district_id: '230600',
    },
    {
      id: '1787',
      name: 'Xã quế nham',
      district_id: '230600',
    },
    {
      id: '1788',
      name: 'Xã ngọc vân',
      district_id: '230600',
    },
    {
      id: '1789',
      name: 'Xã lan giới',
      district_id: '230600',
    },
    {
      id: '1790',
      name: 'Xã nhã nam',
      district_id: '230600',
    },
    {
      id: '1839',
      name: 'Xã nội hoàng',
      district_id: '231000',
    },
    {
      id: '1840',
      name: 'Xã tiền phong',
      district_id: '231000',
    },
    {
      id: '1841',
      name: 'Xã xuân phú',
      district_id: '231000',
    },
    {
      id: '1842',
      name: 'Xã tân liễu',
      district_id: '231000',
    },
    {
      id: '1843',
      name: 'Xã trí yên',
      district_id: '231000',
    },
    {
      id: '1844',
      name: 'Xã lãng sơn',
      district_id: '231000',
    },
    {
      id: '1845',
      name: 'Xã yên lư',
      district_id: '231000',
    },
    {
      id: '1846',
      name: 'Xã tiến dũng',
      district_id: '231000',
    },
    {
      id: '1847',
      name: 'Xã nham sơn',
      district_id: '231000',
    },
    {
      id: '1848',
      name: 'Xã đức giang',
      district_id: '231000',
    },
    {
      id: '1849',
      name: 'Xã cảnh thụy',
      district_id: '231000',
    },
    {
      id: '1850',
      name: 'Xã tư mại',
      district_id: '231000',
    },
    {
      id: '1851',
      name: 'Xã thắng cương',
      district_id: '231000',
    },
    {
      id: '1852',
      name: 'Xã đông việt',
      district_id: '231000',
    },
    {
      id: '1853',
      name: 'Xã đông phúc',
      district_id: '231000',
    },
    {
      id: '1854',
      name: 'Thị trấn neo',
      district_id: '231000',
    },
    {
      id: '1855',
      name: 'Xã lão hộ',
      district_id: '231000',
    },
    {
      id: '1857',
      name: 'Xã hương gián',
      district_id: '231000',
    },
    {
      id: '1858',
      name: 'Thị trấn tân dân',
      district_id: '231000',
    },
    {
      id: '1861',
      name: 'Xã quỳnh sơn',
      district_id: '231000',
    },
    {
      id: '1863',
      name: 'Xã tân an',
      district_id: '231000',
    },
    {
      id: '12568',
      name: 'Thị Trấn Nham Biền',
      district_id: '231000',
    },
    {
      id: '1744',
      name: 'Xã phồn xương',
      district_id: '230200',
    },
    {
      id: '1745',
      name: 'Xã tân sỏi',
      district_id: '230200',
    },
    {
      id: '1746',
      name: 'Xã hương vĩ',
      district_id: '230200',
    },
    {
      id: '1747',
      name: 'Xã đồng hưu',
      district_id: '230200',
    },
    {
      id: '1748',
      name: 'Xã tân hiệp',
      district_id: '230200',
    },
    {
      id: '1750',
      name: 'Thị trấn cầu gồ',
      district_id: '230200',
    },
    {
      id: '1751',
      name: 'Thị trấn bố hạ',
      district_id: '230200',
    },
    {
      id: '1752',
      name: 'Xã đồng tâm',
      district_id: '230200',
    },
    {
      id: '1753',
      name: 'Xã đồng tiến',
      district_id: '230200',
    },
    {
      id: '1755',
      name: 'Xã xuân lương',
      district_id: '230200',
    },
    {
      id: '1756',
      name: 'Xã tam tiến',
      district_id: '230200',
    },
    {
      id: '1757',
      name: 'Xã đồng vương',
      district_id: '230200',
    },
    {
      id: '1758',
      name: 'Xã tam hiệp',
      district_id: '230200',
    },
    {
      id: '1759',
      name: 'Xã tiến thắng',
      district_id: '230200',
    },
    {
      id: '1760',
      name: 'Xã hồng kỳ',
      district_id: '230200',
    },
    {
      id: '1761',
      name: 'Xã đông sơn',
      district_id: '230200',
    },
    {
      id: '1762',
      name: 'Xã đồng lạc',
      district_id: '230200',
    },
    {
      id: '1763',
      name: 'Xã đồng kỳ',
      district_id: '230200',
    },
    {
      id: '1764',
      name: 'Xã an thượng',
      district_id: '230200',
    },
    {
      id: '1765',
      name: 'Xã canh nậu',
      district_id: '230200',
    },
    {
      id: '1766',
      name: 'Xã bố hạ',
      district_id: '230200',
    },
    {
      id: '1812',
      name: 'Thị trấn thắng',
      district_id: '230700',
    },
    {
      id: '1813',
      name: 'Xã đồng tân',
      district_id: '230700',
    },
    {
      id: '1814',
      name: 'Xã thanh vân',
      district_id: '230700',
    },
    {
      id: '1815',
      name: 'Xã hoàng lương',
      district_id: '230700',
    },
    {
      id: '1816',
      name: 'Xã hoàng thanh',
      district_id: '230700',
    },
    {
      id: '1817',
      name: 'Xã hoàng an',
      district_id: '230700',
    },
    {
      id: '1818',
      name: 'Xã ngọc sơn',
      district_id: '230700',
    },
    {
      id: '1819',
      name: 'Xã thái sơn',
      district_id: '230700',
    },
    {
      id: '1820',
      name: 'Xã hòa sơn',
      district_id: '230700',
    },
    {
      id: '1821',
      name: 'Xã đức thắng',
      district_id: '230700',
    },
    {
      id: '1822',
      name: 'Xã danh thắng',
      district_id: '230700',
    },
    {
      id: '1823',
      name: 'Xã thường thắng',
      district_id: '230700',
    },
    {
      id: '1824',
      name: 'Xã lương phong',
      district_id: '230700',
    },
    {
      id: '1825',
      name: 'Xã hùng sơn',
      district_id: '230700',
    },
    {
      id: '1826',
      name: 'Xã đoan bái',
      district_id: '230700',
    },
    {
      id: '1827',
      name: 'Xã đông lộ',
      district_id: '230700',
    },
    {
      id: '1828',
      name: 'Xã châu minh',
      district_id: '230700',
    },
    {
      id: '1829',
      name: 'Xã mai đình',
      district_id: '230700',
    },
    {
      id: '1830',
      name: 'Xã xuân cẩm',
      district_id: '230700',
    },
    {
      id: '1831',
      name: 'Xã hương lâm',
      district_id: '230700',
    },
    {
      id: '1832',
      name: 'Xã đại thanh',
      district_id: '230700',
    },
    {
      id: '1833',
      name: 'Xã hợp thịnh',
      district_id: '230700',
    },
    {
      id: '1834',
      name: 'Xã mai trung',
      district_id: '230700',
    },
    {
      id: '1835',
      name: 'Xã quang minh',
      district_id: '230700',
    },
    {
      id: '1836',
      name: 'Xã bắc lý',
      district_id: '230700',
    },
    {
      id: '1837',
      name: 'Xã hoàng vân',
      district_id: '230700',
    },
    {
      id: '1838',
      name: 'Xã dĩnh trì',
      district_id: '230700',
    },
    {
      id: '1720',
      name: 'Thị trấn vôi',
      district_id: '230800',
    },
    {
      id: '1721',
      name: 'Thị trấn kép',
      district_id: '230800',
    },
    {
      id: '1722',
      name: 'Xã nghĩa hòa',
      district_id: '230800',
    },
    {
      id: '1723',
      name: 'Xã nghĩa hưng',
      district_id: '230800',
    },
    {
      id: '1724',
      name: 'Xã quang thịnh',
      district_id: '230800',
    },
    {
      id: '1725',
      name: 'Xã hương sơn',
      district_id: '230800',
    },
    {
      id: '1726',
      name: 'Xã đào mỹ',
      district_id: '230800',
    },
    {
      id: '1727',
      name: 'Xã tiên lục',
      district_id: '230800',
    },
    {
      id: '1728',
      name: 'Xã an hà',
      district_id: '230800',
    },
    {
      id: '1729',
      name: 'Xã tân thịnh',
      district_id: '230800',
    },
    {
      id: '1730',
      name: 'Xã mỹ hà',
      district_id: '230800',
    },
    {
      id: '1731',
      name: 'Xã hương lạc',
      district_id: '230800',
    },
    {
      id: '1732',
      name: 'Xã dương đức',
      district_id: '230800',
    },
    {
      id: '1733',
      name: 'Xã tân thanh',
      district_id: '230800',
    },
    {
      id: '1734',
      name: 'Xã yên mỹ',
      district_id: '230800',
    },
    {
      id: '1735',
      name: 'Xã phi mô',
      district_id: '230800',
    },
    {
      id: '1736',
      name: 'Xã xuân hương',
      district_id: '230800',
    },
    {
      id: '1737',
      name: 'Xã thái đào',
      district_id: '230800',
    },
    {
      id: '1739',
      name: 'Xã tân dĩnh',
      district_id: '230800',
    },
    {
      id: '1740',
      name: 'Xã đại lâm',
      district_id: '230800',
    },
    {
      id: '1741',
      name: 'Xã xương lâm',
      district_id: '230800',
    },
    {
      id: '1742',
      name: 'Xã mỹ thái',
      district_id: '230800',
    },
    {
      id: '1743',
      name: 'Xã tân hưng',
      district_id: '230800',
    },
    {
      id: '1791',
      name: 'Thị Trấn Bích động',
      district_id: '230900',
    },
    {
      id: '1792',
      name: 'Thị Trấn Nếnh',
      district_id: '230900',
    },
    {
      id: '1793',
      name: 'Xã thượng lan',
      district_id: '230900',
    },
    {
      id: '1794',
      name: 'Xã việt tiến',
      district_id: '230900',
    },
    {
      id: '1795',
      name: 'Xã nghĩa trung',
      district_id: '230900',
    },
    {
      id: '1796',
      name: 'Xã minh đức',
      district_id: '230900',
    },
    {
      id: '1797',
      name: 'Xã hương mai',
      district_id: '230900',
    },
    {
      id: '1798',
      name: 'Xã tự lan',
      district_id: '230900',
    },
    {
      id: '1799',
      name: 'Xã bích sơn',
      district_id: '230900',
    },
    {
      id: '1800',
      name: 'Xã trung sơn',
      district_id: '230900',
    },
    {
      id: '1801',
      name: 'Xã hồng thái',
      district_id: '230900',
    },
    {
      id: '1803',
      name: 'Xã tăng tiến',
      district_id: '230900',
    },
    {
      id: '1804',
      name: 'Xã quảng minh',
      district_id: '230900',
    },
    {
      id: '1805',
      name: 'Xã hoàng ninh',
      district_id: '230900',
    },
    {
      id: '1806',
      name: 'Xã ninh sơn',
      district_id: '230900',
    },
    {
      id: '1807',
      name: 'Xã vân trung',
      district_id: '230900',
    },
    {
      id: '1808',
      name: 'Xã vân hà',
      district_id: '230900',
    },
    {
      id: '1809',
      name: 'Xã quang châu',
      district_id: '230900',
    },
    {
      id: '1811',
      name: 'Xã tiên sơn',
      district_id: '230900',
    },
    {
      id: '9741',
      name: 'Phường mỹ phước',
      district_id: '820200',
    },
    {
      id: '9742',
      name: 'Phường chánh phú hòa',
      district_id: '820200',
    },
    {
      id: '9743',
      name: 'Xã an điền',
      district_id: '820200',
    },
    {
      id: '9744',
      name: 'Xã an tây',
      district_id: '820200',
    },
    {
      id: '9745',
      name: 'Phường thới hòa',
      district_id: '820200',
    },
    {
      id: '9746',
      name: 'Phường hòa lợi',
      district_id: '820200',
    },
    {
      id: '9747',
      name: 'Phường tân định',
      district_id: '820200',
    },
    {
      id: '9748',
      name: 'Xã phú an',
      district_id: '820200',
    },
    {
      id: '9749',
      name: 'Thị trấn dầu tiếng',
      district_id: '820700',
    },
    {
      id: '9750',
      name: 'Xã an lập',
      district_id: '820700',
    },
    {
      id: '9751',
      name: 'Xã long tân',
      district_id: '820700',
    },
    {
      id: '9752',
      name: 'Xã thanh an',
      district_id: '820700',
    },
    {
      id: '9753',
      name: 'Xã thanh tuyền',
      district_id: '820700',
    },
    {
      id: '9754',
      name: 'Xã minh hòa',
      district_id: '820700',
    },
    {
      id: '9755',
      name: 'Xã minh thạnh',
      district_id: '820700',
    },
    {
      id: '9756',
      name: 'Xã minh tân',
      district_id: '820700',
    },
    {
      id: '9757',
      name: 'Xã định an',
      district_id: '820700',
    },
    {
      id: '9758',
      name: 'Xã long hòa',
      district_id: '820700',
    },
    {
      id: '9759',
      name: 'Xã định thành',
      district_id: '820700',
    },
    {
      id: '9760',
      name: 'Xã định hiệp',
      district_id: '820700',
    },
    {
      id: '9772',
      name: 'Phường an bình',
      district_id: '820500',
    },
    {
      id: '9773',
      name: 'Phường Tân Đông Hiệp',
      district_id: '820500',
    },
    {
      id: '9774',
      name: 'Phường tân bình',
      district_id: '820500',
    },
    {
      id: '9775',
      name: 'Phường bình an',
      district_id: '820500',
    },
    {
      id: '9776',
      name: 'Phường bình thắng',
      district_id: '820500',
    },
    {
      id: '9777',
      name: 'Phường đông hòa',
      district_id: '820500',
    },
    {
      id: '12208',
      name: 'Phường dĩ an',
      district_id: '820500',
    },
    {
      id: '9730',
      name: 'Thị trấn phước vĩnh',
      district_id: '820600',
    },
    {
      id: '9731',
      name: 'Xã an linh',
      district_id: '820600',
    },
    {
      id: '9732',
      name: 'Xã phước sang',
      district_id: '820600',
    },
    {
      id: '9733',
      name: 'Xã an thái',
      district_id: '820600',
    },
    {
      id: '9734',
      name: 'Xã an long',
      district_id: '820600',
    },
    {
      id: '9735',
      name: 'Xã an bình',
      district_id: '820600',
    },
    {
      id: '9736',
      name: 'Xã tân hiệp',
      district_id: '820600',
    },
    {
      id: '9737',
      name: 'Xã tam lập',
      district_id: '820600',
    },
    {
      id: '9738',
      name: 'Xã tân long',
      district_id: '820600',
    },
    {
      id: '9739',
      name: 'Xã vĩnh hòa',
      district_id: '820600',
    },
    {
      id: '9740',
      name: 'Xã phước hòa',
      district_id: '820600',
    },
    {
      id: '9705',
      name: 'Phường hiệp thành',
      district_id: '820100',
    },
    {
      id: '9706',
      name: 'Phường phú lợi',
      district_id: '820100',
    },
    {
      id: '9707',
      name: 'Phường phú cường',
      district_id: '820100',
    },
    {
      id: '9708',
      name: 'Phường phú hòa',
      district_id: '820100',
    },
    {
      id: '9709',
      name: 'Phường phú thọ',
      district_id: '820100',
    },
    {
      id: '9710',
      name: 'Phường chánh nghĩa',
      district_id: '820100',
    },
    {
      id: '9711',
      name: 'Phường phú mỹ',
      district_id: '820100',
    },
    {
      id: '9712',
      name: 'Phường hiệp an',
      district_id: '820100',
    },
    {
      id: '9713',
      name: 'Phường phú tân',
      district_id: '820100',
    },
    {
      id: '9714',
      name: 'Phường định hòa',
      district_id: '820100',
    },
    {
      id: '9717',
      name: 'Phường hòa phú',
      district_id: '820100',
    },
    {
      id: '12209',
      name: 'Phường chánh mỹ',
      district_id: '820100',
    },
    {
      id: '12210',
      name: 'Phường tân an',
      district_id: '820100',
    },
    {
      id: '12211',
      name: 'Phường tương bình hiệp',
      district_id: '820100',
    },
    {
      id: '9761',
      name: 'Phường bình hòa',
      district_id: '820400',
    },
    {
      id: '9762',
      name: 'Phường bình chuẩn',
      district_id: '820400',
    },
    {
      id: '9763',
      name: 'Phường thuận giao',
      district_id: '820400',
    },
    {
      id: '9764',
      name: 'Phường an phú',
      district_id: '820400',
    },
    {
      id: '9767',
      name: 'Phường vĩnh phú',
      district_id: '820400',
    },
    {
      id: '9768',
      name: 'Xã an sơn',
      district_id: '820400',
    },
    {
      id: '12202',
      name: 'Phường an thạnh',
      district_id: '820400',
    },
    {
      id: '12203',
      name: 'Phường lái thiêu',
      district_id: '820400',
    },
    {
      id: '12204',
      name: 'Phường bình nhâm',
      district_id: '820400',
    },
    {
      id: '12205',
      name: 'Phường hưng định',
      district_id: '820400',
    },
    {
      id: '7953',
      name: 'Thị trấn an lão',
      district_id: '590200',
    },
    {
      id: '7954',
      name: 'Xã an dũng',
      district_id: '590200',
    },
    {
      id: '7955',
      name: 'Xã an hòa',
      district_id: '590200',
    },
    {
      id: '7956',
      name: 'Xã an hưng',
      district_id: '590200',
    },
    {
      id: '7957',
      name: 'Xã an nghĩa',
      district_id: '590200',
    },
    {
      id: '7959',
      name: 'Xã an tân',
      district_id: '590200',
    },
    {
      id: '7960',
      name: 'Xã an toàn',
      district_id: '590200',
    },
    {
      id: '7961',
      name: 'Xã an trung',
      district_id: '590200',
    },
    {
      id: '7962',
      name: 'Xã an vinh',
      district_id: '590200',
    },
    {
      id: '12023',
      name: 'Xã an quang',
      district_id: '590200',
    },
    {
      id: '7868',
      name: 'Xã nhơn an',
      district_id: '591000',
    },
    {
      id: '7870',
      name: 'Xã nhơn khánh',
      district_id: '591000',
    },
    {
      id: '7871',
      name: 'Xã nhơn lộc',
      district_id: '591000',
    },
    {
      id: '7876',
      name: 'Xã nhơn mỹ',
      district_id: '591000',
    },
    {
      id: '7877',
      name: 'Xã nhơn hạnh',
      district_id: '591000',
    },
    {
      id: '7878',
      name: 'Xã nhơn phong',
      district_id: '591000',
    },
    {
      id: '7879',
      name: 'Xã nhơn hậu',
      district_id: '591000',
    },
    {
      id: '7880',
      name: 'Xã nhơn phúc',
      district_id: '591000',
    },
    {
      id: '7881',
      name: 'Xã nhơn thọ',
      district_id: '591000',
    },
    {
      id: '7882',
      name: 'Xã nhơn tân',
      district_id: '591000',
    },
    {
      id: '12018',
      name: 'Phường bình định',
      district_id: '591000',
    },
    {
      id: '12019',
      name: 'Phường đập đá',
      district_id: '591000',
    },
    {
      id: '12020',
      name: 'Phường nhơn hoà',
      district_id: '591000',
    },
    {
      id: '12021',
      name: 'Phường nhơn hưng',
      district_id: '591000',
    },
    {
      id: '12022',
      name: 'Phường nhơn thành',
      district_id: '591000',
    },
    {
      id: '7921',
      name: 'Xã tam quan nam',
      district_id: '590400',
    },
    {
      id: '7922',
      name: 'Xã hoài thanh',
      district_id: '590400',
    },
    {
      id: '7923',
      name: 'Xã hoài thanh tây',
      district_id: '590400',
    },
    {
      id: '7924',
      name: 'Xã hoài hương',
      district_id: '590400',
    },
    {
      id: '7925',
      name: 'Xã hoài hải',
      district_id: '590400',
    },
    {
      id: '7926',
      name: 'Xã hoài tân',
      district_id: '590400',
    },
    {
      id: '7927',
      name: 'Thị trấn bồng sơn',
      district_id: '590400',
    },
    {
      id: '7928',
      name: 'Thị Trấn Tam Quan',
      district_id: '590400',
    },
    {
      id: '7929',
      name: 'Xã hoài sơn',
      district_id: '590400',
    },
    {
      id: '7930',
      name: 'Xã hoài châu',
      district_id: '590400',
    },
    {
      id: '7931',
      name: 'Xã hoài châu bắc',
      district_id: '590400',
    },
    {
      id: '7932',
      name: 'Xã hoài phú',
      district_id: '590400',
    },
    {
      id: '7933',
      name: 'Xã tam quan bắc',
      district_id: '590400',
    },
    {
      id: '7936',
      name: 'Xã hoài mỹ',
      district_id: '590400',
    },
    {
      id: '7937',
      name: 'Xã hoài đức',
      district_id: '590400',
    },
    {
      id: '12016',
      name: 'Xã hoài hảo',
      district_id: '590400',
    },
    {
      id: '12017',
      name: 'Xã hoài xuân',
      district_id: '590400',
    },
    {
      id: '7883',
      name: 'Thị trấn ngô mây',
      district_id: '590600',
    },
    {
      id: '7884',
      name: 'Xã cát sơn',
      district_id: '590600',
    },
    {
      id: '7885',
      name: 'Xã cát minh',
      district_id: '590600',
    },
    {
      id: '7886',
      name: 'Xã cát tài',
      district_id: '590600',
    },
    {
      id: '7887',
      name: 'Xã cát khánh',
      district_id: '590600',
    },
    {
      id: '7888',
      name: 'Xã cát lâm',
      district_id: '590600',
    },
    {
      id: '7889',
      name: 'Xã cát hanh',
      district_id: '590600',
    },
    {
      id: '7890',
      name: 'Xã cát thành',
      district_id: '590600',
    },
    {
      id: '7891',
      name: 'Xã cát hải',
      district_id: '590600',
    },
    {
      id: '7892',
      name: 'Xã cát hiệp',
      district_id: '590600',
    },
    {
      id: '7893',
      name: 'Xã cát trinh',
      district_id: '590600',
    },
    {
      id: '7894',
      name: 'Xã cát nhơn',
      district_id: '590600',
    },
    {
      id: '7895',
      name: 'Xã cát hưng',
      district_id: '590600',
    },
    {
      id: '7896',
      name: 'Xã cát tường',
      district_id: '590600',
    },
    {
      id: '7897',
      name: 'Xã cát tân',
      district_id: '590600',
    },
    {
      id: '7898',
      name: 'Xã cát tiến',
      district_id: '590600',
    },
    {
      id: '7900',
      name: 'Xã cát thắng',
      district_id: '590600',
    },
    {
      id: '7901',
      name: 'Xã cát chánh',
      district_id: '590600',
    },
    {
      id: '7902',
      name: 'Thị trấn bình dương',
      district_id: '590500',
    },
    {
      id: '7903',
      name: 'Xã mỹ an',
      district_id: '590500',
    },
    {
      id: '7904',
      name: 'Xã mỹ cát',
      district_id: '590500',
    },
    {
      id: '7905',
      name: 'Xã mỹ chánh tây',
      district_id: '590500',
    },
    {
      id: '7906',
      name: 'Xã mỹ châu',
      district_id: '590500',
    },
    {
      id: '7907',
      name: 'Xã mỹ đức',
      district_id: '590500',
    },
    {
      id: '7908',
      name: 'Xã mỹ hiệp',
      district_id: '590500',
    },
    {
      id: '7909',
      name: 'Xã mỹ hòa',
      district_id: '590500',
    },
    {
      id: '7910',
      name: 'Xã mỹ lộc',
      district_id: '590500',
    },
    {
      id: '7911',
      name: 'Xã mỹ lợi',
      district_id: '590500',
    },
    {
      id: '7912',
      name: 'Xã mỹ phong',
      district_id: '590500',
    },
    {
      id: '7913',
      name: 'Xã mỹ quang',
      district_id: '590500',
    },
    {
      id: '7914',
      name: 'Xã mỹ tài',
      district_id: '590500',
    },
    {
      id: '7915',
      name: 'Xã mỹ thành',
      district_id: '590500',
    },
    {
      id: '7916',
      name: 'Xã mỹ thọ',
      district_id: '590500',
    },
    {
      id: '7917',
      name: 'Xã mỹ thắng',
      district_id: '590500',
    },
    {
      id: '7918',
      name: 'Xã mỹ trinh',
      district_id: '590500',
    },
    {
      id: '7919',
      name: 'Thị trấn phù mỹ',
      district_id: '590500',
    },
    {
      id: '7920',
      name: 'Xã mỹ chánh',
      district_id: '590500',
    },
    {
      id: '7834',
      name: 'Phường lê hồng phong',
      district_id: '590100',
    },
    {
      id: '7835',
      name: 'Phường trần phú',
      district_id: '590100',
    },
    {
      id: '7836',
      name: 'Phường lý thường kiệt',
      district_id: '590100',
    },
    {
      id: '7837',
      name: 'Xã nhơn châu',
      district_id: '590100',
    },
    {
      id: '7838',
      name: 'Xã nhơn lý',
      district_id: '590100',
    },
    {
      id: '7839',
      name: 'Xã nhơn hội',
      district_id: '590100',
    },
    {
      id: '7840',
      name: 'Xã phước mỹ',
      district_id: '590100',
    },
    {
      id: '7841',
      name: 'Xã nhơn hải',
      district_id: '590100',
    },
    {
      id: '7842',
      name: 'Phường nguyễn văn cừ',
      district_id: '590100',
    },
    {
      id: '7843',
      name: 'Phường đống đa',
      district_id: '590100',
    },
    {
      id: '7844',
      name: 'Phường thị nại',
      district_id: '590100',
    },
    {
      id: '7845',
      name: 'Phường hải cảng',
      district_id: '590100',
    },
    {
      id: '7846',
      name: 'Phường ngô mây',
      district_id: '590100',
    },
    {
      id: '7847',
      name: 'Phường ghềnh ráng',
      district_id: '590100',
    },
    {
      id: '7848',
      name: 'Phường quang trung',
      district_id: '590100',
    },
    {
      id: '7849',
      name: 'Phường nhơn bình',
      district_id: '590100',
    },
    {
      id: '7850',
      name: 'Phường nhơn phú',
      district_id: '590100',
    },
    {
      id: '7851',
      name: 'Phường bùi thị xuân',
      district_id: '590100',
    },
    {
      id: '7852',
      name: 'Phường trần quang diệu',
      district_id: '590100',
    },
    {
      id: '7853',
      name: 'Phường trần hưng đạo',
      district_id: '590100',
    },
    {
      id: '7854',
      name: 'Phường lê lợi',
      district_id: '590100',
    },
    {
      id: '7972',
      name: 'Xã bình tường',
      district_id: '590800',
    },
    {
      id: '7973',
      name: 'Xã bình hòa',
      district_id: '590800',
    },
    {
      id: '7974',
      name: 'Xã bình tân',
      district_id: '590800',
    },
    {
      id: '7975',
      name: 'Xã bình thuận',
      district_id: '590800',
    },
    {
      id: '7976',
      name: 'Xã tây an',
      district_id: '590800',
    },
    {
      id: '7977',
      name: 'Xã tây vinh',
      district_id: '590800',
    },
    {
      id: '7978',
      name: 'Xã tây bình',
      district_id: '590800',
    },
    {
      id: '7979',
      name: 'Xã tây xuân',
      district_id: '590800',
    },
    {
      id: '7980',
      name: 'Xã tây phú',
      district_id: '590800',
    },
    {
      id: '7981',
      name: 'Xã tây giang',
      district_id: '590800',
    },
    {
      id: '7982',
      name: 'Xã tây thuận',
      district_id: '590800',
    },
    {
      id: '7983',
      name: 'Xã vĩnh an',
      district_id: '590800',
    },
    {
      id: '7984',
      name: 'Thị trấn phú phong',
      district_id: '590800',
    },
    {
      id: '7985',
      name: 'Xã bình thành',
      district_id: '590800',
    },
    {
      id: '7986',
      name: 'Xã bình nghi',
      district_id: '590800',
    },
    {
      id: '7855',
      name: 'Thị trấn diêu trì',
      district_id: '591100',
    },
    {
      id: '7856',
      name: 'Thị trấn tuy phước',
      district_id: '591100',
    },
    {
      id: '7857',
      name: 'Xã phước thắng',
      district_id: '591100',
    },
    {
      id: '7858',
      name: 'Xã phước hưng',
      district_id: '591100',
    },
    {
      id: '7859',
      name: 'Xã phước hòa',
      district_id: '591100',
    },
    {
      id: '7860',
      name: 'Xã phước quang',
      district_id: '591100',
    },
    {
      id: '7861',
      name: 'Xã phước sơn',
      district_id: '591100',
    },
    {
      id: '7862',
      name: 'Xã phước hiệp',
      district_id: '591100',
    },
    {
      id: '7863',
      name: 'Xã phước lộc',
      district_id: '591100',
    },
    {
      id: '7864',
      name: 'Xã phước thuận',
      district_id: '591100',
    },
    {
      id: '7865',
      name: 'Xã phước nghĩa',
      district_id: '591100',
    },
    {
      id: '7866',
      name: 'Xã phước an',
      district_id: '591100',
    },
    {
      id: '7867',
      name: 'Xã phước thành',
      district_id: '591100',
    },
    {
      id: '7987',
      name: 'Thị trấn vân canh',
      district_id: '590900',
    },
    {
      id: '7988',
      name: 'Xã canh hòa',
      district_id: '590900',
    },
    {
      id: '7989',
      name: 'Xã canh thuận',
      district_id: '590900',
    },
    {
      id: '7990',
      name: 'Xã canh hiệp',
      district_id: '590900',
    },
    {
      id: '7991',
      name: 'Xã canh hiển',
      district_id: '590900',
    },
    {
      id: '7992',
      name: 'Xã canh vinh',
      district_id: '590900',
    },
    {
      id: '7993',
      name: 'Xã canh liên',
      district_id: '590900',
    },
    {
      id: '7963',
      name: 'Xã vĩnh hòa',
      district_id: '590700',
    },
    {
      id: '7964',
      name: 'Xã vĩnh hiệp',
      district_id: '590700',
    },
    {
      id: '7965',
      name: 'Xã vĩnh hảo',
      district_id: '590700',
    },
    {
      id: '7966',
      name: 'Xã vĩnh thịnh',
      district_id: '590700',
    },
    {
      id: '7967',
      name: 'Xã vĩnh quang',
      district_id: '590700',
    },
    {
      id: '7968',
      name: 'Xã vĩnh thuận',
      district_id: '590700',
    },
    {
      id: '7969',
      name: 'Thị trấn vĩnh thạnh',
      district_id: '590700',
    },
    {
      id: '7970',
      name: 'Xã vĩnh sơn',
      district_id: '590700',
    },
    {
      id: '7971',
      name: 'Xã vĩnh kim',
      district_id: '590700',
    },
    {
      id: '7938',
      name: 'Xã ân đức',
      district_id: '590300',
    },
    {
      id: '7939',
      name: 'Xã ân phong',
      district_id: '590300',
    },
    {
      id: '7940',
      name: 'Xã ân thạnh',
      district_id: '590300',
    },
    {
      id: '7941',
      name: 'Xã ân tín',
      district_id: '590300',
    },
    {
      id: '7942',
      name: 'Xã ân hảo đông',
      district_id: '590300',
    },
    {
      id: '7943',
      name: 'Xã ân hảo tây',
      district_id: '590300',
    },
    {
      id: '7944',
      name: 'Xã ân mỹ',
      district_id: '590300',
    },
    {
      id: '7945',
      name: 'Xã Boktới',
      district_id: '590300',
    },
    {
      id: '7946',
      name: 'Xã ân sơn',
      district_id: '590300',
    },
    {
      id: '7947',
      name: 'Xã ân hữu',
      district_id: '590300',
    },
    {
      id: '7948',
      name: 'Xã ân nghĩa',
      district_id: '590300',
    },
    {
      id: '7949',
      name: 'Thị trấn tăng bạt hổ',
      district_id: '590300',
    },
    {
      id: '7950',
      name: 'Xã ân tường đông',
      district_id: '590300',
    },
    {
      id: '7951',
      name: 'Xã ân tường tây',
      district_id: '590300',
    },
    {
      id: '7952',
      name: 'Xã đakmang',
      district_id: '590300',
    },
    {
      id: '9847',
      name: 'Xã thanh lương',
      district_id: '830400',
    },
    {
      id: '9848',
      name: 'Xã thanh phú',
      district_id: '830400',
    },
    {
      id: '9849',
      name: 'Phường an lộc',
      district_id: '830400',
    },
    {
      id: '9850',
      name: 'Phường hưng chiến',
      district_id: '830400',
    },
    {
      id: '9851',
      name: 'Phường phú thịnh',
      district_id: '830400',
    },
    {
      id: '9852',
      name: 'Phường phú đức',
      district_id: '830400',
    },
    {
      id: '9815',
      name: 'Xã đức liễu',
      district_id: '830800',
    },
    {
      id: '9816',
      name: 'Xã minh hưng',
      district_id: '830800',
    },
    {
      id: '9817',
      name: 'Thị trấn đức phong',
      district_id: '830800',
    },
    {
      id: '9818',
      name: 'Xã bom bo',
      district_id: '830800',
    },
    {
      id: '9819',
      name: 'Xã phước sơn',
      district_id: '830800',
    },
    {
      id: '9820',
      name: 'Xã thống nhất',
      district_id: '830800',
    },
    {
      id: '9821',
      name: 'Xã nghĩa bình',
      district_id: '830800',
    },
    {
      id: '9823',
      name: 'Xã bình minh',
      district_id: '830800',
    },
    {
      id: '9824',
      name: 'Xã đoàn kết',
      district_id: '830800',
    },
    {
      id: '9825',
      name: 'Xã phú sơn',
      district_id: '830800',
    },
    {
      id: '9826',
      name: 'Xã nghĩa trung',
      district_id: '830800',
    },
    {
      id: '9828',
      name: 'Xã đăng hà',
      district_id: '830800',
    },
    {
      id: '9829',
      name: 'Xã đồng nai',
      district_id: '830800',
    },
    {
      id: '9830',
      name: 'Xã thọ sơn',
      district_id: '830800',
    },
    {
      id: '12212',
      name: 'Xã đak nhau',
      district_id: '830800',
    },
    {
      id: '12213',
      name: 'Xã đường 10',
      district_id: '830800',
    },
    {
      id: '9795',
      name: 'Phường tân bình',
      district_id: '830100',
    },
    {
      id: '9796',
      name: 'Xã tiến hưng',
      district_id: '830100',
    },
    {
      id: '9797',
      name: 'Phường tân phú',
      district_id: '830100',
    },
    {
      id: '9798',
      name: 'Phường tân thiện',
      district_id: '830100',
    },
    {
      id: '9799',
      name: 'Phường tân đồng',
      district_id: '830100',
    },
    {
      id: '9800',
      name: 'Phường tân xuân',
      district_id: '830100',
    },
    {
      id: '9801',
      name: 'Xã tân thành',
      district_id: '830100',
    },
    {
      id: '9802',
      name: 'Xã tiến thành',
      district_id: '830100',
    },
    {
      id: '9831',
      name: 'Thị trấn lộc ninh',
      district_id: '830500',
    },
    {
      id: '9832',
      name: 'Xã lộc quang',
      district_id: '830500',
    },
    {
      id: '9833',
      name: 'Xã lộc thiện',
      district_id: '830500',
    },
    {
      id: '9834',
      name: 'Xã lộc phú',
      district_id: '830500',
    },
    {
      id: '9835',
      name: 'Xã lộc thịnh',
      district_id: '830500',
    },
    {
      id: '9836',
      name: 'Xã lộc thái',
      district_id: '830500',
    },
    {
      id: '9837',
      name: 'Xã lộc hiệp',
      district_id: '830500',
    },
    {
      id: '9838',
      name: 'Xã lộc hưng',
      district_id: '830500',
    },
    {
      id: '9839',
      name: 'Xã lộc tấn',
      district_id: '830500',
    },
    {
      id: '9840',
      name: 'Xã lộc điền',
      district_id: '830500',
    },
    {
      id: '9841',
      name: 'Xã lộc khánh',
      district_id: '830500',
    },
    {
      id: '9842',
      name: 'Xã lôc thành',
      district_id: '830500',
    },
    {
      id: '9843',
      name: 'Xã lộc hòa',
      district_id: '830500',
    },
    {
      id: '9844',
      name: 'Xã lộc an',
      district_id: '830500',
    },
    {
      id: '9845',
      name: 'Xã Lộc Thạch',
      district_id: '830500',
    },
    {
      id: '9846',
      name: 'Xã lộc thuận',
      district_id: '830500',
    },
    {
      id: '9871',
      name: 'Phường phước bình',
      district_id: '830700',
    },
    {
      id: '9872',
      name: 'Phường long phước',
      district_id: '830700',
    },
    {
      id: '9873',
      name: 'Phường thác mơ',
      district_id: '830700',
    },
    {
      id: '9874',
      name: 'Phường long thuỷ',
      district_id: '830700',
    },
    {
      id: '9875',
      name: 'Xã long giang',
      district_id: '830700',
    },
    {
      id: '9876',
      name: 'Xã phước tín',
      district_id: '830700',
    },
    {
      id: '9877',
      name: 'Phường sơn giang',
      district_id: '830700',
    },
    {
      id: '9878',
      name: 'Xã bù gia mập',
      district_id: '831000',
    },
    {
      id: '9879',
      name: 'Xã bình thắng',
      district_id: '831000',
    },
    {
      id: '9880',
      name: 'Xã phú văn',
      district_id: '831000',
    },
    {
      id: '9881',
      name: 'Xá đắk ơ',
      district_id: '831000',
    },
    {
      id: '9882',
      name: 'Xã phú nghĩa',
      district_id: '831000',
    },
    {
      id: '9883',
      name: 'Xã phước minh',
      district_id: '831000',
    },
    {
      id: '9885',
      name: 'Xã đức hạnh',
      district_id: '831000',
    },
    {
      id: '12507',
      name: 'Xã đa kia',
      district_id: '831000',
    },
    {
      id: '9864',
      name: 'Thị trấn thanh bình',
      district_id: '830600',
    },
    {
      id: '9865',
      name: 'Xã tân thành',
      district_id: '830600',
    },
    {
      id: '9866',
      name: 'Xã hưng phước',
      district_id: '830600',
    },
    {
      id: '9867',
      name: 'Xã tân tiến',
      district_id: '830600',
    },
    {
      id: '9868',
      name: 'Xã thiện hưng',
      district_id: '830600',
    },
    {
      id: '9869',
      name: 'Xã phước thiện',
      district_id: '830600',
    },
    {
      id: '9870',
      name: 'Xã thanh hòa',
      district_id: '830600',
    },
    {
      id: '9854',
      name: 'Phường Hưng Long',
      district_id: '830300',
    },
    {
      id: '9855',
      name: 'Xã minh lập',
      district_id: '830300',
    },
    {
      id: '9856',
      name: 'Xã minh thắng',
      district_id: '830300',
    },
    {
      id: '9857',
      name: 'Xã nha bích',
      district_id: '830300',
    },
    {
      id: '9858',
      name: 'Phường Minh Thành',
      district_id: '830300',
    },
    {
      id: '9859',
      name: 'Phường Thành Tâm',
      district_id: '830300',
    },
    {
      id: '9860',
      name: 'Phường Minh Long',
      district_id: '830300',
    },
    {
      id: '9861',
      name: 'Phường Minh Hưng',
      district_id: '830300',
    },
    {
      id: '9862',
      name: 'Xã quang minh',
      district_id: '830300',
    },
    {
      id: '12775',
      name: 'Thị Trấn Chơn Thành',
      district_id: '830300',
    },
    {
      id: '9803',
      name: 'Thị trấn tân phú',
      district_id: '830200',
    },
    {
      id: '9804',
      name: 'Xã tân tiến',
      district_id: '830200',
    },
    {
      id: '9805',
      name: 'Xã đồng tiến',
      district_id: '830200',
    },
    {
      id: '9807',
      name: 'Xã thuận phú',
      district_id: '830200',
    },
    {
      id: '9808',
      name: 'Xã thuận lợi',
      district_id: '830200',
    },
    {
      id: '9809',
      name: 'Xã tân lợi',
      district_id: '830200',
    },
    {
      id: '9810',
      name: 'Xã tân phước',
      district_id: '830200',
    },
    {
      id: '9811',
      name: 'Xã tân lập',
      district_id: '830200',
    },
    {
      id: '9812',
      name: 'Xã tân hòa',
      district_id: '830200',
    },
    {
      id: '9813',
      name: 'Xã đồng tâm',
      district_id: '830200',
    },
    {
      id: '9814',
      name: 'Xẫ tân hưng',
      district_id: '830200',
    },
    {
      id: '9886',
      name: 'Thị Trấn Tân Khai',
      district_id: '830900',
    },
    {
      id: '9887',
      name: 'Xã tân lợi',
      district_id: '830900',
    },
    {
      id: '9888',
      name: 'Xã tân hưng',
      district_id: '830900',
    },
    {
      id: '9889',
      name: 'Xã an khương',
      district_id: '830900',
    },
    {
      id: '9890',
      name: 'Xã đồng nơ',
      district_id: '830900',
    },
    {
      id: '9891',
      name: 'Xã minh đức',
      district_id: '830900',
    },
    {
      id: '9892',
      name: 'Xã minh tâm',
      district_id: '830900',
    },
    {
      id: '9893',
      name: 'Xã thanh an',
      district_id: '830900',
    },
    {
      id: '9894',
      name: 'Xã phước an',
      district_id: '830900',
    },
    {
      id: '9895',
      name: 'Xã thanh bình',
      district_id: '830900',
    },
    {
      id: '9896',
      name: 'Xã tân hiệp',
      district_id: '830900',
    },
    {
      id: '9897',
      name: 'Xã an phú',
      district_id: '830900',
    },
    {
      id: '12508',
      name: 'Xã tân quan',
      district_id: '830900',
    },
    {
      id: '9473',
      name: 'Xã tân hà',
      district_id: '800600',
    },
    {
      id: '9475',
      name: 'Xã tân xuân',
      district_id: '800600',
    },
    {
      id: '9476',
      name: 'Xã sông phan',
      district_id: '800600',
    },
    {
      id: '9477',
      name: 'Xã tân đức',
      district_id: '800600',
    },
    {
      id: '9478',
      name: 'Xã thắng hải',
      district_id: '800600',
    },
    {
      id: '9479',
      name: 'Xã tân thắng',
      district_id: '800600',
    },
    {
      id: '9480',
      name: 'Xã tân phúc',
      district_id: '800600',
    },
    {
      id: '9481',
      name: 'Xã sơn mỹ',
      district_id: '800600',
    },
    {
      id: '9482',
      name: 'Thị trấn tân minh',
      district_id: '800600',
    },
    {
      id: '9483',
      name: 'Thị trấn tân nghĩa',
      district_id: '800600',
    },
    {
      id: '9487',
      name: 'Phường tân an',
      district_id: '801000',
    },
    {
      id: '9488',
      name: 'Phường tân thiện',
      district_id: '801000',
    },
    {
      id: '9489',
      name: 'Phường bình tân',
      district_id: '801000',
    },
    {
      id: '9490',
      name: 'Phường phước lộc',
      district_id: '801000',
    },
    {
      id: '9491',
      name: 'Phường phước hội',
      district_id: '801000',
    },
    {
      id: '9492',
      name: 'Xã tân phước',
      district_id: '801000',
    },
    {
      id: '9493',
      name: 'Xã tân tiến',
      district_id: '801000',
    },
    {
      id: '9494',
      name: 'Xã tân bình',
      district_id: '801000',
    },
    {
      id: '9495',
      name: 'Xã tân hải',
      district_id: '801000',
    },
    {
      id: '9364',
      name: 'Phường xuân an',
      district_id: '800100',
    },
    {
      id: '9365',
      name: 'Phường xuân an',
      district_id: '800100',
    },
    {
      id: '9366',
      name: 'Phường bình hưng',
      district_id: '800100',
    },
    {
      id: '9367',
      name: 'Phường hưng long',
      district_id: '800100',
    },
    {
      id: '9368',
      name: 'Phường phú thủy',
      district_id: '800100',
    },
    {
      id: '9369',
      name: 'Phường phú trinh',
      district_id: '800100',
    },
    {
      id: '9370',
      name: 'Phường đức long',
      district_id: '800100',
    },
    {
      id: '9371',
      name: 'Phường đức thắng',
      district_id: '800100',
    },
    {
      id: '9372',
      name: 'Phường đức nghĩa',
      district_id: '800100',
    },
    {
      id: '9373',
      name: 'Phường phú tài',
      district_id: '800100',
    },
    {
      id: '9374',
      name: 'Phường thanh hải',
      district_id: '800100',
    },
    {
      id: '9375',
      name: 'Phường phú hài',
      district_id: '800100',
    },
    {
      id: '9376',
      name: 'Phường hàm tiến',
      district_id: '800100',
    },
    {
      id: '9377',
      name: 'Phường lạc đạo',
      district_id: '800100',
    },
    {
      id: '9378',
      name: 'Phường mũi né',
      district_id: '800100',
    },
    {
      id: '9379',
      name: 'Xã thiện nghiệp',
      district_id: '800100',
    },
    {
      id: '9381',
      name: 'Xã tiến thành',
      district_id: '800100',
    },
    {
      id: '9382',
      name: 'Xã tiến lợi',
      district_id: '800100',
    },
    {
      id: '12095',
      name: 'Xã phong nẫm',
      district_id: '800100',
    },
    {
      id: '9401',
      name: 'Thị trấn liên hương',
      district_id: '800200',
    },
    {
      id: '9402',
      name: 'Xã hòa minh',
      district_id: '800200',
    },
    {
      id: '9403',
      name: 'Xã chí công',
      district_id: '800200',
    },
    {
      id: '9404',
      name: 'Xã bình thạnh',
      district_id: '800200',
    },
    {
      id: '9405',
      name: 'Xã phú lạc',
      district_id: '800200',
    },
    {
      id: '9406',
      name: 'Xã vĩnh hảo',
      district_id: '800200',
    },
    {
      id: '9407',
      name: 'Xã phong phú',
      district_id: '800200',
    },
    {
      id: '9408',
      name: 'Xã vĩnh tân',
      district_id: '800200',
    },
    {
      id: '9409',
      name: 'Xã phan dũng',
      district_id: '800200',
    },
    {
      id: '9410',
      name: 'Xã phước thể',
      district_id: '800200',
    },
    {
      id: '9411',
      name: 'Xã hòa phú',
      district_id: '800200',
    },
    {
      id: '9412',
      name: 'Thị trấn phan rí cửa',
      district_id: '800200',
    },
    {
      id: '9383',
      name: 'Thị trấn chợ lầu',
      district_id: '800300',
    },
    {
      id: '9384',
      name: 'Xã phan rí thành',
      district_id: '800300',
    },
    {
      id: '9385',
      name: 'Thị trấn lương sơn',
      district_id: '800300',
    },
    {
      id: '9386',
      name: 'Xã hải ninh',
      district_id: '800300',
    },
    {
      id: '9387',
      name: 'Xã bình an',
      district_id: '800300',
    },
    {
      id: '9388',
      name: 'Xã phan điền',
      district_id: '800300',
    },
    {
      id: '9389',
      name: 'Xã phan sơn',
      district_id: '800300',
    },
    {
      id: '9390',
      name: 'Xã phan lâm',
      district_id: '800300',
    },
    {
      id: '9391',
      name: 'Xã hồng phong',
      district_id: '800300',
    },
    {
      id: '9392',
      name: 'Xã hòa thắng',
      district_id: '800300',
    },
    {
      id: '9393',
      name: 'Xã bình tân',
      district_id: '800300',
    },
    {
      id: '9394',
      name: 'Xã phan hòa',
      district_id: '800300',
    },
    {
      id: '9395',
      name: 'Xã phan tiến',
      district_id: '800300',
    },
    {
      id: '9396',
      name: 'Xã sông lũy',
      district_id: '800300',
    },
    {
      id: '9397',
      name: 'Xã sông bình',
      district_id: '800300',
    },
    {
      id: '9398',
      name: 'Xã hồng thái',
      district_id: '800300',
    },
    {
      id: '9399',
      name: 'Xã phan thanh',
      district_id: '800300',
    },
    {
      id: '9400',
      name: 'Xã phan hiệp',
      district_id: '800300',
    },
    {
      id: '9459',
      name: 'Xã đức chính',
      district_id: '800700',
    },
    {
      id: '9461',
      name: 'Xã nam chính',
      district_id: '800700',
    },
    {
      id: '9462',
      name: 'Thị trấn đức tài',
      district_id: '800700',
    },
    {
      id: '9463',
      name: 'Thị trấn võ xu',
      district_id: '800700',
    },
    {
      id: '9464',
      name: 'Xã đức hạnh',
      district_id: '800700',
    },
    {
      id: '9465',
      name: 'Xã vũ hòa',
      district_id: '800700',
    },
    {
      id: '9466',
      name: 'Xã đức tín',
      district_id: '800700',
    },
    {
      id: '9467',
      name: 'Xã tân hà',
      district_id: '800700',
    },
    {
      id: '9468',
      name: 'Xã mê pu',
      district_id: '800700',
    },
    {
      id: '9469',
      name: 'Xã trà tân',
      district_id: '800700',
    },
    {
      id: '9470',
      name: 'Xã đa kai',
      district_id: '800700',
    },
    {
      id: '9471',
      name: 'Xã đông hà',
      district_id: '800700',
    },
    {
      id: '9472',
      name: 'Xã sùng nhơn',
      district_id: '800700',
    },
    {
      id: '9413',
      name: 'Xã hàm thắng',
      district_id: '800400',
    },
    {
      id: '9414',
      name: 'Xã hàm chính',
      district_id: '800400',
    },
    {
      id: '9415',
      name: 'Xã hàm liêm',
      district_id: '800400',
    },
    {
      id: '9416',
      name: 'Thị trấn phú long',
      district_id: '800400',
    },
    {
      id: '9417',
      name: 'Thị trấn ma lâm',
      district_id: '800400',
    },
    {
      id: '9418',
      name: 'Xã đa mi',
      district_id: '800400',
    },
    {
      id: '9419',
      name: 'Xã thuận minh',
      district_id: '800400',
    },
    {
      id: '9420',
      name: 'Xã hàm hiệp',
      district_id: '800400',
    },
    {
      id: '9421',
      name: 'Xã hàm trí',
      district_id: '800400',
    },
    {
      id: '9422',
      name: 'Xã hồng liêm',
      district_id: '800400',
    },
    {
      id: '9423',
      name: 'Xã đông tiến',
      district_id: '800400',
    },
    {
      id: '9424',
      name: 'Xã la dạ',
      district_id: '800400',
    },
    {
      id: '9425',
      name: 'Xã đông giang',
      district_id: '800400',
    },
    {
      id: '9426',
      name: 'Xã thuận hòa',
      district_id: '800400',
    },
    {
      id: '9427',
      name: 'Xã hàm phú',
      district_id: '800400',
    },
    {
      id: '9428',
      name: 'Xã hàm đức',
      district_id: '800400',
    },
    {
      id: '9429',
      name: 'Xã hồng sơn',
      district_id: '800400',
    },
    {
      id: '9430',
      name: 'Xã hàm thạnh',
      district_id: '800500',
    },
    {
      id: '9431',
      name: 'Xã hàm minh',
      district_id: '800500',
    },
    {
      id: '9432',
      name: 'Xã hàm kiệm',
      district_id: '800500',
    },
    {
      id: '9433',
      name: 'Xã tân thuận',
      district_id: '800500',
    },
    {
      id: '9434',
      name: 'Xã tân thành',
      district_id: '800500',
    },
    {
      id: '9435',
      name: 'Xã hàm mỹ',
      district_id: '800500',
    },
    {
      id: '9437',
      name: 'Xã tân lập',
      district_id: '800500',
    },
    {
      id: '9439',
      name: 'Xã mương mán',
      district_id: '800500',
    },
    {
      id: '9440',
      name: 'Xã mỹ thạnh',
      district_id: '800500',
    },
    {
      id: '9441',
      name: 'Xã hàm cần',
      district_id: '800500',
    },
    {
      id: '9442',
      name: 'Xã hàm cường',
      district_id: '800500',
    },
    {
      id: '12093',
      name: 'Thị trấn thuận nam',
      district_id: '800500',
    },
    {
      id: '12094',
      name: 'Xã thuận quí',
      district_id: '800500',
    },
    {
      id: '9484',
      name: 'Xã ngũ phụng',
      district_id: '800900',
    },
    {
      id: '9485',
      name: 'Xã long hải',
      district_id: '800900',
    },
    {
      id: '9486',
      name: 'Xã Tam Thanh',
      district_id: '800900',
    },
    {
      id: '9444',
      name: 'Thị trấn lạc tánh',
      district_id: '800800',
    },
    {
      id: '9446',
      name: 'Xã đồng kho',
      district_id: '800800',
    },
    {
      id: '9447',
      name: 'Xã đức bình',
      district_id: '800800',
    },
    {
      id: '9448',
      name: 'Xã đức thuận',
      district_id: '800800',
    },
    {
      id: '9449',
      name: 'Xã gia an',
      district_id: '800800',
    },
    {
      id: '9450',
      name: 'Xã gia huynh',
      district_id: '800800',
    },
    {
      id: '9451',
      name: 'Xã huy khiêm',
      district_id: '800800',
    },
    {
      id: '9452',
      name: 'Xã la ngâu',
      district_id: '800800',
    },
    {
      id: '9453',
      name: 'Xã đức tân',
      district_id: '800800',
    },
    {
      id: '9454',
      name: 'Xã đức phú',
      district_id: '800800',
    },
    {
      id: '9455',
      name: 'Xã bắc ruộng',
      district_id: '800800',
    },
    {
      id: '9456',
      name: 'Xã nghị đức',
      district_id: '800800',
    },
    {
      id: '9457',
      name: 'Xã suối kiết',
      district_id: '800800',
    },
    {
      id: '9458',
      name: 'Xã măng tố',
      district_id: '800800',
    },
    {
      id: '11241',
      name: 'Thị trấn ba tri',
      district_id: '930700',
    },
    {
      id: '11242',
      name: 'Xã tân xuân',
      district_id: '930700',
    },
    {
      id: '11243',
      name: 'Xã mỹ hòa',
      district_id: '930700',
    },
    {
      id: '11244',
      name: 'Xã mỹ chánh',
      district_id: '930700',
    },
    {
      id: '11245',
      name: 'Xã mỹ nhơn',
      district_id: '930700',
    },
    {
      id: '11246',
      name: 'Xã mỹ thạnh',
      district_id: '930700',
    },
    {
      id: '11247',
      name: 'Xã an phú trung',
      district_id: '930700',
    },
    {
      id: '11248',
      name: 'Xã An Ngãi Trung',
      district_id: '930700',
    },
    {
      id: '11249',
      name: 'Xã tân hưng',
      district_id: '930700',
    },
    {
      id: '11250',
      name: 'Xã an ngãi tây',
      district_id: '930700',
    },
    {
      id: '11251',
      name: 'Xã an hiệp',
      district_id: '930700',
    },
    {
      id: '11252',
      name: 'Xã an bình tây',
      district_id: '930700',
    },
    {
      id: '11253',
      name: 'Xã phú lễ',
      district_id: '930700',
    },
    {
      id: '11254',
      name: 'Xã phú ngãi',
      district_id: '930700',
    },
    {
      id: '11255',
      name: 'Xã phước tuy',
      district_id: '930700',
    },
    {
      id: '11256',
      name: 'Xã bảo thạnh',
      district_id: '930700',
    },
    {
      id: '11257',
      name: 'Xã bảo thuận',
      district_id: '930700',
    },
    {
      id: '11258',
      name: 'Xã tân thủy',
      district_id: '930700',
    },
    {
      id: '11259',
      name: 'Xã vĩnh hòa',
      district_id: '930700',
    },
    {
      id: '11260',
      name: 'Xã vĩnh an',
      district_id: '930700',
    },
    {
      id: '11261',
      name: 'Xã an đức',
      district_id: '930700',
    },
    {
      id: '11262',
      name: 'Xã an hòa tây',
      district_id: '930700',
    },
    {
      id: '11263',
      name: 'Xã an thủy',
      district_id: '930700',
    },
    {
      id: '11264',
      name: 'Xã tân mỹ',
      district_id: '930700',
    },
    {
      id: '11120',
      name: 'Phường phú khương',
      district_id: '930100',
    },
    {
      id: '11121',
      name: 'Xã phú nhuận',
      district_id: '930100',
    },
    {
      id: '11122',
      name: 'Xã mỹ thạnh an',
      district_id: '930100',
    },
    {
      id: '11123',
      name: 'Phường 1',
      district_id: '930100',
    },
    {
      id: '11124',
      name: 'Phường 2',
      district_id: '930100',
    },
    {
      id: '11125',
      name: 'Phường 3',
      district_id: '930100',
    },
    {
      id: '11126',
      name: 'Phường 5',
      district_id: '930100',
    },
    {
      id: '11127',
      name: 'Phường phú tân',
      district_id: '930100',
    },
    {
      id: '11128',
      name: 'Xã nhơn thạnh',
      district_id: '930100',
    },
    {
      id: '11129',
      name: 'Xã bình phú',
      district_id: '930100',
    },
    {
      id: '11130',
      name: 'Xã sơn đông',
      district_id: '930100',
    },
    {
      id: '11131',
      name: 'Xã phú hưng',
      district_id: '930100',
    },
    {
      id: '11132',
      name: 'Phường 4',
      district_id: '930100',
    },
    {
      id: '11133',
      name: 'Phường 6',
      district_id: '930100',
    },
    {
      id: '11134',
      name: 'Phường 7',
      district_id: '930100',
    },
    {
      id: '11135',
      name: 'Phường 8',
      district_id: '930100',
    },
    {
      id: '12406',
      name: 'Xã mỹ thành',
      district_id: '930100',
    },
    {
      id: '12719',
      name: 'Phường An Hội',
      district_id: '930100',
    },
    {
      id: '11265',
      name: 'Thị trấn bình đại',
      district_id: '930600',
    },
    {
      id: '11266',
      name: 'Xã tam hiệp',
      district_id: '930600',
    },
    {
      id: '11267',
      name: 'Xã long định',
      district_id: '930600',
    },
    {
      id: '11268',
      name: 'Xã long hòa',
      district_id: '930600',
    },
    {
      id: '11269',
      name: 'Xã phú thuận',
      district_id: '930600',
    },
    {
      id: '11270',
      name: 'Xã châu hưng',
      district_id: '930600',
    },
    {
      id: '11271',
      name: 'Xã vang quới tây',
      district_id: '930600',
    },
    {
      id: '11272',
      name: 'Xã vang quới đông',
      district_id: '930600',
    },
    {
      id: '11273',
      name: 'Xã thới lai',
      district_id: '930600',
    },
    {
      id: '11274',
      name: 'Xã phú vang',
      district_id: '930600',
    },
    {
      id: '11275',
      name: 'Xã lộc thuận',
      district_id: '930600',
    },
    {
      id: '11276',
      name: 'Xã định trung',
      district_id: '930600',
    },
    {
      id: '11277',
      name: 'Xã phú long',
      district_id: '930600',
    },
    {
      id: '11278',
      name: 'Xã bình thới',
      district_id: '930600',
    },
    {
      id: '11279',
      name: 'Xã thạnh trị',
      district_id: '930600',
    },
    {
      id: '11280',
      name: 'Xã đại hòa lộc',
      district_id: '930600',
    },
    {
      id: '11281',
      name: 'Xã bình thắng',
      district_id: '930600',
    },
    {
      id: '11282',
      name: 'Xã thạnh phước',
      district_id: '930600',
    },
    {
      id: '11283',
      name: 'Xã thừa đức',
      district_id: '930600',
    },
    {
      id: '11284',
      name: 'Xã thới thuận',
      district_id: '930600',
    },
    {
      id: '11136',
      name: 'Xã an khánh',
      district_id: '930200',
    },
    {
      id: '11137',
      name: 'Xã thành triệu',
      district_id: '930200',
    },
    {
      id: '11138',
      name: 'Xã phú đức',
      district_id: '930200',
    },
    {
      id: '11139',
      name: 'Thị trấn châu thành',
      district_id: '930200',
    },
    {
      id: '11140',
      name: 'Xã phú túc',
      district_id: '930200',
    },
    {
      id: '11141',
      name: 'Xã tường đa',
      district_id: '930200',
    },
    {
      id: '11142',
      name: 'Xã tam phước',
      district_id: '930200',
    },
    {
      id: '11143',
      name: 'Xã phước thạnh',
      district_id: '930200',
    },
    {
      id: '11144',
      name: 'Xã hữu định',
      district_id: '930200',
    },
    {
      id: '11145',
      name: 'Xã tân thạch',
      district_id: '930200',
    },
    {
      id: '11146',
      name: 'Xã an phước',
      district_id: '930200',
    },
    {
      id: '11147',
      name: 'Xã giao long',
      district_id: '930200',
    },
    {
      id: '11148',
      name: 'Xã an hiệp',
      district_id: '930200',
    },
    {
      id: '11149',
      name: 'Xã quới sơn',
      district_id: '930200',
    },
    {
      id: '11150',
      name: 'Xã tân phú',
      district_id: '930200',
    },
    {
      id: '11152',
      name: 'Xã phú an hòa',
      district_id: '930200',
    },
    {
      id: '11153',
      name: 'Xã an hóa',
      district_id: '930200',
    },
    {
      id: '11154',
      name: 'Xã giao hòa',
      district_id: '930200',
    },
    {
      id: '11155',
      name: 'Xã tiên long',
      district_id: '930200',
    },
    {
      id: '11156',
      name: 'Xã tiên thủy',
      district_id: '930200',
    },
    {
      id: '11157',
      name: 'Xã quới thành',
      district_id: '930200',
    },
    {
      id: '11158',
      name: 'Xã sơn hòa',
      district_id: '930200',
    },
    {
      id: '11159',
      name: 'Thị trấn chợ lách',
      district_id: '930300',
    },
    {
      id: '11160',
      name: 'Xã phú phụng',
      district_id: '930300',
    },
    {
      id: '11161',
      name: 'Xã vĩnh bình',
      district_id: '930300',
    },
    {
      id: '11162',
      name: 'Xã long thới',
      district_id: '930300',
    },
    {
      id: '11163',
      name: 'Xã vĩnh thành',
      district_id: '930300',
    },
    {
      id: '11164',
      name: 'Xã phú sơn',
      district_id: '930300',
    },
    {
      id: '11165',
      name: 'Xã vĩnh hòa',
      district_id: '930300',
    },
    {
      id: '11166',
      name: 'Xã tân thiềng',
      district_id: '930300',
    },
    {
      id: '11167',
      name: 'Xã sơn định',
      district_id: '930300',
    },
    {
      id: '11168',
      name: 'Xã hòa nghĩa',
      district_id: '930300',
    },
    {
      id: '12403',
      name: 'Xã hưng khánh trung b',
      district_id: '930300',
    },
    {
      id: '11201',
      name: 'Thị trấn giồng trôm',
      district_id: '930500',
    },
    {
      id: '11202',
      name: 'Xã phong nẫm',
      district_id: '930500',
    },
    {
      id: '11203',
      name: 'Xã phong mỹ',
      district_id: '930500',
    },
    {
      id: '11204',
      name: 'Xã mỹ thạnh',
      district_id: '930500',
    },
    {
      id: '11205',
      name: 'Xã lương phú',
      district_id: '930500',
    },
    {
      id: '11206',
      name: 'Xã thuận điền',
      district_id: '930500',
    },
    {
      id: '11207',
      name: 'Xã sơn phú',
      district_id: '930500',
    },
    {
      id: '11208',
      name: 'Xã phước long',
      district_id: '930500',
    },
    {
      id: '11209',
      name: 'Xã long mỹ',
      district_id: '930500',
    },
    {
      id: '11210',
      name: 'Xã hưng phong',
      district_id: '930500',
    },
    {
      id: '11211',
      name: 'Xã lương hòa',
      district_id: '930500',
    },
    {
      id: '11212',
      name: 'Xã Lương Qưới',
      district_id: '930500',
    },
    {
      id: '11213',
      name: 'Xã châu hòa',
      district_id: '930500',
    },
    {
      id: '11214',
      name: 'Xã châu bình',
      district_id: '930500',
    },
    {
      id: '11215',
      name: 'Xã bình hòa',
      district_id: '930500',
    },
    {
      id: '11216',
      name: 'Xã bình thành',
      district_id: '930500',
    },
    {
      id: '11217',
      name: 'Xã tân thanh',
      district_id: '930500',
    },
    {
      id: '11218',
      name: 'Xã tân hào',
      district_id: '930500',
    },
    {
      id: '11220',
      name: 'Xã thạnh phú đông',
      district_id: '930500',
    },
    {
      id: '11221',
      name: 'Xã hưng lễ',
      district_id: '930500',
    },
    {
      id: '11222',
      name: 'Xã hưng nhượng',
      district_id: '930500',
    },
    {
      id: '12405',
      name: 'Xã tân lợi thạnh',
      district_id: '930500',
    },
    {
      id: '11184',
      name: 'Xã tân trung',
      district_id: '930900',
    },
    {
      id: '11185',
      name: 'Xã bình khánh tây',
      district_id: '930900',
    },
    {
      id: '11186',
      name: 'Xã ngãi đăng',
      district_id: '930900',
    },
    {
      id: '11187',
      name: 'Xã thành thới a',
      district_id: '930900',
    },
    {
      id: '11188',
      name: 'Xã minh đức',
      district_id: '930900',
    },
    {
      id: '11190',
      name: 'Xã bình khánh đông',
      district_id: '930900',
    },
    {
      id: '11191',
      name: 'Xã cẩm sơn',
      district_id: '930900',
    },
    {
      id: '11192',
      name: 'Xã an định',
      district_id: '930900',
    },
    {
      id: '11193',
      name: 'Xã phước hiệp',
      district_id: '930900',
    },
    {
      id: '11194',
      name: 'Xã định thủy',
      district_id: '930900',
    },
    {
      id: '11195',
      name: 'Xã đa phước hội',
      district_id: '930900',
    },
    {
      id: '11196',
      name: 'Xã an thạnh',
      district_id: '930900',
    },
    {
      id: '11197',
      name: 'Xã hương mỹ',
      district_id: '930900',
    },
    {
      id: '11198',
      name: 'Xã thành thới b',
      district_id: '930900',
    },
    {
      id: '11199',
      name: 'Xã an thới',
      district_id: '930900',
    },
    {
      id: '11200',
      name: 'Xã tân hội',
      district_id: '930900',
    },
    {
      id: '12404',
      name: 'Thị trấn mỏ cày',
      district_id: '930900',
    },
    {
      id: '11223',
      name: 'Xã thạnh hải',
      district_id: '930800',
    },
    {
      id: '11224',
      name: 'Xã thạnh phong',
      district_id: '930800',
    },
    {
      id: '11225',
      name: 'Thị trấn thạnh phú',
      district_id: '930800',
    },
    {
      id: '11226',
      name: 'Xã phú khánh',
      district_id: '930800',
    },
    {
      id: '11227',
      name: 'Xã đại điền',
      district_id: '930800',
    },
    {
      id: '11228',
      name: 'Xã tân phong',
      district_id: '930800',
    },
    {
      id: '11229',
      name: 'Xã thới thạnh',
      district_id: '930800',
    },
    {
      id: '11230',
      name: 'Xã qưới điền',
      district_id: '930800',
    },
    {
      id: '11231',
      name: 'Xã mỹ hưng',
      district_id: '930800',
    },
    {
      id: '11232',
      name: 'Xã hòa lợi',
      district_id: '930800',
    },
    {
      id: '11233',
      name: 'Xã bình thạnh',
      district_id: '930800',
    },
    {
      id: '11234',
      name: 'Xã an thạnh',
      district_id: '930800',
    },
    {
      id: '11235',
      name: 'Xã an điền',
      district_id: '930800',
    },
    {
      id: '11236',
      name: 'Xã an thuận',
      district_id: '930800',
    },
    {
      id: '11238',
      name: 'Xã an nhơn',
      district_id: '930800',
    },
    {
      id: '11239',
      name: 'Xã giao thạnh',
      district_id: '930800',
    },
    {
      id: '11240',
      name: 'Xã mỹ an',
      district_id: '930800',
    },
    {
      id: '12402',
      name: 'Xã an quy',
      district_id: '930800',
    },
    {
      id: '11170',
      name: 'Xã khánh thạnh tân',
      district_id: '930400',
    },
    {
      id: '11171',
      name: 'Xã nhuận phú tân',
      district_id: '930400',
    },
    {
      id: '11172',
      name: 'Xã tân phú tây',
      district_id: '930400',
    },
    {
      id: '11173',
      name: 'Xã hòa lộc',
      district_id: '930400',
    },
    {
      id: '11174',
      name: 'Xã thanh tân',
      district_id: '930400',
    },
    {
      id: '11175',
      name: 'Xã thạnh ngãi',
      district_id: '930400',
    },
    {
      id: '11176',
      name: 'Xã phước mỹ trung',
      district_id: '930400',
    },
    {
      id: '11178',
      name: 'Xã tân bình',
      district_id: '930400',
    },
    {
      id: '11179',
      name: 'Xã thành an',
      district_id: '930400',
    },
    {
      id: '11180',
      name: 'Xã hưng khánh trung a',
      district_id: '930400',
    },
    {
      id: '11181',
      name: 'Xã tân thành bình',
      district_id: '930400',
    },
    {
      id: '11182',
      name: 'Xã tân thanh tây',
      district_id: '930400',
    },
    {
      id: '11183',
      name: 'Xã phú mỹ',
      district_id: '930400',
    },
    {
      id: '2276',
      name: 'Phường Nguyễn Thị Minh Khai',
      district_id: '260100',
    },
    {
      id: '2277',
      name: 'Phường sông cầu',
      district_id: '260100',
    },
    {
      id: '2278',
      name: 'Phường đức xuân',
      district_id: '260100',
    },
    {
      id: '2279',
      name: 'Phường phùng chí kiên',
      district_id: '260100',
    },
    {
      id: '2280',
      name: 'Xã dương quang',
      district_id: '260100',
    },
    {
      id: '2281',
      name: 'Xã nông thượng',
      district_id: '260100',
    },
    {
      id: '11797',
      name: 'Phường huyền tụng',
      district_id: '260100',
    },
    {
      id: '11798',
      name: 'Phường xuất hóa',
      district_id: '260100',
    },
    {
      id: '2380',
      name: 'Thị trấn chợ mới',
      district_id: '260700',
    },
    {
      id: '2381',
      name: 'Xã yên đĩnh',
      district_id: '260700',
    },
    {
      id: '2382',
      name: 'Xã bình văn',
      district_id: '260700',
    },
    {
      id: '2383',
      name: 'Xã hòa mục',
      district_id: '260700',
    },
    {
      id: '2384',
      name: 'Xã mai lạp',
      district_id: '260700',
    },
    {
      id: '2385',
      name: 'Xã như cố',
      district_id: '260700',
    },
    {
      id: '2386',
      name: 'Xã nông thịnh',
      district_id: '260700',
    },
    {
      id: '2387',
      name: 'Xã quảng chu',
      district_id: '260700',
    },
    {
      id: '2388',
      name: 'Xã tân sơn',
      district_id: '260700',
    },
    {
      id: '2389',
      name: 'Xã thanh bình',
      district_id: '260700',
    },
    {
      id: '2390',
      name: 'Xã thanh mai',
      district_id: '260700',
    },
    {
      id: '2391',
      name: 'Xã thanh vận',
      district_id: '260700',
    },
    {
      id: '2392',
      name: 'Xã yên cư',
      district_id: '260700',
    },
    {
      id: '2393',
      name: 'Xã yên hân',
      district_id: '260700',
    },
    {
      id: '2394',
      name: 'Xã nông hạ',
      district_id: '260700',
    },
    {
      id: '2395',
      name: 'Xã cao kỳ',
      district_id: '260700',
    },
    {
      id: '12629',
      name: 'Thị Trấn Đồng Tâm',
      district_id: '260700',
    },
    {
      id: '12816',
      name: 'Xã Thanh Thịnh',
      district_id: '260700',
    },
    {
      id: '2286',
      name: 'Xã cư lế',
      district_id: '260400',
    },
    {
      id: '2287',
      name: 'Xã cường lợi',
      district_id: '260400',
    },
    {
      id: '2288',
      name: 'Xã lương thượng',
      district_id: '260400',
    },
    {
      id: '2289',
      name: 'Xã quang phong',
      district_id: '260400',
    },
    {
      id: '2290',
      name: 'Xã hữu thác',
      district_id: '260400',
    },
    {
      id: '2291',
      name: 'Xã kim hỷ',
      district_id: '260400',
    },
    {
      id: '2292',
      name: 'Xã văn minh',
      district_id: '260400',
    },
    {
      id: '2293',
      name: 'Xã vũ loan',
      district_id: '260400',
    },
    {
      id: '2294',
      name: 'Xã văn học',
      district_id: '260400',
    },
    {
      id: '2295',
      name: 'Xã xuân dương',
      district_id: '260400',
    },
    {
      id: '2296',
      name: 'Xã dương sơn',
      district_id: '260400',
    },
    {
      id: '2297',
      name: 'Xã kim lư',
      district_id: '260400',
    },
    {
      id: '2298',
      name: 'Xã lam sơn',
      district_id: '260400',
    },
    {
      id: '2299',
      name: 'Xã liêm thủy',
      district_id: '260400',
    },
    {
      id: '2300',
      name: 'Xã lương hạ',
      district_id: '260400',
    },
    {
      id: '2301',
      name: 'Xã lương thành',
      district_id: '260400',
    },
    {
      id: '2302',
      name: 'Xã côn minh',
      district_id: '260400',
    },
    {
      id: '2303',
      name: 'Xã hảo nghĩa',
      district_id: '260400',
    },
    {
      id: '2304',
      name: 'Xã đổng xá',
      district_id: '260400',
    },
    {
      id: '11799',
      name: 'Thị trấn yến lạc',
      district_id: '260400',
    },
    {
      id: '12720',
      name: 'Xã Văn Lang',
      district_id: '260400',
    },
    {
      id: '12799',
      name: 'Xã Trần Phú',
      district_id: '260400',
    },
    {
      id: '2323',
      name: 'Xã cốc đán',
      district_id: '260500',
    },
    {
      id: '2324',
      name: 'Thị trấn nà phặc',
      district_id: '260500',
    },
    {
      id: '2325',
      name: 'Xã hương nê',
      district_id: '260500',
    },
    {
      id: '2326',
      name: 'Xã thượng quan',
      district_id: '260500',
    },
    {
      id: '2327',
      name: 'Xã trung hòa',
      district_id: '260500',
    },
    {
      id: '2328',
      name: 'Xã đức vân',
      district_id: '260500',
    },
    {
      id: '2329',
      name: 'Xã thuần mang',
      district_id: '260500',
    },
    {
      id: '2330',
      name: 'Xã thượng ân',
      district_id: '260500',
    },
    {
      id: '2331',
      name: 'Xã vân tùng',
      district_id: '260500',
    },
    {
      id: '2332',
      name: 'Xã bằng vân',
      district_id: '260500',
    },
    {
      id: '2333',
      name: 'Xã lãng ngâm',
      district_id: '260500',
    },
    {
      id: '2334',
      name: 'Xã hương nê',
      district_id: '260500',
    },
    {
      id: '2336',
      name: 'Xã bành trạch',
      district_id: '260600',
    },
    {
      id: '2337',
      name: 'Xã cao thượng',
      district_id: '260600',
    },
    {
      id: '2338',
      name: 'Xã cao trĩ',
      district_id: '260600',
    },
    {
      id: '2339',
      name: 'Xã chu hương',
      district_id: '260600',
    },
    {
      id: '2340',
      name: 'Xã đồng phúc',
      district_id: '260600',
    },
    {
      id: '2341',
      name: 'Xã Hà Hiệu',
      district_id: '260600',
    },
    {
      id: '2342',
      name: 'Xã hoàng trĩ',
      district_id: '260600',
    },
    {
      id: '2343',
      name: 'Xã mỹ phương',
      district_id: '260600',
    },
    {
      id: '2344',
      name: 'Xã nam mẫu',
      district_id: '260600',
    },
    {
      id: '2345',
      name: 'Xã phúc lộc',
      district_id: '260600',
    },
    {
      id: '2347',
      name: 'Xã yến dương',
      district_id: '260600',
    },
    {
      id: '2349',
      name: 'Xã địa linh',
      district_id: '260600',
    },
    {
      id: '2351',
      name: 'Xã khang ninh',
      district_id: '260600',
    },
    {
      id: '2352',
      name: 'Xã thượng giáo',
      district_id: '260600',
    },
    {
      id: '2353',
      name: 'Xã quảng khê',
      district_id: '260600',
    },
    {
      id: '11795',
      name: 'Thị trấn chợ rã',
      district_id: '260600',
    },
    {
      id: '2306',
      name: 'Xã quang thuận',
      district_id: '260300',
    },
    {
      id: '2307',
      name: 'Xã đôn phong',
      district_id: '260300',
    },
    {
      id: '2308',
      name: 'Xã dương phong',
      district_id: '260300',
    },
    {
      id: '2309',
      name: 'Xã mỹ thanh',
      district_id: '260300',
    },
    {
      id: '2310',
      name: 'Xã cao sơn',
      district_id: '260300',
    },
    {
      id: '2311',
      name: 'Xã vi hương',
      district_id: '260300',
    },
    {
      id: '2312',
      name: 'Xã hà vị',
      district_id: '260300',
    },
    {
      id: '2313',
      name: 'Xã lục bình',
      district_id: '260300',
    },
    {
      id: '2314',
      name: 'Xã tú trĩ',
      district_id: '260300',
    },
    {
      id: '2315',
      name: 'Xã cẩm giàng',
      district_id: '260300',
    },
    {
      id: '2316',
      name: 'Xã tân tiến',
      district_id: '260300',
    },
    {
      id: '2317',
      name: 'Xã quân bình',
      district_id: '260300',
    },
    {
      id: '2318',
      name: 'Thị Trấn Phủ Thông',
      district_id: '260300',
    },
    {
      id: '2320',
      name: 'Xã vũ muộn',
      district_id: '260300',
    },
    {
      id: '2321',
      name: 'Xã nguyên phúc',
      district_id: '260300',
    },
    {
      id: '2322',
      name: 'Xã phương linh',
      district_id: '260300',
    },
    {
      id: '11796',
      name: 'Xã Sỹ Bình',
      district_id: '260300',
    },
    {
      id: '12563',
      name: 'Xã Quân Hà',
      district_id: '260300',
    },
    {
      id: '12805',
      name: 'Xã Tân Tú',
      district_id: '260300',
    },
    {
      id: '2396',
      name: 'Xã an thắng',
      district_id: '260800',
    },
    {
      id: '2397',
      name: 'Xã bằng thành',
      district_id: '260800',
    },
    {
      id: '2398',
      name: 'Xã xuân la',
      district_id: '260800',
    },
    {
      id: '2399',
      name: 'Xã nghiên loan',
      district_id: '260800',
    },
    {
      id: '2400',
      name: 'Xã cao tân',
      district_id: '260800',
    },
    {
      id: '2401',
      name: 'Xã cổ linh',
      district_id: '260800',
    },
    {
      id: '2402',
      name: 'Xã công bằng',
      district_id: '260800',
    },
    {
      id: '2403',
      name: 'Xã giáo hiệu',
      district_id: '260800',
    },
    {
      id: '2404',
      name: 'Xã nhạn môn',
      district_id: '260800',
    },
    {
      id: '2405',
      name: 'Xã bộc bố',
      district_id: '260800',
    },
    {
      id: '10805',
      name: 'Phường cái khế',
      district_id: '900100',
    },
    {
      id: '10806',
      name: 'Phường thới bình',
      district_id: '900100',
    },
    {
      id: '10807',
      name: 'Phường an nghiệp',
      district_id: '900100',
    },
    {
      id: '10808',
      name: 'Phường an cư',
      district_id: '900100',
    },
    {
      id: '10809',
      name: 'Phường an hội',
      district_id: '900100',
    },
    {
      id: '10810',
      name: 'Phường tân an',
      district_id: '900100',
    },
    {
      id: '10811',
      name: 'Phường an lạc',
      district_id: '900100',
    },
    {
      id: '10812',
      name: 'Phường an phú',
      district_id: '900100',
    },
    {
      id: '10813',
      name: 'Phường xuân khánh',
      district_id: '900100',
    },
    {
      id: '10814',
      name: 'Phường hưng lợi',
      district_id: '900100',
    },
    {
      id: '10815',
      name: 'Phường an bình',
      district_id: '900100',
    },
    {
      id: '10816',
      name: 'Phường an khánh',
      district_id: '900100',
    },
    {
      id: '10817',
      name: 'Phường an hòa',
      district_id: '900100',
    },
    {
      id: '10818',
      name: 'Phường trà nóc',
      district_id: '900200',
    },
    {
      id: '10819',
      name: 'Phường an thới',
      district_id: '900200',
    },
    {
      id: '10820',
      name: 'Phường bình thủy',
      district_id: '900200',
    },
    {
      id: '10821',
      name: 'Phường long hòa',
      district_id: '900200',
    },
    {
      id: '10822',
      name: 'Phường trà an',
      district_id: '900200',
    },
    {
      id: '10823',
      name: 'Phường bùi hữu nghĩa',
      district_id: '900200',
    },
    {
      id: '10824',
      name: 'Phường long tuyền',
      district_id: '900200',
    },
    {
      id: '10825',
      name: 'Phường thới an đông',
      district_id: '900200',
    },
    {
      id: '10826',
      name: 'Phường phú thứ',
      district_id: '900300',
    },
    {
      id: '10827',
      name: 'Phường tân phú',
      district_id: '900300',
    },
    {
      id: '10828',
      name: 'Phường ba láng',
      district_id: '900300',
    },
    {
      id: '10829',
      name: 'Phường hưng phú',
      district_id: '900300',
    },
    {
      id: '10830',
      name: 'Phường lê bình',
      district_id: '900300',
    },
    {
      id: '10831',
      name: 'Phường thường thạnh',
      district_id: '900300',
    },
    {
      id: '10832',
      name: 'Phường hưng thạnh',
      district_id: '900300',
    },
    {
      id: '10840',
      name: 'Phường thạnh hòa',
      district_id: '900800',
    },
    {
      id: '10841',
      name: 'Phường trung nhứt',
      district_id: '900800',
    },
    {
      id: '10842',
      name: 'Phường trung kiên',
      district_id: '900800',
    },
    {
      id: '10843',
      name: 'Phường tân lộc',
      district_id: '900800',
    },
    {
      id: '10844',
      name: 'Phường thuận an',
      district_id: '900800',
    },
    {
      id: '10845',
      name: 'Phường thới thuận',
      district_id: '900800',
    },
    {
      id: '10846',
      name: 'Phường thốt nốt',
      district_id: '900800',
    },
    {
      id: '10847',
      name: 'Phường thuận hưng',
      district_id: '900800',
    },
    {
      id: '10848',
      name: 'Phường tân hưng',
      district_id: '900800',
    },
    {
      id: '10833',
      name: 'Phường châu văn liêm',
      district_id: '900400',
    },
    {
      id: '10834',
      name: 'Phường phước thới',
      district_id: '900400',
    },
    {
      id: '10835',
      name: 'Phường trường lạc',
      district_id: '900400',
    },
    {
      id: '10836',
      name: 'Phường thới hòa',
      district_id: '900400',
    },
    {
      id: '10837',
      name: 'Phường thới an',
      district_id: '900400',
    },
    {
      id: '10838',
      name: 'Phường thới long',
      district_id: '900400',
    },
    {
      id: '10839',
      name: 'Phường long hưng',
      district_id: '900400',
    },
    {
      id: '10856',
      name: 'Xã đông thắng',
      district_id: '900600',
    },
    {
      id: '10857',
      name: 'Xã trung hưng',
      district_id: '900600',
    },
    {
      id: '10858',
      name: 'Xã thạnh phú',
      district_id: '900600',
    },
    {
      id: '10859',
      name: 'Xã thới hưng',
      district_id: '900600',
    },
    {
      id: '10860',
      name: 'Xã đông hiệp',
      district_id: '900600',
    },
    {
      id: '10861',
      name: 'Xã thới đông',
      district_id: '900600',
    },
    {
      id: '10862',
      name: 'Xã thới xuân',
      district_id: '900600',
    },
    {
      id: '10863',
      name: 'Xã trung an',
      district_id: '900600',
    },
    {
      id: '10864',
      name: 'Xã trung thạnh',
      district_id: '900600',
    },
    {
      id: '10865',
      name: 'Thị trấn cờ đỏ',
      district_id: '900600',
    },
    {
      id: '10849',
      name: 'Xã nhơn ái',
      district_id: '900500',
    },
    {
      id: '10850',
      name: 'Xã nhơn nghĩa',
      district_id: '900500',
    },
    {
      id: '10851',
      name: 'Xã tân thới',
      district_id: '900500',
    },
    {
      id: '10852',
      name: 'Xã giai xuân',
      district_id: '900500',
    },
    {
      id: '10853',
      name: 'Xã mỹ khánh',
      district_id: '900500',
    },
    {
      id: '10854',
      name: 'Xã trường long',
      district_id: '900500',
    },
    {
      id: '10855',
      name: 'Thị trấn phong điền',
      district_id: '900500',
    },
    {
      id: '10866',
      name: 'Xã thạnh mỹ',
      district_id: '900700',
    },
    {
      id: '10867',
      name: 'Xã thạnh quới',
      district_id: '900700',
    },
    {
      id: '10868',
      name: 'Xã thạnh an',
      district_id: '900700',
    },
    {
      id: '10869',
      name: 'Xã thạnh lợi',
      district_id: '900700',
    },
    {
      id: '10870',
      name: 'Xã thạnh lộc',
      district_id: '900700',
    },
    {
      id: '10871',
      name: 'Thị trấn vĩnh thạnh',
      district_id: '900700',
    },
    {
      id: '10872',
      name: 'Thị trấn thạnh an',
      district_id: '900700',
    },
    {
      id: '10873',
      name: 'Xã vĩnh trinh',
      district_id: '900700',
    },
    {
      id: '10874',
      name: 'Xã vĩnh bình',
      district_id: '900700',
    },
    {
      id: '10875',
      name: 'Xã thạnh tiến',
      district_id: '900700',
    },
    {
      id: '10876',
      name: 'Xã thạnh thắng',
      district_id: '900700',
    },
    {
      id: '10877',
      name: 'Thị trấn thới lai',
      district_id: '900900',
    },
    {
      id: '10878',
      name: 'Xã thới thạnh',
      district_id: '900900',
    },
    {
      id: '10879',
      name: 'Xã tân thạnh',
      district_id: '900900',
    },
    {
      id: '10880',
      name: 'Xã trường thành',
      district_id: '900900',
    },
    {
      id: '10881',
      name: 'Xã trường xuân a',
      district_id: '900900',
    },
    {
      id: '10882',
      name: 'Xã trường xuân',
      district_id: '900900',
    },
    {
      id: '10883',
      name: 'Xã trường xuân b',
      district_id: '900900',
    },
    {
      id: '10884',
      name: 'Xã trường thắng',
      district_id: '900900',
    },
    {
      id: '10885',
      name: 'Xã xuân thắng',
      district_id: '900900',
    },
    {
      id: '10886',
      name: 'Xã thới tân',
      district_id: '900900',
    },
    {
      id: '10887',
      name: 'Xã đông bình',
      district_id: '900900',
    },
    {
      id: '10888',
      name: 'Xã đông thuận',
      district_id: '900900',
    },
    {
      id: '10889',
      name: 'Xã định môn',
      district_id: '900900',
    },
    {
      id: '8705',
      name: 'Phường ba ngòi',
      district_id: '650600',
    },
    {
      id: '8706',
      name: 'Xã cam bình',
      district_id: '650600',
    },
    {
      id: '8707',
      name: 'Xã cam lập',
      district_id: '650600',
    },
    {
      id: '8708',
      name: 'Phường cam linh',
      district_id: '650600',
    },
    {
      id: '8709',
      name: 'Phường cam lộc',
      district_id: '650600',
    },
    {
      id: '8710',
      name: 'Phường cam lợi',
      district_id: '650600',
    },
    {
      id: '8711',
      name: 'Phường cam nghĩa',
      district_id: '650600',
    },
    {
      id: '8712',
      name: 'Phường cam phú',
      district_id: '650600',
    },
    {
      id: '8713',
      name: 'Phường cam phúc nam',
      district_id: '650600',
    },
    {
      id: '8714',
      name: 'Xã cam phước đông',
      district_id: '650600',
    },
    {
      id: '8715',
      name: 'Phường cam phúc bắc',
      district_id: '650600',
    },
    {
      id: '8716',
      name: 'Xã cam thành nam',
      district_id: '650600',
    },
    {
      id: '8717',
      name: 'Xã cam thịnh đông',
      district_id: '650600',
    },
    {
      id: '8718',
      name: 'Xã cam thịnh tây',
      district_id: '650600',
    },
    {
      id: '8719',
      name: 'Phường cam thuận',
      district_id: '650600',
    },
    {
      id: '8665',
      name: 'Xã diên bình',
      district_id: '650400',
    },
    {
      id: '8666',
      name: 'Xã diên an',
      district_id: '650400',
    },
    {
      id: '8667',
      name: 'Xã diên điền',
      district_id: '650400',
    },
    {
      id: '8668',
      name: 'Xã diên đông',
      district_id: '650400',
    },
    {
      id: '8669',
      name: 'Xã diên hòa',
      district_id: '650400',
    },
    {
      id: '8670',
      name: 'Xã diên lạc',
      district_id: '650400',
    },
    {
      id: '8671',
      name: 'Xã diên lâm',
      district_id: '650400',
    },
    {
      id: '8672',
      name: 'Xã diên lộc',
      district_id: '650400',
    },
    {
      id: '8673',
      name: 'Xã diên phú',
      district_id: '650400',
    },
    {
      id: '8674',
      name: 'Xã diên phước',
      district_id: '650400',
    },
    {
      id: '8675',
      name: 'Xã diên sơn',
      district_id: '650400',
    },
    {
      id: '8676',
      name: 'Xã diên tân',
      district_id: '650400',
    },
    {
      id: '8677',
      name: 'Xã diên thạnh',
      district_id: '650400',
    },
    {
      id: '8678',
      name: 'Xã diên thọ',
      district_id: '650400',
    },
    {
      id: '8679',
      name: 'Xã diên toàn',
      district_id: '650400',
    },
    {
      id: '8680',
      name: 'Xã diên xuân',
      district_id: '650400',
    },
    {
      id: '8681',
      name: 'Xã suối hiệp',
      district_id: '650400',
    },
    {
      id: '8682',
      name: 'Thị trấn diên khánh',
      district_id: '650400',
    },
    {
      id: '12039',
      name: 'Xã suối tiên',
      district_id: '650400',
    },
    {
      id: '8697',
      name: 'Xã ba cụm bắc',
      district_id: '650700',
    },
    {
      id: '8698',
      name: 'Xã ba cụm nam',
      district_id: '650700',
    },
    {
      id: '8699',
      name: 'Xã sơn bình',
      district_id: '650700',
    },
    {
      id: '8700',
      name: 'Xã sơn hiệp',
      district_id: '650700',
    },
    {
      id: '8701',
      name: 'Xã sơn lâm',
      district_id: '650700',
    },
    {
      id: '8702',
      name: 'Xã sơn trung',
      district_id: '650700',
    },
    {
      id: '8703',
      name: 'Xã thành sơn',
      district_id: '650700',
    },
    {
      id: '8704',
      name: 'Thị trấn tô hạp',
      district_id: '650700',
    },
    {
      id: '8683',
      name: 'Xã cầu bà',
      district_id: '650500',
    },
    {
      id: '8684',
      name: 'Xã giang ly',
      district_id: '650500',
    },
    {
      id: '8685',
      name: 'Xã khánh bình',
      district_id: '650500',
    },
    {
      id: '8686',
      name: 'Xã khánh đông',
      district_id: '650500',
    },
    {
      id: '8687',
      name: 'Xã khánh hiệp',
      district_id: '650500',
    },
    {
      id: '8688',
      name: 'Xã khánh nam',
      district_id: '650500',
    },
    {
      id: '8689',
      name: 'Xã khánh phú',
      district_id: '650500',
    },
    {
      id: '8690',
      name: 'Xã khánh thành',
      district_id: '650500',
    },
    {
      id: '8691',
      name: 'Xã khánh thượng',
      district_id: '650500',
    },
    {
      id: '8692',
      name: 'Xã khánh trung',
      district_id: '650500',
    },
    {
      id: '8693',
      name: 'Xã liên sang',
      district_id: '650500',
    },
    {
      id: '8694',
      name: 'Xã sơn thái',
      district_id: '650500',
    },
    {
      id: '8695',
      name: 'Xã sông cầu',
      district_id: '650500',
    },
    {
      id: '8696',
      name: 'Thị trấn khánh vĩnh',
      district_id: '650500',
    },
    {
      id: '8598',
      name: 'Phường lộc thọ',
      district_id: '650100',
    },
    {
      id: '8599',
      name: 'Phường ngọc hiệp',
      district_id: '650100',
    },
    {
      id: '8600',
      name: 'Xã phước đồng',
      district_id: '650100',
    },
    {
      id: '8601',
      name: 'Phường phước hải',
      district_id: '650100',
    },
    {
      id: '8602',
      name: 'Phường phước hòa',
      district_id: '650100',
    },
    {
      id: '8603',
      name: 'Phường phước long',
      district_id: '650100',
    },
    {
      id: '8604',
      name: 'Phường phước tân',
      district_id: '650100',
    },
    {
      id: '8605',
      name: 'Phường phước tiến',
      district_id: '650100',
    },
    {
      id: '8606',
      name: 'Phường phương sài',
      district_id: '650100',
    },
    {
      id: '8607',
      name: 'Phường phương sơn',
      district_id: '650100',
    },
    {
      id: '8608',
      name: 'Phường tân lập',
      district_id: '650100',
    },
    {
      id: '8609',
      name: 'Phường vạn thạnh',
      district_id: '650100',
    },
    {
      id: '8610',
      name: 'Phường vĩnh hải',
      district_id: '650100',
    },
    {
      id: '8611',
      name: 'Xã vĩnh hiệp',
      district_id: '650100',
    },
    {
      id: '8612',
      name: 'Phường vĩnh hòa',
      district_id: '650100',
    },
    {
      id: '8613',
      name: 'Xã vĩnh lương',
      district_id: '650100',
    },
    {
      id: '8614',
      name: 'Xã vĩnh ngọc',
      district_id: '650100',
    },
    {
      id: '8615',
      name: 'Phường vĩnh nguyên',
      district_id: '650100',
    },
    {
      id: '8616',
      name: 'Phường vĩnh phước',
      district_id: '650100',
    },
    {
      id: '8617',
      name: 'Xã vĩnh phương',
      district_id: '650100',
    },
    {
      id: '8618',
      name: 'Xã vĩnh thái',
      district_id: '650100',
    },
    {
      id: '8619',
      name: 'Xã vĩnh thạnh',
      district_id: '650100',
    },
    {
      id: '8620',
      name: 'Phường vĩnh thọ',
      district_id: '650100',
    },
    {
      id: '8621',
      name: 'Xã vĩnh trung',
      district_id: '650100',
    },
    {
      id: '8622',
      name: 'Phường vĩnh trường',
      district_id: '650100',
    },
    {
      id: '8623',
      name: 'Phường xương huân',
      district_id: '650100',
    },
    {
      id: '8624',
      name: 'Phường vạn thắng',
      district_id: '650100',
    },
    {
      id: '8625',
      name: 'Xã ninh an',
      district_id: '650300',
    },
    {
      id: '8626',
      name: 'Xã ninh bình',
      district_id: '650300',
    },
    {
      id: '8629',
      name: 'Xã ninh đồng',
      district_id: '650300',
    },
    {
      id: '8633',
      name: 'Xã ninh hưng',
      district_id: '650300',
    },
    {
      id: '8634',
      name: 'Xã ninh ích',
      district_id: '650300',
    },
    {
      id: '8635',
      name: 'Xã ninh lộc',
      district_id: '650300',
    },
    {
      id: '8636',
      name: 'Xã ninh phú',
      district_id: '650300',
    },
    {
      id: '8637',
      name: 'Xã ninh phụng',
      district_id: '650300',
    },
    {
      id: '8638',
      name: 'Xã ninh phước',
      district_id: '650300',
    },
    {
      id: '8639',
      name: 'Xã ninh quang',
      district_id: '650300',
    },
    {
      id: '8640',
      name: 'Xã ninh sim',
      district_id: '650300',
    },
    {
      id: '8641',
      name: 'Xã ninh sơn',
      district_id: '650300',
    },
    {
      id: '8642',
      name: 'Xã ninh tân',
      district_id: '650300',
    },
    {
      id: '8643',
      name: 'Xã ninh tây',
      district_id: '650300',
    },
    {
      id: '8644',
      name: 'Xã ninh thân',
      district_id: '650300',
    },
    {
      id: '8645',
      name: 'Xã ninh thọ',
      district_id: '650300',
    },
    {
      id: '8646',
      name: 'Xã ninh thượng',
      district_id: '650300',
    },
    {
      id: '8648',
      name: 'Xã ninh trung',
      district_id: '650300',
    },
    {
      id: '8649',
      name: 'Xã ninh vân',
      district_id: '650300',
    },
    {
      id: '8650',
      name: 'Xã ninh xuân',
      district_id: '650300',
    },
    {
      id: '12032',
      name: 'Phường ninh đa',
      district_id: '650300',
    },
    {
      id: '12033',
      name: 'Phường ninh diêm',
      district_id: '650300',
    },
    {
      id: '12034',
      name: 'Phường ninh giang',
      district_id: '650300',
    },
    {
      id: '12035',
      name: 'Phường ninh hà',
      district_id: '650300',
    },
    {
      id: '12036',
      name: 'Phường ninh hải',
      district_id: '650300',
    },
    {
      id: '12037',
      name: 'Phường ninh thủy',
      district_id: '650300',
    },
    {
      id: '12038',
      name: 'Phường ninh hiệp',
      district_id: '650300',
    },
    {
      id: '8652',
      name: 'Xã đại lãnh',
      district_id: '650200',
    },
    {
      id: '8653',
      name: 'Thị trấn vạn giã',
      district_id: '650200',
    },
    {
      id: '8654',
      name: 'Xã vạn bình',
      district_id: '650200',
    },
    {
      id: '8655',
      name: 'Xã vạn khánh',
      district_id: '650200',
    },
    {
      id: '8656',
      name: 'Xẫ vạn long',
      district_id: '650200',
    },
    {
      id: '8657',
      name: 'Xã vạn lương',
      district_id: '650200',
    },
    {
      id: '8658',
      name: 'Xã vạn phú',
      district_id: '650200',
    },
    {
      id: '8659',
      name: 'Xã vạn phước',
      district_id: '650200',
    },
    {
      id: '8660',
      name: 'Xã vạn thắng',
      district_id: '650200',
    },
    {
      id: '8661',
      name: 'Xã vạn thạnh',
      district_id: '650200',
    },
    {
      id: '8662',
      name: 'Xã vạn thọ',
      district_id: '650200',
    },
    {
      id: '8663',
      name: 'Xã xuân sơn',
      district_id: '650200',
    },
    {
      id: '8664',
      name: 'Xã vạn hưng',
      district_id: '650200',
    },
    {
      id: '8725',
      name: 'Xã cam an bắc',
      district_id: '650900',
    },
    {
      id: '8726',
      name: 'Xã cam an nam',
      district_id: '650900',
    },
    {
      id: '8727',
      name: 'Xã cam hải đông',
      district_id: '650900',
    },
    {
      id: '8728',
      name: 'Xã cam hải tây',
      district_id: '650900',
    },
    {
      id: '8729',
      name: 'Xã cam hiệp bắc',
      district_id: '650900',
    },
    {
      id: '8730',
      name: 'Xã cam hiệp nam',
      district_id: '650900',
    },
    {
      id: '8731',
      name: 'Xã cam hòa',
      district_id: '650900',
    },
    {
      id: '8732',
      name: 'Xã cam phước tây',
      district_id: '650900',
    },
    {
      id: '8733',
      name: 'Xã cam tân',
      district_id: '650900',
    },
    {
      id: '8734',
      name: 'Xã cam thành bắc',
      district_id: '650900',
    },
    {
      id: '8735',
      name: 'Xã sơn tân',
      district_id: '650900',
    },
    {
      id: '8736',
      name: 'Xã suối tân',
      district_id: '650900',
    },
    {
      id: '8737',
      name: 'Thị trấn cam đức',
      district_id: '650900',
    },
    {
      id: '8738',
      name: 'Xã suối cát',
      district_id: '650900',
    },
    {
      id: '7157',
      name: 'Xã hồng bắc',
      district_id: '530900',
    },
    {
      id: '7158',
      name: 'Xã hồng hạ',
      district_id: '530900',
    },
    {
      id: '7159',
      name: 'Xã hồng thượng',
      district_id: '530900',
    },
    {
      id: '7160',
      name: 'Xã a đớt',
      district_id: '530900',
    },
    {
      id: '7161',
      name: 'Xã a ngo',
      district_id: '530900',
    },
    {
      id: '7162',
      name: 'Xã hồng trung',
      district_id: '530900',
    },
    {
      id: '7163',
      name: 'Xã hương phong',
      district_id: '530900',
    },
    {
      id: '7164',
      name: 'Xã hồng vân',
      district_id: '530900',
    },
    {
      id: '7165',
      name: 'Xã nhâm',
      district_id: '530900',
    },
    {
      id: '7166',
      name: 'Xã hương nguyên',
      district_id: '530900',
    },
    {
      id: '7167',
      name: 'Xã hồng kim',
      district_id: '530900',
    },
    {
      id: '7168',
      name: 'Xã phú vinh',
      district_id: '530900',
    },
    {
      id: '7169',
      name: 'Xã đông sơn',
      district_id: '530900',
    },
    {
      id: '7170',
      name: 'Xã bắc sơn',
      district_id: '530900',
    },
    {
      id: '7171',
      name: 'Xã sơn thuỷ',
      district_id: '530900',
    },
    {
      id: '7172',
      name: 'Xã hương lâm',
      district_id: '530900',
    },
    {
      id: '7173',
      name: 'Xã hồng thuỷ',
      district_id: '530900',
    },
    {
      id: '7174',
      name: 'Xã hồng quảng',
      district_id: '530900',
    },
    {
      id: '7175',
      name: 'Xã hồng thái',
      district_id: '530900',
    },
    {
      id: '7176',
      name: 'Xã a roằng',
      district_id: '530900',
    },
    {
      id: '7179',
      name: 'Thị trấn a lưới',
      district_id: '530900',
    },
    {
      id: '7125',
      name: 'Xã điền hải',
      district_id: '530200',
    },
    {
      id: '7126',
      name: 'Thị trấn phong điền',
      district_id: '530200',
    },
    {
      id: '7127',
      name: 'Xã phong bình',
      district_id: '530200',
    },
    {
      id: '7128',
      name: 'Xã phong mỹ',
      district_id: '530200',
    },
    {
      id: '7129',
      name: 'Xã điền lộc',
      district_id: '530200',
    },
    {
      id: '7130',
      name: 'Xã phong hoà',
      district_id: '530200',
    },
    {
      id: '7131',
      name: 'Xã phong sơn',
      district_id: '530200',
    },
    {
      id: '7132',
      name: 'Xã điền môn',
      district_id: '530200',
    },
    {
      id: '7133',
      name: 'Xã phong hải',
      district_id: '530200',
    },
    {
      id: '7134',
      name: 'Xã điền Hoà',
      district_id: '530200',
    },
    {
      id: '7135',
      name: 'Xã phong xuân',
      district_id: '530200',
    },
    {
      id: '7136',
      name: 'Xã phong hiền',
      district_id: '530200',
    },
    {
      id: '7137',
      name: 'Xã điền hương',
      district_id: '530200',
    },
    {
      id: '7138',
      name: 'Xã phong chương',
      district_id: '530200',
    },
    {
      id: '7139',
      name: 'Xã phong an',
      district_id: '530200',
    },
    {
      id: '7140',
      name: 'Xã phong thu',
      district_id: '530200',
    },
    {
      id: '7223',
      name: 'Thị trấn phú lộc',
      district_id: '530700',
    },
    {
      id: '7224',
      name: 'Xã lộc an',
      district_id: '530700',
    },
    {
      id: '7225',
      name: 'Xã vinh hải',
      district_id: '530700',
    },
    {
      id: '7226',
      name: 'Xã lộc vĩnh',
      district_id: '530700',
    },
    {
      id: '7227',
      name: 'Xã vinh hưng',
      district_id: '530700',
    },
    {
      id: '7228',
      name: 'Xã vinh giang',
      district_id: '530700',
    },
    {
      id: '7229',
      name: 'Xã lộc trì',
      district_id: '530700',
    },
    {
      id: '7230',
      name: 'Thị trấn lăng cô',
      district_id: '530700',
    },
    {
      id: '7231',
      name: 'Xã lộc bổn',
      district_id: '530700',
    },
    {
      id: '7232',
      name: 'Xã vinh hiền',
      district_id: '530700',
    },
    {
      id: '7233',
      name: 'Xã lộc thuỷ',
      district_id: '530700',
    },
    {
      id: '7234',
      name: 'Xã xuân lộc',
      district_id: '530700',
    },
    {
      id: '7235',
      name: 'Xã lộc sơn',
      district_id: '530700',
    },
    {
      id: '7236',
      name: 'Xã lộc hoà',
      district_id: '530700',
    },
    {
      id: '7237',
      name: 'Xã lộc tiến',
      district_id: '530700',
    },
    {
      id: '7238',
      name: 'Xã vinh mỹ',
      district_id: '530700',
    },
    {
      id: '7239',
      name: 'Xã lộc điền',
      district_id: '530700',
    },
    {
      id: '7240',
      name: 'Xã lộc bình',
      district_id: '530700',
    },
    {
      id: '7203',
      name: 'Xã phú lương',
      district_id: '530500',
    },
    {
      id: '7204',
      name: 'Thị trấn thuận an',
      district_id: '530500',
    },
    {
      id: '7205',
      name: 'Xã vinh an',
      district_id: '530500',
    },
    {
      id: '7206',
      name: 'Xã phú thượng',
      district_id: '530500',
    },
    {
      id: '7207',
      name: 'Xã phú diên',
      district_id: '530500',
    },
    {
      id: '7208',
      name: 'Xã vinh phú',
      district_id: '530500',
    },
    {
      id: '7209',
      name: 'Xã phú mậu',
      district_id: '530500',
    },
    {
      id: '7210',
      name: 'Xã phú xuân',
      district_id: '530500',
    },
    {
      id: '7211',
      name: 'Xã vinh xuân',
      district_id: '530500',
    },
    {
      id: '7212',
      name: 'Xã phú thanh',
      district_id: '530500',
    },
    {
      id: '7213',
      name: 'Xã phú an',
      district_id: '530500',
    },
    {
      id: '7214',
      name: 'Thị trấn phú đa',
      district_id: '530500',
    },
    {
      id: '7215',
      name: 'Xã phú mỹ',
      district_id: '530500',
    },
    {
      id: '7216',
      name: 'Xã phú thuận',
      district_id: '530500',
    },
    {
      id: '7217',
      name: 'Xã phú hải',
      district_id: '530500',
    },
    {
      id: '7218',
      name: 'Xã vinh thái',
      district_id: '530500',
    },
    {
      id: '7219',
      name: 'Xã phú dương',
      district_id: '530500',
    },
    {
      id: '7220',
      name: 'Xã phú hồ',
      district_id: '530500',
    },
    {
      id: '7221',
      name: 'Xã vinh thanh',
      district_id: '530500',
    },
    {
      id: '7222',
      name: 'Xã vinh hà',
      district_id: '530500',
    },
    {
      id: '7114',
      name: 'Thị trấn sịa',
      district_id: '530300',
    },
    {
      id: '7115',
      name: 'Xã quảng phước',
      district_id: '530300',
    },
    {
      id: '7116',
      name: 'Xã quảng vinh',
      district_id: '530300',
    },
    {
      id: '7117',
      name: 'Xã quảng phú',
      district_id: '530300',
    },
    {
      id: '7118',
      name: 'Xã quảng thành',
      district_id: '530300',
    },
    {
      id: '7119',
      name: 'Xã quảng công',
      district_id: '530300',
    },
    {
      id: '7120',
      name: 'Xã quảng ngạn',
      district_id: '530300',
    },
    {
      id: '7121',
      name: 'Xã quảng an',
      district_id: '530300',
    },
    {
      id: '7122',
      name: 'Xã quảng lợi',
      district_id: '530300',
    },
    {
      id: '7123',
      name: 'Xã quảng thái',
      district_id: '530300',
    },
    {
      id: '7124',
      name: 'Xã quảng thọ',
      district_id: '530300',
    },
    {
      id: '7087',
      name: 'Phường an đông',
      district_id: '530100',
    },
    {
      id: '7088',
      name: 'Phường thuận hòa',
      district_id: '530100',
    },
    {
      id: '7089',
      name: 'Phường phú hậu',
      district_id: '530100',
    },
    {
      id: '7090',
      name: 'Phường phú hiệp',
      district_id: '530100',
    },
    {
      id: '7091',
      name: 'Phường thuận lộc',
      district_id: '530100',
    },
    {
      id: '7092',
      name: 'Phường phú bình',
      district_id: '530100',
    },
    {
      id: '7094',
      name: 'Phường phú hòa',
      district_id: '530100',
    },
    {
      id: '7095',
      name: 'Phường phú cát',
      district_id: '530100',
    },
    {
      id: '7097',
      name: 'Phường kim long',
      district_id: '530100',
    },
    {
      id: '7098',
      name: 'Phường vĩnh ninh',
      district_id: '530100',
    },
    {
      id: '7099',
      name: 'Phường phú hội',
      district_id: '530100',
    },
    {
      id: '7100',
      name: 'Phường trường an',
      district_id: '530100',
    },
    {
      id: '7101',
      name: 'Phường xuân phú',
      district_id: '530100',
    },
    {
      id: '7102',
      name: 'Phường phước vĩnh',
      district_id: '530100',
    },
    {
      id: '7103',
      name: 'Phường an cựu',
      district_id: '530100',
    },
    {
      id: '7104',
      name: 'Phường tây lộc',
      district_id: '530100',
    },
    {
      id: '7105',
      name: 'Phường thuận thành',
      district_id: '530100',
    },
    {
      id: '7106',
      name: 'Phường thủy xuân',
      district_id: '530100',
    },
    {
      id: '7107',
      name: 'Phường an tây',
      district_id: '530100',
    },
    {
      id: '7108',
      name: 'Phường an hòa',
      district_id: '530100',
    },
    {
      id: '7109',
      name: 'Phường thủy biều',
      district_id: '530100',
    },
    {
      id: '7110',
      name: 'Phường hương sơ',
      district_id: '530100',
    },
    {
      id: '7111',
      name: 'Phường hương long',
      district_id: '530100',
    },
    {
      id: '7112',
      name: 'Phường Phú Nhuận',
      district_id: '530100',
    },
    {
      id: '7113',
      name: 'Phường phú thuận',
      district_id: '530100',
    },
    {
      id: '11887',
      name: 'Phường Phường Đúc',
      district_id: '530100',
    },
    {
      id: '11888',
      name: 'Phường vĩ dạ',
      district_id: '530100',
    },
    {
      id: '12725',
      name: 'Phường Thủy Vân',
      district_id: '530100',
    },
    {
      id: '12730',
      name: 'Phường Đông Ba',
      district_id: '530100',
    },
    {
      id: '12740',
      name: 'Xã Thủy Bằng',
      district_id: '530100',
    },
    {
      id: '12777',
      name: 'Phường Gia Hội',
      district_id: '530100',
    },
    {
      id: '12794',
      name: 'Xã Hương Phong',
      district_id: '530100',
    },
    {
      id: '12806',
      name: 'Phường Phú Thượng',
      district_id: '530100',
    },
    {
      id: '12823',
      name: 'Phường Hương Vinh',
      district_id: '530100',
    },
    {
      id: '3687',
      name: 'Xã cốc mỳ',
      district_id: '330300',
    },
    {
      id: '3688',
      name: 'Xã mường vi',
      district_id: '330300',
    },
    {
      id: '3689',
      name: 'Xã bản xèo',
      district_id: '330300',
    },
    {
      id: '3690',
      name: 'Xã sàng ma sáo',
      district_id: '330300',
    },
    {
      id: '3691',
      name: 'Xã mường hum',
      district_id: '330300',
    },
    {
      id: '3692',
      name: 'Xã dền sáng',
      district_id: '330300',
    },
    {
      id: '3693',
      name: 'Xã y tý',
      district_id: '330300',
    },
    {
      id: '3694',
      name: 'Xã a lù',
      district_id: '330300',
    },
    {
      id: '3695',
      name: 'Xã a mú sung',
      district_id: '330300',
    },
    {
      id: '3696',
      name: 'Xã nậm chạc',
      district_id: '330300',
    },
    {
      id: '3697',
      name: 'Xã ngải thầu',
      district_id: '330300',
    },
    {
      id: '3698',
      name: 'Xã quang kim',
      district_id: '330300',
    },
    {
      id: '3699',
      name: 'Xã Cốc San',
      district_id: '330300',
    },
    {
      id: '3700',
      name: 'Xã phìn ngan',
      district_id: '330300',
    },
    {
      id: '3701',
      name: 'Xã bản qua',
      district_id: '330300',
    },
    {
      id: '3702',
      name: 'Xã bản vược',
      district_id: '330300',
    },
    {
      id: '3703',
      name: 'Xã trịnh tường',
      district_id: '330300',
    },
    {
      id: '3704',
      name: 'Xã nậm pung',
      district_id: '330300',
    },
    {
      id: '3706',
      name: 'Xã dền thàng',
      district_id: '330300',
    },
    {
      id: '3707',
      name: 'Xã pa cheo',
      district_id: '330300',
    },
    {
      id: '3708',
      name: 'Xã tòng sành',
      district_id: '330300',
    },
    {
      id: '3709',
      name: 'Xã trung lèng hồ',
      district_id: '330300',
    },
    {
      id: '11701',
      name: 'Thị trấn bát xát',
      district_id: '330300',
    },
    {
      id: '3628',
      name: 'Thị trấn bắc hà',
      district_id: '330800',
    },
    {
      id: '3629',
      name: 'Xã na hối',
      district_id: '330800',
    },
    {
      id: '3630',
      name: 'Xã tà chải',
      district_id: '330800',
    },
    {
      id: '3632',
      name: 'Xã tả củ tỷ',
      district_id: '330800',
    },
    {
      id: '3633',
      name: 'Xã nậm mòn',
      district_id: '330800',
    },
    {
      id: '3634',
      name: 'Xã bản liền',
      district_id: '330800',
    },
    {
      id: '3635',
      name: 'Xã nậm đét',
      district_id: '330800',
    },
    {
      id: '3637',
      name: 'Xã tả van chư',
      district_id: '330800',
    },
    {
      id: '3638',
      name: 'Xã hoàng thu phố',
      district_id: '330800',
    },
    {
      id: '3639',
      name: 'Xã lùng cải',
      district_id: '330800',
    },
    {
      id: '3640',
      name: 'Xã bảo nhai',
      district_id: '330800',
    },
    {
      id: '3641',
      name: 'Xã thải giàng phố',
      district_id: '330800',
    },
    {
      id: '3642',
      name: 'Xã bản phố',
      district_id: '330800',
    },
    {
      id: '3643',
      name: 'Xã nậm lúc',
      district_id: '330800',
    },
    {
      id: '3644',
      name: 'Xã cốc lầu',
      district_id: '330800',
    },
    {
      id: '3645',
      name: 'Xã lầu thí ngài',
      district_id: '330800',
    },
    {
      id: '3647',
      name: 'Xã nậm khánh',
      district_id: '330800',
    },
    {
      id: '3648',
      name: 'Xã bản cái',
      district_id: '330800',
    },
    {
      id: '3649',
      name: 'Xã cốc ly',
      district_id: '330800',
    },
    {
      id: '3650',
      name: 'Xã bản già',
      district_id: '330800',
    },
    {
      id: '11708',
      name: 'Xã lùng phình',
      district_id: '330800',
    },
    {
      id: '3729',
      name: 'Phường cốc lếu',
      district_id: '330100',
    },
    {
      id: '3730',
      name: 'Phường lào cai',
      district_id: '330100',
    },
    {
      id: '3731',
      name: 'Phường phố mới',
      district_id: '330100',
    },
    {
      id: '3732',
      name: 'Phường duyên hải',
      district_id: '330100',
    },
    {
      id: '3735',
      name: 'Phường kim tân',
      district_id: '330100',
    },
    {
      id: '3736',
      name: 'Phường bắc cường',
      district_id: '330100',
    },
    {
      id: '3737',
      name: 'Phường nam cường',
      district_id: '330100',
    },
    {
      id: '3738',
      name: 'Phường pom hán',
      district_id: '330100',
    },
    {
      id: '3739',
      name: 'Phường bình minh',
      district_id: '330100',
    },
    {
      id: '3740',
      name: 'Phường bắc lệnh',
      district_id: '330100',
    },
    {
      id: '3741',
      name: 'Phường thống nhất',
      district_id: '330100',
    },
    {
      id: '3742',
      name: 'Phường xuân tăng',
      district_id: '330100',
    },
    {
      id: '3744',
      name: 'Xã đồng tuyển',
      district_id: '330100',
    },
    {
      id: '3745',
      name: 'Xã vạn hòa',
      district_id: '330100',
    },
    {
      id: '3746',
      name: 'Xã cam đường',
      district_id: '330100',
    },
    {
      id: '3747',
      name: 'Xã hợp thành',
      district_id: '330100',
    },
    {
      id: '3748',
      name: 'Xã tả phời',
      district_id: '330100',
    },
    {
      id: '3666',
      name: 'Thị trấn mường khương',
      district_id: '330900',
    },
    {
      id: '3667',
      name: 'Xã tung chung phố',
      district_id: '330900',
    },
    {
      id: '3670',
      name: 'Xã bản lầu',
      district_id: '330900',
    },
    {
      id: '3671',
      name: 'Xã bản sen',
      district_id: '330900',
    },
    {
      id: '3672',
      name: 'Xã lùng vai',
      district_id: '330900',
    },
    {
      id: '3673',
      name: 'Xã thanh bình',
      district_id: '330900',
    },
    {
      id: '3674',
      name: 'Xã nậm chẩy',
      district_id: '330900',
    },
    {
      id: '3675',
      name: 'Xã tung chung phố',
      district_id: '330900',
    },
    {
      id: '3676',
      name: 'Xã tả ngải chồ',
      district_id: '330900',
    },
    {
      id: '3677',
      name: 'Xã pha long',
      district_id: '330900',
    },
    {
      id: '3679',
      name: 'Xã dìn chin',
      district_id: '330900',
    },
    {
      id: '3680',
      name: 'Xã tả thàng',
      district_id: '330900',
    },
    {
      id: '3681',
      name: 'Xã tả gia khâu',
      district_id: '330900',
    },
    {
      id: '3682',
      name: 'Xã lùng khấu nhin',
      district_id: '330900',
    },
    {
      id: '3684',
      name: 'Xã nấm lư',
      district_id: '330900',
    },
    {
      id: '3685',
      name: 'Xã cao sơn',
      district_id: '330900',
    },
    {
      id: '11706',
      name: 'Xã la pan tẩn',
      district_id: '330900',
    },
    {
      id: '3710',
      name: 'Xã san sả hồ',
      district_id: '330500',
    },
    {
      id: '3712',
      name: 'Thị trấn sa pa',
      district_id: '330500',
    },
    {
      id: '3713',
      name: 'Xã bản hồ',
      district_id: '330500',
    },
    {
      id: '3714',
      name: 'Xã lao chải',
      district_id: '330500',
    },
    {
      id: '3715',
      name: 'Xã thanh phú',
      district_id: '330500',
    },
    {
      id: '3716',
      name: 'Xã tả van',
      district_id: '330500',
    },
    {
      id: '3717',
      name: 'Xã sa pả',
      district_id: '330500',
    },
    {
      id: '3718',
      name: 'Xã suối thầu',
      district_id: '330500',
    },
    {
      id: '3719',
      name: 'Xã thanh kim',
      district_id: '330500',
    },
    {
      id: '3721',
      name: 'Xã bản khoang',
      district_id: '330500',
    },
    {
      id: '3722',
      name: 'Xã tả phìn',
      district_id: '330500',
    },
    {
      id: '3723',
      name: 'Xã tả giàng phình',
      district_id: '330500',
    },
    {
      id: '3724',
      name: 'Xã sử pán',
      district_id: '330500',
    },
    {
      id: '3725',
      name: 'Xã nậm sài',
      district_id: '330500',
    },
    {
      id: '3726',
      name: 'Xã nậm cang',
      district_id: '330500',
    },
    {
      id: '3727',
      name: 'Xã hầu thào',
      district_id: '330500',
    },
    {
      id: '3728',
      name: 'Xã bản phùng',
      district_id: '330500',
    },
    {
      id: '11707',
      name: 'Xã trung chải',
      district_id: '330500',
    },
    {
      id: '12702',
      name: 'Phường Hàm Rồng',
      district_id: '330500',
    },
    {
      id: '12762',
      name: 'Xã Ngũ Chỉ Sơn',
      district_id: '330500',
    },
    {
      id: '12815',
      name: 'Phường Phan Si Păng',
      district_id: '330500',
    },
    {
      id: '3653',
      name: 'Xã lùng sui',
      district_id: '330200',
    },
    {
      id: '3654',
      name: 'Xã sín chéng',
      district_id: '330200',
    },
    {
      id: '3655',
      name: 'Xã bản mế',
      district_id: '330200',
    },
    {
      id: '3656',
      name: 'Xã cán cấu',
      district_id: '330200',
    },
    {
      id: '3657',
      name: 'Xã sán chải',
      district_id: '330200',
    },
    {
      id: '3658',
      name: 'Xã cán hồ',
      district_id: '330200',
    },
    {
      id: '3661',
      name: 'Xã lử thẩn',
      district_id: '330200',
    },
    {
      id: '3662',
      name: 'Xã mản thẩn',
      district_id: '330200',
    },
    {
      id: '3663',
      name: 'Xã nàn sán',
      district_id: '330200',
    },
    {
      id: '3664',
      name: 'Xã quan thần sán',
      district_id: '330200',
    },
    {
      id: '3665',
      name: 'Xã thào chư phìn',
      district_id: '330200',
    },
    {
      id: '11704',
      name: 'Xã nàn xín',
      district_id: '330200',
    },
    {
      id: '11705',
      name: 'Xã si ma cai',
      district_id: '330200',
    },
    {
      id: '3773',
      name: 'Xã liêm phú',
      district_id: '330600',
    },
    {
      id: '3774',
      name: 'Thị trấn khánh yên',
      district_id: '330600',
    },
    {
      id: '3775',
      name: 'Xã khánh yên thượng',
      district_id: '330600',
    },
    {
      id: '3776',
      name: 'Xã minh lương',
      district_id: '330600',
    },
    {
      id: '3777',
      name: 'Xã võ lao',
      district_id: '330600',
    },
    {
      id: '3778',
      name: 'Xã sơn thủy',
      district_id: '330600',
    },
    {
      id: '3779',
      name: 'Xã dương quỳ',
      district_id: '330600',
    },
    {
      id: '3780',
      name: 'Xã làng giàng',
      district_id: '330600',
    },
    {
      id: '3781',
      name: 'Xã khánh yên hạ',
      district_id: '330600',
    },
    {
      id: '3782',
      name: 'Xã khánh yên trung',
      district_id: '330600',
    },
    {
      id: '3783',
      name: 'Xã tân thượng',
      district_id: '330600',
    },
    {
      id: '3784',
      name: 'Xã tân an',
      district_id: '330600',
    },
    {
      id: '3785',
      name: 'Xã văn sơn',
      district_id: '330600',
    },
    {
      id: '3786',
      name: 'Xã thẩm dương',
      district_id: '330600',
    },
    {
      id: '3787',
      name: 'Xã nậm xé',
      district_id: '330600',
    },
    {
      id: '3788',
      name: 'Xã nậm xây',
      district_id: '330600',
    },
    {
      id: '3789',
      name: 'Xã nậm tha',
      district_id: '330600',
    },
    {
      id: '3790',
      name: 'Xã nậm rạng',
      district_id: '330600',
    },
    {
      id: '3791',
      name: 'Xã nậm mả',
      district_id: '330600',
    },
    {
      id: '3792',
      name: 'Xã nậm cháy',
      district_id: '330600',
    },
    {
      id: '3793',
      name: 'Xã hoà mạc',
      district_id: '330600',
    },
    {
      id: '3794',
      name: 'Xã dần thàng',
      district_id: '330600',
    },
    {
      id: '3795',
      name: 'Xã chiềng ken',
      district_id: '330600',
    },
    {
      id: '3749',
      name: 'Xã xuân giao',
      district_id: '330400',
    },
    {
      id: '3750',
      name: 'Xã xuân quang',
      district_id: '330400',
    },
    {
      id: '3753',
      name: 'Xã bản cầm',
      district_id: '330400',
    },
    {
      id: '3754',
      name: 'Xã phong niên',
      district_id: '330400',
    },
    {
      id: '3755',
      name: 'Xã phú nhuận',
      district_id: '330400',
    },
    {
      id: '3756',
      name: 'Xã sơn hà',
      district_id: '330400',
    },
    {
      id: '3757',
      name: 'Xã thái niên',
      district_id: '330400',
    },
    {
      id: '3758',
      name: 'Thị Trấn Phong Hải',
      district_id: '330400',
    },
    {
      id: '3759',
      name: 'Xã gia phú',
      district_id: '330400',
    },
    {
      id: '3760',
      name: 'Xã bản phiệt',
      district_id: '330400',
    },
    {
      id: '3761',
      name: 'Xã sơn hải',
      district_id: '330400',
    },
    {
      id: '3763',
      name: 'Xã phố lu',
      district_id: '330400',
    },
    {
      id: '3764',
      name: 'Thị trấn phố lu',
      district_id: '330400',
    },
    {
      id: '3765',
      name: 'Xã trì quang',
      district_id: '330400',
    },
    {
      id: '3766',
      name: 'Xã bản phiệt',
      district_id: '330400',
    },
    {
      id: '11702',
      name: 'Thị trấn n.t phong hải',
      district_id: '330400',
    },
    {
      id: '11703',
      name: 'Thị trấn tằng loỏng',
      district_id: '330400',
    },
    {
      id: '3796',
      name: 'Xã bảo hà',
      district_id: '330700',
    },
    {
      id: '3797',
      name: 'Xã long khánh',
      district_id: '330700',
    },
    {
      id: '3798',
      name: 'Xã lương sơn',
      district_id: '330700',
    },
    {
      id: '3799',
      name: 'Xã tân dương',
      district_id: '330700',
    },
    {
      id: '3800',
      name: 'Xã tân tiến',
      district_id: '330700',
    },
    {
      id: '3801',
      name: 'Xã minh tân',
      district_id: '330700',
    },
    {
      id: '3802',
      name: 'Xã điện quan',
      district_id: '330700',
    },
    {
      id: '3803',
      name: 'Xã long phúc',
      district_id: '330700',
    },
    {
      id: '3804',
      name: 'Xã thượng hà',
      district_id: '330700',
    },
    {
      id: '3805',
      name: 'Xã kim sơn',
      district_id: '330700',
    },
    {
      id: '3806',
      name: 'Xã nghĩa đô',
      district_id: '330700',
    },
    {
      id: '3807',
      name: 'Thị trấn phố ràng',
      district_id: '330700',
    },
    {
      id: '3808',
      name: 'Xã việt tiến',
      district_id: '330700',
    },
    {
      id: '3809',
      name: 'Xã cam con',
      district_id: '330700',
    },
    {
      id: '3810',
      name: 'Xã vĩnh yên',
      district_id: '330700',
    },
    {
      id: '3811',
      name: 'Xã xuân hoà',
      district_id: '330700',
    },
    {
      id: '3812',
      name: 'Xã xuân thượng',
      district_id: '330700',
    },
    {
      id: '3813',
      name: 'Xã yên sơn',
      district_id: '330700',
    },
    {
      id: '12798',
      name: 'Xã Phúc Khánh',
      district_id: '330700',
    },
    {
      id: '1365',
      name: 'Xã đạp thanh',
      district_id: '200900',
    },
    {
      id: '1366',
      name: 'Xã đồn đạc',
      district_id: '200900',
    },
    {
      id: '1367',
      name: 'Xã lương mông',
      district_id: '200900',
    },
    {
      id: '1368',
      name: 'Xã minh cầm',
      district_id: '200900',
    },
    {
      id: '1369',
      name: 'Xã nam sơn',
      district_id: '200900',
    },
    {
      id: '1370',
      name: 'Xã thanh lâm',
      district_id: '200900',
    },
    {
      id: '1371',
      name: 'Xã thanh sơn',
      district_id: '200900',
    },
    {
      id: '1372',
      name: 'Thị trấn ba chẽ',
      district_id: '200900',
    },
    {
      id: '1373',
      name: 'Xã đồng tâm',
      district_id: '200500',
    },
    {
      id: '1374',
      name: 'Xã đồng văn',
      district_id: '200500',
    },
    {
      id: '1375',
      name: 'Xã hoành mô',
      district_id: '200500',
    },
    {
      id: '1376',
      name: 'Xã húc động',
      district_id: '200500',
    },
    {
      id: '1377',
      name: 'Xã lục hồn',
      district_id: '200500',
    },
    {
      id: '1378',
      name: 'Xã tỉnh húc',
      district_id: '200500',
    },
    {
      id: '1379',
      name: 'Xã vô ngại',
      district_id: '200500',
    },
    {
      id: '1380',
      name: 'Thị trấn bình liêu',
      district_id: '200500',
    },
    {
      id: '1323',
      name: 'Phường cẩm thạch',
      district_id: '200200',
    },
    {
      id: '1324',
      name: 'Phường cẩm thành',
      district_id: '200200',
    },
    {
      id: '1325',
      name: 'Phường cẩm bình',
      district_id: '200200',
    },
    {
      id: '1327',
      name: 'Phường cẩm tây',
      district_id: '200200',
    },
    {
      id: '1328',
      name: 'Phường cẩm đông',
      district_id: '200200',
    },
    {
      id: '1329',
      name: 'Phường cẩm phú',
      district_id: '200200',
    },
    {
      id: '1330',
      name: 'Phường cẩm trung',
      district_id: '200200',
    },
    {
      id: '1331',
      name: 'Phường cẩm thủy',
      district_id: '200200',
    },
    {
      id: '1332',
      name: 'Phường cẩm thịnh',
      district_id: '200200',
    },
    {
      id: '1333',
      name: 'Phường cẩm sơn',
      district_id: '200200',
    },
    {
      id: '1336',
      name: 'Xã cộng hòa',
      district_id: '200200',
    },
    {
      id: '1337',
      name: 'Xã dương huy',
      district_id: '200200',
    },
    {
      id: '11840',
      name: 'Xã cẩm hải',
      district_id: '200200',
    },
    {
      id: '11841',
      name: 'Phường cửa ông',
      district_id: '200200',
    },
    {
      id: '11842',
      name: 'Phường mông dương',
      district_id: '200200',
    },
    {
      id: '11843',
      name: 'Phường quang hanh',
      district_id: '200200',
    },
    {
      id: '1350',
      name: 'Thị trấn cô tô',
      district_id: '201400',
    },
    {
      id: '1351',
      name: 'Xã đồng tiến',
      district_id: '201400',
    },
    {
      id: '1352',
      name: 'Xã thanh lân',
      district_id: '201400',
    },
    {
      id: '1302',
      name: 'Phường trần hưng đạo',
      district_id: '200100',
    },
    {
      id: '1303',
      name: 'Phường hồng gai',
      district_id: '200100',
    },
    {
      id: '1304',
      name: 'Phường yết kiêu',
      district_id: '200100',
    },
    {
      id: '1305',
      name: 'Phường hồng hải',
      district_id: '200100',
    },
    {
      id: '1306',
      name: 'Phường hồng hà',
      district_id: '200100',
    },
    {
      id: '1307',
      name: 'Phường hà tu',
      district_id: '200100',
    },
    {
      id: '1308',
      name: 'Phường hà phong',
      district_id: '200100',
    },
    {
      id: '1309',
      name: 'Phường hà trung',
      district_id: '200100',
    },
    {
      id: '1310',
      name: 'Phường hà lầm',
      district_id: '200100',
    },
    {
      id: '1311',
      name: 'Phường hà khánh',
      district_id: '200100',
    },
    {
      id: '1312',
      name: 'Phường cao xanh',
      district_id: '200100',
    },
    {
      id: '1313',
      name: 'Phường cao thắng',
      district_id: '200100',
    },
    {
      id: '1314',
      name: 'Phường bãi cháy',
      district_id: '200100',
    },
    {
      id: '1315',
      name: 'Phường tuần châu',
      district_id: '200100',
    },
    {
      id: '1316',
      name: 'Phường hà khẩu',
      district_id: '200100',
    },
    {
      id: '1317',
      name: 'Phường giếng đáy',
      district_id: '200100',
    },
    {
      id: '1318',
      name: 'Phường hùng thắng',
      district_id: '200100',
    },
    {
      id: '1319',
      name: 'Phường bạch đằng',
      district_id: '200100',
    },
    {
      id: '1426',
      name: 'Thị trấn trới',
      district_id: '200100',
    },
    {
      id: '11838',
      name: 'Phường đại yên',
      district_id: '200100',
    },
    {
      id: '11839',
      name: 'Phường việt hưng',
      district_id: '200100',
    },
    {
      id: '12635',
      name: 'Xã Tân Dân',
      district_id: '200100',
    },
    {
      id: '12733',
      name: 'Xã Sơn Dương',
      district_id: '200100',
    },
    {
      id: '12736',
      name: 'Phường Hoành Bồ',
      district_id: '200100',
    },
    {
      id: '12757',
      name: 'Xã Thống Nhất',
      district_id: '200100',
    },
    {
      id: '12809',
      name: 'Xã Lê Lợi',
      district_id: '200100',
    },
    {
      id: '1410',
      name: 'Phường trần phú',
      district_id: '200400',
    },
    {
      id: '1411',
      name: 'Phường hòa lạc',
      district_id: '200400',
    },
    {
      id: '1412',
      name: 'Phường hải yên',
      district_id: '200400',
    },
    {
      id: '1413',
      name: 'Phường ninh dương',
      district_id: '200400',
    },
    {
      id: '1414',
      name: 'Xã hải xuân',
      district_id: '200400',
    },
    {
      id: '1415',
      name: 'Phường hải hòa',
      district_id: '200400',
    },
    {
      id: '1418',
      name: 'Xã bắc sơn',
      district_id: '200400',
    },
    {
      id: '1419',
      name: 'Xã quảng nghĩa',
      district_id: '200400',
    },
    {
      id: '1420',
      name: 'Xã vĩnh thực',
      district_id: '200400',
    },
    {
      id: '1421',
      name: 'Xã hải tiến',
      district_id: '200400',
    },
    {
      id: '1422',
      name: 'Xã hải đông',
      district_id: '200400',
    },
    {
      id: '1423',
      name: 'Xã vạn ninh',
      district_id: '200400',
    },
    {
      id: '1424',
      name: 'Xã hải sơn',
      district_id: '200400',
    },
    {
      id: '1425',
      name: 'Xã vĩnh trung',
      district_id: '200400',
    },
    {
      id: '11844',
      name: 'Phường bình ngọc',
      district_id: '200400',
    },
    {
      id: '11845',
      name: 'Phường ka long',
      district_id: '200400',
    },
    {
      id: '11846',
      name: 'Phường trà cổ',
      district_id: '200400',
    },
    {
      id: '1353',
      name: 'Thị trấn tiên yên',
      district_id: '200800',
    },
    {
      id: '1354',
      name: 'Xã đồng rui',
      district_id: '200800',
    },
    {
      id: '1355',
      name: 'Xã đại dực',
      district_id: '200800',
    },
    {
      id: '1356',
      name: 'Xã điền xá',
      district_id: '200800',
    },
    {
      id: '1357',
      name: 'Xã đông hải',
      district_id: '200800',
    },
    {
      id: '1358',
      name: 'Xã đông ngũ',
      district_id: '200800',
    },
    {
      id: '1359',
      name: 'Xã hà lâu',
      district_id: '200800',
    },
    {
      id: '1360',
      name: 'Xã hải lạng',
      district_id: '200800',
    },
    {
      id: '1361',
      name: 'Xã yên than',
      district_id: '200800',
    },
    {
      id: '1362',
      name: 'Xã phong dụ',
      district_id: '200800',
    },
    {
      id: '1363',
      name: 'Xã tiên lãng',
      district_id: '200800',
    },
    {
      id: '1364',
      name: 'Xã đại thành',
      district_id: '200800',
    },
    {
      id: '1458',
      name: 'Phường quang trung',
      district_id: '200300',
    },
    {
      id: '1459',
      name: 'Phường yên thanh',
      district_id: '200300',
    },
    {
      id: '1460',
      name: 'Phường thanh sơn',
      district_id: '200300',
    },
    {
      id: '1461',
      name: 'Phường trưng vương',
      district_id: '200300',
    },
    {
      id: '1463',
      name: 'Phường nam khê',
      district_id: '200300',
    },
    {
      id: '1464',
      name: 'Phường vàng danh',
      district_id: '200300',
    },
    {
      id: '1465',
      name: 'Phường bắc sơn',
      district_id: '200300',
    },
    {
      id: '11847',
      name: 'Xã điền công',
      district_id: '200300',
    },
    {
      id: '11848',
      name: 'Phường phương đông',
      district_id: '200300',
    },
    {
      id: '11849',
      name: 'Phường phương nam',
      district_id: '200300',
    },
    {
      id: '11850',
      name: 'Xã thượng yên công',
      district_id: '200300',
    },
    {
      id: '1338',
      name: 'Thị trấn cái rồng',
      district_id: '201300',
    },
    {
      id: '1339',
      name: 'Xã quan lạn',
      district_id: '201300',
    },
    {
      id: '1340',
      name: 'Xã thắng lợi',
      district_id: '201300',
    },
    {
      id: '1341',
      name: 'Xã vạn yên',
      district_id: '201300',
    },
    {
      id: '1342',
      name: 'Xã bản sen',
      district_id: '201300',
    },
    {
      id: '1343',
      name: 'Xã đông xá',
      district_id: '201300',
    },
    {
      id: '1344',
      name: 'Xã bình dân',
      district_id: '201300',
    },
    {
      id: '1345',
      name: 'Xã đài xuyên',
      district_id: '201300',
    },
    {
      id: '1346',
      name: 'Xã đoàn kết',
      district_id: '201300',
    },
    {
      id: '1347',
      name: 'Xã Hạ Long',
      district_id: '201300',
    },
    {
      id: '1348',
      name: 'Xã minh châu',
      district_id: '201300',
    },
    {
      id: '1349',
      name: 'Xã ngọc vừng',
      district_id: '201300',
    },
    {
      id: '1392',
      name: 'Xã đường hoa',
      district_id: '200700',
    },
    {
      id: '1393',
      name: 'Xã cái chiên',
      district_id: '200700',
    },
    {
      id: '1394',
      name: 'Xã phú hải',
      district_id: '200700',
    },
    {
      id: '1395',
      name: 'Xã quảng chính',
      district_id: '200700',
    },
    {
      id: '1396',
      name: 'Xã quảng trung',
      district_id: '200700',
    },
    {
      id: '1397',
      name: 'Xã quảng điền',
      district_id: '200700',
    },
    {
      id: '1398',
      name: 'Xã quảng đức',
      district_id: '200700',
    },
    {
      id: '1400',
      name: 'Xã quảng long',
      district_id: '200700',
    },
    {
      id: '1401',
      name: 'Xã quảng minh',
      district_id: '200700',
    },
    {
      id: '1402',
      name: 'Xã quảng phong',
      district_id: '200700',
    },
    {
      id: '1403',
      name: 'Xã quảng sơn',
      district_id: '200700',
    },
    {
      id: '1404',
      name: 'Xã quảng thắng',
      district_id: '200700',
    },
    {
      id: '1405',
      name: 'Xã quảng thành',
      district_id: '200700',
    },
    {
      id: '1406',
      name: 'Xã quảng thịnh',
      district_id: '200700',
    },
    {
      id: '1407',
      name: 'Thị trấn quảng hà',
      district_id: '200700',
    },
    {
      id: '1408',
      name: 'Xã tiến tới',
      district_id: '200700',
    },
    {
      id: '9496',
      name: 'Phường long bình',
      district_id: '810100',
    },
    {
      id: '9497',
      name: 'Phường quang vinh',
      district_id: '810100',
    },
    {
      id: '9498',
      name: 'Phường quyết thắng',
      district_id: '810100',
    },
    {
      id: '9499',
      name: 'Phường tam hiệp',
      district_id: '810100',
    },
    {
      id: '9500',
      name: 'Phường tam hòa',
      district_id: '810100',
    },
    {
      id: '9501',
      name: 'Phường tân biên',
      district_id: '810100',
    },
    {
      id: '9502',
      name: 'Phường Tân Hạnh',
      district_id: '810100',
    },
    {
      id: '9503',
      name: 'Phường tân hiệp',
      district_id: '810100',
    },
    {
      id: '9504',
      name: 'Phường tân hòa',
      district_id: '810100',
    },
    {
      id: '9505',
      name: 'Phường tân mai',
      district_id: '810100',
    },
    {
      id: '9506',
      name: 'Phường tân phong',
      district_id: '810100',
    },
    {
      id: '9507',
      name: 'Phường tân tiến',
      district_id: '810100',
    },
    {
      id: '9508',
      name: 'Phường tân vạn',
      district_id: '810100',
    },
    {
      id: '9509',
      name: 'Phường thanh bình',
      district_id: '810100',
    },
    {
      id: '9510',
      name: 'Phường thống nhất',
      district_id: '810100',
    },
    {
      id: '9511',
      name: 'Phường trảng dài',
      district_id: '810100',
    },
    {
      id: '9512',
      name: 'Phường trung dũng',
      district_id: '810100',
    },
    {
      id: '9513',
      name: 'Phường an bình',
      district_id: '810100',
    },
    {
      id: '9514',
      name: 'Phường bình đa',
      district_id: '810100',
    },
    {
      id: '9515',
      name: 'Phường long bình tân',
      district_id: '810100',
    },
    {
      id: '9516',
      name: 'Phường bửu hòa',
      district_id: '810100',
    },
    {
      id: '9517',
      name: 'Phường bửu long',
      district_id: '810100',
    },
    {
      id: '9518',
      name: 'Phường Hiệp Hòa',
      district_id: '810100',
    },
    {
      id: '9519',
      name: 'Phường hố nai',
      district_id: '810100',
    },
    {
      id: '9521',
      name: 'Phường Hóa An',
      district_id: '810100',
    },
    {
      id: '9522',
      name: 'Phường hòa bình',
      district_id: '810100',
    },
    {
      id: '9523',
      name: 'Phường An Hòa',
      district_id: '810100',
    },
    {
      id: '9524',
      name: 'Xã long hưng',
      district_id: '810100',
    },
    {
      id: '9525',
      name: 'Phường Phước Tân',
      district_id: '810100',
    },
    {
      id: '9526',
      name: 'Phường Tam Phước',
      district_id: '810100',
    },
    {
      id: '9669',
      name: 'Xã lâm san',
      district_id: '811100',
    },
    {
      id: '9671',
      name: 'Xã nhân nghĩa',
      district_id: '811100',
    },
    {
      id: '9672',
      name: 'Xã xuân tây',
      district_id: '811100',
    },
    {
      id: '9673',
      name: 'Xã sông ray',
      district_id: '811100',
    },
    {
      id: '9675',
      name: 'Xã xuân đông',
      district_id: '811100',
    },
    {
      id: '9676',
      name: 'Xã xuân đường',
      district_id: '811100',
    },
    {
      id: '9677',
      name: 'Xã xuân quế',
      district_id: '811100',
    },
    {
      id: '9678',
      name: 'Xã sông nhạn',
      district_id: '811100',
    },
    {
      id: '9679',
      name: 'Xã bảo bình',
      district_id: '811100',
    },
    {
      id: '9680',
      name: 'Xã xuân mỹ',
      district_id: '811100',
    },
    {
      id: '9681',
      name: 'Xã thừa đức',
      district_id: '811100',
    },
    {
      id: '9682',
      name: 'Xã xuân bảo',
      district_id: '811100',
    },
    {
      id: '12470',
      name: 'Xã long giao',
      district_id: '811100',
    },
    {
      id: '9585',
      name: 'Thị trấn định quán',
      district_id: '810400',
    },
    {
      id: '9586',
      name: 'Xã la ngà',
      district_id: '810400',
    },
    {
      id: '9587',
      name: 'Xã phú cường',
      district_id: '810400',
    },
    {
      id: '9588',
      name: 'Xã phú túc',
      district_id: '810400',
    },
    {
      id: '9589',
      name: 'Xã túc trưng',
      district_id: '810400',
    },
    {
      id: '9590',
      name: 'Xã gia canh',
      district_id: '810400',
    },
    {
      id: '9591',
      name: 'Xã ngọc định',
      district_id: '810400',
    },
    {
      id: '9592',
      name: 'Xã phú hòa',
      district_id: '810400',
    },
    {
      id: '9593',
      name: 'Xã phú lợi',
      district_id: '810400',
    },
    {
      id: '9594',
      name: 'Xã phú ngọc',
      district_id: '810400',
    },
    {
      id: '9595',
      name: 'Xã phú tân',
      district_id: '810400',
    },
    {
      id: '9596',
      name: 'Xã phú vinh',
      district_id: '810400',
    },
    {
      id: '9597',
      name: 'Xã suối nho',
      district_id: '810400',
    },
    {
      id: '9598',
      name: 'Xã thanh sơn',
      district_id: '810400',
    },
    {
      id: '9534',
      name: 'Xã bảo quang',
      district_id: '810600',
    },
    {
      id: '9535',
      name: 'Xã bảo vinh',
      district_id: '810600',
    },
    {
      id: '9536',
      name: 'Xã bàu sen',
      district_id: '810600',
    },
    {
      id: '9537',
      name: 'Xã bàu trâm',
      district_id: '810600',
    },
    {
      id: '9538',
      name: 'Xã bình lộc',
      district_id: '810600',
    },
    {
      id: '9539',
      name: 'Xã hàng gòn',
      district_id: '810600',
    },
    {
      id: '9541',
      name: 'Phường phú bình',
      district_id: '810600',
    },
    {
      id: '9542',
      name: 'Xã suối tre',
      district_id: '810600',
    },
    {
      id: '9544',
      name: 'Phường xuân an',
      district_id: '810600',
    },
    {
      id: '9545',
      name: 'Phường xuân bình',
      district_id: '810600',
    },
    {
      id: '9546',
      name: 'Phường xuân hòa',
      district_id: '810600',
    },
    {
      id: '9547',
      name: 'Xã xuân lập',
      district_id: '810600',
    },
    {
      id: '9549',
      name: 'Xã xuân tân',
      district_id: '810600',
    },
    {
      id: '9550',
      name: 'Phường xuân thanh',
      district_id: '810600',
    },
    {
      id: '9551',
      name: 'Phường xuân trung',
      district_id: '810600',
    },
    {
      id: '9633',
      name: 'Xã long an',
      district_id: '810800',
    },
    {
      id: '9634',
      name: 'Thị trấn long thành',
      district_id: '810800',
    },
    {
      id: '9635',
      name: 'Xã an phước',
      district_id: '810800',
    },
    {
      id: '9636',
      name: 'Xã bình an',
      district_id: '810800',
    },
    {
      id: '9637',
      name: 'Xã bình sơn',
      district_id: '810800',
    },
    {
      id: '9638',
      name: 'Xã cẩm đường',
      district_id: '810800',
    },
    {
      id: '9639',
      name: 'Xã lộc an',
      district_id: '810800',
    },
    {
      id: '9640',
      name: 'Xã long đức',
      district_id: '810800',
    },
    {
      id: '9641',
      name: 'Xã suối trầu',
      district_id: '810800',
    },
    {
      id: '9642',
      name: 'Xã tam an',
      district_id: '810800',
    },
    {
      id: '9645',
      name: 'Xã phước thái',
      district_id: '810800',
    },
    {
      id: '12469',
      name: 'Xã bàu cạn',
      district_id: '810800',
    },
    {
      id: '12544',
      name: 'Xã long phước',
      district_id: '810800',
    },
    {
      id: '12546',
      name: 'Xã phước bình',
      district_id: '810800',
    },
    {
      id: '12685',
      name: 'Xã Tân Hiệp',
      district_id: '810800',
    },
    {
      id: '9650',
      name: 'Xã phú thạnh',
      district_id: '810900',
    },
    {
      id: '9651',
      name: 'Xã phước khánh',
      district_id: '810900',
    },
    {
      id: '9652',
      name: 'Xã vĩnh thanh',
      district_id: '810900',
    },
    {
      id: '9653',
      name: 'Thị Trấn Hiệp Phước',
      district_id: '810900',
    },
    {
      id: '9654',
      name: 'Xã phước thiền',
      district_id: '810900',
    },
    {
      id: '9655',
      name: 'Xã long thọ',
      district_id: '810900',
    },
    {
      id: '9656',
      name: 'Xã phước an',
      district_id: '810900',
    },
    {
      id: '9657',
      name: 'Xã đại phước',
      district_id: '810900',
    },
    {
      id: '9658',
      name: 'Xã long tân',
      district_id: '810900',
    },
    {
      id: '9659',
      name: 'Xã phú đông',
      district_id: '810900',
    },
    {
      id: '9660',
      name: 'Xã phú hội',
      district_id: '810900',
    },
    {
      id: '9661',
      name: 'Xã phú hữu',
      district_id: '810900',
    },
    {
      id: '9552',
      name: 'Thị trấn dầu giây',
      district_id: '810500',
    },
    {
      id: '9554',
      name: 'Xã gia tân 1',
      district_id: '810500',
    },
    {
      id: '9555',
      name: 'Xã gia tân 2',
      district_id: '810500',
    },
    {
      id: '9556',
      name: 'Xã gia tân 3',
      district_id: '810500',
    },
    {
      id: '9557',
      name: 'Xã hưng lộc',
      district_id: '810500',
    },
    {
      id: '9558',
      name: 'Xã lộ 25',
      district_id: '810500',
    },
    {
      id: '9559',
      name: 'Xã quang trung',
      district_id: '810500',
    },
    {
      id: '9560',
      name: 'Xã xuân thạnh',
      district_id: '810500',
    },
    {
      id: '9561',
      name: 'Xã xuân thiện',
      district_id: '810500',
    },
    {
      id: '9562',
      name: 'Xã bàu hàm 2',
      district_id: '810500',
    },
    {
      id: '12471',
      name: 'Xã gia kiệm',
      district_id: '810500',
    },
    {
      id: '9684',
      name: 'Thị trấn trảng bom',
      district_id: '811000',
    },
    {
      id: '9685',
      name: 'Xã an viễn',
      district_id: '811000',
    },
    {
      id: '9687',
      name: 'Xã bình minh',
      district_id: '811000',
    },
    {
      id: '9688',
      name: 'Xã cây gáo',
      district_id: '811000',
    },
    {
      id: '9689',
      name: 'Xã đông hòa',
      district_id: '811000',
    },
    {
      id: '9690',
      name: 'Xã giang điền',
      district_id: '811000',
    },
    {
      id: '9691',
      name: 'Xã hưng thịnh',
      district_id: '811000',
    },
    {
      id: '9692',
      name: 'Xã quảng tiến',
      district_id: '811000',
    },
    {
      id: '9693',
      name: 'Xã sông thao',
      district_id: '811000',
    },
    {
      id: '9694',
      name: 'Xã sông trầu',
      district_id: '811000',
    },
    {
      id: '9695',
      name: 'Xã tây hòa',
      district_id: '811000',
    },
    {
      id: '9696',
      name: 'Xã thanh bình',
      district_id: '811000',
    },
    {
      id: '9697',
      name: 'Xã trung hòa',
      district_id: '811000',
    },
    {
      id: '9698',
      name: 'Xã bắc sơn',
      district_id: '811000',
    },
    {
      id: '9699',
      name: 'Xã đồi 61',
      district_id: '811000',
    },
    {
      id: '9700',
      name: 'Xã hố nai 3',
      district_id: '811000',
    },
    {
      id: '12472',
      name: 'Xã bàu hàm',
      district_id: '811000',
    },
    {
      id: '9619',
      name: 'Xã bình hòa',
      district_id: '810200',
    },
    {
      id: '9620',
      name: 'Xã bình lợi',
      district_id: '810200',
    },
    {
      id: '9621',
      name: 'Xã tân bình',
      district_id: '810200',
    },
    {
      id: '9622',
      name: 'Xã thạnh phú',
      district_id: '810200',
    },
    {
      id: '9623',
      name: 'Xã thiện tân',
      district_id: '810200',
    },
    {
      id: '9624',
      name: 'Thị trấn vĩnh an',
      district_id: '810200',
    },
    {
      id: '9625',
      name: 'Xã tân an',
      district_id: '810200',
    },
    {
      id: '9626',
      name: 'Xã trị an',
      district_id: '810200',
    },
    {
      id: '9627',
      name: 'Xã vĩnh tân',
      district_id: '810200',
    },
    {
      id: '9628',
      name: 'Xã hiếu liêm',
      district_id: '810200',
    },
    {
      id: '9629',
      name: 'Xã mã đà',
      district_id: '810200',
    },
    {
      id: '9630',
      name: 'Xã phú lý',
      district_id: '810200',
    },
    {
      id: '9565',
      name: 'Thị trấn gia ray',
      district_id: '810700',
    },
    {
      id: '9567',
      name: 'Xã bảo hòa',
      district_id: '810700',
    },
    {
      id: '9568',
      name: 'Xã suối cát',
      district_id: '810700',
    },
    {
      id: '9569',
      name: 'Xã xuân bắc',
      district_id: '810700',
    },
    {
      id: '9570',
      name: 'Xã xuân định',
      district_id: '810700',
    },
    {
      id: '9571',
      name: 'Xã xuân phú',
      district_id: '810700',
    },
    {
      id: '9572',
      name: 'Xã xuân tâm',
      district_id: '810700',
    },
    {
      id: '9573',
      name: 'Xã lang minh',
      district_id: '810700',
    },
    {
      id: '9574',
      name: 'Xã suối cao',
      district_id: '810700',
    },
    {
      id: '9577',
      name: 'Xã xuân hiệp',
      district_id: '810700',
    },
    {
      id: '9578',
      name: 'Xã xuân hòa',
      district_id: '810700',
    },
    {
      id: '9579',
      name: 'Xã xuân hưng',
      district_id: '810700',
    },
    {
      id: '9580',
      name: 'Xã xuân thành',
      district_id: '810700',
    },
    {
      id: '9581',
      name: 'Xã xuân thọ',
      district_id: '810700',
    },
    {
      id: '9583',
      name: 'Xã xuân trường',
      district_id: '810700',
    },
    {
      id: '9600',
      name: 'Thị trấn tân phú',
      district_id: '810300',
    },
    {
      id: '9601',
      name: 'Xã phú lâm',
      district_id: '810300',
    },
    {
      id: '9602',
      name: 'Xã đak Lua',
      district_id: '810300',
    },
    {
      id: '9603',
      name: 'Xã nam cát tiên',
      district_id: '810300',
    },
    {
      id: '9604',
      name: 'Xã núi tượng',
      district_id: '810300',
    },
    {
      id: '9605',
      name: 'Xã phú an',
      district_id: '810300',
    },
    {
      id: '9606',
      name: 'Xã phú bình',
      district_id: '810300',
    },
    {
      id: '9607',
      name: 'Xã phú điền',
      district_id: '810300',
    },
    {
      id: '9608',
      name: 'Xã phú lập',
      district_id: '810300',
    },
    {
      id: '9609',
      name: 'Xã phú lộc',
      district_id: '810300',
    },
    {
      id: '9610',
      name: 'Xã phú sơn',
      district_id: '810300',
    },
    {
      id: '9611',
      name: 'Xã phú thanh',
      district_id: '810300',
    },
    {
      id: '9612',
      name: 'Xã phú thịnh',
      district_id: '810300',
    },
    {
      id: '9613',
      name: 'Xã phú trung',
      district_id: '810300',
    },
    {
      id: '9614',
      name: 'Xã phú xuân',
      district_id: '810300',
    },
    {
      id: '9615',
      name: 'Xã tà lài',
      district_id: '810300',
    },
    {
      id: '9616',
      name: 'Xã thanh sơn',
      district_id: '810300',
    },
    {
      id: '9617',
      name: 'Xã trà cổ',
      district_id: '810300',
    },
    {
      id: '5120',
      name: 'Xã bạch long',
      district_id: '420400',
    },
    {
      id: '5121',
      name: 'Xã giao thanh',
      district_id: '420400',
    },
    {
      id: '5122',
      name: 'Xã giao hà',
      district_id: '420400',
    },
    {
      id: '5123',
      name: 'Xã giao xuân',
      district_id: '420400',
    },
    {
      id: '5124',
      name: 'Xã giao yến',
      district_id: '420400',
    },
    {
      id: '5125',
      name: 'Xã hoành sơn',
      district_id: '420400',
    },
    {
      id: '5127',
      name: 'Thị trấn quất lâm',
      district_id: '420400',
    },
    {
      id: '5129',
      name: 'Xã giao tân',
      district_id: '420400',
    },
    {
      id: '5130',
      name: 'Xã giao thiện',
      district_id: '420400',
    },
    {
      id: '5131',
      name: 'Xã bình hòa',
      district_id: '420400',
    },
    {
      id: '5132',
      name: 'Xã giao an',
      district_id: '420400',
    },
    {
      id: '5133',
      name: 'Xã giao châu',
      district_id: '420400',
    },
    {
      id: '5134',
      name: 'Xã giao hải',
      district_id: '420400',
    },
    {
      id: '5136',
      name: 'Xã giao hương',
      district_id: '420400',
    },
    {
      id: '5137',
      name: 'Xã giao lạc',
      district_id: '420400',
    },
    {
      id: '5139',
      name: 'Xã giao long',
      district_id: '420400',
    },
    {
      id: '5140',
      name: 'Xã giao nhân',
      district_id: '420400',
    },
    {
      id: '5141',
      name: 'Xã giao phong',
      district_id: '420400',
    },
    {
      id: '5142',
      name: 'Xã giao thịnh',
      district_id: '420400',
    },
    {
      id: '5143',
      name: 'Xã giao tiến',
      district_id: '420400',
    },
    {
      id: '5144',
      name: 'Xã hồng thuận',
      district_id: '420400',
    },
    {
      id: '5145',
      name: 'Thị trấn ngô đồng',
      district_id: '420400',
    },
    {
      id: '5146',
      name: 'Xã hải bắc',
      district_id: '421000',
    },
    {
      id: '5147',
      name: 'Xã hải châu',
      district_id: '421000',
    },
    {
      id: '5148',
      name: 'Xã hải cường',
      district_id: '421000',
    },
    {
      id: '5149',
      name: 'Xã hải đường',
      district_id: '421000',
    },
    {
      id: '5150',
      name: 'Xã hải giang',
      district_id: '421000',
    },
    {
      id: '5151',
      name: 'Xã hải hà',
      district_id: '421000',
    },
    {
      id: '5152',
      name: 'Xã hải hòa',
      district_id: '421000',
    },
    {
      id: '5153',
      name: 'Xã hải long',
      district_id: '421000',
    },
    {
      id: '5154',
      name: 'Xã hải phúc',
      district_id: '421000',
    },
    {
      id: '5155',
      name: 'Xã hải quang',
      district_id: '421000',
    },
    {
      id: '5156',
      name: 'Xã hải sơn',
      district_id: '421000',
    },
    {
      id: '5157',
      name: 'Xã hải triều',
      district_id: '421000',
    },
    {
      id: '5158',
      name: 'Xã hải trung',
      district_id: '421000',
    },
    {
      id: '5159',
      name: 'Xã hải vân',
      district_id: '421000',
    },
    {
      id: '5160',
      name: 'Xã hải tân',
      district_id: '421000',
    },
    {
      id: '5161',
      name: 'Xã hải tây',
      district_id: '421000',
    },
    {
      id: '5162',
      name: 'Xã hải thanh',
      district_id: '421000',
    },
    {
      id: '5163',
      name: 'Xã hải toàn',
      district_id: '421000',
    },
    {
      id: '5164',
      name: 'Xã hải xuân',
      district_id: '421000',
    },
    {
      id: '5165',
      name: 'Thị trấn cồn',
      district_id: '421000',
    },
    {
      id: '5166',
      name: 'Thị trấn thịnh long',
      district_id: '421000',
    },
    {
      id: '5167',
      name: 'Thị trấn yên định',
      district_id: '421000',
    },
    {
      id: '5168',
      name: 'Xã hải an',
      district_id: '421000',
    },
    {
      id: '5169',
      name: 'Xã hải anh',
      district_id: '421000',
    },
    {
      id: '5170',
      name: 'Xã hải chính',
      district_id: '421000',
    },
    {
      id: '5171',
      name: 'Xã hải đông',
      district_id: '421000',
    },
    {
      id: '5172',
      name: 'Xã hải hưng',
      district_id: '421000',
    },
    {
      id: '5173',
      name: 'Xã hải lộc',
      district_id: '421000',
    },
    {
      id: '5174',
      name: 'Xã hải lý',
      district_id: '421000',
    },
    {
      id: '5175',
      name: 'Xã hải minh',
      district_id: '421000',
    },
    {
      id: '5176',
      name: 'Xã hải nam',
      district_id: '421000',
    },
    {
      id: '5177',
      name: 'Xã hải ninh',
      district_id: '421000',
    },
    {
      id: '5178',
      name: 'Xã hải phong',
      district_id: '421000',
    },
    {
      id: '5179',
      name: 'Xã hải phú',
      district_id: '421000',
    },
    {
      id: '5180',
      name: 'Xã hải phương',
      district_id: '421000',
    },
    {
      id: '4965',
      name: 'Xã mỹ hưng',
      district_id: '420200',
    },
    {
      id: '4966',
      name: 'Xã mỹ hà',
      district_id: '420200',
    },
    {
      id: '4967',
      name: 'Xã mỹ phúc',
      district_id: '420200',
    },
    {
      id: '4968',
      name: 'Xã mỹ tân',
      district_id: '420200',
    },
    {
      id: '4969',
      name: 'Xã mỹ thắng',
      district_id: '420200',
    },
    {
      id: '4970',
      name: 'Xã mỹ thành',
      district_id: '420200',
    },
    {
      id: '4971',
      name: 'Xã mỹ thịnh',
      district_id: '420200',
    },
    {
      id: '4972',
      name: 'Xã mỹ thuận',
      district_id: '420200',
    },
    {
      id: '4973',
      name: 'Xã mỹ tiến',
      district_id: '420200',
    },
    {
      id: '4974',
      name: 'Xã mỹ trung',
      district_id: '420200',
    },
    {
      id: '4975',
      name: 'Thị trấn mỹ lộc',
      district_id: '420200',
    },
    {
      id: '4937',
      name: 'Phường bà triệu',
      district_id: '420100',
    },
    {
      id: '4938',
      name: 'Phường cửa bắc',
      district_id: '420100',
    },
    {
      id: '4939',
      name: 'Phường cửa nam',
      district_id: '420100',
    },
    {
      id: '4940',
      name: 'Phường hạ long',
      district_id: '420100',
    },
    {
      id: '4941',
      name: 'Xã lộc an',
      district_id: '420100',
    },
    {
      id: '4942',
      name: 'Phường lộc hạ',
      district_id: '420100',
    },
    {
      id: '4943',
      name: 'Xã lộc hòa',
      district_id: '420100',
    },
    {
      id: '4944',
      name: 'Phường lộc vượng',
      district_id: '420100',
    },
    {
      id: '4945',
      name: 'Xã mỹ xá',
      district_id: '420100',
    },
    {
      id: '4946',
      name: 'Xã nam phong',
      district_id: '420100',
    },
    {
      id: '4947',
      name: 'Xã nam vân',
      district_id: '420100',
    },
    {
      id: '4948',
      name: 'Phường năng tĩnh',
      district_id: '420100',
    },
    {
      id: '4949',
      name: 'Phường nguyễn du',
      district_id: '420100',
    },
    {
      id: '4950',
      name: 'Phường phan đình phùng',
      district_id: '420100',
    },
    {
      id: '4951',
      name: 'Phường quang trung',
      district_id: '420100',
    },
    {
      id: '4952',
      name: 'Phường trần đăng ninh',
      district_id: '420100',
    },
    {
      id: '4953',
      name: 'Phường trần hưng đạo',
      district_id: '420100',
    },
    {
      id: '4954',
      name: 'Phường ngô quyền',
      district_id: '420100',
    },
    {
      id: '4955',
      name: 'Phường trần quang khải',
      district_id: '420100',
    },
    {
      id: '4956',
      name: 'Phường trần tế xương',
      district_id: '420100',
    },
    {
      id: '4957',
      name: 'Phường trường thi',
      district_id: '420100',
    },
    {
      id: '4958',
      name: 'Phường văn miếu',
      district_id: '420100',
    },
    {
      id: '4959',
      name: 'Phường vị hoàng',
      district_id: '420100',
    },
    {
      id: '4960',
      name: 'Phường vị xuyên',
      district_id: '420100',
    },
    {
      id: '4961',
      name: 'Phường thống nhất',
      district_id: '420100',
    },
    {
      id: '12601',
      name: 'Xã Mỹ Xá',
      district_id: '420100',
    },
    {
      id: '4995',
      name: 'Xã bình minh',
      district_id: '420700',
    },
    {
      id: '4996',
      name: 'Xã điền xá',
      district_id: '420700',
    },
    {
      id: '4997',
      name: 'Xã đồng sơn',
      district_id: '420700',
    },
    {
      id: '4998',
      name: 'Xã hồng quang',
      district_id: '420700',
    },
    {
      id: '4999',
      name: 'Xã nam cường',
      district_id: '420700',
    },
    {
      id: '5000',
      name: 'Xã nam dương',
      district_id: '420700',
    },
    {
      id: '5001',
      name: 'Thị trấn nam giang',
      district_id: '420700',
    },
    {
      id: '5002',
      name: 'Xã nam hải',
      district_id: '420700',
    },
    {
      id: '5003',
      name: 'Xã nam hoa',
      district_id: '420700',
    },
    {
      id: '5004',
      name: 'Xã nam hồng',
      district_id: '420700',
    },
    {
      id: '5005',
      name: 'Xã nam hùng',
      district_id: '420700',
    },
    {
      id: '5006',
      name: 'Xã nam lợi',
      district_id: '420700',
    },
    {
      id: '5007',
      name: 'Xã nam mỹ',
      district_id: '420700',
    },
    {
      id: '5008',
      name: 'Xã nam thái',
      district_id: '420700',
    },
    {
      id: '5009',
      name: 'Xã nam thắng',
      district_id: '420700',
    },
    {
      id: '5010',
      name: 'Xã nam thanh',
      district_id: '420700',
    },
    {
      id: '5011',
      name: 'Xã nam tiến',
      district_id: '420700',
    },
    {
      id: '5012',
      name: 'Xã nam toàn',
      district_id: '420700',
    },
    {
      id: '5014',
      name: 'Xã nghĩa an',
      district_id: '420700',
    },
    {
      id: '5015',
      name: 'Xã tân thịnh',
      district_id: '420700',
    },
    {
      id: '5072',
      name: 'Xã hoàng nam',
      district_id: '420900',
    },
    {
      id: '5073',
      name: 'Xã nam điền',
      district_id: '420900',
    },
    {
      id: '5074',
      name: 'Xã nghĩa bình',
      district_id: '420900',
    },
    {
      id: '5075',
      name: 'Xã nghĩa châu',
      district_id: '420900',
    },
    {
      id: '5076',
      name: 'Xã nghĩa đồng',
      district_id: '420900',
    },
    {
      id: '5077',
      name: 'Xã nghĩa hải',
      district_id: '420900',
    },
    {
      id: '5078',
      name: 'Xã nghĩa hồng',
      district_id: '420900',
    },
    {
      id: '5079',
      name: 'Xã nghĩa hùng',
      district_id: '420900',
    },
    {
      id: '5080',
      name: 'Xã nghĩa lạc',
      district_id: '420900',
    },
    {
      id: '5081',
      name: 'Xã nghĩa lâm',
      district_id: '420900',
    },
    {
      id: '5082',
      name: 'Xã nghĩa lợi',
      district_id: '420900',
    },
    {
      id: '5083',
      name: 'Xã nghĩa minh',
      district_id: '420900',
    },
    {
      id: '5084',
      name: 'Xã nghĩa phong',
      district_id: '420900',
    },
    {
      id: '5085',
      name: 'Xã nghiã phú',
      district_id: '420900',
    },
    {
      id: '5086',
      name: 'Xã nghĩa phúc',
      district_id: '420900',
    },
    {
      id: '5087',
      name: 'Xã nghĩa sơn',
      district_id: '420900',
    },
    {
      id: '5088',
      name: 'Xã nghĩa tân',
      district_id: '420900',
    },
    {
      id: '5089',
      name: 'Xã nghĩa thái',
      district_id: '420900',
    },
    {
      id: '5090',
      name: 'Xã nghĩa thắng',
      district_id: '420900',
    },
    {
      id: '5091',
      name: 'Xã nghĩa thành',
      district_id: '420900',
    },
    {
      id: '5092',
      name: 'Xã nghĩa thịnh',
      district_id: '420900',
    },
    {
      id: '5093',
      name: 'Xã nghĩa trung',
      district_id: '420900',
    },
    {
      id: '5094',
      name: 'Thị trấn liễu đề',
      district_id: '420900',
    },
    {
      id: '5095',
      name: 'Thị trấn quỹ nhất',
      district_id: '420900',
    },
    {
      id: '5096',
      name: 'Thị trấn rạng đông',
      district_id: '420900',
    },
    {
      id: '12680',
      name: 'Xã Phúc Thắng',
      district_id: '420900',
    },
    {
      id: '5016',
      name: 'Thị trấn cổ lễ',
      district_id: '420800',
    },
    {
      id: '5017',
      name: 'Xã liêm hải',
      district_id: '420800',
    },
    {
      id: '5018',
      name: 'Xã phương định',
      district_id: '420800',
    },
    {
      id: '5019',
      name: 'Xã trực chính',
      district_id: '420800',
    },
    {
      id: '5020',
      name: 'Xã trực cường',
      district_id: '420800',
    },
    {
      id: '5021',
      name: 'Xã trực đại',
      district_id: '420800',
    },
    {
      id: '5022',
      name: 'Xã trực đạo',
      district_id: '420800',
    },
    {
      id: '5023',
      name: 'Xã trực hùng',
      district_id: '420800',
    },
    {
      id: '5024',
      name: 'Xã trực hưng',
      district_id: '420800',
    },
    {
      id: '5025',
      name: 'Xã trực khang',
      district_id: '420800',
    },
    {
      id: '5026',
      name: 'Xã trực mỹ',
      district_id: '420800',
    },
    {
      id: '5027',
      name: 'Xã trực nội',
      district_id: '420800',
    },
    {
      id: '5028',
      name: 'Xã trực phú',
      district_id: '420800',
    },
    {
      id: '5029',
      name: 'Xã trực thái',
      district_id: '420800',
    },
    {
      id: '5030',
      name: 'Xã trực thắng',
      district_id: '420800',
    },
    {
      id: '5031',
      name: 'Xã trực thanh',
      district_id: '420800',
    },
    {
      id: '5032',
      name: 'Xã trực thuận',
      district_id: '420800',
    },
    {
      id: '5033',
      name: 'Xã trực tuấn',
      district_id: '420800',
    },
    {
      id: '5034',
      name: 'Xã trung đông',
      district_id: '420800',
    },
    {
      id: '5035',
      name: 'Xã việt hùng',
      district_id: '420800',
    },
    {
      id: '5036',
      name: 'Thị trấn cát thành',
      district_id: '420800',
    },
    {
      id: '12722',
      name: 'Thị Trấn Ninh Cường',
      district_id: '420800',
    },
    {
      id: '4976',
      name: 'Xã liên minh',
      district_id: '420600',
    },
    {
      id: '4977',
      name: 'Xã minh tân',
      district_id: '420600',
    },
    {
      id: '4978',
      name: 'Xã minh thuận',
      district_id: '420600',
    },
    {
      id: '4979',
      name: 'Xã quang trung',
      district_id: '420600',
    },
    {
      id: '4980',
      name: 'Xã tam thanh',
      district_id: '420600',
    },
    {
      id: '4981',
      name: 'Xã tân khánh',
      district_id: '420600',
    },
    {
      id: '4982',
      name: 'Xã tân thành',
      district_id: '420600',
    },
    {
      id: '4983',
      name: 'Xã thành lợi',
      district_id: '420600',
    },
    {
      id: '4984',
      name: 'Xã trung thành',
      district_id: '420600',
    },
    {
      id: '4985',
      name: 'Thị trấn gôi',
      district_id: '420600',
    },
    {
      id: '4987',
      name: 'Xã cộng hòa',
      district_id: '420600',
    },
    {
      id: '4988',
      name: 'Xã đại an',
      district_id: '420600',
    },
    {
      id: '4989',
      name: 'Xã đại thắng',
      district_id: '420600',
    },
    {
      id: '4990',
      name: 'Xã hiền khánh',
      district_id: '420600',
    },
    {
      id: '4991',
      name: 'Xã hợp hưng',
      district_id: '420600',
    },
    {
      id: '4992',
      name: 'Xã kim thái',
      district_id: '420600',
    },
    {
      id: '4993',
      name: 'Xã liên bảo',
      district_id: '420600',
    },
    {
      id: '4994',
      name: 'Xã vĩnh hào',
      district_id: '420600',
    },
    {
      id: '5098',
      name: 'Thị trấn xuân trường',
      district_id: '420300',
    },
    {
      id: '5099',
      name: 'Xã thọ nghiệp',
      district_id: '420300',
    },
    {
      id: '5100',
      name: 'Xã xuân bắc',
      district_id: '420300',
    },
    {
      id: '5101',
      name: 'Xã xuân châu',
      district_id: '420300',
    },
    {
      id: '5103',
      name: 'Xã xuân hòa',
      district_id: '420300',
    },
    {
      id: '5104',
      name: 'Xã xuân hồng',
      district_id: '420300',
    },
    {
      id: '5106',
      name: 'Xã xuân kiên',
      district_id: '420300',
    },
    {
      id: '5107',
      name: 'Xã xuân ngọc',
      district_id: '420300',
    },
    {
      id: '5108',
      name: 'Xã xuân ninh',
      district_id: '420300',
    },
    {
      id: '5109',
      name: 'Xã xuân phong',
      district_id: '420300',
    },
    {
      id: '5110',
      name: 'Xã xuân phú',
      district_id: '420300',
    },
    {
      id: '5111',
      name: 'Xã xuân phương',
      district_id: '420300',
    },
    {
      id: '5113',
      name: 'Xã xuân thành',
      district_id: '420300',
    },
    {
      id: '5118',
      name: 'Xã xuân thượng',
      district_id: '420300',
    },
    {
      id: '5119',
      name: 'Xã xuân thủy',
      district_id: '420300',
    },
    {
      id: '11851',
      name: 'Xã xuân đài',
      district_id: '420300',
    },
    {
      id: '11852',
      name: 'Xã xuân tân',
      district_id: '420300',
    },
    {
      id: '11853',
      name: 'Xã xuân tiến',
      district_id: '420300',
    },
    {
      id: '11854',
      name: 'Xã xuân trung',
      district_id: '420300',
    },
    {
      id: '11855',
      name: 'Xã xuân vinh',
      district_id: '420300',
    },
    {
      id: '5040',
      name: 'Xã yên minh',
      district_id: '420500',
    },
    {
      id: '5041',
      name: 'Xã yên mỹ',
      district_id: '420500',
    },
    {
      id: '5042',
      name: 'Xã yên nghĩa',
      district_id: '420500',
    },
    {
      id: '5043',
      name: 'Xã yên nhân',
      district_id: '420500',
    },
    {
      id: '5044',
      name: 'Xã yên ninh',
      district_id: '420500',
    },
    {
      id: '5045',
      name: 'Xã yên phong',
      district_id: '420500',
    },
    {
      id: '5046',
      name: 'Xã yên phú',
      district_id: '420500',
    },
    {
      id: '5047',
      name: 'Xã yên phúc',
      district_id: '420500',
    },
    {
      id: '5048',
      name: 'Xã yên phương',
      district_id: '420500',
    },
    {
      id: '5049',
      name: 'Xã yên quang',
      district_id: '420500',
    },
    {
      id: '5050',
      name: 'Xã yên tân',
      district_id: '420500',
    },
    {
      id: '5051',
      name: 'Xã yên thắng',
      district_id: '420500',
    },
    {
      id: '5052',
      name: 'Xã yên thành',
      district_id: '420500',
    },
    {
      id: '5053',
      name: 'Xã yên thọ',
      district_id: '420500',
    },
    {
      id: '5054',
      name: 'Xã yên tiến',
      district_id: '420500',
    },
    {
      id: '5055',
      name: 'Xã yên trị',
      district_id: '420500',
    },
    {
      id: '5056',
      name: 'Xã yên trung',
      district_id: '420500',
    },
    {
      id: '5057',
      name: 'Xã yên xá',
      district_id: '420500',
    },
    {
      id: '5058',
      name: 'Thị trấn lâm',
      district_id: '420500',
    },
    {
      id: '5059',
      name: 'Xã yên bằng',
      district_id: '420500',
    },
    {
      id: '5060',
      name: 'Xã yên bình',
      district_id: '420500',
    },
    {
      id: '5061',
      name: 'Xã yên chính',
      district_id: '420500',
    },
    {
      id: '5062',
      name: 'Xã yên cường',
      district_id: '420500',
    },
    {
      id: '5063',
      name: 'Xã yên đồng',
      district_id: '420500',
    },
    {
      id: '5064',
      name: 'Xã yên dương',
      district_id: '420500',
    },
    {
      id: '5065',
      name: 'Xã yên hồng',
      district_id: '420500',
    },
    {
      id: '5066',
      name: 'Xã yên hưng',
      district_id: '420500',
    },
    {
      id: '5067',
      name: 'Xã yên khang',
      district_id: '420500',
    },
    {
      id: '5068',
      name: 'Xã yên khánh',
      district_id: '420500',
    },
    {
      id: '5069',
      name: 'Xã yên lộc',
      district_id: '420500',
    },
    {
      id: '5070',
      name: 'Xã yên lợi',
      district_id: '420500',
    },
    {
      id: '5071',
      name: 'Xã yên lương',
      district_id: '420500',
    },
    {
      id: '11580',
      name: 'Xã tắc vân',
      district_id: '970100',
    },
    {
      id: '11581',
      name: 'Xã an xuyên',
      district_id: '970100',
    },
    {
      id: '11582',
      name: 'Xã định bình',
      district_id: '970100',
    },
    {
      id: '11583',
      name: 'Xã hòa thành',
      district_id: '970100',
    },
    {
      id: '11584',
      name: 'Phường 1',
      district_id: '970100',
    },
    {
      id: '11585',
      name: 'Phường 2',
      district_id: '970100',
    },
    {
      id: '11586',
      name: 'Phường 4',
      district_id: '970100',
    },
    {
      id: '11587',
      name: 'Phường 5',
      district_id: '970100',
    },
    {
      id: '11588',
      name: 'Phường 6',
      district_id: '970100',
    },
    {
      id: '11589',
      name: 'Phường 7',
      district_id: '970100',
    },
    {
      id: '11590',
      name: 'Phường 8',
      district_id: '970100',
    },
    {
      id: '11591',
      name: 'Phường 9',
      district_id: '970100',
    },
    {
      id: '11592',
      name: 'Phường tân xuyên',
      district_id: '970100',
    },
    {
      id: '11593',
      name: 'Phường tân thành',
      district_id: '970100',
    },
    {
      id: '11594',
      name: 'Xã hòa tân',
      district_id: '970100',
    },
    {
      id: '12437',
      name: 'Xã lý văn lâm',
      district_id: '970100',
    },
    {
      id: '12438',
      name: 'Xã tân thành',
      district_id: '970100',
    },
    {
      id: '11629',
      name: 'Xã tân hưng',
      district_id: '970500',
    },
    {
      id: '11630',
      name: 'Xã hưng mỹ',
      district_id: '970500',
    },
    {
      id: '11631',
      name: 'Xã đông thới',
      district_id: '970500',
    },
    {
      id: '11632',
      name: 'Xã tân hưng đông',
      district_id: '970500',
    },
    {
      id: '11633',
      name: 'Xã hòa mỹ',
      district_id: '970500',
    },
    {
      id: '11634',
      name: 'Xã phú hưng',
      district_id: '970500',
    },
    {
      id: '11635',
      name: 'Xã trần thới',
      district_id: '970500',
    },
    {
      id: '11636',
      name: 'Xã thạnh phú',
      district_id: '970500',
    },
    {
      id: '11638',
      name: 'Xã đông hưng',
      district_id: '970500',
    },
    {
      id: '12432',
      name: 'Thị Trấn Cái Nước',
      district_id: '970500',
    },
    {
      id: '12433',
      name: 'Xã lương thế trân',
      district_id: '970500',
    },
    {
      id: '11639',
      name: 'Xã tạ an khương',
      district_id: '970600',
    },
    {
      id: '11640',
      name: 'Xã tạ an khương đông',
      district_id: '970600',
    },
    {
      id: '11642',
      name: 'Xã tân đức',
      district_id: '970600',
    },
    {
      id: '11643',
      name: 'Xã tân thuận',
      district_id: '970600',
    },
    {
      id: '11644',
      name: 'Xã trần phán',
      district_id: '970600',
    },
    {
      id: '11645',
      name: 'Xã tân duyệt',
      district_id: '970600',
    },
    {
      id: '11646',
      name: 'Xã tân dân',
      district_id: '970600',
    },
    {
      id: '11647',
      name: 'Xã tân tiến',
      district_id: '970600',
    },
    {
      id: '11648',
      name: 'Xã quách phẩm bắc',
      district_id: '970600',
    },
    {
      id: '11649',
      name: 'Xã quách phẩm',
      district_id: '970600',
    },
    {
      id: '11650',
      name: 'Xã ngọc chánh',
      district_id: '970600',
    },
    {
      id: '11651',
      name: 'Xã thanh tùng',
      district_id: '970600',
    },
    {
      id: '11652',
      name: 'Xã nguyễn huân',
      district_id: '970600',
    },
    {
      id: '11654',
      name: 'Xã tân trung',
      district_id: '970600',
    },
    {
      id: '12430',
      name: 'Thị trấn đầm dơi',
      district_id: '970600',
    },
    {
      id: '12431',
      name: 'Xã Tạ An Khương Nam',
      district_id: '970600',
    },
    {
      id: '11670',
      name: 'Xã lâm hải',
      district_id: '970800',
    },
    {
      id: '11671',
      name: 'Xã đất mới',
      district_id: '970800',
    },
    {
      id: '11672',
      name: 'Xã hàm rồng',
      district_id: '970800',
    },
    {
      id: '11673',
      name: 'Xã hàng vịnh',
      district_id: '970800',
    },
    {
      id: '11674',
      name: 'Xã hiệp tùng',
      district_id: '970800',
    },
    {
      id: '11675',
      name: 'Xã tam giang',
      district_id: '970800',
    },
    {
      id: '11676',
      name: 'Xã tam giang đông',
      district_id: '970800',
    },
    {
      id: '12441',
      name: 'Thị trấn năm căn',
      district_id: '970800',
    },
    {
      id: '11661',
      name: 'Xã nguyễn việt khái',
      district_id: '970900',
    },
    {
      id: '11662',
      name: 'Xã rạch chèo',
      district_id: '970900',
    },
    {
      id: '11663',
      name: 'Xã việt thắng',
      district_id: '970900',
    },
    {
      id: '11664',
      name: 'Xã tân hưng tây',
      district_id: '970900',
    },
    {
      id: '11665',
      name: 'Xã tân hải',
      district_id: '970900',
    },
    {
      id: '11666',
      name: 'Xã phú tân',
      district_id: '970900',
    },
    {
      id: '11667',
      name: 'Xã phú mỹ',
      district_id: '970900',
    },
    {
      id: '11668',
      name: 'Xã phú thuận',
      district_id: '970900',
    },
    {
      id: '12442',
      name: 'Thị trấn cái đôi vàm',
      district_id: '970900',
    },
    {
      id: '12443',
      name: 'Xã việt khái',
      district_id: '970900',
    },
    {
      id: '11595',
      name: 'Xã biển bạch',
      district_id: '970200',
    },
    {
      id: '11596',
      name: 'Xã biển bạch đông',
      district_id: '970200',
    },
    {
      id: '11597',
      name: 'Xã tân bằng',
      district_id: '970200',
    },
    {
      id: '11598',
      name: 'Xã trí lực',
      district_id: '970200',
    },
    {
      id: '11599',
      name: 'Xã trí phải',
      district_id: '970200',
    },
    {
      id: '11600',
      name: 'Xã tân phú',
      district_id: '970200',
    },
    {
      id: '11601',
      name: 'Xã thới bình',
      district_id: '970200',
    },
    {
      id: '11602',
      name: 'Xã tân lộc',
      district_id: '970200',
    },
    {
      id: '11603',
      name: 'Xã tân lộc bắc',
      district_id: '970200',
    },
    {
      id: '11604',
      name: 'Xã tân lộc đông',
      district_id: '970200',
    },
    {
      id: '11605',
      name: 'Xã hồ thị kỷ',
      district_id: '970200',
    },
    {
      id: '12435',
      name: 'Thị trấn thới bình',
      district_id: '970200',
    },
    {
      id: '11615',
      name: 'Xã khánh bình tây',
      district_id: '970400',
    },
    {
      id: '11616',
      name: 'Xã khánh bình tây bắc',
      district_id: '970400',
    },
    {
      id: '11617',
      name: 'Xã khánh hải',
      district_id: '970400',
    },
    {
      id: '11618',
      name: 'Xã khánh hưng',
      district_id: '970400',
    },
    {
      id: '11619',
      name: 'Xã khánh lộc',
      district_id: '970400',
    },
    {
      id: '11620',
      name: 'Xã khánh bình đông',
      district_id: '970400',
    },
    {
      id: '11621',
      name: 'Xã khánh bình',
      district_id: '970400',
    },
    {
      id: '11622',
      name: 'Xã trần hợi',
      district_id: '970400',
    },
    {
      id: '11624',
      name: 'Xã lợi an',
      district_id: '970400',
    },
    {
      id: '11625',
      name: 'Xã phong lạc',
      district_id: '970400',
    },
    {
      id: '11627',
      name: 'Xã phong điền',
      district_id: '970400',
    },
    {
      id: '12439',
      name: 'Thị trấn sông đốc',
      district_id: '970400',
    },
    {
      id: '12440',
      name: 'Thị trấn trần văn thời',
      district_id: '970400',
    },
    {
      id: '11607',
      name: 'Xã khánh an',
      district_id: '970300',
    },
    {
      id: '11608',
      name: 'Xã khánh tiến',
      district_id: '970300',
    },
    {
      id: '11609',
      name: 'Xã khánh hòa',
      district_id: '970300',
    },
    {
      id: '11610',
      name: 'Xã khánh hội',
      district_id: '970300',
    },
    {
      id: '11611',
      name: 'Xã khánh lâm',
      district_id: '970300',
    },
    {
      id: '11612',
      name: 'Xã nguyễn phích',
      district_id: '970300',
    },
    {
      id: '11614',
      name: 'Xã khánh thuận',
      district_id: '970300',
    },
    {
      id: '12434',
      name: 'Thị trấn u minh',
      district_id: '970300',
    },
    {
      id: '2553',
      name: 'Thị trấn bảo lạc',
      district_id: '270200',
    },
    {
      id: '2554',
      name: 'Xã cốc pàng',
      district_id: '270200',
    },
    {
      id: '2555',
      name: 'Xã thượng hà',
      district_id: '270200',
    },
    {
      id: '2556',
      name: 'Xã cô ba',
      district_id: '270200',
    },
    {
      id: '2557',
      name: 'Xã khánh xuân',
      district_id: '270200',
    },
    {
      id: '2558',
      name: 'Xã xuân trường',
      district_id: '270200',
    },
    {
      id: '2559',
      name: 'Xã bảo toàn',
      district_id: '270200',
    },
    {
      id: '2560',
      name: 'Xã hồng trị',
      district_id: '270200',
    },
    {
      id: '2561',
      name: 'Xã phan thanh',
      district_id: '270200',
    },
    {
      id: '2562',
      name: 'Xã hồng an',
      district_id: '270200',
    },
    {
      id: '2563',
      name: 'Xã hưng đạo',
      district_id: '270200',
    },
    {
      id: '2564',
      name: 'Xã huy giáp',
      district_id: '270200',
    },
    {
      id: '2565',
      name: 'Xã sơn lộ',
      district_id: '270200',
    },
    {
      id: '2566',
      name: 'Xã đình phùng',
      district_id: '270200',
    },
    {
      id: '2567',
      name: 'Xã hưng thịnh',
      district_id: '270200',
    },
    {
      id: '2568',
      name: 'Xã kim cúc',
      district_id: '270200',
    },
    {
      id: '2569',
      name: 'Xã sơn lập',
      district_id: '270200',
    },
    {
      id: '2570',
      name: 'Xã quảng lâm',
      district_id: '271200',
    },
    {
      id: '2571',
      name: 'Xã thạch lâm',
      district_id: '271200',
    },
    {
      id: '2572',
      name: 'Xã thái học',
      district_id: '271200',
    },
    {
      id: '2573',
      name: 'Xã thái sơn',
      district_id: '271200',
    },
    {
      id: '2574',
      name: 'Xã yên thổ',
      district_id: '271200',
    },
    {
      id: '2576',
      name: 'Xã mông ân',
      district_id: '271200',
    },
    {
      id: '2577',
      name: 'Xã đức hạnh',
      district_id: '271200',
    },
    {
      id: '2578',
      name: 'Xã lý bôn',
      district_id: '271200',
    },
    {
      id: '2579',
      name: 'Xã vĩnh quang',
      district_id: '271200',
    },
    {
      id: '2580',
      name: 'Xã vĩnh phong',
      district_id: '271200',
    },
    {
      id: '2581',
      name: 'Xã nam quang',
      district_id: '271200',
    },
    {
      id: '2582',
      name: 'Xã nam cao',
      district_id: '271200',
    },
    {
      id: '2583',
      name: 'Xã tân việt',
      district_id: '271200',
    },
    {
      id: '11774',
      name: 'Thị trấn pác miầu',
      district_id: '271200',
    },
    {
      id: '2407',
      name: 'Phường sông hiến',
      district_id: '270100',
    },
    {
      id: '2408',
      name: 'Phường sông bằng',
      district_id: '270100',
    },
    {
      id: '2409',
      name: 'Phường hợp giang',
      district_id: '270100',
    },
    {
      id: '2410',
      name: 'Phường tân giang',
      district_id: '270100',
    },
    {
      id: '2415',
      name: 'Xã vĩnh quang',
      district_id: '270100',
    },
    {
      id: '2416',
      name: 'Xã hưng đạo',
      district_id: '270100',
    },
    {
      id: '11780',
      name: 'Phường đề thám',
      district_id: '270100',
    },
    {
      id: '11781',
      name: 'Phường duyệt trung',
      district_id: '270100',
    },
    {
      id: '11782',
      name: 'Phường hoà chung',
      district_id: '270100',
    },
    {
      id: '11783',
      name: 'Phường ngọc xuân',
      district_id: '270100',
    },
    {
      id: '11784',
      name: 'Xã chu trinh',
      district_id: '270100',
    },
    {
      id: '2533',
      name: 'Thị trấn nguyên bình',
      district_id: '270700',
    },
    {
      id: '2534',
      name: 'Thị trấn tĩnh túc',
      district_id: '270700',
    },
    {
      id: '2535',
      name: 'Xã yên lạc',
      district_id: '270700',
    },
    {
      id: '2536',
      name: 'Xã ca thành',
      district_id: '270700',
    },
    {
      id: '2537',
      name: 'Xã triệu nguyên',
      district_id: '270700',
    },
    {
      id: '2538',
      name: 'Xã vũ nông',
      district_id: '270700',
    },
    {
      id: '2539',
      name: 'Xã thái học',
      district_id: '270700',
    },
    {
      id: '2540',
      name: 'Xã thể dục',
      district_id: '270700',
    },
    {
      id: '2541',
      name: 'Xã bắc hợp',
      district_id: '270700',
    },
    {
      id: '2542',
      name: 'Xã minh tâm',
      district_id: '270700',
    },
    {
      id: '2543',
      name: 'Xã minh thanh',
      district_id: '270700',
    },
    {
      id: '2544',
      name: 'Xã lang môn',
      district_id: '270700',
    },
    {
      id: '2545',
      name: 'Xã mai long',
      district_id: '270700',
    },
    {
      id: '2546',
      name: 'Xã phan thanh',
      district_id: '270700',
    },
    {
      id: '2547',
      name: 'Xã quang thành',
      district_id: '270700',
    },
    {
      id: '2548',
      name: 'Xã tam kim',
      district_id: '270700',
    },
    {
      id: '2549',
      name: 'Xã hoa thám',
      district_id: '270700',
    },
    {
      id: '2550',
      name: 'Xã thành công',
      district_id: '270700',
    },
    {
      id: '2551',
      name: 'Xã hưng đạo',
      district_id: '270700',
    },
    {
      id: '2552',
      name: 'Xã thịnh vượng',
      district_id: '270700',
    },
    {
      id: '12773',
      name: 'Xã Vũ Minh',
      district_id: '270700',
    },
    {
      id: '2419',
      name: 'Xã hồng định',
      district_id: '270900',
    },
    {
      id: '2420',
      name: 'Xã hồng quang',
      district_id: '270900',
    },
    {
      id: '2421',
      name: 'Xã hoàng hải',
      district_id: '270900',
    },
    {
      id: '2422',
      name: 'Xã hạnh phúc',
      district_id: '270900',
    },
    {
      id: '2423',
      name: 'Thị trấn quảng uyên',
      district_id: '270900',
    },
    {
      id: '2424',
      name: 'Xã phi hải',
      district_id: '270900',
    },
    {
      id: '2425',
      name: 'Xã quảng hưng',
      district_id: '270900',
    },
    {
      id: '2426',
      name: 'Xã bình lăng',
      district_id: '270900',
    },
    {
      id: '2427',
      name: 'Xã độc lập',
      district_id: '270900',
    },
    {
      id: '2428',
      name: 'Xã quốc phong',
      district_id: '270900',
    },
    {
      id: '2429',
      name: 'Xã quốc dân',
      district_id: '270900',
    },
    {
      id: '2430',
      name: 'Xã đoài khôn',
      district_id: '270900',
    },
    {
      id: '2431',
      name: 'Xã phúc sen',
      district_id: '270900',
    },
    {
      id: '2432',
      name: 'Xã chí thảo',
      district_id: '270900',
    },
    {
      id: '2433',
      name: 'Xã cai bộ',
      district_id: '270900',
    },
    {
      id: '2434',
      name: 'Xã tự do',
      district_id: '270900',
    },
    {
      id: '11776',
      name: 'Xã ngọc động',
      district_id: '270900',
    },
    {
      id: '2449',
      name: 'Thị trấn trùng khánh',
      district_id: '270600',
    },
    {
      id: '2450',
      name: 'Xã lăng yên',
      district_id: '270600',
    },
    {
      id: '2451',
      name: 'Xã ngọc chung',
      district_id: '270600',
    },
    {
      id: '2452',
      name: 'Xã phong nậm',
      district_id: '270600',
    },
    {
      id: '2453',
      name: 'Xã ngọc khê',
      district_id: '270600',
    },
    {
      id: '2455',
      name: 'Xã chí viễn',
      district_id: '270600',
    },
    {
      id: '2456',
      name: 'Xã đàm thuỷ',
      district_id: '270600',
    },
    {
      id: '2457',
      name: 'Xã lăng hiếu',
      district_id: '270600',
    },
    {
      id: '2458',
      name: 'Xã khâm thành',
      district_id: '270600',
    },
    {
      id: '2460',
      name: 'Xã phong châu',
      district_id: '270600',
    },
    {
      id: '2461',
      name: 'Xã cảnh tiên',
      district_id: '270600',
    },
    {
      id: '2462',
      name: 'Xã trung phúc',
      district_id: '270600',
    },
    {
      id: '2464',
      name: 'Xã cao thăng',
      district_id: '270600',
    },
    {
      id: '2466',
      name: 'Xã đoài côn',
      district_id: '270600',
    },
    {
      id: '2467',
      name: 'Xã thân giáp',
      district_id: '270600',
    },
    {
      id: '2468',
      name: 'Xã ngọc côn',
      district_id: '270600',
    },
    {
      id: '11769',
      name: 'Xã đình minh',
      district_id: '270600',
    },
    {
      id: '11770',
      name: 'Xã đình phong',
      district_id: '270600',
    },
    {
      id: '11771',
      name: 'Xã đức hồng',
      district_id: '270600',
    },
    {
      id: '11772',
      name: 'Xã thông hoè',
      district_id: '270600',
    },
    {
      id: '12636',
      name: 'Thị Trấn Trà Lĩnh',
      district_id: '270600',
    },
    {
      id: '2503',
      name: 'Thị trấn xuân hoà',
      district_id: '270400',
    },
    {
      id: '2504',
      name: 'Xã trường hà',
      district_id: '270400',
    },
    {
      id: '2506',
      name: 'Xã lũng nặm',
      district_id: '270400',
    },
    {
      id: '2508',
      name: 'Xã cải viên',
      district_id: '270400',
    },
    {
      id: '2510',
      name: 'Xã nội thôn',
      district_id: '270400',
    },
    {
      id: '2511',
      name: 'Xã sóc hà',
      district_id: '270400',
    },
    {
      id: '2512',
      name: 'Xã thượng thôn',
      district_id: '270400',
    },
    {
      id: '2513',
      name: 'Xã tổng cọt',
      district_id: '270400',
    },
    {
      id: '2515',
      name: 'Xã hồng sỹ',
      district_id: '270400',
    },
    {
      id: '2519',
      name: 'Xã mã ba',
      district_id: '270400',
    },
    {
      id: '12703',
      name: 'Xã Cần Nông',
      district_id: '270400',
    },
    {
      id: '12704',
      name: 'Thị Trấn Thông Nông',
      district_id: '270400',
    },
    {
      id: '12705',
      name: 'Xã Cần Yên',
      district_id: '270400',
    },
    {
      id: '12706',
      name: 'Xã Ngọc Đào',
      district_id: '270400',
    },
    {
      id: '12707',
      name: 'Xã Thanh Long',
      district_id: '270400',
    },
    {
      id: '12708',
      name: 'Xã Đa Thông',
      district_id: '270400',
    },
    {
      id: '12709',
      name: 'Xã Lương Can',
      district_id: '270400',
    },
    {
      id: '12710',
      name: 'Xã Yên Sơn',
      district_id: '270400',
    },
    {
      id: '12711',
      name: 'Xã Ngọc Động',
      district_id: '270400',
    },
    {
      id: '12712',
      name: 'Xã Lương Thông',
      district_id: '270400',
    },
    {
      id: '12713',
      name: 'Xã Quý Quân',
      district_id: '270400',
    },
    {
      id: '2435',
      name: 'Xã đức quang',
      district_id: '271100',
    },
    {
      id: '2436',
      name: 'Xã kim loan',
      district_id: '271100',
    },
    {
      id: '2437',
      name: 'Xã an lạc',
      district_id: '271100',
    },
    {
      id: '2438',
      name: 'Xã quang long',
      district_id: '271100',
    },
    {
      id: '2440',
      name: 'Xã việt chu',
      district_id: '271100',
    },
    {
      id: '2441',
      name: 'Xã thái đức',
      district_id: '271100',
    },
    {
      id: '2442',
      name: 'Xã cô ngân',
      district_id: '271100',
    },
    {
      id: '2443',
      name: 'Xã thị hoa',
      district_id: '271100',
    },
    {
      id: '2444',
      name: 'Thị trấn thanh nhật',
      district_id: '271100',
    },
    {
      id: '2445',
      name: 'Xã minh long',
      district_id: '271100',
    },
    {
      id: '2446',
      name: 'Xã thắng lợi',
      district_id: '271100',
    },
    {
      id: '2447',
      name: 'Xã lý quốc',
      district_id: '271100',
    },
    {
      id: '2448',
      name: 'Xã đồng loan',
      district_id: '271100',
    },
    {
      id: '11768',
      name: 'Xã vinh quý',
      district_id: '271100',
    },
    {
      id: '12804',
      name: 'Xã Thống Nhất',
      district_id: '271100',
    },
    {
      id: '2479',
      name: 'Thị trấn nước hai',
      district_id: '270800',
    },
    {
      id: '2480',
      name: 'Xã dân chủ',
      district_id: '270800',
    },
    {
      id: '2481',
      name: 'Xã nam tuấn',
      district_id: '270800',
    },
    {
      id: '2482',
      name: 'Xã đại tiến',
      district_id: '270800',
    },
    {
      id: '2485',
      name: 'Xã trương lương',
      district_id: '270800',
    },
    {
      id: '2486',
      name: 'Xã bình long',
      district_id: '270800',
    },
    {
      id: '2487',
      name: 'Xã bế triều',
      district_id: '270800',
    },
    {
      id: '2488',
      name: 'Xã ngũ lão',
      district_id: '270800',
    },
    {
      id: '2489',
      name: 'Xã công trừng',
      district_id: '270800',
    },
    {
      id: '2490',
      name: 'Xã hồng việt',
      district_id: '270800',
    },
    {
      id: '2492',
      name: 'Xã nguyễn huệ',
      district_id: '270800',
    },
    {
      id: '2493',
      name: 'Xã hoàng tung',
      district_id: '270800',
    },
    {
      id: '2495',
      name: 'Xã quang trung',
      district_id: '270800',
    },
    {
      id: '2497',
      name: 'Xã bình dương',
      district_id: '270800',
    },
    {
      id: '2498',
      name: 'Xã bạch đằng',
      district_id: '270800',
    },
    {
      id: '2499',
      name: 'Xã lê chung',
      district_id: '270800',
    },
    {
      id: '2501',
      name: 'Xã hà trì',
      district_id: '270800',
    },
    {
      id: '2502',
      name: 'Xã hồng nam',
      district_id: '270800',
    },
    {
      id: '11777',
      name: 'Xã đức long',
      district_id: '270800',
    },
    {
      id: '11778',
      name: 'Xã đức xuân',
      district_id: '270800',
    },
    {
      id: '11779',
      name: 'Xã trương vương',
      district_id: '270800',
    },
    {
      id: '2600',
      name: 'Thị trấn tà lùng',
      district_id: '271300',
    },
    {
      id: '2601',
      name: 'Xã hồng đại',
      district_id: '271300',
    },
    {
      id: '2602',
      name: 'Xã triệu ẩu',
      district_id: '271300',
    },
    {
      id: '2603',
      name: 'Xã lương thiện',
      district_id: '271300',
    },
    {
      id: '2604',
      name: 'Xã đại sơn',
      district_id: '271300',
    },
    {
      id: '2605',
      name: 'Xã tiên thành',
      district_id: '271300',
    },
    {
      id: '2606',
      name: 'Thị trấn hoà thuận',
      district_id: '271300',
    },
    {
      id: '2607',
      name: 'Xã mỹ hưng',
      district_id: '271300',
    },
    {
      id: '2608',
      name: 'Xã cách linh',
      district_id: '271300',
    },
    {
      id: '2584',
      name: 'Xã đức thông',
      district_id: '271000',
    },
    {
      id: '2585',
      name: 'Xã quang trọng',
      district_id: '271000',
    },
    {
      id: '2586',
      name: 'Xã thái cường',
      district_id: '271000',
    },
    {
      id: '2587',
      name: 'Xã vân trình',
      district_id: '271000',
    },
    {
      id: '2588',
      name: 'Xã thị ngân',
      district_id: '271000',
    },
    {
      id: '2589',
      name: 'Xã thụy hùng',
      district_id: '271000',
    },
    {
      id: '2590',
      name: 'Xã đức long',
      district_id: '271000',
    },
    {
      id: '2591',
      name: 'Xã trọng con',
      district_id: '271000',
    },
    {
      id: '2592',
      name: 'Xã danh sỹ',
      district_id: '271000',
    },
    {
      id: '2593',
      name: 'Xã lê lợi',
      district_id: '271000',
    },
    {
      id: '2594',
      name: 'Xã đức xuân',
      district_id: '271000',
    },
    {
      id: '2595',
      name: 'Thị trấn đông khê',
      district_id: '271000',
    },
    {
      id: '2596',
      name: 'Xa lê lai',
      district_id: '271000',
    },
    {
      id: '2597',
      name: 'Xã canh tân',
      district_id: '271000',
    },
    {
      id: '2598',
      name: 'Xã kim đồng',
      district_id: '271000',
    },
    {
      id: '2599',
      name: 'Xã minh khai',
      district_id: '271000',
    },
    {
      id: '8047',
      name: 'Phường an bình',
      district_id: '600500',
    },
    {
      id: '8048',
      name: 'Phường ngô mây',
      district_id: '600500',
    },
    {
      id: '8049',
      name: 'Phường an phước',
      district_id: '600500',
    },
    {
      id: '8050',
      name: 'Phường an phú',
      district_id: '600500',
    },
    {
      id: '8051',
      name: 'Phường tây sơn',
      district_id: '600500',
    },
    {
      id: '8052',
      name: 'Phường an tân',
      district_id: '600500',
    },
    {
      id: '8053',
      name: 'Xã song an',
      district_id: '600500',
    },
    {
      id: '8054',
      name: 'Xã tú an',
      district_id: '600500',
    },
    {
      id: '8055',
      name: 'Xã cửu an',
      district_id: '600500',
    },
    {
      id: '8056',
      name: 'Xã xuân an',
      district_id: '600500',
    },
    {
      id: '8057',
      name: 'Xã thành an',
      district_id: '600500',
    },
    {
      id: '8145',
      name: 'Phường hòa bình',
      district_id: '601000',
    },
    {
      id: '8146',
      name: 'Phường đoàn kết',
      district_id: '601000',
    },
    {
      id: '8147',
      name: 'Phường cheo reo',
      district_id: '601000',
    },
    {
      id: '8148',
      name: 'Phường sông bờ',
      district_id: '601000',
    },
    {
      id: '12040',
      name: 'Xã chư băh',
      district_id: '601000',
    },
    {
      id: '12041',
      name: 'Xã ia rtô',
      district_id: '601000',
    },
    {
      id: '12042',
      name: 'Xã ia rbol',
      district_id: '601000',
    },
    {
      id: '12043',
      name: 'Xã ia sao',
      district_id: '601000',
    },
    {
      id: '8110',
      name: 'Xã ia pior',
      district_id: '600800',
    },
    {
      id: '8111',
      name: 'Xã ia pia',
      district_id: '600800',
    },
    {
      id: '8112',
      name: 'Xã ia vê',
      district_id: '600800',
    },
    {
      id: '8113',
      name: 'Xã ia o',
      district_id: '600800',
    },
    {
      id: '8115',
      name: 'Xã ia púch',
      district_id: '600800',
    },
    {
      id: '8117',
      name: 'Xã ia bang',
      district_id: '600800',
    },
    {
      id: '8118',
      name: 'Xã ia kly',
      district_id: '600800',
    },
    {
      id: '8119',
      name: 'Thị trấn chư prông',
      district_id: '600800',
    },
    {
      id: '8120',
      name: 'Xã ia drăng',
      district_id: '600800',
    },
    {
      id: '8121',
      name: 'Xã thăng hưng',
      district_id: '600800',
    },
    {
      id: '8122',
      name: 'Xã bình giáo',
      district_id: '600800',
    },
    {
      id: '8123',
      name: 'Xã bầu cạn',
      district_id: '600800',
    },
    {
      id: '8124',
      name: 'Xã ia tor',
      district_id: '600800',
    },
    {
      id: '8126',
      name: 'Xã ia boòng',
      district_id: '600800',
    },
    {
      id: '8127',
      name: 'Xã ia lâu',
      district_id: '600800',
    },
    {
      id: '8128',
      name: 'Xã ia me',
      district_id: '600800',
    },
    {
      id: '8129',
      name: 'Xã ia phìn',
      district_id: '600800',
    },
    {
      id: '12064',
      name: 'Xã ia ga',
      district_id: '600800',
    },
    {
      id: '12065',
      name: 'Xã ia mơ',
      district_id: '600800',
    },
    {
      id: '8130',
      name: 'Thị trấn chư sê',
      district_id: '600900',
    },
    {
      id: '8131',
      name: 'Xã ia tiêm',
      district_id: '600900',
    },
    {
      id: '8135',
      name: 'Xã ia blang',
      district_id: '600900',
    },
    {
      id: '8136',
      name: 'Xã dun',
      district_id: '600900',
    },
    {
      id: '8138',
      name: 'Xã bờ ngoong',
      district_id: '600900',
    },
    {
      id: '8139',
      name: 'Xã ia glai',
      district_id: '600900',
    },
    {
      id: '8140',
      name: 'Xã ia hlốp',
      district_id: '600900',
    },
    {
      id: '8141',
      name: 'Xã ayun',
      district_id: '600900',
    },
    {
      id: '8144',
      name: 'Xã bar maih',
      district_id: '600900',
    },
    {
      id: '12067',
      name: 'Xã al bá',
      district_id: '600900',
    },
    {
      id: '12068',
      name: 'Xã chư pơng',
      district_id: '600900',
    },
    {
      id: '12069',
      name: 'Xã h bông',
      district_id: '600900',
    },
    {
      id: '12070',
      name: 'Xã ia ko',
      district_id: '600900',
    },
    {
      id: '12071',
      name: 'Xã ia pal',
      district_id: '600900',
    },
    {
      id: '12072',
      name: 'Xã kông htok',
      district_id: '600900',
    },
    {
      id: '8058',
      name: 'Thị trấn kbang',
      district_id: '600400',
    },
    {
      id: '8060',
      name: 'Xã nghĩa an',
      district_id: '600400',
    },
    {
      id: '8061',
      name: 'Xã tơ tung',
      district_id: '600400',
    },
    {
      id: '8064',
      name: 'Xã sơ pai',
      district_id: '600400',
    },
    {
      id: '8066',
      name: "Xã đăk H'lơ",
      district_id: '600400',
    },
    {
      id: '8067',
      name: 'Xã đăk roong',
      district_id: '600400',
    },
    {
      id: '8070',
      name: 'Xã kon pne',
      district_id: '600400',
    },
    {
      id: '8071',
      name: 'Xã lơ ku',
      district_id: '600400',
    },
    {
      id: '12058',
      name: 'Xã đak smar',
      district_id: '600400',
    },
    {
      id: '12059',
      name: 'Xã đông',
      district_id: '600400',
    },
    {
      id: '12060',
      name: 'Xã kông lơng khơng',
      district_id: '600400',
    },
    {
      id: '12061',
      name: 'Xã kông pla',
      district_id: '600400',
    },
    {
      id: '12062',
      name: 'Xã krong',
      district_id: '600400',
    },
    {
      id: '12063',
      name: 'Xã sơn lang',
      district_id: '600400',
    },
    {
      id: '8154',
      name: 'Xã kông yang',
      district_id: '600600',
    },
    {
      id: '8155',
      name: 'Xã Yama',
      district_id: '600600',
    },
    {
      id: '8156',
      name: 'Xã an trung',
      district_id: '600600',
    },
    {
      id: '8157',
      name: 'Xã yang trung',
      district_id: '600600',
    },
    {
      id: '8158',
      name: 'Xã đăk pơ pho',
      district_id: '600600',
    },
    {
      id: '8159',
      name: 'Xã yang nam',
      district_id: '600600',
    },
    {
      id: '8160',
      name: 'Xã chơ long',
      district_id: '600600',
    },
    {
      id: '8162',
      name: 'Xã đăk kơ ning',
      district_id: '600600',
    },
    {
      id: '8163',
      name: 'Xã đăk tơ pang',
      district_id: '600600',
    },
    {
      id: '8164',
      name: 'Xã sró',
      district_id: '600600',
    },
    {
      id: '8165',
      name: 'Xã đăk pling',
      district_id: '600600',
    },
    {
      id: '8166',
      name: 'Xã đăk song',
      district_id: '600600',
    },
    {
      id: '12051',
      name: 'Thị trấn kông chro',
      district_id: '600600',
    },
    {
      id: '12052',
      name: 'Xã chư krêy',
      district_id: '600600',
    },
    {
      id: '12053',
      name: 'Xã ya ma',
      district_id: '600600',
    },
    {
      id: '8168',
      name: 'Xã krông năng',
      district_id: '601100',
    },
    {
      id: '8169',
      name: 'Xã ia mláh',
      district_id: '601100',
    },
    {
      id: '8170',
      name: 'Xã đất bằng',
      district_id: '601100',
    },
    {
      id: '8171',
      name: 'Xã ia hdreh',
      district_id: '601100',
    },
    {
      id: '8172',
      name: 'Xã uar',
      district_id: '601100',
    },
    {
      id: '8173',
      name: 'Xã Chưr Căm',
      district_id: '601100',
    },
    {
      id: '8174',
      name: 'Thị trấn phú túc',
      district_id: '601100',
    },
    {
      id: '8175',
      name: 'Xã phú cần',
      district_id: '601100',
    },
    {
      id: '8176',
      name: 'Xã chư gu',
      district_id: '601100',
    },
    {
      id: '8177',
      name: 'Xã chư ngọc',
      district_id: '601100',
    },
    {
      id: '8179',
      name: 'Xã chư drăng',
      district_id: '601100',
    },
    {
      id: '12055',
      name: 'Xã ia rmok',
      district_id: '601100',
    },
    {
      id: '12056',
      name: 'Xã ia rsai',
      district_id: '601100',
    },
    {
      id: '12057',
      name: 'Xã ia rsươm',
      district_id: '601100',
    },
    {
      id: '8036',
      name: 'Xã đăk ýa',
      district_id: '600300',
    },
    {
      id: '8038',
      name: 'Xã kon thụp',
      district_id: '600300',
    },
    {
      id: '8039',
      name: 'Xã ayun',
      district_id: '600300',
    },
    {
      id: '8040',
      name: 'Xã đăk jo ta',
      district_id: '600300',
    },
    {
      id: '8041',
      name: 'Xã đê ar',
      district_id: '600300',
    },
    {
      id: '8042',
      name: 'Xã đăk trôi',
      district_id: '600300',
    },
    {
      id: '8043',
      name: 'Xã lơ pang',
      district_id: '600300',
    },
    {
      id: '8044',
      name: 'Xã kon chiêng',
      district_id: '600300',
    },
    {
      id: '8045',
      name: 'Xã hà ra',
      district_id: '600300',
    },
    {
      id: '12048',
      name: 'Thị trấn kon dơng',
      district_id: '600300',
    },
    {
      id: '12049',
      name: 'Xã đăk djrăng',
      district_id: '600300',
    },
    {
      id: '12050',
      name: 'Xã đak ta ley',
      district_id: '600300',
    },
    {
      id: '8208',
      name: 'Thị trấn phú thiện',
      district_id: '601600',
    },
    {
      id: '8209',
      name: 'Xã ayun hạ',
      district_id: '601600',
    },
    {
      id: '8210',
      name: 'Xã chrôh pơnan',
      district_id: '601600',
    },
    {
      id: '8211',
      name: 'Xã chư a thai',
      district_id: '601600',
    },
    {
      id: '8213',
      name: 'Xã ia hiao',
      district_id: '601600',
    },
    {
      id: '8214',
      name: 'Xã ia piar',
      district_id: '601600',
    },
    {
      id: '8215',
      name: 'Xã ia peng',
      district_id: '601600',
    },
    {
      id: '8216',
      name: 'Xã Iasol',
      district_id: '601600',
    },
    {
      id: '8217',
      name: 'Xã ia yeng',
      district_id: '601600',
    },
    {
      id: '12044',
      name: 'Xã ia ake',
      district_id: '601600',
    },
    {
      id: '7994',
      name: 'Phường hội phú',
      district_id: '600100',
    },
    {
      id: '7995',
      name: 'Xã an phú',
      district_id: '600100',
    },
    {
      id: '7996',
      name: 'Xã diên phú',
      district_id: '600100',
    },
    {
      id: '7998',
      name: 'Xã biển hồ',
      district_id: '600100',
    },
    {
      id: '7999',
      name: 'Xã trà đa',
      district_id: '600100',
    },
    {
      id: '8001',
      name: 'Xã chư á',
      district_id: '600100',
    },
    {
      id: '8002',
      name: 'Xã tân sơn',
      district_id: '600100',
    },
    {
      id: '8003',
      name: 'Phường chi lăng',
      district_id: '600100',
    },
    {
      id: '8004',
      name: 'Phường hoa lư',
      district_id: '600100',
    },
    {
      id: '8005',
      name: 'Phường yên thế',
      district_id: '600100',
    },
    {
      id: '8006',
      name: 'Phường thống nhất',
      district_id: '600100',
    },
    {
      id: '8007',
      name: 'Phường tây sơn',
      district_id: '600100',
    },
    {
      id: '8008',
      name: 'Phường thắng lợi',
      district_id: '600100',
    },
    {
      id: '8009',
      name: 'Phường đống đa',
      district_id: '600100',
    },
    {
      id: '8010',
      name: 'Phường Yên Đỗ',
      district_id: '600100',
    },
    {
      id: '8011',
      name: 'Phường diên hồng',
      district_id: '600100',
    },
    {
      id: '8012',
      name: 'Phường trà bá',
      district_id: '600100',
    },
    {
      id: '8014',
      name: 'Phường hội thương',
      district_id: '600100',
    },
    {
      id: '8015',
      name: 'Phường phù đổng',
      district_id: '600100',
    },
    {
      id: '8016',
      name: 'Xã gào',
      district_id: '600100',
    },
    {
      id: '12083',
      name: 'Xã chư hdrông',
      district_id: '600100',
    },
    {
      id: '12084',
      name: 'Xã ia kênh',
      district_id: '600100',
    },
    {
      id: '12085',
      name: 'Phường ia kring',
      district_id: '600100',
    },
    {
      id: '8201',
      name: 'Xã ia hrú',
      district_id: '601700',
    },
    {
      id: '8205',
      name: 'Xã ia phang',
      district_id: '601700',
    },
    {
      id: '8206',
      name: 'Xã ia hla',
      district_id: '601700',
    },
    {
      id: '8207',
      name: 'Xã ia blứ',
      district_id: '601700',
    },
    {
      id: '12500',
      name: 'Xã chư don',
      district_id: '601700',
    },
    {
      id: '12501',
      name: 'Xã ia dreng',
      district_id: '601700',
    },
    {
      id: '12502',
      name: 'Xã ia le',
      district_id: '601700',
    },
    {
      id: '12503',
      name: 'Thị trấn nhơn hoà',
      district_id: '601700',
    },
    {
      id: '12504',
      name: 'Xã ia rong',
      district_id: '601700',
    },
    {
      id: '8072',
      name: 'Xã chư jôr',
      district_id: '600200',
    },
    {
      id: '8073',
      name: 'Xã ia phí',
      district_id: '600200',
    },
    {
      id: '8074',
      name: 'Xã ia khươl',
      district_id: '600200',
    },
    {
      id: '8076',
      name: 'Xã chư đăng ya',
      district_id: '600200',
    },
    {
      id: '8077',
      name: 'Xã đăk tờ ver',
      district_id: '600200',
    },
    {
      id: '8078',
      name: 'Xã ia mơ nông',
      district_id: '600200',
    },
    {
      id: '8079',
      name: 'Xã hà tây',
      district_id: '600200',
    },
    {
      id: '8081',
      name: 'Thị trấn phú hòa',
      district_id: '600200',
    },
    {
      id: '8082',
      name: 'Xã nghĩa hưng',
      district_id: '600200',
    },
    {
      id: '8083',
      name: 'Xã nghĩa hòa',
      district_id: '600200',
    },
    {
      id: '8085',
      name: 'Xã ia nhin',
      district_id: '600200',
    },
    {
      id: '8086',
      name: 'Xã hòa phú',
      district_id: '600200',
    },
    {
      id: '12080',
      name: 'Xã ia ka',
      district_id: '600200',
    },
    {
      id: '12081',
      name: 'Thị trấn ia ly',
      district_id: '600200',
    },
    {
      id: '12082',
      name: 'Xã ia kreng',
      district_id: '600200',
    },
    {
      id: '8088',
      name: 'Xã ia sao',
      district_id: '601200',
    },
    {
      id: '8089',
      name: 'Xã ia dêr',
      district_id: '601200',
    },
    {
      id: '8090',
      name: 'Xã ia yok',
      district_id: '601200',
    },
    {
      id: '8091',
      name: 'Xã ia hrung',
      district_id: '601200',
    },
    {
      id: '8092',
      name: 'Xã ia tô',
      district_id: '601200',
    },
    {
      id: '8093',
      name: 'Xã ia krái',
      district_id: '601200',
    },
    {
      id: '8094',
      name: 'Xã ia o',
      district_id: '601200',
    },
    {
      id: '8095',
      name: 'Xã ia pếch',
      district_id: '601200',
    },
    {
      id: '8097',
      name: 'Xã ia bă',
      district_id: '601200',
    },
    {
      id: '8098',
      name: 'Xã ia grăng',
      district_id: '601200',
    },
    {
      id: '8099',
      name: 'Xã ia khai',
      district_id: '601200',
    },
    {
      id: '12078',
      name: 'Thị Trấn Ia Kha',
      district_id: '601200',
    },
    {
      id: '12079',
      name: 'Xã ia chia',
      district_id: '601200',
    },
    {
      id: '8189',
      name: 'Thị Trấn Ia Kha',
      district_id: '601400',
    },
    {
      id: '8190',
      name: 'Xã ia trôk',
      district_id: '601400',
    },
    {
      id: '8193',
      name: 'Xã kim tân',
      district_id: '601400',
    },
    {
      id: '8194',
      name: 'Xã chư răng',
      district_id: '601400',
    },
    {
      id: '8195',
      name: 'Xã pờ tó',
      district_id: '601400',
    },
    {
      id: '8196',
      name: 'Xã chư mố',
      district_id: '601400',
    },
    {
      id: '8197',
      name: 'Xã ia kdăm',
      district_id: '601400',
    },
    {
      id: '8198',
      name: 'Xã ia tul',
      district_id: '601400',
    },
    {
      id: '12046',
      name: 'Xã ia broăi',
      district_id: '601400',
    },
    {
      id: '12047',
      name: 'Xã ia ma rơn',
      district_id: '601400',
    },
    {
      id: '3269',
      name: 'Thị trấn đồng văn',
      district_id: '310200',
    },
    {
      id: '3270',
      name: 'Xã lũng cú',
      district_id: '310200',
    },
    {
      id: '3272',
      name: 'Xã phố là',
      district_id: '310200',
    },
    {
      id: '3273',
      name: 'Xã lũng thầu',
      district_id: '310200',
    },
    {
      id: '3274',
      name: 'Xã lũng phìn',
      district_id: '310200',
    },
    {
      id: '3275',
      name: 'Xã má lé',
      district_id: '310200',
    },
    {
      id: '3276',
      name: 'Xã phố cáo',
      district_id: '310200',
    },
    {
      id: '3277',
      name: 'Thị trấn phó bảng',
      district_id: '310200',
    },
    {
      id: '3278',
      name: 'Xã lũng táo',
      district_id: '310200',
    },
    {
      id: '3279',
      name: 'Xã thài phìn tủng',
      district_id: '310200',
    },
    {
      id: '3280',
      name: 'Xã xà phìn',
      district_id: '310200',
    },
    {
      id: '3281',
      name: 'Xã sủng là',
      district_id: '310200',
    },
    {
      id: '3282',
      name: 'Xã tả phìn',
      district_id: '310200',
    },
    {
      id: '3283',
      name: 'Xã tả lủng',
      district_id: '310200',
    },
    {
      id: '3284',
      name: 'Xã sinh lủng',
      district_id: '310200',
    },
    {
      id: '3285',
      name: 'Xã sảng tùng',
      district_id: '310200',
    },
    {
      id: '3286',
      name: 'Xã hố quáng phìn',
      district_id: '310200',
    },
    {
      id: '3287',
      name: 'Xã vẩn chải',
      district_id: '310200',
    },
    {
      id: '3288',
      name: 'Xã sủng trái',
      district_id: '310200',
    },
    {
      id: '3208',
      name: 'Phường minh khai',
      district_id: '310100',
    },
    {
      id: '3209',
      name: 'Phường trần phú',
      district_id: '310100',
    },
    {
      id: '3210',
      name: 'Phường nguyễn trãi',
      district_id: '310100',
    },
    {
      id: '3211',
      name: 'Phường ngọc hà',
      district_id: '310100',
    },
    {
      id: '3212',
      name: 'Phường quang trung',
      district_id: '310100',
    },
    {
      id: '3213',
      name: 'Xã ngọc đường',
      district_id: '310100',
    },
    {
      id: '3216',
      name: 'Xã phương thiện',
      district_id: '310100',
    },
    {
      id: '3217',
      name: 'Xã phương độ',
      district_id: '310100',
    },
    {
      id: '3251',
      name: 'Thị trấn mèo vạc',
      district_id: '310300',
    },
    {
      id: '3253',
      name: 'Xã giàng chu phìn',
      district_id: '310300',
    },
    {
      id: '3254',
      name: 'Xã pải lủng',
      district_id: '310300',
    },
    {
      id: '3256',
      name: 'Xã niêm sơn',
      district_id: '310300',
    },
    {
      id: '3257',
      name: 'Xã tát ngà',
      district_id: '310300',
    },
    {
      id: '3258',
      name: 'Xã pả vì',
      district_id: '310300',
    },
    {
      id: '3259',
      name: 'Xã sơn vĩ',
      district_id: '310300',
    },
    {
      id: '3260',
      name: 'Xã lũng pù',
      district_id: '310300',
    },
    {
      id: '3261',
      name: 'Xã sủng trà',
      district_id: '310300',
    },
    {
      id: '3262',
      name: 'Xã xín cái',
      district_id: '310300',
    },
    {
      id: '3263',
      name: 'Xã cán chu phìn',
      district_id: '310300',
    },
    {
      id: '3264',
      name: 'Xã lũng chinh',
      district_id: '310300',
    },
    {
      id: '3265',
      name: 'Xã khâu vai',
      district_id: '310300',
    },
    {
      id: '3266',
      name: 'Xã thượng phùng',
      district_id: '310300',
    },
    {
      id: '3267',
      name: 'Xã sủng máng',
      district_id: '310300',
    },
    {
      id: '3268',
      name: 'Xã niêm tòng',
      district_id: '310300',
    },
    {
      id: '11699',
      name: 'Xã nậm ban',
      district_id: '310300',
    },
    {
      id: '11700',
      name: 'Xã tả lủng',
      district_id: '310300',
    },
    {
      id: '3290',
      name: 'Thị trấn tam sơn',
      district_id: '310500',
    },
    {
      id: '3291',
      name: 'Xã thanh vân',
      district_id: '310500',
    },
    {
      id: '3292',
      name: 'Xã quyết tiến',
      district_id: '310500',
    },
    {
      id: '3293',
      name: 'Xã đông hà',
      district_id: '310500',
    },
    {
      id: '3294',
      name: 'Xã lùng tam',
      district_id: '310500',
    },
    {
      id: '3295',
      name: 'Xã cán tỷ',
      district_id: '310500',
    },
    {
      id: '3296',
      name: 'Xã tùng vài',
      district_id: '310500',
    },
    {
      id: '3297',
      name: 'Xã nghĩa thuận',
      district_id: '310500',
    },
    {
      id: '3298',
      name: 'Xã cao mã pờ',
      district_id: '310500',
    },
    {
      id: '3299',
      name: 'Xã tả ván',
      district_id: '310500',
    },
    {
      id: '3300',
      name: 'Xã thái an',
      district_id: '310500',
    },
    {
      id: '3301',
      name: 'Xã bát đại sơn',
      district_id: '310500',
    },
    {
      id: '11696',
      name: 'Xã quản bạ',
      district_id: '310500',
    },
    {
      id: '3302',
      name: 'Thị trấn vị xuyên',
      district_id: '310600',
    },
    {
      id: '3303',
      name: 'Xã việt lâm',
      district_id: '310600',
    },
    {
      id: '3304',
      name: 'Xã phú linh',
      district_id: '310600',
    },
    {
      id: '3305',
      name: 'Xã phong quang',
      district_id: '310600',
    },
    {
      id: '3306',
      name: 'Xã ngọc linh',
      district_id: '310600',
    },
    {
      id: '3307',
      name: 'Xã minh tân',
      district_id: '310600',
    },
    {
      id: '3308',
      name: 'Xã kim linh',
      district_id: '310600',
    },
    {
      id: '3309',
      name: 'Xã kim thạch',
      district_id: '310600',
    },
    {
      id: '3310',
      name: 'Xã thuận hòa',
      district_id: '310600',
    },
    {
      id: '3311',
      name: 'Xã việt lâm',
      district_id: '310600',
    },
    {
      id: '3312',
      name: 'Xã thanh thuỷ',
      district_id: '310600',
    },
    {
      id: '3313',
      name: 'Xã trung thành',
      district_id: '310600',
    },
    {
      id: '3314',
      name: 'Xã đạo đức',
      district_id: '310600',
    },
    {
      id: '3316',
      name: 'Xã tùng bá',
      district_id: '310600',
    },
    {
      id: '3317',
      name: 'Xã bạch ngọc',
      district_id: '310600',
    },
    {
      id: '3318',
      name: 'Xã ngọc minh',
      district_id: '310600',
    },
    {
      id: '3319',
      name: 'Xã thanh đức',
      district_id: '310600',
    },
    {
      id: '3320',
      name: 'Xã xín chải',
      district_id: '310600',
    },
    {
      id: '3321',
      name: 'Xã phương tiến',
      district_id: '310600',
    },
    {
      id: '3322',
      name: 'Xã lao chải',
      district_id: '310600',
    },
    {
      id: '3323',
      name: 'Xã cao bồ',
      district_id: '310600',
    },
    {
      id: '3324',
      name: 'Xã thượng sơn',
      district_id: '310600',
    },
    {
      id: '3325',
      name: 'Xã linh hồ',
      district_id: '310600',
    },
    {
      id: '3326',
      name: 'Xã quảng ngần',
      district_id: '310600',
    },
    {
      id: '11691',
      name: 'Thị trấn nông trường việt lâm',
      district_id: '310600',
    },
    {
      id: '3356',
      name: 'Xã ngán chiên',
      district_id: '310900',
    },
    {
      id: '3358',
      name: 'Xã cốc rế',
      district_id: '310900',
    },
    {
      id: '3359',
      name: 'Xã trung thịnh',
      district_id: '310900',
    },
    {
      id: '3360',
      name: 'Xã thu tà',
      district_id: '310900',
    },
    {
      id: '3361',
      name: 'Xã quảng nguyên',
      district_id: '310900',
    },
    {
      id: '3362',
      name: 'Xã tả nhìu',
      district_id: '310900',
    },
    {
      id: '3363',
      name: 'Xã nàn xỉn',
      district_id: '310900',
    },
    {
      id: '3364',
      name: 'Xã thèn phàng',
      district_id: '310900',
    },
    {
      id: '3365',
      name: 'Xã pà vầy sủ',
      district_id: '310900',
    },
    {
      id: '3366',
      name: 'Xã nàn ma',
      district_id: '310900',
    },
    {
      id: '3367',
      name: 'Xã bản ngò',
      district_id: '310900',
    },
    {
      id: '3368',
      name: 'Xã chế là',
      district_id: '310900',
    },
    {
      id: '3369',
      name: 'Xã nấm dần',
      district_id: '310900',
    },
    {
      id: '3370',
      name: 'Xã khuôn lùng',
      district_id: '310900',
    },
    {
      id: '3371',
      name: 'Xã chí cà',
      district_id: '310900',
    },
    {
      id: '11692',
      name: 'Thị trấn cốc pài',
      district_id: '310900',
    },
    {
      id: '11693',
      name: 'Xã bản díu',
      district_id: '310900',
    },
    {
      id: '11694',
      name: 'Xã nà chì',
      district_id: '310900',
    },
    {
      id: '11695',
      name: 'Xã xín mần',
      district_id: '310900',
    },
    {
      id: '3233',
      name: 'Thị trấn yên minh',
      district_id: '310400',
    },
    {
      id: '3234',
      name: 'Xã ngọc long',
      district_id: '310400',
    },
    {
      id: '3235',
      name: 'Xã lũng hồ',
      district_id: '310400',
    },
    {
      id: '3236',
      name: 'Xã mậu duệ',
      district_id: '310400',
    },
    {
      id: '3237',
      name: 'Xã hữu vinh',
      district_id: '310400',
    },
    {
      id: '3238',
      name: 'Xã bạch đích',
      district_id: '310400',
    },
    {
      id: '3239',
      name: 'Xã đông minh',
      district_id: '310400',
    },
    {
      id: '3240',
      name: 'Xã thắng mỗ',
      district_id: '310400',
    },
    {
      id: '3241',
      name: 'Xã phú lũng',
      district_id: '310400',
    },
    {
      id: '3242',
      name: 'Xã sủng tráng',
      district_id: '310400',
    },
    {
      id: '3243',
      name: 'Xã na khê',
      district_id: '310400',
    },
    {
      id: '3244',
      name: 'Xã sủng thài',
      district_id: '310400',
    },
    {
      id: '3245',
      name: 'Xã lao và chải',
      district_id: '310400',
    },
    {
      id: '3246',
      name: 'Xã mậu long',
      district_id: '310400',
    },
    {
      id: '3247',
      name: 'Xã ngam la',
      district_id: '310400',
    },
    {
      id: '3248',
      name: 'Xã đường thượng',
      district_id: '310400',
    },
    {
      id: '3249',
      name: 'Xã du tiến',
      district_id: '310400',
    },
    {
      id: '3250',
      name: 'Xã du già',
      district_id: '310400',
    },
    {
      id: '3219',
      name: 'Xã lạc nông',
      district_id: '310700',
    },
    {
      id: '3221',
      name: 'Xã giáp trung',
      district_id: '310700',
    },
    {
      id: '3222',
      name: 'Xã yên phong',
      district_id: '310700',
    },
    {
      id: '3223',
      name: 'Xã yên định',
      district_id: '310700',
    },
    {
      id: '3224',
      name: 'Xã phú nam',
      district_id: '310700',
    },
    {
      id: '3225',
      name: 'Xã đường hồng',
      district_id: '310700',
    },
    {
      id: '3226',
      name: 'Xã minh sơn',
      district_id: '310700',
    },
    {
      id: '3227',
      name: 'Xã yên cường',
      district_id: '310700',
    },
    {
      id: '3228',
      name: 'Xã đường âm',
      district_id: '310700',
    },
    {
      id: '3229',
      name: 'Xã minh ngọc',
      district_id: '310700',
    },
    {
      id: '3230',
      name: 'Xã phiêng luông',
      district_id: '310700',
    },
    {
      id: '3231',
      name: 'Xã thương tân',
      district_id: '310700',
    },
    {
      id: '11697',
      name: 'Thị trấn yên phú',
      district_id: '310700',
    },
    {
      id: '3373',
      name: 'Xã việt vinh',
      district_id: '311000',
    },
    {
      id: '3374',
      name: 'Xã bằng hành',
      district_id: '311000',
    },
    {
      id: '3375',
      name: 'Xã đồng tiến',
      district_id: '311000',
    },
    {
      id: '3376',
      name: 'Xã đồng tâm',
      district_id: '311000',
    },
    {
      id: '3377',
      name: 'Xã liên hiệp',
      district_id: '311000',
    },
    {
      id: '3378',
      name: 'Xã kim ngọc',
      district_id: '311000',
    },
    {
      id: '3379',
      name: 'Xã hùng an',
      district_id: '311000',
    },
    {
      id: '3380',
      name: 'Xã đức xuân',
      district_id: '311000',
    },
    {
      id: '3381',
      name: 'Xã vô điếm',
      district_id: '311000',
    },
    {
      id: '3382',
      name: 'Xã đồng yên',
      district_id: '311000',
    },
    {
      id: '3383',
      name: 'Xã việt hồng',
      district_id: '311000',
    },
    {
      id: '3384',
      name: 'Xã quang minh',
      district_id: '311000',
    },
    {
      id: '3385',
      name: 'Thị trấn vĩnh tuy',
      district_id: '311000',
    },
    {
      id: '3386',
      name: 'Xã tân lập',
      district_id: '311000',
    },
    {
      id: '3387',
      name: 'Xã tân quang',
      district_id: '311000',
    },
    {
      id: '3389',
      name: 'Xã hữu sản',
      district_id: '311000',
    },
    {
      id: '3390',
      name: 'Xã tiên kiều',
      district_id: '311000',
    },
    {
      id: '3391',
      name: 'Xã vĩnh phúc',
      district_id: '311000',
    },
    {
      id: '3392',
      name: 'Xã đông thành',
      district_id: '311000',
    },
    {
      id: '3393',
      name: 'Xã vĩnh hảo',
      district_id: '311000',
    },
    {
      id: '3394',
      name: 'Xã tân thành',
      district_id: '311000',
    },
    {
      id: '3396',
      name: 'Thị trấn việt quang',
      district_id: '311000',
    },
    {
      id: '3397',
      name: 'Xã thượng bình',
      district_id: '311000',
    },
    {
      id: '3327',
      name: 'Thị trấn vinh quang',
      district_id: '310800',
    },
    {
      id: '3328',
      name: 'Xã tân tiến',
      district_id: '310800',
    },
    {
      id: '3329',
      name: 'Xã chiến phố',
      district_id: '310800',
    },
    {
      id: '3330',
      name: 'Xã nậm ty',
      district_id: '310800',
    },
    {
      id: '3331',
      name: 'Xã nậm khoà',
      district_id: '310800',
    },
    {
      id: '3332',
      name: 'Xã nam sơn',
      district_id: '310800',
    },
    {
      id: '3333',
      name: 'Xã tụ nhân',
      district_id: '310800',
    },
    {
      id: '3334',
      name: 'Xã bản máy',
      district_id: '310800',
    },
    {
      id: '3335',
      name: 'Xã ngàm đăng vài',
      district_id: '310800',
    },
    {
      id: '3336',
      name: 'Xã bản phùng',
      district_id: '310800',
    },
    {
      id: '3337',
      name: 'Xã thàng tín',
      district_id: '310800',
    },
    {
      id: '3338',
      name: 'Xã pố lồ',
      district_id: '310800',
    },
    {
      id: '3339',
      name: 'Xã túng sán',
      district_id: '310800',
    },
    {
      id: '3340',
      name: 'Xã đản ván',
      district_id: '310800',
    },
    {
      id: '3341',
      name: 'Xã sán xà hồ',
      district_id: '310800',
    },
    {
      id: '3343',
      name: 'Xã pờ ly ngài',
      district_id: '310800',
    },
    {
      id: '3344',
      name: 'Xã bản luốc',
      district_id: '310800',
    },
    {
      id: '3345',
      name: 'Xã bản nhùng',
      district_id: '310800',
    },
    {
      id: '3346',
      name: 'Xã tả sử chóong',
      district_id: '310800',
    },
    {
      id: '3347',
      name: 'Xã nậm dịch',
      district_id: '310800',
    },
    {
      id: '3348',
      name: 'Xã bản péo',
      district_id: '310800',
    },
    {
      id: '3349',
      name: 'Xã hồ thầu',
      district_id: '310800',
    },
    {
      id: '3350',
      name: 'Xã thông nguyên',
      district_id: '310800',
    },
    {
      id: '3351',
      name: 'Xã thèn chu phìn',
      district_id: '310800',
    },
    {
      id: '3352',
      name: 'Xã túng sán',
      district_id: '310800',
    },
    {
      id: '11698',
      name: 'Xã nàng đôn',
      district_id: '310800',
    },
    {
      id: '3398',
      name: 'Thị trấn yên bình',
      district_id: '311100',
    },
    {
      id: '3399',
      name: 'Xã yên thành',
      district_id: '311100',
    },
    {
      id: '3400',
      name: 'Xã bằng lang',
      district_id: '311100',
    },
    {
      id: '3401',
      name: 'Xã tân nam',
      district_id: '311100',
    },
    {
      id: '3402',
      name: 'Xã hương sơn',
      district_id: '311100',
    },
    {
      id: '3403',
      name: 'Xã tiên yên',
      district_id: '311100',
    },
    {
      id: '3404',
      name: 'Xã xuân giang',
      district_id: '311100',
    },
    {
      id: '3405',
      name: 'Xã vĩ thượng',
      district_id: '311100',
    },
    {
      id: '3406',
      name: 'Xã yên hà',
      district_id: '311100',
    },
    {
      id: '3407',
      name: 'Xã tân bắc',
      district_id: '311100',
    },
    {
      id: '3408',
      name: 'Xã tân trịnh',
      district_id: '311100',
    },
    {
      id: '3409',
      name: 'Xã tiên nguyên',
      district_id: '311100',
    },
    {
      id: '3410',
      name: 'Xã bản rịa',
      district_id: '311100',
    },
    {
      id: '3412',
      name: 'Xã nà khương',
      district_id: '311100',
    },
    {
      id: '3413',
      name: 'Xã xuân minh',
      district_id: '311100',
    },
    {
      id: '4606',
      name: 'Thị trấn bình mỹ',
      district_id: '400600',
    },
    {
      id: '4609',
      name: 'Xã tràng an',
      district_id: '400600',
    },
    {
      id: '4610',
      name: 'Xã đồn xá',
      district_id: '400600',
    },
    {
      id: '4611',
      name: 'Xã đồng du',
      district_id: '400600',
    },
    {
      id: '4612',
      name: 'Xã mỹ thọ',
      district_id: '400600',
    },
    {
      id: '4613',
      name: 'Xã an mỹ',
      district_id: '400600',
    },
    {
      id: '4614',
      name: 'Xã la sơn',
      district_id: '400600',
    },
    {
      id: '4615',
      name: 'Xã an đổ',
      district_id: '400600',
    },
    {
      id: '4616',
      name: 'Xã tiêu động',
      district_id: '400600',
    },
    {
      id: '4617',
      name: 'Xã an lão',
      district_id: '400600',
    },
    {
      id: '4618',
      name: 'Xã trung lương',
      district_id: '400600',
    },
    {
      id: '4619',
      name: 'Xã bối cầu',
      district_id: '400600',
    },
    {
      id: '4620',
      name: 'Xã hưng công',
      district_id: '400600',
    },
    {
      id: '4621',
      name: 'Xã ngọc lũ',
      district_id: '400600',
    },
    {
      id: '4622',
      name: 'Xã bồ đề',
      district_id: '400600',
    },
    {
      id: '4623',
      name: 'Xã an nội',
      district_id: '400600',
    },
    {
      id: '4624',
      name: 'Xã vũ bản',
      district_id: '400600',
    },
    {
      id: '4625',
      name: 'Xã an ninh',
      district_id: '400600',
    },
    {
      id: '4626',
      name: 'Xã bình nghĩa',
      district_id: '400600',
    },
    {
      id: '4545',
      name: 'Phường Hòa Mạc',
      district_id: '400200',
    },
    {
      id: '4546',
      name: 'Phường Đồng Văn',
      district_id: '400200',
    },
    {
      id: '4547',
      name: 'Phường Duy Hải',
      district_id: '400200',
    },
    {
      id: '4548',
      name: 'Xã Bạch Thượng',
      district_id: '400200',
    },
    {
      id: '4549',
      name: 'Phường Duy Minh',
      district_id: '400200',
    },
    {
      id: '4550',
      name: 'Xã Hoàng đông',
      district_id: '400200',
    },
    {
      id: '4551',
      name: 'Xã Tiên Nội',
      district_id: '400200',
    },
    {
      id: '4552',
      name: 'Xã tiên ngoại',
      district_id: '400200',
    },
    {
      id: '4556',
      name: 'Xã châu sơn',
      district_id: '400200',
    },
    {
      id: '4557',
      name: 'Xã đọi sơn',
      district_id: '400200',
    },
    {
      id: '4558',
      name: 'Xã yên nam',
      district_id: '400200',
    },
    {
      id: '4559',
      name: 'Xã trác văn',
      district_id: '400200',
    },
    {
      id: '4560',
      name: 'Xã chuyên ngoại',
      district_id: '400200',
    },
    {
      id: '4561',
      name: 'Xã mộc nam',
      district_id: '400200',
    },
    {
      id: '4562',
      name: 'Xã mộc bắc',
      district_id: '400200',
    },
    {
      id: '4563',
      name: 'Xã Châu Giang',
      district_id: '400200',
    },
    {
      id: '4564',
      name: 'Xã tiên phong',
      district_id: '400200',
    },
    {
      id: '4565',
      name: 'Xã Yên Bắc',
      district_id: '400200',
    },
    {
      id: '12634',
      name: 'Xã Tiên Sơn',
      district_id: '400200',
    },
    {
      id: '4567',
      name: 'Thị trấn quế',
      district_id: '400300',
    },
    {
      id: '4568',
      name: 'Thị trấn ba sao',
      district_id: '400300',
    },
    {
      id: '4569',
      name: 'Xã nguyễn úy',
      district_id: '400300',
    },
    {
      id: '4570',
      name: 'Xã lê hồ',
      district_id: '400300',
    },
    {
      id: '4571',
      name: 'Xã đại cương',
      district_id: '400300',
    },
    {
      id: '4572',
      name: 'Xã nhật tựu',
      district_id: '400300',
    },
    {
      id: '4573',
      name: 'Xã hoàng tây',
      district_id: '400300',
    },
    {
      id: '4574',
      name: 'Xã nhật tân',
      district_id: '400300',
    },
    {
      id: '4575',
      name: 'Xã Văn Xá',
      district_id: '400300',
    },
    {
      id: '4577',
      name: 'Xã đồng hóa',
      district_id: '400300',
    },
    {
      id: '4578',
      name: 'Xã tượng lĩnh',
      district_id: '400300',
    },
    {
      id: '4579',
      name: 'Xã tân sơn',
      district_id: '400300',
    },
    {
      id: '4580',
      name: 'Xã khả phong',
      district_id: '400300',
    },
    {
      id: '4581',
      name: 'Xã thụy lôi',
      district_id: '400300',
    },
    {
      id: '4582',
      name: 'Xã ngọc sơn',
      district_id: '400300',
    },
    {
      id: '4583',
      name: 'Xã thi sơn',
      district_id: '400300',
    },
    {
      id: '4584',
      name: 'Xã thanh sơn',
      district_id: '400300',
    },
    {
      id: '4585',
      name: 'Xã liên sơn',
      district_id: '400300',
    },
    {
      id: '4522',
      name: 'Thị trấn vĩnh trụ',
      district_id: '400400',
    },
    {
      id: '4523',
      name: 'Xã hợp lý',
      district_id: '400400',
    },
    {
      id: '4524',
      name: 'Xã chính lý',
      district_id: '400400',
    },
    {
      id: '4525',
      name: 'Xã văn lý',
      district_id: '400400',
    },
    {
      id: '4526',
      name: 'Xã công lý',
      district_id: '400400',
    },
    {
      id: '4527',
      name: 'Xã nguyên lý',
      district_id: '400400',
    },
    {
      id: '4528',
      name: 'Xã đồng lý',
      district_id: '400400',
    },
    {
      id: '4529',
      name: 'Xã đức lý',
      district_id: '400400',
    },
    {
      id: '4530',
      name: 'Xã đạo lý',
      district_id: '400400',
    },
    {
      id: '4531',
      name: 'Xã nhân khang',
      district_id: '400400',
    },
    {
      id: '4532',
      name: 'Xã bắc lý',
      district_id: '400400',
    },
    {
      id: '4533',
      name: 'Xã chân lý',
      district_id: '400400',
    },
    {
      id: '4534',
      name: 'Xã nhân chính',
      district_id: '400400',
    },
    {
      id: '4535',
      name: 'Xã nhân nghĩa',
      district_id: '400400',
    },
    {
      id: '4536',
      name: 'Xã nhân bình',
      district_id: '400400',
    },
    {
      id: '4537',
      name: 'Xã xuân khê',
      district_id: '400400',
    },
    {
      id: '4538',
      name: 'Xã phú phúc',
      district_id: '400400',
    },
    {
      id: '4539',
      name: 'Xã tiến thắng',
      district_id: '400400',
    },
    {
      id: '4540',
      name: 'Xã hòa hậu',
      district_id: '400400',
    },
    {
      id: '4541',
      name: 'Xã nhân thịnh',
      district_id: '400400',
    },
    {
      id: '4542',
      name: 'Xã nhân đạo',
      district_id: '400400',
    },
    {
      id: '4543',
      name: 'Xã nhân hưng',
      district_id: '400400',
    },
    {
      id: '4544',
      name: 'Xã nhân mỹ',
      district_id: '400400',
    },
    {
      id: '12774',
      name: 'Xã Trần Hưng Đạo',
      district_id: '400400',
    },
    {
      id: '4509',
      name: 'Phường lê hồng phong',
      district_id: '400100',
    },
    {
      id: '4511',
      name: 'Xã phù vân',
      district_id: '400100',
    },
    {
      id: '4512',
      name: 'Phường lương khánh thiện',
      district_id: '400100',
    },
    {
      id: '4513',
      name: 'Phường hai bà trưng',
      district_id: '400100',
    },
    {
      id: '4514',
      name: 'Phường minh khai',
      district_id: '400100',
    },
    {
      id: '4515',
      name: 'Xã liêm chung',
      district_id: '400100',
    },
    {
      id: '4518',
      name: 'Phường quang trung',
      district_id: '400100',
    },
    {
      id: '4519',
      name: 'Phường trần hưng đạo',
      district_id: '400100',
    },
    {
      id: '11856',
      name: 'Phường châu sơn',
      district_id: '400100',
    },
    {
      id: '11857',
      name: 'Phường liêm chính',
      district_id: '400100',
    },
    {
      id: '11858',
      name: 'Phường thanh châu',
      district_id: '400100',
    },
    {
      id: '11859',
      name: 'Phường Lam Hạ',
      district_id: '400100',
    },
    {
      id: '11860',
      name: 'Phường thanh tuyền',
      district_id: '400100',
    },
    {
      id: '11861',
      name: 'Xã đinh xá',
      district_id: '400100',
    },
    {
      id: '11862',
      name: 'Xã kim bình',
      district_id: '400100',
    },
    {
      id: '11863',
      name: 'Xã liêm tiết',
      district_id: '400100',
    },
    {
      id: '11864',
      name: 'Xã liêm tuyền',
      district_id: '400100',
    },
    {
      id: '11865',
      name: 'Xã tiên hải',
      district_id: '400100',
    },
    {
      id: '11866',
      name: 'Xã tiên hiệp',
      district_id: '400100',
    },
    {
      id: '11867',
      name: 'Xã tiên tân',
      district_id: '400100',
    },
    {
      id: '11868',
      name: 'Xã trịnh xá',
      district_id: '400100',
    },
    {
      id: '4587',
      name: 'Xã thanh hải',
      district_id: '400500',
    },
    {
      id: '4588',
      name: 'Xã thanh nguyên',
      district_id: '400500',
    },
    {
      id: '4590',
      name: 'Xã thanh nghị',
      district_id: '400500',
    },
    {
      id: '4591',
      name: 'Xã thanh tâm',
      district_id: '400500',
    },
    {
      id: '4592',
      name: 'Xã thanh hương',
      district_id: '400500',
    },
    {
      id: '4593',
      name: 'Xã liêm sơn',
      district_id: '400500',
    },
    {
      id: '4594',
      name: 'Xã liêm túc',
      district_id: '400500',
    },
    {
      id: '4595',
      name: 'Xã thanh lưu',
      district_id: '400500',
    },
    {
      id: '4596',
      name: 'Xã thanh phong',
      district_id: '400500',
    },
    {
      id: '4597',
      name: 'Xã thanh bình',
      district_id: '400500',
    },
    {
      id: '4598',
      name: 'Xã liêm thuận',
      district_id: '400500',
    },
    {
      id: '4599',
      name: 'Xã thanh thuỷ',
      district_id: '400500',
    },
    {
      id: '4600',
      name: 'Thị trấn kiện khê',
      district_id: '400500',
    },
    {
      id: '4601',
      name: 'Xã thanh hà',
      district_id: '400500',
    },
    {
      id: '4602',
      name: 'Xã liêm cần',
      district_id: '400500',
    },
    {
      id: '4603',
      name: 'Xã liêm phong',
      district_id: '400500',
    },
    {
      id: '11869',
      name: 'Xã thanh tân',
      district_id: '400500',
    },
    {
      id: '12830',
      name: 'Thị Trấn Tân Thanh',
      district_id: '400500',
    },
    {
      id: '6548',
      name: 'Thị trấn nghèn',
      district_id: '480600',
    },
    {
      id: '6549',
      name: 'Xã thiên lộc',
      district_id: '480600',
    },
    {
      id: '6550',
      name: 'Xã thuần thiện',
      district_id: '480600',
    },
    {
      id: '6551',
      name: 'Xã kim lộc',
      district_id: '480600',
    },
    {
      id: '6552',
      name: 'Xã vượng lộc',
      district_id: '480600',
    },
    {
      id: '6553',
      name: 'Xã thanh lộc',
      district_id: '480600',
    },
    {
      id: '6554',
      name: 'Xã song lộc',
      district_id: '480600',
    },
    {
      id: '6555',
      name: 'Xã thường nga',
      district_id: '480600',
    },
    {
      id: '6556',
      name: 'Xã trường lộc',
      district_id: '480600',
    },
    {
      id: '6557',
      name: 'Xã tùng lộc',
      district_id: '480600',
    },
    {
      id: '6558',
      name: 'Xã yên lộc',
      district_id: '480600',
    },
    {
      id: '6559',
      name: 'Xã phú lộc',
      district_id: '480600',
    },
    {
      id: '6560',
      name: 'Xã khánh lộc',
      district_id: '480600',
    },
    {
      id: '6561',
      name: 'Xã gia hanh',
      district_id: '480600',
    },
    {
      id: '6562',
      name: 'Xã vĩnh lộc',
      district_id: '480600',
    },
    {
      id: '6563',
      name: 'Xã tiến lộc',
      district_id: '480600',
    },
    {
      id: '6564',
      name: 'Xã trung lộc',
      district_id: '480600',
    },
    {
      id: '6565',
      name: 'Xã xuân lộc',
      district_id: '480600',
    },
    {
      id: '6566',
      name: 'Xã quang lộc',
      district_id: '480600',
    },
    {
      id: '6567',
      name: 'Xã thượng lộc',
      district_id: '480600',
    },
    {
      id: '6568',
      name: 'Xã đồng lộc',
      district_id: '480600',
    },
    {
      id: '6569',
      name: 'Xã mỹ lộc',
      district_id: '480600',
    },
    {
      id: '6570',
      name: 'Xã sơn lộc',
      district_id: '480600',
    },
    {
      id: '6693',
      name: 'Thị trấn thiên cầm',
      district_id: '480900',
    },
    {
      id: '6694',
      name: 'Xã cẩm thành',
      district_id: '480900',
    },
    {
      id: '6695',
      name: 'Xã cẩm duệ',
      district_id: '480900',
    },
    {
      id: '6696',
      name: 'Xã cẩm mỹ',
      district_id: '480900',
    },
    {
      id: '6697',
      name: 'Xã cẩm quan',
      district_id: '480900',
    },
    {
      id: '6698',
      name: 'Xã cẩm sơn',
      district_id: '480900',
    },
    {
      id: '6699',
      name: 'Xã cẩm thịnh',
      district_id: '480900',
    },
    {
      id: '6700',
      name: 'Xã cẩm hưng',
      district_id: '480900',
    },
    {
      id: '6701',
      name: 'Xã cẩm hà',
      district_id: '480900',
    },
    {
      id: '6702',
      name: 'Xã cẩm phúc',
      district_id: '480900',
    },
    {
      id: '6703',
      name: 'Xã cẩm nhượng',
      district_id: '480900',
    },
    {
      id: '6704',
      name: 'Xã cẩm lộc',
      district_id: '480900',
    },
    {
      id: '6705',
      name: 'Xã cẩm lĩnh',
      district_id: '480900',
    },
    {
      id: '6706',
      name: 'Xã cẩm trung',
      district_id: '480900',
    },
    {
      id: '6707',
      name: 'Xã cẩm minh',
      district_id: '480900',
    },
    {
      id: '6708',
      name: 'Xã cẩm lạc',
      district_id: '480900',
    },
    {
      id: '6709',
      name: 'Thị trấn cẩm xuyên',
      district_id: '480900',
    },
    {
      id: '6710',
      name: 'Xã cẩm yên',
      district_id: '480900',
    },
    {
      id: '6711',
      name: 'Xã cẩm hoà',
      district_id: '480900',
    },
    {
      id: '6712',
      name: 'Xã cẩm dương',
      district_id: '480900',
    },
    {
      id: '6713',
      name: 'Xã cẩm nam',
      district_id: '480900',
    },
    {
      id: '6715',
      name: 'Xã cẩm huy',
      district_id: '480900',
    },
    {
      id: '6716',
      name: 'Xã cẩm thăng',
      district_id: '480900',
    },
    {
      id: '6717',
      name: 'Xã cẩm quang',
      district_id: '480900',
    },
    {
      id: '6718',
      name: 'Xã cẩm bình',
      district_id: '480900',
    },
    {
      id: '6719',
      name: 'Xã cẩm vịnh',
      district_id: '480900',
    },
    {
      id: '6720',
      name: 'Xã cẩm thạch',
      district_id: '480900',
    },
    {
      id: '6501',
      name: 'Phường đại nài',
      district_id: '480100',
    },
    {
      id: '6502',
      name: 'Phường hà huy tập',
      district_id: '480100',
    },
    {
      id: '6503',
      name: 'Phường văn yên',
      district_id: '480100',
    },
    {
      id: '6504',
      name: 'Phường nam hà',
      district_id: '480100',
    },
    {
      id: '6505',
      name: 'Phường trần phú',
      district_id: '480100',
    },
    {
      id: '6506',
      name: 'Phường nguyễn du',
      district_id: '480100',
    },
    {
      id: '6507',
      name: 'Phường thạch linh',
      district_id: '480100',
    },
    {
      id: '6508',
      name: 'Phường bắc hà',
      district_id: '480100',
    },
    {
      id: '6509',
      name: 'Phường tân giang',
      district_id: '480100',
    },
    {
      id: '6510',
      name: 'Phường thạch quý',
      district_id: '480100',
    },
    {
      id: '6511',
      name: 'Xã thạch trung',
      district_id: '480100',
    },
    {
      id: '6512',
      name: 'Xã thạch hạ',
      district_id: '480100',
    },
    {
      id: '6513',
      name: 'Xã thạch môn',
      district_id: '480100',
    },
    {
      id: '6514',
      name: 'Xã thạch hưng',
      district_id: '480100',
    },
    {
      id: '6515',
      name: 'Xã thạch đồng',
      district_id: '480100',
    },
    {
      id: '6516',
      name: 'Xã thạch bình',
      district_id: '480100',
    },
    {
      id: '12812',
      name: 'Xã Đồng Môn',
      district_id: '480100',
    },
    {
      id: '6571',
      name: 'Phường bắc hồng',
      district_id: '480200',
    },
    {
      id: '6572',
      name: 'Phường nam hồng',
      district_id: '480200',
    },
    {
      id: '6573',
      name: 'Phường trung lương',
      district_id: '480200',
    },
    {
      id: '6574',
      name: 'Phường đức thuận',
      district_id: '480200',
    },
    {
      id: '6575',
      name: 'Phường đậu liêu',
      district_id: '480200',
    },
    {
      id: '11949',
      name: 'Xã thuận lộc',
      district_id: '480200',
    },
    {
      id: '6671',
      name: 'Xã hương đô',
      district_id: '480700',
    },
    {
      id: '6672',
      name: 'Xã phúc đồng',
      district_id: '480700',
    },
    {
      id: '6673',
      name: 'Xã hoà hải',
      district_id: '480700',
    },
    {
      id: '6674',
      name: 'Xã hà linh',
      district_id: '480700',
    },
    {
      id: '6675',
      name: 'Xã phương điền',
      district_id: '480700',
    },
    {
      id: '6676',
      name: 'Xã phương mỹ',
      district_id: '480700',
    },
    {
      id: '6677',
      name: 'Thị trấn hương khê',
      district_id: '480700',
    },
    {
      id: '6678',
      name: 'Xã hương trạch',
      district_id: '480700',
    },
    {
      id: '6679',
      name: 'Xã phúc trạch',
      district_id: '480700',
    },
    {
      id: '6680',
      name: 'Xã hương trà',
      district_id: '480700',
    },
    {
      id: '6681',
      name: 'Xã hương liên',
      district_id: '480700',
    },
    {
      id: '6682',
      name: 'Xã hương lâm',
      district_id: '480700',
    },
    {
      id: '6683',
      name: 'Xã lộc yên',
      district_id: '480700',
    },
    {
      id: '6684',
      name: 'Xã hương xuân',
      district_id: '480700',
    },
    {
      id: '6685',
      name: 'Xã phú phong',
      district_id: '480700',
    },
    {
      id: '6686',
      name: 'Xã hương vĩnh',
      district_id: '480700',
    },
    {
      id: '6687',
      name: 'Xã phú gia',
      district_id: '480700',
    },
    {
      id: '6688',
      name: 'Xã hương long',
      district_id: '480700',
    },
    {
      id: '6689',
      name: 'Xã gia phố',
      district_id: '480700',
    },
    {
      id: '6690',
      name: 'Xã hương giang',
      district_id: '480700',
    },
    {
      id: '6691',
      name: 'Xã hương thuỷ',
      district_id: '480700',
    },
    {
      id: '6692',
      name: 'Xã hương bình',
      district_id: '480700',
    },
    {
      id: '6626',
      name: 'Thị trấn phố châu',
      district_id: '480300',
    },
    {
      id: '6627',
      name: 'Thị Trấn Tây Sơn',
      district_id: '480300',
    },
    {
      id: '6628',
      name: 'Xã sơn tây',
      district_id: '480300',
    },
    {
      id: '6629',
      name: 'Xã sơn kim 1',
      district_id: '480300',
    },
    {
      id: '6630',
      name: 'Xã sơn kim 2',
      district_id: '480300',
    },
    {
      id: '6631',
      name: 'Xã sơn hồng',
      district_id: '480300',
    },
    {
      id: '6632',
      name: 'Xã sơn lĩnh',
      district_id: '480300',
    },
    {
      id: '6633',
      name: 'Xã sơn diệm',
      district_id: '480300',
    },
    {
      id: '6634',
      name: 'Xã sơn quang',
      district_id: '480300',
    },
    {
      id: '6635',
      name: 'Xã sơn giang',
      district_id: '480300',
    },
    {
      id: '6636',
      name: 'Xã sơn lâm',
      district_id: '480300',
    },
    {
      id: '6637',
      name: 'Xã sơn hàm',
      district_id: '480300',
    },
    {
      id: '6638',
      name: 'Xã sơn trung',
      district_id: '480300',
    },
    {
      id: '6639',
      name: 'Xã sơn phú',
      district_id: '480300',
    },
    {
      id: '6640',
      name: 'Xã sơn trường',
      district_id: '480300',
    },
    {
      id: '6641',
      name: 'Xã sơn phúc',
      district_id: '480300',
    },
    {
      id: '6642',
      name: 'Xã Sơn Mai,',
      district_id: '480300',
    },
    {
      id: '6643',
      name: 'Xã sơn thủy',
      district_id: '480300',
    },
    {
      id: '6644',
      name: 'Xã sơn bằng',
      district_id: '480300',
    },
    {
      id: '6645',
      name: 'Xã sơn ninh',
      district_id: '480300',
    },
    {
      id: '6646',
      name: 'Xã sơn thịnh',
      district_id: '480300',
    },
    {
      id: '6647',
      name: 'Xã sơn hòa',
      district_id: '480300',
    },
    {
      id: '6648',
      name: 'Xã sơn an',
      district_id: '480300',
    },
    {
      id: '6649',
      name: 'Xã sơn lễ',
      district_id: '480300',
    },
    {
      id: '6650',
      name: 'Xã sơn tiến',
      district_id: '480300',
    },
    {
      id: '6651',
      name: 'Xã sơn châu',
      district_id: '480300',
    },
    {
      id: '6652',
      name: 'Xã sơn bình',
      district_id: '480300',
    },
    {
      id: '6653',
      name: 'Xã sơn hà',
      district_id: '480300',
    },
    {
      id: '6654',
      name: 'Xã sơn trà',
      district_id: '480300',
    },
    {
      id: '6655',
      name: 'Xã sơn long',
      district_id: '480300',
    },
    {
      id: '6656',
      name: 'Xã sơn tân',
      district_id: '480300',
    },
    {
      id: '6657',
      name: 'Xã sơn mỹ',
      district_id: '480300',
    },
    {
      id: '6722',
      name: 'Xã kỳ bắc',
      district_id: '481000',
    },
    {
      id: '6723',
      name: 'Xã kỳ tiến',
      district_id: '481000',
    },
    {
      id: '6724',
      name: 'Xã kỳ xuân',
      district_id: '481000',
    },
    {
      id: '6725',
      name: 'Xã kỳ giang',
      district_id: '481000',
    },
    {
      id: '6726',
      name: 'Xã kỳ phú',
      district_id: '481000',
    },
    {
      id: '6727',
      name: 'Xã kỳ phong',
      district_id: '481000',
    },
    {
      id: '6728',
      name: 'Xã kỳ sơn',
      district_id: '481000',
    },
    {
      id: '6729',
      name: 'Xã kỳ tây',
      district_id: '481000',
    },
    {
      id: '6730',
      name: 'Xã kỳ hợp',
      district_id: '481000',
    },
    {
      id: '6731',
      name: 'Xã kỳ lâm',
      district_id: '481000',
    },
    {
      id: '6732',
      name: 'Xã kỳ khang',
      district_id: '481000',
    },
    {
      id: '6733',
      name: 'Xã kỳ văn',
      district_id: '481000',
    },
    {
      id: '6734',
      name: 'Xã kỳ lạc',
      district_id: '481000',
    },
    {
      id: '6737',
      name: 'Xã kỳ hải',
      district_id: '481000',
    },
    {
      id: '6738',
      name: 'Xã kỳ châu',
      district_id: '481000',
    },
    {
      id: '6739',
      name: 'Xã kỳ tân',
      district_id: '481000',
    },
    {
      id: '6741',
      name: 'Xã kỳ thư',
      district_id: '481000',
    },
    {
      id: '6742',
      name: 'Xã kỳ thọ',
      district_id: '481000',
    },
    {
      id: '6747',
      name: 'Xã kỳ đồng',
      district_id: '481000',
    },
    {
      id: '6751',
      name: 'Xã kỳ thượng',
      district_id: '481000',
    },
    {
      id: '6753',
      name: 'Xã kỳ trung',
      district_id: '481000',
    },
    {
      id: '12569',
      name: 'Xã LÂm HỢp',
      district_id: '481000',
    },
    {
      id: '6658',
      name: 'Thị trấn vũ quang',
      district_id: '481100',
    },
    {
      id: '6659',
      name: 'Xã đức liên',
      district_id: '481100',
    },
    {
      id: '6660',
      name: 'Xã đức hương',
      district_id: '481100',
    },
    {
      id: '6661',
      name: 'Xã đức bồng',
      district_id: '481100',
    },
    {
      id: '6662',
      name: 'Xã đức lĩnh',
      district_id: '481100',
    },
    {
      id: '6663',
      name: 'Xã đức giang',
      district_id: '481100',
    },
    {
      id: '6664',
      name: 'Xã ân phú',
      district_id: '481100',
    },
    {
      id: '6665',
      name: 'Xã hương thọ',
      district_id: '481100',
    },
    {
      id: '6666',
      name: 'Xã hương minh',
      district_id: '481100',
    },
    {
      id: '6668',
      name: 'Xã hương điền',
      district_id: '481100',
    },
    {
      id: '6669',
      name: 'Xã hương quang',
      district_id: '481100',
    },
    {
      id: '6670',
      name: 'Xã sơn thọ',
      district_id: '481100',
    },
    {
      id: '6517',
      name: 'Thị trấn thạch hà',
      district_id: '480800',
    },
    {
      id: '6518',
      name: 'Xã thạch liên',
      district_id: '480800',
    },
    {
      id: '6519',
      name: 'Xã thạch kênh',
      district_id: '480800',
    },
    {
      id: '6520',
      name: 'Xã việt xuyên',
      district_id: '480800',
    },
    {
      id: '6521',
      name: 'Xã thạch sơn',
      district_id: '480800',
    },
    {
      id: '6522',
      name: 'Xã thạch hội',
      district_id: '480800',
    },
    {
      id: '6523',
      name: 'Xã thạch bàn',
      district_id: '480800',
    },
    {
      id: '6524',
      name: 'Xã phù việt',
      district_id: '480800',
    },
    {
      id: '6525',
      name: 'Xã thạch long',
      district_id: '480800',
    },
    {
      id: '6526',
      name: 'Xã thạch khê',
      district_id: '480800',
    },
    {
      id: '6527',
      name: 'Xã thạch đỉnh',
      district_id: '480800',
    },
    {
      id: '6528',
      name: 'Xã thạch hải',
      district_id: '480800',
    },
    {
      id: '6529',
      name: 'Xã thạch tiến',
      district_id: '480800',
    },
    {
      id: '6530',
      name: 'Xã thạch thanh',
      district_id: '480800',
    },
    {
      id: '6531',
      name: 'Xã thạch trị',
      district_id: '480800',
    },
    {
      id: '6532',
      name: 'Xã tượng sơn',
      district_id: '480800',
    },
    {
      id: '6533',
      name: 'Xã thạch lạc',
      district_id: '480800',
    },
    {
      id: '6534',
      name: 'Xã thạch ngọc',
      district_id: '480800',
    },
    {
      id: '6535',
      name: 'Xã thạch vĩnh',
      district_id: '480800',
    },
    {
      id: '6536',
      name: 'Xã thạch lưu',
      district_id: '480800',
    },
    {
      id: '6537',
      name: 'Xã bắc sơn',
      district_id: '480800',
    },
    {
      id: '6538',
      name: 'Xã thạch đài',
      district_id: '480800',
    },
    {
      id: '6539',
      name: 'Xã thạch thắng',
      district_id: '480800',
    },
    {
      id: '6540',
      name: 'Xã thạch văn',
      district_id: '480800',
    },
    {
      id: '6541',
      name: 'Xã thạch xuân',
      district_id: '480800',
    },
    {
      id: '6542',
      name: 'Xã thạch tân',
      district_id: '480800',
    },
    {
      id: '6543',
      name: 'Xã thạch hương',
      district_id: '480800',
    },
    {
      id: '6544',
      name: 'Xã thạch điền',
      district_id: '480800',
    },
    {
      id: '6545',
      name: 'Xã nam hương',
      district_id: '480800',
    },
    {
      id: '6546',
      name: 'Xã thạch lâm',
      district_id: '480800',
    },
    {
      id: '6547',
      name: 'Xã Ngọc Sơn',
      district_id: '480800',
    },
    {
      id: '12788',
      name: 'Xã Việt Tiến',
      district_id: '480800',
    },
    {
      id: '12789',
      name: 'Xã Đỉnh Bàn',
      district_id: '480800',
    },
    {
      id: '12790',
      name: 'Xã Tân Lâm Hương',
      district_id: '480800',
    },
    {
      id: '12791',
      name: 'Xã Nam Điền',
      district_id: '480800',
    },
    {
      id: '12792',
      name: 'Xã Lưu Vĩnh Sơn',
      district_id: '480800',
    },
    {
      id: '6577',
      name: 'Thị trấn xuân an',
      district_id: '480500',
    },
    {
      id: '6578',
      name: 'Xã xuân hội',
      district_id: '480500',
    },
    {
      id: '6579',
      name: 'Xã xuân trường',
      district_id: '480500',
    },
    {
      id: '6580',
      name: 'Xã xuân đan',
      district_id: '480500',
    },
    {
      id: '6581',
      name: 'Xã xuân phổ',
      district_id: '480500',
    },
    {
      id: '6582',
      name: 'Xã xuân hải',
      district_id: '480500',
    },
    {
      id: '6583',
      name: 'Xã xuân yên',
      district_id: '480500',
    },
    {
      id: '6584',
      name: 'Thị Trấn Tiên Điền',
      district_id: '480500',
    },
    {
      id: '6585',
      name: 'Xã xuân giang',
      district_id: '480500',
    },
    {
      id: '6586',
      name: 'Xã xuân mỹ',
      district_id: '480500',
    },
    {
      id: '6587',
      name: 'Xã xuân thành',
      district_id: '480500',
    },
    {
      id: '6588',
      name: 'Xã xuân hồng',
      district_id: '480500',
    },
    {
      id: '6589',
      name: 'Xã xuân viên',
      district_id: '480500',
    },
    {
      id: '6590',
      name: 'Xã xuân lam',
      district_id: '480500',
    },
    {
      id: '6591',
      name: 'Xã xuân lĩnh',
      district_id: '480500',
    },
    {
      id: '6592',
      name: 'Xã xuân liên',
      district_id: '480500',
    },
    {
      id: '6593',
      name: 'Xã cổ đạm',
      district_id: '480500',
    },
    {
      id: '6594',
      name: 'Xã cương gián',
      district_id: '480500',
    },
    {
      id: '6595',
      name: 'Thị trấn nghi xuân',
      district_id: '480500',
    },
    {
      id: '12751',
      name: 'Xã Đan Trường',
      district_id: '480500',
    },
    {
      id: '12752',
      name: 'Thị Trấn Tiên Điền',
      district_id: '480500',
    },
    {
      id: '6754',
      name: 'Xã ích hậu',
      district_id: '481200',
    },
    {
      id: '6755',
      name: 'Xã phù lưu',
      district_id: '481200',
    },
    {
      id: '6756',
      name: 'Xã hồng lộc',
      district_id: '481200',
    },
    {
      id: '6757',
      name: 'Xã bình lộc',
      district_id: '481200',
    },
    {
      id: '6758',
      name: 'Xã tân lộc',
      district_id: '481200',
    },
    {
      id: '6759',
      name: 'Xã an lộc',
      district_id: '481200',
    },
    {
      id: '6760',
      name: 'Xã thịnh lộc',
      district_id: '481200',
    },
    {
      id: '6761',
      name: 'Xã thạch kim',
      district_id: '481200',
    },
    {
      id: '6762',
      name: 'Xã thạch bằng',
      district_id: '481200',
    },
    {
      id: '6763',
      name: 'Xã thạch châu',
      district_id: '481200',
    },
    {
      id: '6764',
      name: 'Xã thạch mỹ',
      district_id: '481200',
    },
    {
      id: '6765',
      name: 'Xã mai phụ',
      district_id: '481200',
    },
    {
      id: '6766',
      name: 'Xã hộ độ',
      district_id: '481200',
    },
    {
      id: '946',
      name: 'Xã bình minh',
      district_id: '171200',
    },
    {
      id: '947',
      name: 'Xã bình xuyên',
      district_id: '171200',
    },
    {
      id: '948',
      name: 'Xã cổ bì',
      district_id: '171200',
    },
    {
      id: '949',
      name: 'Xã hồng khê',
      district_id: '171200',
    },
    {
      id: '950',
      name: 'Xã hùng thắng',
      district_id: '171200',
    },
    {
      id: '951',
      name: 'Xã Vĩnh Hưng',
      district_id: '171200',
    },
    {
      id: '952',
      name: 'Xã long xuyên',
      district_id: '171200',
    },
    {
      id: '953',
      name: 'Xã nhân quyền',
      district_id: '171200',
    },
    {
      id: '955',
      name: 'Xã tân hồng',
      district_id: '171200',
    },
    {
      id: '956',
      name: 'Xã tân việt',
      district_id: '171200',
    },
    {
      id: '957',
      name: 'Xã thái dương',
      district_id: '171200',
    },
    {
      id: '958',
      name: 'Xã thái hòa',
      district_id: '171200',
    },
    {
      id: '959',
      name: 'Xã thái học',
      district_id: '171200',
    },
    {
      id: '960',
      name: 'Xã thúc kháng',
      district_id: '171200',
    },
    {
      id: '961',
      name: 'Xã tráng liệt',
      district_id: '171200',
    },
    {
      id: '962',
      name: 'Thị trấn kẻ sặt',
      district_id: '171200',
    },
    {
      id: '963',
      name: 'Xã vĩnh hồng',
      district_id: '171200',
    },
    {
      id: '964',
      name: 'Xã vĩnh tuy',
      district_id: '171200',
    },
    {
      id: '923',
      name: 'Xã cẩm điền',
      district_id: '170900',
    },
    {
      id: '924',
      name: 'Xã cẩm định',
      district_id: '170900',
    },
    {
      id: '925',
      name: 'Xã cẩm đoài',
      district_id: '170900',
    },
    {
      id: '926',
      name: 'Xã cẩm đông',
      district_id: '170900',
    },
    {
      id: '927',
      name: 'Xã cẩm hoàng',
      district_id: '170900',
    },
    {
      id: '928',
      name: 'Xã cẩm hưng',
      district_id: '170900',
    },
    {
      id: '931',
      name: 'Xã cẩm phúc',
      district_id: '170900',
    },
    {
      id: '932',
      name: 'Xã cẩm sơn',
      district_id: '170900',
    },
    {
      id: '933',
      name: 'Xã cẩm văn',
      district_id: '170900',
    },
    {
      id: '934',
      name: 'Xã cẩm vũ',
      district_id: '170900',
    },
    {
      id: '935',
      name: 'Xã cao an',
      district_id: '170900',
    },
    {
      id: '938',
      name: 'Xã kim giang',
      district_id: '170900',
    },
    {
      id: '939',
      name: 'Xã lương điền',
      district_id: '170900',
    },
    {
      id: '940',
      name: 'Xã ngọc liên',
      district_id: '170900',
    },
    {
      id: '941',
      name: 'Xã tân trường',
      district_id: '170900',
    },
    {
      id: '942',
      name: 'Xã thạch lỗi',
      district_id: '170900',
    },
    {
      id: '943',
      name: 'Thị trấn cẩm giàng',
      district_id: '170900',
    },
    {
      id: '944',
      name: 'Thị trấn lai cách',
      district_id: '170900',
    },
    {
      id: '11818',
      name: 'Xã đức chính',
      district_id: '170900',
    },
    {
      id: '900',
      name: 'Xã an lạc',
      district_id: '170200',
    },
    {
      id: '901',
      name: 'Xã bắc an',
      district_id: '170200',
    },
    {
      id: '902',
      name: 'Phường chí minh',
      district_id: '170200',
    },
    {
      id: '903',
      name: 'Xã cổ thành',
      district_id: '170200',
    },
    {
      id: '904',
      name: 'Phường cộng hòa',
      district_id: '170200',
    },
    {
      id: '905',
      name: 'Xã đồng lạc',
      district_id: '170200',
    },
    {
      id: '906',
      name: 'Xã hoàng hoa thám',
      district_id: '170200',
    },
    {
      id: '907',
      name: 'Phường hoàng tân',
      district_id: '170200',
    },
    {
      id: '908',
      name: 'Xã hoàng tiến',
      district_id: '170200',
    },
    {
      id: '909',
      name: 'Xã hưng đạo',
      district_id: '170200',
    },
    {
      id: '910',
      name: 'Xã kênh giang',
      district_id: '170200',
    },
    {
      id: '911',
      name: 'Xã lê lợi',
      district_id: '170200',
    },
    {
      id: '913',
      name: 'Phường phả lại',
      district_id: '170200',
    },
    {
      id: '914',
      name: 'Xã tân dân',
      district_id: '170200',
    },
    {
      id: '915',
      name: 'Phường thái học',
      district_id: '170200',
    },
    {
      id: '916',
      name: 'Phường sao đỏ',
      district_id: '170200',
    },
    {
      id: '917',
      name: 'Phường bến tắm',
      district_id: '170200',
    },
    {
      id: '918',
      name: 'Phường văn an',
      district_id: '170200',
    },
    {
      id: '919',
      name: 'Xã văn đức',
      district_id: '170200',
    },
    {
      id: '920',
      name: 'Xã nhân huệ',
      district_id: '170200',
    },
    {
      id: '966',
      name: 'Xã đoàn thượng',
      district_id: '170500',
    },
    {
      id: '968',
      name: 'Xã đồng quang',
      district_id: '170500',
    },
    {
      id: '970',
      name: 'Xã đức xương',
      district_id: '170500',
    },
    {
      id: '971',
      name: 'Xã gia hòa',
      district_id: '170500',
    },
    {
      id: '973',
      name: 'Xã gia khánh',
      district_id: '170500',
    },
    {
      id: '974',
      name: 'Xã gia lương',
      district_id: '170500',
    },
    {
      id: '975',
      name: 'Xã gia tân',
      district_id: '170500',
    },
    {
      id: '977',
      name: 'Xã hoàng diệu',
      district_id: '170500',
    },
    {
      id: '979',
      name: 'Xã hồng hưng',
      district_id: '170500',
    },
    {
      id: '980',
      name: 'Xã liên hồng',
      district_id: '170500',
    },
    {
      id: '981',
      name: 'Xã nhật tân',
      district_id: '170500',
    },
    {
      id: '982',
      name: 'Xã phạm trấn',
      district_id: '170500',
    },
    {
      id: '983',
      name: 'Xã phương hưng',
      district_id: '170500',
    },
    {
      id: '984',
      name: 'Xã quang minh',
      district_id: '170500',
    },
    {
      id: '986',
      name: 'Xã tân tiến',
      district_id: '170500',
    },
    {
      id: '988',
      name: 'Thị trấn gia lộc',
      district_id: '170500',
    },
    {
      id: '990',
      name: 'Xã thống kênh',
      district_id: '170500',
    },
    {
      id: '991',
      name: 'Xã thống nhất',
      district_id: '170500',
    },
    {
      id: '992',
      name: 'Xã toàn thắng',
      district_id: '170500',
    },
    {
      id: '993',
      name: 'Xã trùng khánh',
      district_id: '170500',
    },
    {
      id: '994',
      name: 'Xã yết kiêu',
      district_id: '170500',
    },
    {
      id: '997',
      name: 'Xã lê lợi',
      district_id: '170500',
    },
    {
      id: '779',
      name: 'Phường phạm ngũ lão',
      district_id: '170100',
    },
    {
      id: '780',
      name: 'Phường nguyễn trãi',
      district_id: '170100',
    },
    {
      id: '781',
      name: 'Phường quang trung',
      district_id: '170100',
    },
    {
      id: '782',
      name: 'Phường hải tân',
      district_id: '170100',
    },
    {
      id: '783',
      name: 'Phường trần phú',
      district_id: '170100',
    },
    {
      id: '784',
      name: 'Phường trần hưng đạo',
      district_id: '170100',
    },
    {
      id: '785',
      name: 'Phường lê thanh nghị',
      district_id: '170100',
    },
    {
      id: '786',
      name: 'Phường ngọc châu',
      district_id: '170100',
    },
    {
      id: '787',
      name: 'Phường việt hoà',
      district_id: '170100',
    },
    {
      id: '788',
      name: 'Phường thanh bình',
      district_id: '170100',
    },
    {
      id: '789',
      name: 'Phường bình hàn',
      district_id: '170100',
    },
    {
      id: '790',
      name: 'Phường tứ minh',
      district_id: '170100',
    },
    {
      id: '791',
      name: 'Phường cẩm thượng',
      district_id: '170100',
    },
    {
      id: '793',
      name: 'Phường tân bình',
      district_id: '170100',
    },
    {
      id: '794',
      name: 'Xã thượng đạt',
      district_id: '170100',
    },
    {
      id: '796',
      name: 'Xã an châu',
      district_id: '170100',
    },
    {
      id: '797',
      name: 'Xã nam đồng',
      district_id: '170100',
    },
    {
      id: '798',
      name: 'Xã tân hưng',
      district_id: '170100',
    },
    {
      id: '800',
      name: 'Phường nhị châu',
      district_id: '170100',
    },
    {
      id: '976',
      name: 'Xã Gia Xuyên',
      district_id: '170100',
    },
    {
      id: '11814',
      name: 'Phường ái quốc',
      district_id: '170100',
    },
    {
      id: '11815',
      name: 'Phường thạch khôi',
      district_id: '170100',
    },
    {
      id: '12810',
      name: 'Xã Quyết Thắng',
      district_id: '170100',
    },
    {
      id: '12819',
      name: 'Xã An Thượng',
      district_id: '170100',
    },
    {
      id: '12822',
      name: 'Xã Ngọc Sơn',
      district_id: '170100',
    },
    {
      id: '12828',
      name: 'Xã Liên Hồng',
      district_id: '170100',
    },
    {
      id: '826',
      name: 'Xã cổ dũng',
      district_id: '171100',
    },
    {
      id: '827',
      name: 'Xã cộng hòa',
      district_id: '171100',
    },
    {
      id: '830',
      name: 'Xã kim anh',
      district_id: '171100',
    },
    {
      id: '831',
      name: 'Xã kim đính',
      district_id: '171100',
    },
    {
      id: '832',
      name: 'Xã kim khê',
      district_id: '171100',
    },
    {
      id: '833',
      name: 'Xã kim lương',
      district_id: '171100',
    },
    {
      id: '834',
      name: 'Xã kim tân',
      district_id: '171100',
    },
    {
      id: '835',
      name: 'Xã kim xuyên',
      district_id: '171100',
    },
    {
      id: '837',
      name: 'Xã lai vu',
      district_id: '171100',
    },
    {
      id: '838',
      name: 'Xã liên hòa',
      district_id: '171100',
    },
    {
      id: '839',
      name: 'Xã ngũ phúc',
      district_id: '171100',
    },
    {
      id: '840',
      name: 'Xã phúc thành a',
      district_id: '171100',
    },
    {
      id: '841',
      name: 'Xã tam kỳ',
      district_id: '171100',
    },
    {
      id: '842',
      name: 'Xã thượng vũ',
      district_id: '171100',
    },
    {
      id: '843',
      name: 'Xã tuấn hưng',
      district_id: '171100',
    },
    {
      id: '844',
      name: 'Xã việt hưng',
      district_id: '171100',
    },
    {
      id: '845',
      name: 'Xã bình dân',
      district_id: '171100',
    },
    {
      id: '846',
      name: 'Xã cẩm la',
      district_id: '171100',
    },
    {
      id: '847',
      name: 'Thị trấn phú thái',
      district_id: '171100',
    },
    {
      id: '11816',
      name: 'Xã đại đức',
      district_id: '171100',
    },
    {
      id: '11817',
      name: 'Xã đồng gia',
      district_id: '171100',
    },
    {
      id: '12679',
      name: 'Xã Kim Liên',
      district_id: '171100',
    },
    {
      id: '12729',
      name: 'Xã Đồng Cẩm',
      district_id: '171100',
    },
    {
      id: '874',
      name: 'Phường An Phụ',
      district_id: '170400',
    },
    {
      id: '875',
      name: 'Phường An Sinh',
      district_id: '170400',
    },
    {
      id: '876',
      name: 'Xã bạch đằng',
      district_id: '170400',
    },
    {
      id: '877',
      name: 'Phường Duy Tân',
      district_id: '170400',
    },
    {
      id: '878',
      name: 'Phường Hiến Thành',
      district_id: '170400',
    },
    {
      id: '879',
      name: 'Phường Hiệp An',
      district_id: '170400',
    },
    {
      id: '880',
      name: 'Xã hiệp hòa',
      district_id: '170400',
    },
    {
      id: '881',
      name: 'Phường  Hiệp Sơn',
      district_id: '170400',
    },
    {
      id: '883',
      name: 'Xã lạc long',
      district_id: '170400',
    },
    {
      id: '884',
      name: 'Xã lê ninh',
      district_id: '170400',
    },
    {
      id: '885',
      name: 'Xã minh hòa',
      district_id: '170400',
    },
    {
      id: '888',
      name: 'Phường  Phú Thứ',
      district_id: '170400',
    },
    {
      id: '891',
      name: 'Phường Tân Dân',
      district_id: '170400',
    },
    {
      id: '893',
      name: 'Phường Thái Thịnh',
      district_id: '170400',
    },
    {
      id: '894',
      name: 'Xã thăng long',
      district_id: '170400',
    },
    {
      id: '895',
      name: 'Phường Thất Hùng',
      district_id: '170400',
    },
    {
      id: '897',
      name: 'Phường Minh Tân',
      district_id: '170400',
    },
    {
      id: '898',
      name: 'Xã thượng quận',
      district_id: '170400',
    },
    {
      id: '899',
      name: 'Xã Long Xuyên',
      district_id: '170400',
    },
    {
      id: '11819',
      name: 'Xã hoành sơn',
      district_id: '170400',
    },
    {
      id: '12684',
      name: 'Phường An Lưu',
      district_id: '170400',
    },
    {
      id: '12717',
      name: 'Phường Phạm Thái',
      district_id: '170400',
    },
    {
      id: '12718',
      name: 'Xã Quang Thành',
      district_id: '170400',
    },
    {
      id: '849',
      name: 'Xã quốc tuấn',
      district_id: '170300',
    },
    {
      id: '850',
      name: 'Xã thái tân',
      district_id: '170300',
    },
    {
      id: '851',
      name: 'Xã thanh quang',
      district_id: '170300',
    },
    {
      id: '853',
      name: 'Thị trấn nam sách',
      district_id: '170300',
    },
    {
      id: '856',
      name: 'Xã an bình',
      district_id: '170300',
    },
    {
      id: '858',
      name: 'Xã an lâm',
      district_id: '170300',
    },
    {
      id: '860',
      name: 'Xã an sơn',
      district_id: '170300',
    },
    {
      id: '861',
      name: 'Xã cộng hòa',
      district_id: '170300',
    },
    {
      id: '862',
      name: 'Xã đồng lạc',
      district_id: '170300',
    },
    {
      id: '863',
      name: 'Xã hiệp cát',
      district_id: '170300',
    },
    {
      id: '864',
      name: 'Xã hồng phong',
      district_id: '170300',
    },
    {
      id: '865',
      name: 'Xã hợp tiến',
      district_id: '170300',
    },
    {
      id: '866',
      name: 'Xã minh tân',
      district_id: '170300',
    },
    {
      id: '868',
      name: 'Xã nam hồng',
      district_id: '170300',
    },
    {
      id: '869',
      name: 'Xã nam hưng',
      district_id: '170300',
    },
    {
      id: '870',
      name: 'Xã nam tân',
      district_id: '170300',
    },
    {
      id: '871',
      name: 'Xã nam trung',
      district_id: '170300',
    },
    {
      id: '872',
      name: 'Xã phú điền',
      district_id: '170300',
    },
    {
      id: '11813',
      name: 'Xã nam chính',
      district_id: '170300',
    },
    {
      id: '1020',
      name: 'Xã đồng tâm',
      district_id: '170800',
    },
    {
      id: '1021',
      name: 'Xã đông xuyên',
      district_id: '170800',
    },
    {
      id: '1022',
      name: 'Xã hiệp lực',
      district_id: '170800',
    },
    {
      id: '1023',
      name: 'Xã hoàng hanh',
      district_id: '170800',
    },
    {
      id: '1024',
      name: 'Xã hồng dụ',
      district_id: '170800',
    },
    {
      id: '1025',
      name: 'Xã hồng đức',
      district_id: '170800',
    },
    {
      id: '1026',
      name: 'Xã hồng phong',
      district_id: '170800',
    },
    {
      id: '1027',
      name: 'Xã hồng phúc',
      district_id: '170800',
    },
    {
      id: '1028',
      name: 'Xã hồng thái',
      district_id: '170800',
    },
    {
      id: '1029',
      name: 'Xã hưng long',
      district_id: '170800',
    },
    {
      id: '1030',
      name: 'Xã hưng thái',
      district_id: '170800',
    },
    {
      id: '1031',
      name: 'Xã kiến quốc',
      district_id: '170800',
    },
    {
      id: '1032',
      name: 'Xã nghĩa an',
      district_id: '170800',
    },
    {
      id: '1033',
      name: 'Xã ninh hải',
      district_id: '170800',
    },
    {
      id: '1034',
      name: 'Xã ninh hòa',
      district_id: '170800',
    },
    {
      id: '1035',
      name: 'Xã ninh thành',
      district_id: '170800',
    },
    {
      id: '1037',
      name: 'Xã quang hưng',
      district_id: '170800',
    },
    {
      id: '1038',
      name: 'Xã quyết thắng',
      district_id: '170800',
    },
    {
      id: '1039',
      name: 'Xã tân hương',
      district_id: '170800',
    },
    {
      id: '1040',
      name: 'Xã tân phong',
      district_id: '170800',
    },
    {
      id: '1041',
      name: 'Xã ứng hòe',
      district_id: '170800',
    },
    {
      id: '1042',
      name: 'Xã văn giang',
      district_id: '170800',
    },
    {
      id: '1043',
      name: 'Xã văn hội',
      district_id: '170800',
    },
    {
      id: '1044',
      name: 'Xã vạn phúc',
      district_id: '170800',
    },
    {
      id: '1045',
      name: 'Xã vĩnh hòa',
      district_id: '170800',
    },
    {
      id: '1046',
      name: 'Xã an đức',
      district_id: '170800',
    },
    {
      id: '1047',
      name: 'Xã tân quang',
      district_id: '170800',
    },
    {
      id: '1048',
      name: 'Thị trấn ninh giang',
      district_id: '170800',
    },
    {
      id: '801',
      name: 'Xã hồng lạc',
      district_id: '171000',
    },
    {
      id: '802',
      name: 'Xã liên mạc',
      district_id: '171000',
    },
    {
      id: '803',
      name: 'Xã phượng hoàng',
      district_id: '171000',
    },
    {
      id: '804',
      name: 'Xã tân việt',
      district_id: '171000',
    },
    {
      id: '805',
      name: 'Xã thanh bính',
      district_id: '171000',
    },
    {
      id: '806',
      name: 'Xã thanh hải',
      district_id: '171000',
    },
    {
      id: '807',
      name: 'Xã thanh hồng',
      district_id: '171000',
    },
    {
      id: '808',
      name: 'Xã thanh khê',
      district_id: '171000',
    },
    {
      id: '809',
      name: 'Xã thanh lang',
      district_id: '171000',
    },
    {
      id: '810',
      name: 'Xã thanh sơn',
      district_id: '171000',
    },
    {
      id: '811',
      name: 'Xã thanh thủy',
      district_id: '171000',
    },
    {
      id: '812',
      name: 'Xã thanh xá',
      district_id: '171000',
    },
    {
      id: '813',
      name: 'Xã trường thành',
      district_id: '171000',
    },
    {
      id: '814',
      name: 'Thị trấn thanh hà',
      district_id: '171000',
    },
    {
      id: '815',
      name: 'Xã việt hồng',
      district_id: '171000',
    },
    {
      id: '816',
      name: 'Xã vĩnh lập',
      district_id: '171000',
    },
    {
      id: '817',
      name: 'Xã an lương',
      district_id: '171000',
    },
    {
      id: '818',
      name: 'Xã cẩm chế',
      district_id: '171000',
    },
    {
      id: '819',
      name: 'Xã tiền tiến',
      district_id: '171000',
    },
    {
      id: '820',
      name: 'Xã thanh an',
      district_id: '171000',
    },
    {
      id: '821',
      name: 'Xã thanh cường',
      district_id: '171000',
    },
    {
      id: '822',
      name: 'Xã thanh xuân',
      district_id: '171000',
    },
    {
      id: '823',
      name: 'Xã hợp đức',
      district_id: '171000',
    },
    {
      id: '824',
      name: 'Xã tân an',
      district_id: '171000',
    },
    {
      id: '825',
      name: 'Xã quyết thắng',
      district_id: '171000',
    },
    {
      id: '12780',
      name: 'Xã Thanh Quang',
      district_id: '171000',
    },
    {
      id: '12781',
      name: 'Xã An Phượng',
      district_id: '171000',
    },
    {
      id: '998',
      name: 'Xã cao thắng',
      district_id: '170700',
    },
    {
      id: '999',
      name: 'Xã chi lăng bắc',
      district_id: '170700',
    },
    {
      id: '1000',
      name: 'Xã chi lăng nam',
      district_id: '170700',
    },
    {
      id: '1002',
      name: 'Xã đoàn kết',
      district_id: '170700',
    },
    {
      id: '1003',
      name: 'Xã đoàn tùng',
      district_id: '170700',
    },
    {
      id: '1005',
      name: 'Xã hồng quang',
      district_id: '170700',
    },
    {
      id: '1006',
      name: 'Xã hùng sơn',
      district_id: '170700',
    },
    {
      id: '1007',
      name: 'Xã lam sơn',
      district_id: '170700',
    },
    {
      id: '1009',
      name: 'Xã lê hồng',
      district_id: '170700',
    },
    {
      id: '1010',
      name: 'Xã ngô quyền',
      district_id: '170700',
    },
    {
      id: '1011',
      name: 'Xã ngũ hùng',
      district_id: '170700',
    },
    {
      id: '1012',
      name: 'Xã phạm kha',
      district_id: '170700',
    },
    {
      id: '1013',
      name: 'Xã tân trào',
      district_id: '170700',
    },
    {
      id: '1014',
      name: 'Xã thanh giang',
      district_id: '170700',
    },
    {
      id: '1015',
      name: 'Xã tứ cường',
      district_id: '170700',
    },
    {
      id: '1016',
      name: 'Xã thanh tùng',
      district_id: '170700',
    },
    {
      id: '1018',
      name: 'Thị trấn thanh miện',
      district_id: '170700',
    },
    {
      id: '12739',
      name: 'Xã Hồng Phong',
      district_id: '170700',
    },
    {
      id: '1049',
      name: 'Xã Đại Sơn',
      district_id: '170600',
    },
    {
      id: '1050',
      name: 'Xã minh đức',
      district_id: '170600',
    },
    {
      id: '1051',
      name: 'Xã ngọc kỳ',
      district_id: '170600',
    },
    {
      id: '1052',
      name: 'Xã ngọc sơn',
      district_id: '170600',
    },
    {
      id: '1053',
      name: 'Xã nguyên giáp',
      district_id: '170600',
    },
    {
      id: '1054',
      name: 'Xã phượng kỳ',
      district_id: '170600',
    },
    {
      id: '1055',
      name: 'Xã quang khải',
      district_id: '170600',
    },
    {
      id: '1056',
      name: 'Xã quảng nghiệp',
      district_id: '170600',
    },
    {
      id: '1057',
      name: 'Xã quang phục',
      district_id: '170600',
    },
    {
      id: '1058',
      name: 'Xã quang trung',
      district_id: '170600',
    },
    {
      id: '1060',
      name: 'Xã tái sơn',
      district_id: '170600',
    },
    {
      id: '1061',
      name: 'Xã tân kỳ',
      district_id: '170600',
    },
    {
      id: '1062',
      name: 'Xã tây kỳ',
      district_id: '170600',
    },
    {
      id: '1063',
      name: 'Thị trấn tứ kỳ',
      district_id: '170600',
    },
    {
      id: '1064',
      name: 'Xã tiên động',
      district_id: '170600',
    },
    {
      id: '1065',
      name: 'Xã tứ xuyên',
      district_id: '170600',
    },
    {
      id: '1066',
      name: 'Xã văn tố',
      district_id: '170600',
    },
    {
      id: '1067',
      name: 'Xã an thanh',
      district_id: '170600',
    },
    {
      id: '1068',
      name: 'Xã bình lăng',
      district_id: '170600',
    },
    {
      id: '1069',
      name: 'Xã cộng lạc',
      district_id: '170600',
    },
    {
      id: '1070',
      name: 'Xã đại hợp',
      district_id: '170600',
    },
    {
      id: '1071',
      name: 'Xã dân chủ',
      district_id: '170600',
    },
    {
      id: '1072',
      name: 'Xã đông kỳ',
      district_id: '170600',
    },
    {
      id: '1073',
      name: 'Xã hà kỳ',
      district_id: '170600',
    },
    {
      id: '1074',
      name: 'Xã hà thanh',
      district_id: '170600',
    },
    {
      id: '1075',
      name: 'Xã hưng đạo',
      district_id: '170600',
    },
    {
      id: '1076',
      name: 'Xã đại đồng',
      district_id: '170600',
    },
    {
      id: '12764',
      name: 'Xã Chí Minh',
      district_id: '170600',
    },
    {
      id: '1077',
      name: 'Phường hoàng văn thụ',
      district_id: '180100',
    },
    {
      id: '1078',
      name: 'Phường minh khai',
      district_id: '180100',
    },
    {
      id: '1079',
      name: 'Phường phan bội châu',
      district_id: '180100',
    },
    {
      id: '1082',
      name: 'Phường trại chuối',
      district_id: '180100',
    },
    {
      id: '1083',
      name: 'Phường thượng lý',
      district_id: '180100',
    },
    {
      id: '1084',
      name: 'Phường hạ lý',
      district_id: '180100',
    },
    {
      id: '1085',
      name: 'Phường sở dầu',
      district_id: '180100',
    },
    {
      id: '1086',
      name: 'Phường hùng vương',
      district_id: '180100',
    },
    {
      id: '1087',
      name: 'Phường quán toan',
      district_id: '180100',
    },
    {
      id: '1088',
      name: 'Phường máy tơ',
      district_id: '181810',
    },
    {
      id: '1089',
      name: 'Phường lương khánh thiện',
      district_id: '181810',
    },
    {
      id: '1090',
      name: 'Phường cầu đất',
      district_id: '181810',
    },
    {
      id: '1091',
      name: 'Phường lạch tray',
      district_id: '181810',
    },
    {
      id: '1092',
      name: 'Phường lê lợi',
      district_id: '181810',
    },
    {
      id: '1093',
      name: 'Phường đằng giang',
      district_id: '181810',
    },
    {
      id: '1094',
      name: 'Phường đông khê',
      district_id: '181810',
    },
    {
      id: '1095',
      name: 'Phường cầu tre',
      district_id: '181810',
    },
    {
      id: '1096',
      name: 'Phường đồng quốc bình',
      district_id: '181810',
    },
    {
      id: '1097',
      name: 'Phường máy chai',
      district_id: '181810',
    },
    {
      id: '1098',
      name: 'Phường Gia Viên',
      district_id: '181810',
    },
    {
      id: '1099',
      name: 'Phường lạc viên',
      district_id: '181810',
    },
    {
      id: '1100',
      name: 'Phường vạn mỹ',
      district_id: '181810',
    },
    {
      id: '1138',
      name: 'Phường cát dài',
      district_id: '180200',
    },
    {
      id: '1139',
      name: 'Phường an biên',
      district_id: '180200',
    },
    {
      id: '1140',
      name: 'Phường đông hải',
      district_id: '180200',
    },
    {
      id: '1141',
      name: 'Phường an dương',
      district_id: '180200',
    },
    {
      id: '1142',
      name: 'Phường dư hàng',
      district_id: '180200',
    },
    {
      id: '1143',
      name: 'Phường dư hàng kênh',
      district_id: '180200',
    },
    {
      id: '1144',
      name: 'Phường hàng kênh',
      district_id: '180200',
    },
    {
      id: '1145',
      name: 'Phường hồ nam',
      district_id: '180200',
    },
    {
      id: '1146',
      name: 'Phường kênh dương',
      district_id: '180200',
    },
    {
      id: '1147',
      name: 'Phường lam sơn',
      district_id: '180200',
    },
    {
      id: '1148',
      name: 'Phường niệm nghĩa',
      district_id: '180200',
    },
    {
      id: '1149',
      name: 'Phường nghĩa xã',
      district_id: '180200',
    },
    {
      id: '1150',
      name: 'Phường trại cau',
      district_id: '180200',
    },
    {
      id: '1151',
      name: 'Phường trần nguyên hãn',
      district_id: '180200',
    },
    {
      id: '1152',
      name: 'Phường vĩnh niệm',
      district_id: '180200',
    },
    {
      id: '1169',
      name: 'Phường bắc sơn',
      district_id: '180400',
    },
    {
      id: '1170',
      name: 'Phường đồng Hòa',
      district_id: '180400',
    },
    {
      id: '1171',
      name: 'Phường lãm hà',
      district_id: '180400',
    },
    {
      id: '1172',
      name: 'Phường nam sơn',
      district_id: '180400',
    },
    {
      id: '1173',
      name: 'Phường ngọc sơn',
      district_id: '180400',
    },
    {
      id: '1174',
      name: 'Phường phù liễn',
      district_id: '180400',
    },
    {
      id: '1175',
      name: 'Phường quán trữ',
      district_id: '180400',
    },
    {
      id: '1176',
      name: 'Phường tràng minh',
      district_id: '180400',
    },
    {
      id: '1177',
      name: 'Phường trần thành ngọ',
      district_id: '180400',
    },
    {
      id: '1178',
      name: 'Phường văn đẩu',
      district_id: '180400',
    },
    {
      id: '1275',
      name: 'Phường nam hải',
      district_id: '180500',
    },
    {
      id: '1276',
      name: 'Phường đằng hải',
      district_id: '180500',
    },
    {
      id: '1277',
      name: 'Phường thành tô',
      district_id: '180500',
    },
    {
      id: '1278',
      name: 'Phường tràng cát',
      district_id: '180500',
    },
    {
      id: '1279',
      name: 'Phường đông hải 2',
      district_id: '180500',
    },
    {
      id: '1280',
      name: 'Phường đằng lâm',
      district_id: '180500',
    },
    {
      id: '1282',
      name: 'Phường cát bi',
      district_id: '180500',
    },
    {
      id: '1283',
      name: 'Phường đông hải 1',
      district_id: '180500',
    },
    {
      id: '1284',
      name: 'Phường đa phúc',
      district_id: '181500',
    },
    {
      id: '1285',
      name: 'Phường hưng đạo',
      district_id: '181500',
    },
    {
      id: '1286',
      name: 'Phường anh dũng',
      district_id: '181500',
    },
    {
      id: '1287',
      name: 'Phường hải thành',
      district_id: '181500',
    },
    {
      id: '1288',
      name: 'Phường hòa nghĩa',
      district_id: '181500',
    },
    {
      id: '1289',
      name: 'Phường tân thành',
      district_id: '181500',
    },
    {
      id: '1267',
      name: 'Phường bàng la',
      district_id: '180600',
    },
    {
      id: '1268',
      name: 'Phường hợp đức',
      district_id: '180600',
    },
    {
      id: '1269',
      name: 'Phường ngọc hải',
      district_id: '180600',
    },
    {
      id: '1270',
      name: 'Phường ngọc xuyên',
      district_id: '180600',
    },
    {
      id: '1271',
      name: 'Phường minh đức',
      district_id: '180600',
    },
    {
      id: '1272',
      name: 'Phường vạn hương',
      district_id: '180600',
    },
    {
      id: '1273',
      name: 'Phường Hải Sơn',
      district_id: '180600',
    },
    {
      id: '1153',
      name: 'Xã đại bản',
      district_id: '181000',
    },
    {
      id: '1154',
      name: 'Xã tân tiến',
      district_id: '181000',
    },
    {
      id: '1155',
      name: 'Xã an hưng',
      district_id: '181000',
    },
    {
      id: '1156',
      name: 'Xã an hồng',
      district_id: '181000',
    },
    {
      id: '1157',
      name: 'Xã nam sơn',
      district_id: '181000',
    },
    {
      id: '1158',
      name: 'Xã lê lợi',
      district_id: '181000',
    },
    {
      id: '1159',
      name: 'Xã đăng cương',
      district_id: '181000',
    },
    {
      id: '1160',
      name: 'Xã đồng thái',
      district_id: '181000',
    },
    {
      id: '1161',
      name: 'Xã quốc tuấn',
      district_id: '181000',
    },
    {
      id: '1162',
      name: 'Xã hồng thái',
      district_id: '181000',
    },
    {
      id: '1163',
      name: 'Thị trấn an dương',
      district_id: '181000',
    },
    {
      id: '1164',
      name: 'Xẫ Lê Thiện',
      district_id: '181000',
    },
    {
      id: '1165',
      name: 'Xã an hòa',
      district_id: '181000',
    },
    {
      id: '1166',
      name: 'Xã hồng phong',
      district_id: '181000',
    },
    {
      id: '1167',
      name: 'Xã bắc sơn',
      district_id: '181000',
    },
    {
      id: '1168',
      name: 'Xã an đồng',
      district_id: '181000',
    },
    {
      id: '1290',
      name: 'Xã văn phong',
      district_id: '181300',
    },
    {
      id: '1291',
      name: 'Xã phù long',
      district_id: '181300',
    },
    {
      id: '1292',
      name: 'Xã hoàng châu',
      district_id: '181300',
    },
    {
      id: '1293',
      name: 'Xã đồng bài',
      district_id: '181300',
    },
    {
      id: '1294',
      name: 'Xã nghĩa lộ',
      district_id: '181300',
    },
    {
      id: '1295',
      name: 'Xã trân châu',
      district_id: '181300',
    },
    {
      id: '1296',
      name: 'Xã hiền hào',
      district_id: '181300',
    },
    {
      id: '1297',
      name: 'Xã gia luận',
      district_id: '181300',
    },
    {
      id: '1298',
      name: 'Xã việt hải',
      district_id: '181300',
    },
    {
      id: '1299',
      name: 'Xã xuân đám',
      district_id: '181300',
    },
    {
      id: '1300',
      name: 'Thị trấn cát bà',
      district_id: '181300',
    },
    {
      id: '1301',
      name: 'Thị trấn cát hải',
      district_id: '181300',
    },
    {
      id: '1250',
      name: 'Xã đông phương',
      district_id: '180800',
    },
    {
      id: '1251',
      name: 'Xã thanh sơn',
      district_id: '180800',
    },
    {
      id: '1252',
      name: 'Xã minh tân',
      district_id: '180800',
    },
    {
      id: '1253',
      name: 'Xã hữu bằng',
      district_id: '180800',
    },
    {
      id: '1254',
      name: 'Xã thuận thiên',
      district_id: '180800',
    },
    {
      id: '1255',
      name: 'Xã du lễ',
      district_id: '180800',
    },
    {
      id: '1256',
      name: 'Xã ngũ phúc',
      district_id: '180800',
    },
    {
      id: '1257',
      name: 'Xã kiến quốc',
      district_id: '180800',
    },
    {
      id: '1258',
      name: 'Xã thụy hương',
      district_id: '180800',
    },
    {
      id: '1259',
      name: 'Xã đại hà',
      district_id: '180800',
    },
    {
      id: '1260',
      name: 'Xã ngũ đoan',
      district_id: '180800',
    },
    {
      id: '1261',
      name: 'Xã tân trào',
      district_id: '180800',
    },
    {
      id: '1262',
      name: 'Xã đoàn xá',
      district_id: '180800',
    },
    {
      id: '1263',
      name: 'Xã đại hợp',
      district_id: '180800',
    },
    {
      id: '1264',
      name: 'Xã tú sơn',
      district_id: '180800',
    },
    {
      id: '1265',
      name: 'Xã tân phong',
      district_id: '180800',
    },
    {
      id: '1266',
      name: 'Xã đại đồng',
      district_id: '180800',
    },
    {
      id: '11812',
      name: 'Thị trấn núi đối',
      district_id: '180800',
    },
    {
      id: '1196',
      name: 'Thị trấn tiên lãng',
      district_id: '181100',
    },
    {
      id: '1197',
      name: 'Xã nam hưng',
      district_id: '181100',
    },
    {
      id: '1198',
      name: 'Xã đông hưng',
      district_id: '181100',
    },
    {
      id: '1199',
      name: 'Xã toàn thắng',
      district_id: '181100',
    },
    {
      id: '1200',
      name: 'Xã quyết tiến',
      district_id: '181100',
    },
    {
      id: '1201',
      name: 'Xã đại thắng',
      district_id: '181100',
    },
    {
      id: '1202',
      name: 'Xã tiên cường',
      district_id: '181100',
    },
    {
      id: '1203',
      name: 'Xã tiên thanh',
      district_id: '181100',
    },
    {
      id: '1204',
      name: 'Xã cấp tiến',
      district_id: '181100',
    },
    {
      id: '1205',
      name: 'Xã kiến thiết',
      district_id: '181100',
    },
    {
      id: '1206',
      name: 'Xã đoàn lập',
      district_id: '181100',
    },
    {
      id: '1207',
      name: 'Xã bạch đằng',
      district_id: '181100',
    },
    {
      id: '1208',
      name: 'Xã tiên thắng',
      district_id: '181100',
    },
    {
      id: '1209',
      name: 'Xã bắc hưng',
      district_id: '181100',
    },
    {
      id: '1210',
      name: 'Xã tây hưng',
      district_id: '181100',
    },
    {
      id: '1211',
      name: 'Xã hùng thắng',
      district_id: '181100',
    },
    {
      id: '1212',
      name: 'Xã Vinh Quang',
      district_id: '181100',
    },
    {
      id: '1213',
      name: 'Xã khởi nghĩa',
      district_id: '181100',
    },
    {
      id: '1214',
      name: 'Xã tiên hưng',
      district_id: '181100',
    },
    {
      id: '1215',
      name: 'Xã tự cường',
      district_id: '181100',
    },
    {
      id: '1216',
      name: 'Xã tiên tiến',
      district_id: '181100',
    },
    {
      id: '1217',
      name: 'Xã quang phục',
      district_id: '181100',
    },
    {
      id: '1218',
      name: 'Xã tiên minh',
      district_id: '181100',
    },
    {
      id: '1219',
      name: 'Xã an hoà',
      district_id: '181200',
    },
    {
      id: '1220',
      name: 'Xã vĩnh long',
      district_id: '181200',
    },
    {
      id: '1221',
      name: 'Xã vĩnh tiến',
      district_id: '181200',
    },
    {
      id: '1222',
      name: 'Xã tân liên',
      district_id: '181200',
    },
    {
      id: '1223',
      name: 'Thị trấn vĩnh bảo',
      district_id: '181200',
    },
    {
      id: '1224',
      name: 'Xã trung lập',
      district_id: '181200',
    },
    {
      id: '1225',
      name: 'Xã hiệp hòa',
      district_id: '181200',
    },
    {
      id: '1226',
      name: 'Xã đồng minh',
      district_id: '181200',
    },
    {
      id: '1227',
      name: 'Xã thanh lương',
      district_id: '181200',
    },
    {
      id: '1228',
      name: 'Xã cộng hiền',
      district_id: '181200',
    },
    {
      id: '1229',
      name: 'Xã tiền phong',
      district_id: '181200',
    },
    {
      id: '1230',
      name: 'Xã vĩnh phong',
      district_id: '181200',
    },
    {
      id: '1231',
      name: 'Xã cao minh',
      district_id: '181200',
    },
    {
      id: '1232',
      name: 'Xã tam cường',
      district_id: '181200',
    },
    {
      id: '1233',
      name: 'Xã hưng nhân',
      district_id: '181200',
    },
    {
      id: '1234',
      name: 'Xã tam đa',
      district_id: '181200',
    },
    {
      id: '1235',
      name: 'Xã nhân hoà',
      district_id: '181200',
    },
    {
      id: '1236',
      name: 'Xã cổ am',
      district_id: '181200',
    },
    {
      id: '1237',
      name: 'Xã trấn dương',
      district_id: '181200',
    },
    {
      id: '1238',
      name: 'Xã vĩnh an',
      district_id: '181200',
    },
    {
      id: '1239',
      name: 'Xã dũng tiến',
      district_id: '181200',
    },
    {
      id: '1240',
      name: 'Xã vinh quang',
      district_id: '181200',
    },
    {
      id: '1241',
      name: 'Xã liên am',
      district_id: '181200',
    },
    {
      id: '1242',
      name: 'Xã giang biên',
      district_id: '181200',
    },
    {
      id: '1243',
      name: 'Xã hòa bình',
      district_id: '181200',
    },
    {
      id: '1244',
      name: 'Xã lý học',
      district_id: '181200',
    },
    {
      id: '1245',
      name: 'Xã việt tiến',
      district_id: '181200',
    },
    {
      id: '1246',
      name: 'Xã thắng thủy',
      district_id: '181200',
    },
    {
      id: '1247',
      name: 'Xã hùng tiến',
      district_id: '181200',
    },
    {
      id: '1248',
      name: 'Xã tân hưng',
      district_id: '181200',
    },
    {
      id: '1179',
      name: 'Thị trấn trường sơn',
      district_id: '180700',
    },
    {
      id: '1180',
      name: 'Thị trấn an lão',
      district_id: '180700',
    },
    {
      id: '1181',
      name: 'Xã mỹ đức',
      district_id: '180700',
    },
    {
      id: '1182',
      name: 'Xã trường thành',
      district_id: '180700',
    },
    {
      id: '1183',
      name: 'Xã trường thọ',
      district_id: '180700',
    },
    {
      id: '1184',
      name: 'Xã quang trung',
      district_id: '180700',
    },
    {
      id: '1185',
      name: 'Xã an thắng',
      district_id: '180700',
    },
    {
      id: '1186',
      name: 'Xã chiến thắng',
      district_id: '180700',
    },
    {
      id: '1187',
      name: 'Xã tân dân',
      district_id: '180700',
    },
    {
      id: '1188',
      name: 'Xã quang hưng',
      district_id: '180700',
    },
    {
      id: '1189',
      name: 'Xã quốc tuấn',
      district_id: '180700',
    },
    {
      id: '1190',
      name: 'Xã an thái',
      district_id: '180700',
    },
    {
      id: '1191',
      name: 'Xã tân viên',
      district_id: '180700',
    },
    {
      id: '1192',
      name: 'Xã an thọ',
      district_id: '180700',
    },
    {
      id: '1193',
      name: 'Xã bát trang',
      district_id: '180700',
    },
    {
      id: '1194',
      name: 'Xã an tiến',
      district_id: '180700',
    },
    {
      id: '1195',
      name: 'Xã thái sơn',
      district_id: '180700',
    },
    {
      id: '1101',
      name: 'Xã thiên hương',
      district_id: '180900',
    },
    {
      id: '1102',
      name: 'Xã kênh giang',
      district_id: '180900',
    },
    {
      id: '1103',
      name: 'Xã kỳ sơn',
      district_id: '180900',
    },
    {
      id: '1104',
      name: 'Xã kiền bái',
      district_id: '180900',
    },
    {
      id: '1105',
      name: 'Xã lâm động',
      district_id: '180900',
    },
    {
      id: '1106',
      name: 'Xã hoa động',
      district_id: '180900',
    },
    {
      id: '1107',
      name: 'Xã thuỷ đường',
      district_id: '180900',
    },
    {
      id: '1108',
      name: 'Thị trấn minh đức',
      district_id: '180900',
    },
    {
      id: '1109',
      name: 'Xã ngũ lão',
      district_id: '180900',
    },
    {
      id: '1110',
      name: 'Xã Thuỷ Sơn',
      district_id: '180900',
    },
    {
      id: '1111',
      name: 'Xã cao nhân',
      district_id: '180900',
    },
    {
      id: '1112',
      name: 'Xã phục lễ',
      district_id: '180900',
    },
    {
      id: '1113',
      name: 'Xã an sơn',
      district_id: '180900',
    },
    {
      id: '1114',
      name: 'Xẫ tân dương',
      district_id: '180900',
    },
    {
      id: '1115',
      name: 'Xã đông sơn',
      district_id: '180900',
    },
    {
      id: '1116',
      name: 'Xã lưu kiếm',
      district_id: '180900',
    },
    {
      id: '1117',
      name: 'Xã minh tân',
      district_id: '180900',
    },
    {
      id: '1118',
      name: 'Xã liên khê',
      district_id: '180900',
    },
    {
      id: '1119',
      name: 'Xã mỹ đồng',
      district_id: '180900',
    },
    {
      id: '1120',
      name: 'Xã Hoà Bình',
      district_id: '180900',
    },
    {
      id: '1121',
      name: 'Thị trấn núi đèo',
      district_id: '180900',
    },
    {
      id: '1122',
      name: 'Xã trung hà',
      district_id: '180900',
    },
    {
      id: '1123',
      name: 'Xã gia minh',
      district_id: '180900',
    },
    {
      id: '1124',
      name: 'Xã gia đức',
      district_id: '180900',
    },
    {
      id: '1125',
      name: 'Xã phù ninh',
      district_id: '180900',
    },
    {
      id: '1126',
      name: 'Xã an lư',
      district_id: '180900',
    },
    {
      id: '1127',
      name: 'Xã hợp thành',
      district_id: '180900',
    },
    {
      id: '1128',
      name: 'Xã lưu kỳ',
      district_id: '180900',
    },
    {
      id: '1129',
      name: 'Xã tam hưng',
      district_id: '180900',
    },
    {
      id: '1130',
      name: 'Xã phả lễ',
      district_id: '180900',
    },
    {
      id: '1131',
      name: 'Xã lại xuân',
      district_id: '180900',
    },
    {
      id: '1132',
      name: 'Xã lập lễ',
      district_id: '180900',
    },
    {
      id: '1133',
      name: 'Xã dương quan',
      district_id: '180900',
    },
    {
      id: '1134',
      name: 'Xã Quảng Thanh',
      district_id: '180900',
    },
    {
      id: '1135',
      name: 'Xã chính mỹ',
      district_id: '180900',
    },
    {
      id: '1136',
      name: 'Xã thủy triều',
      district_id: '180900',
    },
    {
      id: '1137',
      name: 'Xã hoàng động',
      district_id: '180900',
    },
    {
      id: '3930',
      name: 'Thị trấn cao phong',
      district_id: '351100',
    },
    {
      id: '3931',
      name: 'Xã nam phong',
      district_id: '351100',
    },
    {
      id: '3932',
      name: 'Xã bắc phong',
      district_id: '351100',
    },
    {
      id: '3933',
      name: 'Xã tây phong',
      district_id: '351100',
    },
    {
      id: '3934',
      name: 'Xã bình thanh',
      district_id: '351100',
    },
    {
      id: '3935',
      name: 'Xã thung nai',
      district_id: '351100',
    },
    {
      id: '3936',
      name: 'Xã thu phong',
      district_id: '351100',
    },
    {
      id: '3937',
      name: 'Xã xuân phong',
      district_id: '351100',
    },
    {
      id: '3938',
      name: 'Xã dũng phong',
      district_id: '351100',
    },
    {
      id: '3939',
      name: 'Xã yên thượng',
      district_id: '351100',
    },
    {
      id: '3940',
      name: 'Xã đông phong',
      district_id: '351100',
    },
    {
      id: '3941',
      name: 'Xã tân phong',
      district_id: '351100',
    },
    {
      id: '3942',
      name: 'Xã yên lập',
      district_id: '351100',
    },
    {
      id: '12738',
      name: 'Xã Hợp Phong',
      district_id: '351100',
    },
    {
      id: '3861',
      name: 'Thị trấn đà bắc',
      district_id: '350200',
    },
    {
      id: '3862',
      name: 'Xã mường chiềng',
      district_id: '350200',
    },
    {
      id: '3863',
      name: 'Xã tân pheo',
      district_id: '350200',
    },
    {
      id: '3864',
      name: 'Xã đồng ruộng',
      district_id: '350200',
    },
    {
      id: '3865',
      name: 'Xã giáp đắt',
      district_id: '350200',
    },
    {
      id: '3866',
      name: 'Xã đồng nghê',
      district_id: '350200',
    },
    {
      id: '3867',
      name: 'Xã suối nánh',
      district_id: '350200',
    },
    {
      id: '3868',
      name: 'Xã mường tuổng',
      district_id: '350200',
    },
    {
      id: '3869',
      name: 'Xã đồng chum',
      district_id: '350200',
    },
    {
      id: '3870',
      name: 'Xã đoàn kết',
      district_id: '350200',
    },
    {
      id: '3871',
      name: 'Xã tân minh',
      district_id: '350200',
    },
    {
      id: '3872',
      name: 'Xã trung thành',
      district_id: '350200',
    },
    {
      id: '3873',
      name: 'Xã yên hòa',
      district_id: '350200',
    },
    {
      id: '3874',
      name: 'Xã cao sơn',
      district_id: '350200',
    },
    {
      id: '3875',
      name: 'Xã tiền phong',
      district_id: '350200',
    },
    {
      id: '3876',
      name: 'Xã vầy nưa',
      district_id: '350200',
    },
    {
      id: '3877',
      name: 'Xã hào lý',
      district_id: '350200',
    },
    {
      id: '3878',
      name: 'Xã tu lý',
      district_id: '350200',
    },
    {
      id: '3879',
      name: 'Xã hiền lương',
      district_id: '350200',
    },
    {
      id: '3880',
      name: 'Xã toàn sơn',
      district_id: '350200',
    },
    {
      id: '3814',
      name: 'Phường thái bình',
      district_id: '350100',
    },
    {
      id: '3815',
      name: 'Xã hòa bình',
      district_id: '350100',
    },
    {
      id: '3816',
      name: 'Xã dân chủ',
      district_id: '350100',
    },
    {
      id: '3817',
      name: 'Xã thái thịnh',
      district_id: '350100',
    },
    {
      id: '3818',
      name: 'Phường thịnh lang',
      district_id: '350100',
    },
    {
      id: '3819',
      name: 'Phường tân thịnh',
      district_id: '350100',
    },
    {
      id: '3820',
      name: 'Phường Tân Hòa',
      district_id: '350100',
    },
    {
      id: '3821',
      name: 'Xã yên mông',
      district_id: '350100',
    },
    {
      id: '3823',
      name: 'Phường Thống Nhất',
      district_id: '350100',
    },
    {
      id: '3824',
      name: 'Xã trung minh',
      district_id: '350100',
    },
    {
      id: '3825',
      name: 'Phường hữu nghị',
      district_id: '350100',
    },
    {
      id: '3826',
      name: 'Phường phương lâm',
      district_id: '350100',
    },
    {
      id: '3827',
      name: 'Phường chăm mát',
      district_id: '350100',
    },
    {
      id: '3828',
      name: 'Phường Đồng Tiến',
      district_id: '350100',
    },
    {
      id: '3834',
      name: 'Xã Mông Hóa',
      district_id: '350100',
    },
    {
      id: '3835',
      name: 'Xã độc Lập',
      district_id: '350100',
    },
    {
      id: '11690',
      name: 'Xã sủ ngòi',
      district_id: '350100',
    },
    {
      id: '12637',
      name: 'Phường Quỳnh Lâm',
      district_id: '350100',
    },
    {
      id: '12638',
      name: 'Phường Trung Minh',
      district_id: '350100',
    },
    {
      id: '12818',
      name: 'Xã Hợp Thành',
      district_id: '350100',
    },
    {
      id: '3985',
      name: 'Thị trấn bo',
      district_id: '350800',
    },
    {
      id: '3987',
      name: 'Xã nật sơn',
      district_id: '350800',
    },
    {
      id: '3988',
      name: 'Xã kim bình',
      district_id: '350800',
    },
    {
      id: '3989',
      name: 'Xã kim bôi',
      district_id: '350800',
    },
    {
      id: '3990',
      name: 'Xã hợp kim',
      district_id: '350800',
    },
    {
      id: '3991',
      name: 'Xã cuối hạ',
      district_id: '350800',
    },
    {
      id: '3992',
      name: 'Xã nuông dăm',
      district_id: '350800',
    },
    {
      id: '3993',
      name: 'Xã tú sơn',
      district_id: '350800',
    },
    {
      id: '3994',
      name: 'Xã vĩnh đồng',
      district_id: '350800',
    },
    {
      id: '3995',
      name: 'Xã thượng bì',
      district_id: '350800',
    },
    {
      id: '3996',
      name: 'Xã trung bì',
      district_id: '350800',
    },
    {
      id: '3997',
      name: 'Xã lập chiệng',
      district_id: '350800',
    },
    {
      id: '3998',
      name: 'Xã đú sáng',
      district_id: '350800',
    },
    {
      id: '3999',
      name: 'Xã Bắc Sơn',
      district_id: '350800',
    },
    {
      id: '4000',
      name: 'Xã sơn thủy',
      district_id: '350800',
    },
    {
      id: '4001',
      name: 'Xã vĩnh tiến',
      district_id: '350800',
    },
    {
      id: '4002',
      name: 'Xã đông bắc',
      district_id: '350800',
    },
    {
      id: '4003',
      name: 'Xã thượng tiến',
      district_id: '350800',
    },
    {
      id: '4004',
      name: 'Xã hợp đồng',
      district_id: '350800',
    },
    {
      id: '4005',
      name: 'Xã hùng tiến',
      district_id: '350800',
    },
    {
      id: '4006',
      name: 'Xã bình sơn',
      district_id: '350800',
    },
    {
      id: '4007',
      name: 'Xã hạ bì',
      district_id: '350800',
    },
    {
      id: '4008',
      name: 'Xã kim sơn',
      district_id: '350800',
    },
    {
      id: '4009',
      name: 'Xã kim tiến',
      district_id: '350800',
    },
    {
      id: '4010',
      name: 'Xã kim truy',
      district_id: '350800',
    },
    {
      id: '4011',
      name: 'Xã nam thượng',
      district_id: '350800',
    },
    {
      id: '4012',
      name: 'Xã sào báy',
      district_id: '350800',
    },
    {
      id: '4013',
      name: 'Xã mi hòa',
      district_id: '350800',
    },
    {
      id: '12761',
      name: 'Xã Hợp Tiến',
      district_id: '350800',
    },
    {
      id: '3943',
      name: 'Xã phú lượng',
      district_id: '350500',
    },
    {
      id: '3944',
      name: 'Xã chí đạo',
      district_id: '350500',
    },
    {
      id: '3945',
      name: 'Xã văn sơn',
      district_id: '350500',
    },
    {
      id: '3946',
      name: 'Xã tuân đạo',
      district_id: '350500',
    },
    {
      id: '3947',
      name: 'Xã mỹ thành',
      district_id: '350500',
    },
    {
      id: '3948',
      name: 'Xã ngọc sơn',
      district_id: '350500',
    },
    {
      id: '3949',
      name: 'Xã tân mỹ',
      district_id: '350500',
    },
    {
      id: '3950',
      name: 'Thị trấn vụ bản',
      district_id: '350500',
    },
    {
      id: '3951',
      name: 'Xã phúc tuy',
      district_id: '350500',
    },
    {
      id: '3952',
      name: 'Xã chí thiện',
      district_id: '350500',
    },
    {
      id: '3953',
      name: 'Xã thượng cốc',
      district_id: '350500',
    },
    {
      id: '3954',
      name: 'Xã quý hòa',
      district_id: '350500',
    },
    {
      id: '3955',
      name: 'Xã miền đồi',
      district_id: '350500',
    },
    {
      id: '3956',
      name: 'Xã tự do',
      district_id: '350500',
    },
    {
      id: '3957',
      name: 'Xã yên nghiệp',
      district_id: '350500',
    },
    {
      id: '3958',
      name: 'Xã nhân nghĩa',
      district_id: '350500',
    },
    {
      id: '3959',
      name: 'Xã tân lập',
      district_id: '350500',
    },
    {
      id: '3960',
      name: 'Xã văn nghĩa',
      district_id: '350500',
    },
    {
      id: '3961',
      name: 'Xã ngọc lâu',
      district_id: '350500',
    },
    {
      id: '3962',
      name: 'Xã liên vũ',
      district_id: '350500',
    },
    {
      id: '3963',
      name: 'Xã bình hẻm',
      district_id: '350500',
    },
    {
      id: '3964',
      name: 'Xã xuất hóa',
      district_id: '350500',
    },
    {
      id: '3967',
      name: 'Xã vũ lâm',
      district_id: '350500',
    },
    {
      id: '3968',
      name: 'Xã bình cảng',
      district_id: '350500',
    },
    {
      id: '3969',
      name: 'Xã bình chân',
      district_id: '350500',
    },
    {
      id: '3970',
      name: 'Xã định cư',
      district_id: '350500',
    },
    {
      id: '3971',
      name: 'Xã hương nhượng',
      district_id: '350500',
    },
    {
      id: '11685',
      name: 'Xã ân nghĩa',
      district_id: '350500',
    },
    {
      id: '11686',
      name: 'Xã yên phú',
      district_id: '350500',
    },
    {
      id: '12821',
      name: 'Xã Vũ Bình',
      district_id: '350500',
    },
    {
      id: '4014',
      name: 'Xã đồng tâm',
      district_id: '350900',
    },
    {
      id: '4015',
      name: 'Thị trấn thanh hà',
      district_id: '350900',
    },
    {
      id: '4016',
      name: 'Xã phú thành',
      district_id: '350900',
    },
    {
      id: '4017',
      name: 'Xã hưng thi',
      district_id: '350900',
    },
    {
      id: '4018',
      name: 'Xã an bình',
      district_id: '350900',
    },
    {
      id: '4019',
      name: 'Xã an lạc',
      district_id: '350900',
    },
    {
      id: '4020',
      name: 'Xã liên hòa',
      district_id: '350900',
    },
    {
      id: '4021',
      name: 'Xã thanh nông',
      district_id: '350900',
    },
    {
      id: '4022',
      name: 'Xã cố nghĩa',
      district_id: '350900',
    },
    {
      id: '4023',
      name: 'Xã phú lão',
      district_id: '350900',
    },
    {
      id: '4024',
      name: 'Xã lạc long',
      district_id: '350900',
    },
    {
      id: '4026',
      name: 'Xã yên bồng',
      district_id: '350900',
    },
    {
      id: '4027',
      name: 'Xã đồng môn',
      district_id: '350900',
    },
    {
      id: '4029',
      name: 'Thị trấn chi lê',
      district_id: '350900',
    },
    {
      id: '11689',
      name: 'Xã khoan dụ',
      district_id: '350900',
    },
    {
      id: '12682',
      name: 'Xã Phú Nghĩa',
      district_id: '350900',
    },
    {
      id: '12785',
      name: 'Thị Trấn Ba Hàng Đồi',
      district_id: '350900',
    },
    {
      id: '12786',
      name: 'Xã Phú Nghĩa',
      district_id: '350900',
    },
    {
      id: '12787',
      name: 'Xã Thống Nhất',
      district_id: '350900',
    },
    {
      id: '3841',
      name: 'Thị trấn lương sơn',
      district_id: '350700',
    },
    {
      id: '3842',
      name: 'Xã lâm sơn',
      district_id: '350700',
    },
    {
      id: '3843',
      name: 'Xã hòa sơn',
      district_id: '350700',
    },
    {
      id: '3844',
      name: 'Xã tân vinh',
      district_id: '350700',
    },
    {
      id: '3845',
      name: 'Xã trường sơn',
      district_id: '350700',
    },
    {
      id: '3846',
      name: 'Xã cư yên',
      district_id: '350700',
    },
    {
      id: '3847',
      name: 'Xã nhuận trạch',
      district_id: '350700',
    },
    {
      id: '3848',
      name: 'Xã liên sơn',
      district_id: '350700',
    },
    {
      id: '3849',
      name: 'Xã tiến sơn',
      district_id: '350700',
    },
    {
      id: '3850',
      name: 'Xã trung sơn',
      district_id: '350700',
    },
    {
      id: '3851',
      name: 'Xã thành lập',
      district_id: '350700',
    },
    {
      id: '3852',
      name: 'Xã tân thành',
      district_id: '350700',
    },
    {
      id: '3853',
      name: 'Xã cao dương',
      district_id: '350700',
    },
    {
      id: '3854',
      name: 'Xã hợp châu',
      district_id: '350700',
    },
    {
      id: '3855',
      name: 'Xã cao thắng',
      district_id: '350700',
    },
    {
      id: '3856',
      name: 'Xã long sơn',
      district_id: '350700',
    },
    {
      id: '3857',
      name: 'Xã thanh lương',
      district_id: '350700',
    },
    {
      id: '3858',
      name: 'Xã hợp thanh',
      district_id: '350700',
    },
    {
      id: '3859',
      name: 'Xã cao răm',
      district_id: '350700',
    },
    {
      id: '3860',
      name: 'Xã hợp hòa',
      district_id: '350700',
    },
    {
      id: '3905',
      name: 'Xã Pù Bin',
      district_id: '350300',
    },
    {
      id: '3906',
      name: 'Xã hang kia',
      district_id: '350300',
    },
    {
      id: '3907',
      name: 'Xã tân dân',
      district_id: '350300',
    },
    {
      id: '3909',
      name: 'Thị trấn mai châu',
      district_id: '350300',
    },
    {
      id: '3911',
      name: 'Xã cun pheo',
      district_id: '350300',
    },
    {
      id: '3912',
      name: 'Xã bao la',
      district_id: '350300',
    },
    {
      id: '3913',
      name: 'Xã piềng vế',
      district_id: '350300',
    },
    {
      id: '3914',
      name: 'Xã vạn mai',
      district_id: '350300',
    },
    {
      id: '3915',
      name: 'Xã mai hạ',
      district_id: '350300',
    },
    {
      id: '3916',
      name: 'Xã chiềng châu',
      district_id: '350300',
    },
    {
      id: '3917',
      name: 'Xã nà mèo',
      district_id: '350300',
    },
    {
      id: '3919',
      name: 'Xã mai hịch',
      district_id: '350300',
    },
    {
      id: '3921',
      name: 'Xã tân sơn',
      district_id: '350300',
    },
    {
      id: '3922',
      name: 'Xã tân mai',
      district_id: '350300',
    },
    {
      id: '3923',
      name: 'Xã ba khan',
      district_id: '350300',
    },
    {
      id: '3924',
      name: 'Xã thung khe',
      district_id: '350300',
    },
    {
      id: '3925',
      name: 'Xã pà cò',
      district_id: '350300',
    },
    {
      id: '3926',
      name: 'Xã tòng đậu',
      district_id: '350300',
    },
    {
      id: '3927',
      name: 'Xã đồng bảng',
      district_id: '350300',
    },
    {
      id: '3928',
      name: 'Xã phúc sạn',
      district_id: '350300',
    },
    {
      id: '11681',
      name: 'Xã nà phòn',
      district_id: '350300',
    },
    {
      id: '11682',
      name: 'Xã nong luông',
      district_id: '350300',
    },
    {
      id: '11683',
      name: 'Xã pù pin',
      district_id: '350300',
    },
    {
      id: '11684',
      name: 'Xã săm khóe',
      district_id: '350300',
    },
    {
      id: '3972',
      name: 'Xã đoàn kết',
      district_id: '351000',
    },
    {
      id: '3973',
      name: 'Xã yên lạc',
      district_id: '351000',
    },
    {
      id: '3974',
      name: 'Xã đa phúc',
      district_id: '351000',
    },
    {
      id: '3975',
      name: 'Xã bảo hiệu',
      district_id: '351000',
    },
    {
      id: '3976',
      name: 'Xã hữu lợi',
      district_id: '351000',
    },
    {
      id: '3977',
      name: 'Xã lạc sỹ',
      district_id: '351000',
    },
    {
      id: '3978',
      name: 'Xã lạc hưng',
      district_id: '351000',
    },
    {
      id: '3980',
      name: 'Xã lạc thịnh',
      district_id: '351000',
    },
    {
      id: '3981',
      name: 'Xã phú lai',
      district_id: '351000',
    },
    {
      id: '3982',
      name: 'Thị trấn hàng trạm',
      district_id: '351000',
    },
    {
      id: '3983',
      name: 'Xã ngọc lương',
      district_id: '351000',
    },
    {
      id: '3984',
      name: 'Xã yên trị',
      district_id: '351000',
    },
    {
      id: '11687',
      name: 'Xã lạc lương',
      district_id: '351000',
    },
    {
      id: '3830',
      name: 'Xã dân hạ',
      district_id: '350600',
    },
    {
      id: '3831',
      name: 'Xã hợp thành',
      district_id: '350600',
    },
    {
      id: '3832',
      name: 'Xã hợp thịnh',
      district_id: '350600',
    },
    {
      id: '3833',
      name: 'Xã phúc tiến',
      district_id: '350600',
    },
    {
      id: '3836',
      name: 'Xã phú minh',
      district_id: '350600',
    },
    {
      id: '3837',
      name: 'Xã dân hòa',
      district_id: '350600',
    },
    {
      id: '3838',
      name: 'Xã yên quang',
      district_id: '350600',
    },
    {
      id: '3839',
      name: 'Thị trấn kỳ sơn',
      district_id: '350600',
    },
    {
      id: '658',
      name: 'Thị trấn ân thi',
      district_id: '160300',
    },
    {
      id: '659',
      name: 'Xã phù ủng',
      district_id: '160300',
    },
    {
      id: '662',
      name: 'Xã đào dương',
      district_id: '160300',
    },
    {
      id: '663',
      name: 'Xã tân phúc',
      district_id: '160300',
    },
    {
      id: '664',
      name: 'Xã văn nhuệ',
      district_id: '160300',
    },
    {
      id: '665',
      name: 'Xã hoàng hoa thám',
      district_id: '160300',
    },
    {
      id: '666',
      name: 'Xã quang vinh',
      district_id: '160300',
    },
    {
      id: '667',
      name: 'Xã vân du',
      district_id: '160300',
    },
    {
      id: '668',
      name: 'Xã xuân trúc',
      district_id: '160300',
    },
    {
      id: '671',
      name: 'Xã cẩm ninh',
      district_id: '160300',
    },
    {
      id: '677',
      name: 'Xã hồng quang',
      district_id: '160300',
    },
    {
      id: '11820',
      name: 'Xã bắc sơn',
      district_id: '160300',
    },
    {
      id: '11821',
      name: 'Xã bãi sậy',
      district_id: '160300',
    },
    {
      id: '11822',
      name: 'Xã đa lộc',
      district_id: '160300',
    },
    {
      id: '11823',
      name: 'Xã đặng lễ',
      district_id: '160300',
    },
    {
      id: '11824',
      name: 'Xã hạ lễ',
      district_id: '160300',
    },
    {
      id: '11825',
      name: 'Xã hồ tùng mậu',
      district_id: '160300',
    },
    {
      id: '11826',
      name: 'Xã hồng vân',
      district_id: '160300',
    },
    {
      id: '11827',
      name: 'Xã nguyễn trãi',
      district_id: '160300',
    },
    {
      id: '11828',
      name: 'Xã quảng lãng',
      district_id: '160300',
    },
    {
      id: '11829',
      name: 'Xã tiền phong',
      district_id: '160300',
    },
    {
      id: '611',
      name: 'Phường lam sơn',
      district_id: '160100',
    },
    {
      id: '612',
      name: 'Phường lê lợi',
      district_id: '160100',
    },
    {
      id: '613',
      name: 'Phường quang trung',
      district_id: '160100',
    },
    {
      id: '614',
      name: 'Phường hiến nam',
      district_id: '160100',
    },
    {
      id: '615',
      name: 'Phường minh khai',
      district_id: '160100',
    },
    {
      id: '616',
      name: 'Phường hồng châu',
      district_id: '160100',
    },
    {
      id: '617',
      name: 'Phường an tảo',
      district_id: '160100',
    },
    {
      id: '618',
      name: 'Xã bảo khê',
      district_id: '160100',
    },
    {
      id: '619',
      name: 'Xã trung nghĩa',
      district_id: '160100',
    },
    {
      id: '620',
      name: 'Xã liên phương',
      district_id: '160100',
    },
    {
      id: '621',
      name: 'Xã hồng nam',
      district_id: '160100',
    },
    {
      id: '622',
      name: 'Xã quảng châu',
      district_id: '160100',
    },
    {
      id: '623',
      name: 'Xã hùng cường',
      district_id: '160100',
    },
    {
      id: '624',
      name: 'Xã phú cường',
      district_id: '160100',
    },
    {
      id: '12545',
      name: 'Xã hoàng hanh',
      district_id: '160100',
    },
    {
      id: '12673',
      name: 'Xã Phương Chiểu',
      district_id: '160100',
    },
    {
      id: '699',
      name: 'Xã đông tảo',
      district_id: '160400',
    },
    {
      id: '700',
      name: 'Xã bình minh',
      district_id: '160400',
    },
    {
      id: '701',
      name: 'Xã dạ trạch',
      district_id: '160400',
    },
    {
      id: '702',
      name: 'Xã hàm tử',
      district_id: '160400',
    },
    {
      id: '703',
      name: 'Xã ông đình',
      district_id: '160400',
    },
    {
      id: '704',
      name: 'Xã tân dân',
      district_id: '160400',
    },
    {
      id: '705',
      name: 'Xã tứ dân',
      district_id: '160400',
    },
    {
      id: '706',
      name: 'Xã an vĩ',
      district_id: '160400',
    },
    {
      id: '707',
      name: 'Xã đông kết',
      district_id: '160400',
    },
    {
      id: '708',
      name: 'Xã bình kiều',
      district_id: '160400',
    },
    {
      id: '709',
      name: 'Xã dân tiến',
      district_id: '160400',
    },
    {
      id: '710',
      name: 'Xã đồng tiến',
      district_id: '160400',
    },
    {
      id: '711',
      name: 'Xã hồng tiến',
      district_id: '160400',
    },
    {
      id: '712',
      name: 'Xã tân châu',
      district_id: '160400',
    },
    {
      id: '713',
      name: 'Xã liên khê',
      district_id: '160400',
    },
    {
      id: '714',
      name: 'Xã phùng hưng',
      district_id: '160400',
    },
    {
      id: '715',
      name: 'Xã việt hòa',
      district_id: '160400',
    },
    {
      id: '716',
      name: 'Xã đông ninh',
      district_id: '160400',
    },
    {
      id: '717',
      name: 'Xã đại tập',
      district_id: '160400',
    },
    {
      id: '718',
      name: 'Xã chí tân',
      district_id: '160400',
    },
    {
      id: '719',
      name: 'Xã đại hưng',
      district_id: '160400',
    },
    {
      id: '720',
      name: 'Xã thuần hưng',
      district_id: '160400',
    },
    {
      id: '721',
      name: 'Xã nhuế dương',
      district_id: '160400',
    },
    {
      id: '722',
      name: 'Xã thành công',
      district_id: '160400',
    },
    {
      id: '723',
      name: 'Thị trấn khoái châu',
      district_id: '160400',
    },
    {
      id: '743',
      name: 'Phường Bần Yên Nhân',
      district_id: '160800',
    },
    {
      id: '744',
      name: 'Xã phan đình phùng',
      district_id: '160800',
    },
    {
      id: '745',
      name: 'Xã nhân hòa',
      district_id: '160800',
    },
    {
      id: '746',
      name: 'Phường Dị Sử',
      district_id: '160800',
    },
    {
      id: '747',
      name: 'Xã hưng long',
      district_id: '160800',
    },
    {
      id: '748',
      name: 'Xã phùng chí kiên',
      district_id: '160800',
    },
    {
      id: '749',
      name: 'Xã cẩm xá',
      district_id: '160800',
    },
    {
      id: '750',
      name: 'Xã dương quang',
      district_id: '160800',
    },
    {
      id: '751',
      name: 'Xã bạch sam',
      district_id: '160800',
    },
    {
      id: '752',
      name: 'Xã xuân dục',
      district_id: '160800',
    },
    {
      id: '753',
      name: 'Xã ngọc lâm',
      district_id: '160800',
    },
    {
      id: '754',
      name: 'Xã minh đức',
      district_id: '160800',
    },
    {
      id: '755',
      name: 'Xã hòa phong',
      district_id: '160800',
    },
    {
      id: '768',
      name: 'Xã liên nghĩa',
      district_id: '161000',
    },
    {
      id: '769',
      name: 'Xã mễ sở',
      district_id: '161000',
    },
    {
      id: '770',
      name: 'Xã thắng lợi',
      district_id: '161000',
    },
    {
      id: '771',
      name: 'Thị trấn văn giang',
      district_id: '161000',
    },
    {
      id: '772',
      name: 'Xã xuân quan',
      district_id: '161000',
    },
    {
      id: '773',
      name: 'Xã phụng công',
      district_id: '161000',
    },
    {
      id: '774',
      name: 'Xã cửu cao',
      district_id: '161000',
    },
    {
      id: '775',
      name: 'Xã long hưng',
      district_id: '161000',
    },
    {
      id: '776',
      name: 'Xã nghĩa trụ',
      district_id: '161000',
    },
    {
      id: '777',
      name: 'Xã vĩnh khúc',
      district_id: '161000',
    },
    {
      id: '778',
      name: 'Xã tân tiến',
      district_id: '161000',
    },
    {
      id: '756',
      name: 'Thị trấn như quỳnh',
      district_id: '160900',
    },
    {
      id: '757',
      name: 'Xã lạc đạo',
      district_id: '160900',
    },
    {
      id: '758',
      name: 'Xã chỉ đạo',
      district_id: '160900',
    },
    {
      id: '759',
      name: 'Xã đại đồng',
      district_id: '160900',
    },
    {
      id: '760',
      name: 'Xã việt hưng',
      district_id: '160900',
    },
    {
      id: '761',
      name: 'Xã tân quang',
      district_id: '160900',
    },
    {
      id: '762',
      name: 'Xã đình dù',
      district_id: '160900',
    },
    {
      id: '763',
      name: 'Xã minh hải',
      district_id: '160900',
    },
    {
      id: '764',
      name: 'Xã lương tài',
      district_id: '160900',
    },
    {
      id: '765',
      name: 'Xã trưng trắc',
      district_id: '160900',
    },
    {
      id: '766',
      name: 'Xã lạc hồng',
      district_id: '160900',
    },
    {
      id: '724',
      name: 'Thị trấn yên mỹ',
      district_id: '160500',
    },
    {
      id: '725',
      name: 'Xã giai phạm',
      district_id: '160500',
    },
    {
      id: '726',
      name: 'Xã ngọc long',
      district_id: '160500',
    },
    {
      id: '729',
      name: 'Xã tân lập',
      district_id: '160500',
    },
    {
      id: '730',
      name: 'Xã trung hòa',
      district_id: '160500',
    },
    {
      id: '731',
      name: 'Xã thanh long',
      district_id: '160500',
    },
    {
      id: '732',
      name: 'Xã trung hưng',
      district_id: '160500',
    },
    {
      id: '733',
      name: 'Xã tân việt',
      district_id: '160500',
    },
    {
      id: '734',
      name: 'Xã lý thường kiệt',
      district_id: '160500',
    },
    {
      id: '736',
      name: 'Xã đồng than',
      district_id: '160500',
    },
    {
      id: '737',
      name: 'Xã minh châu',
      district_id: '160500',
    },
    {
      id: '738',
      name: 'Xã việt cường',
      district_id: '160500',
    },
    {
      id: '739',
      name: 'Xã yên phú',
      district_id: '160500',
    },
    {
      id: '740',
      name: 'Xã yên hòa',
      district_id: '160500',
    },
    {
      id: '741',
      name: 'Xã hoàn long',
      district_id: '160500',
    },
    {
      id: '11830',
      name: 'Xã liêu xá',
      district_id: '160500',
    },
    {
      id: '11831',
      name: 'Xã nghĩa hiệp',
      district_id: '160500',
    },
    {
      id: '679',
      name: 'Thị trấn lương bằng',
      district_id: '160200',
    },
    {
      id: '680',
      name: 'Xã nghĩa dân',
      district_id: '160200',
    },
    {
      id: '681',
      name: 'Xã toàn thắng',
      district_id: '160200',
    },
    {
      id: '682',
      name: 'Xã vĩnh xá',
      district_id: '160200',
    },
    {
      id: '683',
      name: 'Xã phạm ngũ lão',
      district_id: '160200',
    },
    {
      id: '684',
      name: 'Xã nhân la',
      district_id: '160200',
    },
    {
      id: '685',
      name: 'Xã vũ xá',
      district_id: '160200',
    },
    {
      id: '686',
      name: 'Xã chính nghĩa',
      district_id: '160200',
    },
    {
      id: '687',
      name: 'Xã song mai',
      district_id: '160200',
    },
    {
      id: '688',
      name: 'Xã đồng thanh',
      district_id: '160200',
    },
    {
      id: '689',
      name: 'Xã thọ vinh',
      district_id: '160200',
    },
    {
      id: '690',
      name: 'Xã phú thịnh',
      district_id: '160200',
    },
    {
      id: '691',
      name: 'Xã mai động',
      district_id: '160200',
    },
    {
      id: '692',
      name: 'Xã đức hợp',
      district_id: '160200',
    },
    {
      id: '693',
      name: 'Xã hùng an',
      district_id: '160200',
    },
    {
      id: '694',
      name: 'Xã ngọc thanh',
      district_id: '160200',
    },
    {
      id: '695',
      name: 'Xã hiệp cường',
      district_id: '160200',
    },
    {
      id: '644',
      name: 'Thị trấn trần cao',
      district_id: '160700',
    },
    {
      id: '645',
      name: 'Xã minh tân',
      district_id: '160700',
    },
    {
      id: '646',
      name: 'Xã phan sào nam',
      district_id: '160700',
    },
    {
      id: '647',
      name: 'Xã quang hưng',
      district_id: '160700',
    },
    {
      id: '648',
      name: 'Xã minh hoàng',
      district_id: '160700',
    },
    {
      id: '649',
      name: 'Xã đoàn đào',
      district_id: '160700',
    },
    {
      id: '650',
      name: 'Xã tống phan',
      district_id: '160700',
    },
    {
      id: '651',
      name: 'Xã đình cao',
      district_id: '160700',
    },
    {
      id: '652',
      name: 'Xã nhật quang',
      district_id: '160700',
    },
    {
      id: '653',
      name: 'Xã tiên tiến',
      district_id: '160700',
    },
    {
      id: '654',
      name: 'Xã tam đa',
      district_id: '160700',
    },
    {
      id: '655',
      name: 'Xã minh tiến',
      district_id: '160700',
    },
    {
      id: '656',
      name: 'Xã Nguyên Hoà',
      district_id: '160700',
    },
    {
      id: '657',
      name: 'Xã tống trân',
      district_id: '160700',
    },
    {
      id: '625',
      name: 'Thị trấn vương',
      district_id: '160600',
    },
    {
      id: '626',
      name: 'Xã lệ xá',
      district_id: '160600',
    },
    {
      id: '627',
      name: 'Xã hưng đạo',
      district_id: '160600',
    },
    {
      id: '628',
      name: 'Xã ngô quyền',
      district_id: '160600',
    },
    {
      id: '629',
      name: 'Xã nhật tân',
      district_id: '160600',
    },
    {
      id: '630',
      name: 'Xã dị chế',
      district_id: '160600',
    },
    {
      id: '631',
      name: 'Xã trung dũng',
      district_id: '160600',
    },
    {
      id: '632',
      name: 'Xã đức thắng',
      district_id: '160600',
    },
    {
      id: '633',
      name: 'Xã an viên',
      district_id: '160600',
    },
    {
      id: '634',
      name: 'Xã thủ sỹ',
      district_id: '160600',
    },
    {
      id: '635',
      name: 'Xã thiện phiến',
      district_id: '160600',
    },
    {
      id: '640',
      name: 'Xã hải triều',
      district_id: '160600',
    },
    {
      id: '641',
      name: 'Xã thụy lôi',
      district_id: '160600',
    },
    {
      id: '642',
      name: 'Xã cương chính',
      district_id: '160600',
    },
    {
      id: '643',
      name: 'Xã minh phượng',
      district_id: '160600',
    },
    {
      id: '11032',
      name: 'Xã tây yên',
      district_id: '920900',
    },
    {
      id: '11033',
      name: 'Xã hưng yên',
      district_id: '920900',
    },
    {
      id: '11035',
      name: 'Xã nam yên',
      district_id: '920900',
    },
    {
      id: '11036',
      name: 'Xã đông thái',
      district_id: '920900',
    },
    {
      id: '11038',
      name: 'Xã nam thái',
      district_id: '920900',
    },
    {
      id: '11039',
      name: 'Xã nam thái a',
      district_id: '920900',
    },
    {
      id: '11041',
      name: 'Xã tây yên a',
      district_id: '920900',
    },
    {
      id: '12428',
      name: 'Thị Trấn Thứ Ba',
      district_id: '920900',
    },
    {
      id: '12429',
      name: 'Xã đông yên',
      district_id: '920900',
    },
    {
      id: '11043',
      name: 'Xã đông thạnh',
      district_id: '921000',
    },
    {
      id: '11044',
      name: 'Xã tân thạnh',
      district_id: '921000',
    },
    {
      id: '11045',
      name: 'Xã thuận hòa',
      district_id: '921000',
    },
    {
      id: '11046',
      name: 'Xã vân khánh đông',
      district_id: '921000',
    },
    {
      id: '11047',
      name: 'Xã đông hưng',
      district_id: '921000',
    },
    {
      id: '11048',
      name: 'Xã đông hưng a',
      district_id: '921000',
    },
    {
      id: '11049',
      name: 'Xã đông hòa',
      district_id: '921000',
    },
    {
      id: '11050',
      name: 'Xã vân khánh tây',
      district_id: '921000',
    },
    {
      id: '11051',
      name: 'Xã vân khánh',
      district_id: '921000',
    },
    {
      id: '11052',
      name: 'Xã đông hưng b',
      district_id: '921000',
    },
    {
      id: '12423',
      name: 'Thị trấn thứ mười một',
      district_id: '921000',
    },
    {
      id: '11054',
      name: 'Xã mong thọ a',
      district_id: '920600',
    },
    {
      id: '11055',
      name: 'Xã thạnh lộc',
      district_id: '920600',
    },
    {
      id: '11056',
      name: 'Xã mong thọ b',
      district_id: '920600',
    },
    {
      id: '11058',
      name: 'Xã bình an',
      district_id: '920600',
    },
    {
      id: '11059',
      name: 'Xã minh hòa',
      district_id: '920600',
    },
    {
      id: '11060',
      name: 'Xã vĩnh hòa hiệp',
      district_id: '920600',
    },
    {
      id: '11062',
      name: 'Xã giục tượng',
      district_id: '920600',
    },
    {
      id: '11063',
      name: 'Xã vĩnh hòa phú',
      district_id: '920600',
    },
    {
      id: '11064',
      name: 'Xã mong thọ',
      district_id: '920600',
    },
    {
      id: '12418',
      name: 'Thị trấn minh lương',
      district_id: '920600',
    },
    {
      id: '11085',
      name: 'Xã Hòa Thuận',
      district_id: '920700',
    },
    {
      id: '11086',
      name: 'Xã ngọc chúc',
      district_id: '920700',
    },
    {
      id: '11087',
      name: 'Xã ngọc thuận',
      district_id: '920700',
    },
    {
      id: '11088',
      name: 'Xã ngọc thành',
      district_id: '920700',
    },
    {
      id: '11089',
      name: 'Xã hòa hưng',
      district_id: '920700',
    },
    {
      id: '11090',
      name: 'Xã hòa an',
      district_id: '920700',
    },
    {
      id: '11091',
      name: 'Xã vĩnh thạnh',
      district_id: '920700',
    },
    {
      id: '11092',
      name: 'Xã vĩnh phú',
      district_id: '920700',
    },
    {
      id: '11093',
      name: 'Xã bàn thạch',
      district_id: '920700',
    },
    {
      id: '11095',
      name: 'Xã long thạnh',
      district_id: '920700',
    },
    {
      id: '11096',
      name: 'Xã hòa lợi',
      district_id: '920700',
    },
    {
      id: '11097',
      name: 'Xã thạnh hòa',
      district_id: '920700',
    },
    {
      id: '11098',
      name: 'Xã thạnh lộc',
      district_id: '920700',
    },
    {
      id: '11099',
      name: 'Xã thạnh hưng',
      district_id: '920700',
    },
    {
      id: '11100',
      name: 'Xã thạnh phước',
      district_id: '920700',
    },
    {
      id: '11101',
      name: 'Xã ngọc hòa',
      district_id: '920700',
    },
    {
      id: '11102',
      name: 'Xã thanh bình',
      district_id: '920700',
    },
    {
      id: '11103',
      name: 'Xã bàn tân định',
      district_id: '920700',
    },
    {
      id: '12425',
      name: 'Thị trấn giồng riềng',
      district_id: '920700',
    },
    {
      id: '11075',
      name: 'Xã định an',
      district_id: '920800',
    },
    {
      id: '11076',
      name: 'Xã thủy liễu',
      district_id: '920800',
    },
    {
      id: '11077',
      name: 'Xã vĩnh hòa hưng bắc',
      district_id: '920800',
    },
    {
      id: '11078',
      name: 'Xã vĩnh hòa hưng nam',
      district_id: '920800',
    },
    {
      id: '11079',
      name: 'Xã vĩnh phước a',
      district_id: '920800',
    },
    {
      id: '11080',
      name: 'Xã vĩnh phước b',
      district_id: '920800',
    },
    {
      id: '11081',
      name: 'Xã định hòa',
      district_id: '920800',
    },
    {
      id: '11082',
      name: 'Xã vĩnh tuy',
      district_id: '920800',
    },
    {
      id: '11083',
      name: 'Xã vĩnh thắng',
      district_id: '920800',
    },
    {
      id: '11084',
      name: 'Xã thới quản',
      district_id: '920800',
    },
    {
      id: '12419',
      name: 'Thị trấn gò quao',
      district_id: '920800',
    },
    {
      id: '11015',
      name: 'Phường tô châu',
      district_id: '920200',
    },
    {
      id: '11016',
      name: 'Phường pháo đài',
      district_id: '920200',
    },
    {
      id: '11017',
      name: 'Phường bình san',
      district_id: '920200',
    },
    {
      id: '11018',
      name: 'Phường đông hồ',
      district_id: '920200',
    },
    {
      id: '11019',
      name: 'Xã mỹ đức',
      district_id: '920200',
    },
    {
      id: '11021',
      name: 'Xã thuận yên',
      district_id: '920200',
    },
    {
      id: '12420',
      name: 'Xã tiên hải',
      district_id: '920200',
    },
    {
      id: '10984',
      name: 'Xã bình giang',
      district_id: '920400',
    },
    {
      id: '10985',
      name: 'Xã lình huỳnh',
      district_id: '920400',
    },
    {
      id: '10986',
      name: 'Xã mỹ hiệp sơn',
      district_id: '920400',
    },
    {
      id: '10987',
      name: 'Xã mỹ phước',
      district_id: '920400',
    },
    {
      id: '10988',
      name: 'Xã mỹ thái',
      district_id: '920400',
    },
    {
      id: '10989',
      name: 'Xã mỹ thuận',
      district_id: '920400',
    },
    {
      id: '10990',
      name: 'Xã nam thái sơn',
      district_id: '920400',
    },
    {
      id: '10991',
      name: 'Xã sơn kiên',
      district_id: '920400',
    },
    {
      id: '10992',
      name: 'Xã thổ sơn',
      district_id: '920400',
    },
    {
      id: '10993',
      name: 'Xã sơn bình',
      district_id: '920400',
    },
    {
      id: '10995',
      name: 'Xã bình sơn',
      district_id: '920400',
    },
    {
      id: '12415',
      name: 'Thị trấn hòn đất',
      district_id: '920400',
    },
    {
      id: '12416',
      name: 'Thị trấn sóc sơn',
      district_id: '920400',
    },
    {
      id: '12417',
      name: 'Xã mỹ lâm',
      district_id: '920400',
    },
    {
      id: '10999',
      name: 'Xã bình trị',
      district_id: '920300',
    },
    {
      id: '11000',
      name: 'Xã dương hòa',
      district_id: '920300',
    },
    {
      id: '11001',
      name: 'Xã hòa điền',
      district_id: '920300',
    },
    {
      id: '11002',
      name: 'Xã kiên bình',
      district_id: '920300',
    },
    {
      id: '11012',
      name: 'Xã hòn nghệ',
      district_id: '920300',
    },
    {
      id: '11013',
      name: 'Xã sơn hải',
      district_id: '920300',
    },
    {
      id: '11014',
      name: 'Xã bình an',
      district_id: '920300',
    },
    {
      id: '12413',
      name: 'Thị trấn kiên lương',
      district_id: '920300',
    },
    {
      id: '11022',
      name: 'Xã thổ châu',
      district_id: '921200',
    },
    {
      id: '11025',
      name: 'Xã dương tơ',
      district_id: '921200',
    },
    {
      id: '11026',
      name: 'Xã cửa cạn',
      district_id: '921200',
    },
    {
      id: '11027',
      name: 'Xã gành dầu',
      district_id: '921200',
    },
    {
      id: '11028',
      name: 'Xã cửa dương',
      district_id: '921200',
    },
    {
      id: '11029',
      name: 'Xã bãi thơm',
      district_id: '921200',
    },
    {
      id: '11031',
      name: 'Xã hàm ninh',
      district_id: '921200',
    },
    {
      id: '12426',
      name: 'Phường An Thới',
      district_id: '921200',
    },
    {
      id: '12427',
      name: 'Phường Dương Đông',
      district_id: '921200',
    },
    {
      id: '10959',
      name: 'Phuong vĩnh hiệp',
      district_id: '920100',
    },
    {
      id: '10960',
      name: 'Xã phi thông',
      district_id: '920100',
    },
    {
      id: '10961',
      name: 'Phường vĩnh bảo',
      district_id: '920100',
    },
    {
      id: '10962',
      name: 'Phường vĩnh thanh',
      district_id: '920100',
    },
    {
      id: '10963',
      name: 'Phường vĩnh thanh vân',
      district_id: '920100',
    },
    {
      id: '10964',
      name: 'Phường an hòa',
      district_id: '920100',
    },
    {
      id: '10965',
      name: 'Phường vĩnh quang',
      district_id: '920100',
    },
    {
      id: '10966',
      name: 'Phường Rạch Sỏi',
      district_id: '920100',
    },
    {
      id: '10968',
      name: 'Phường vĩnh lợi',
      district_id: '920100',
    },
    {
      id: '10969',
      name: 'Phường vĩnh thông',
      district_id: '920100',
    },
    {
      id: '10970',
      name: 'Phường vĩnh lạc',
      district_id: '920100',
    },
    {
      id: '12414',
      name: 'Phường an bình',
      district_id: '920100',
    },
    {
      id: '10973',
      name: 'Xã tân hiệp a',
      district_id: '920500',
    },
    {
      id: '10974',
      name: 'Xã tân hiệp b',
      district_id: '920500',
    },
    {
      id: '10975',
      name: 'Xã tân an',
      district_id: '920500',
    },
    {
      id: '10976',
      name: 'Xã tân thành',
      district_id: '920500',
    },
    {
      id: '10977',
      name: 'Xã tân hội',
      district_id: '920500',
    },
    {
      id: '10978',
      name: 'Xã thạnh trị',
      district_id: '920500',
    },
    {
      id: '10979',
      name: 'Xã thạnh đông',
      district_id: '920500',
    },
    {
      id: '10980',
      name: 'Xã thạnh đông a',
      district_id: '920500',
    },
    {
      id: '10981',
      name: 'Xã thạnh đông b',
      district_id: '920500',
    },
    {
      id: '12421',
      name: 'Thị Trấn Tân Hiệp',
      district_id: '920500',
    },
    {
      id: '12422',
      name: 'Xã tân hoà',
      district_id: '920500',
    },
    {
      id: '11108',
      name: 'Xã thạnh yên',
      district_id: '921400',
    },
    {
      id: '11109',
      name: 'Xã thạnh yên a',
      district_id: '921400',
    },
    {
      id: '11110',
      name: 'Xã an minh bắc',
      district_id: '921400',
    },
    {
      id: '11111',
      name: 'Xã minh thuận',
      district_id: '921400',
    },
    {
      id: '11112',
      name: 'Xã vĩnh hòa',
      district_id: '921400',
    },
    {
      id: '11113',
      name: 'Xã hòa chánh',
      district_id: '921400',
    },
    {
      id: '11065',
      name: 'Xã vĩnh bình bắc',
      district_id: '921100',
    },
    {
      id: '11066',
      name: 'Xã vĩnh bình nam',
      district_id: '921100',
    },
    {
      id: '11068',
      name: 'Xã tân thuận',
      district_id: '921100',
    },
    {
      id: '11069',
      name: 'Xã vĩnh phong',
      district_id: '921100',
    },
    {
      id: '11073',
      name: 'Xã vĩnh thuận',
      district_id: '921100',
    },
    {
      id: '12410',
      name: 'Thị trấn vĩnh thuận',
      district_id: '921100',
    },
    {
      id: '12411',
      name: 'Xã bình minh',
      district_id: '921100',
    },
    {
      id: '12412',
      name: 'Xã phong đông',
      district_id: '921100',
    },
    {
      id: '11104',
      name: 'Xã hòn tre',
      district_id: '921300',
    },
    {
      id: '11105',
      name: 'Xã lại sơn',
      district_id: '921300',
    },
    {
      id: '11106',
      name: 'Xã an sơn',
      district_id: '921300',
    },
    {
      id: '12424',
      name: 'Xã nam du',
      district_id: '921300',
    },
    {
      id: '11115',
      name: 'Xã phú mỹ',
      district_id: '921500',
    },
    {
      id: '11116',
      name: 'Xã phú lợi',
      district_id: '921500',
    },
    {
      id: '11117',
      name: 'Xã tân khánh hòa',
      district_id: '921500',
    },
    {
      id: '11118',
      name: 'Xã vĩnh điều',
      district_id: '921500',
    },
    {
      id: '11119',
      name: 'Xã vĩnh phú',
      district_id: '921500',
    },
    {
      id: '7780',
      name: 'Thị Trấn đăk Tô',
      district_id: '580400',
    },
    {
      id: '7781',
      name: 'Xã ngok tụ',
      district_id: '580400',
    },
    {
      id: '7782',
      name: 'Xã văn lem',
      district_id: '580400',
    },
    {
      id: '7783',
      name: 'Xã kon đào',
      district_id: '580400',
    },
    {
      id: '7784',
      name: 'Xã tân cảnh',
      district_id: '580400',
    },
    {
      id: '7785',
      name: 'Xã diên bình',
      district_id: '580400',
    },
    {
      id: '7786',
      name: 'Xã pô kô',
      district_id: '580400',
    },
    {
      id: '7787',
      name: 'Xã đăk rơ nga',
      district_id: '580400',
    },
    {
      id: '7788',
      name: 'Xã đăk trăm',
      district_id: '580400',
    },
    {
      id: '7762',
      name: 'Xã đăk nên',
      district_id: '580600',
    },
    {
      id: '7763',
      name: 'Xã đăk ring',
      district_id: '580600',
    },
    {
      id: '7764',
      name: 'Xã măng búk',
      district_id: '580600',
    },
    {
      id: '7765',
      name: 'Xã đăk tăng',
      district_id: '580600',
    },
    {
      id: '7766',
      name: 'Xã ngok tem',
      district_id: '580600',
    },
    {
      id: '7767',
      name: 'Xã pờ ê',
      district_id: '580600',
    },
    {
      id: '7768',
      name: 'Xã măng cành',
      district_id: '580600',
    },
    {
      id: '7769',
      name: 'Xã đăk long',
      district_id: '580600',
    },
    {
      id: '7770',
      name: 'Xã hiếu',
      district_id: '580600',
    },
    {
      id: '12578',
      name: 'Thị Trấn Măng Đen',
      district_id: '580600',
    },
    {
      id: '7754',
      name: 'Thị trấn đăk rve',
      district_id: '580800',
    },
    {
      id: '7755',
      name: 'Xã đăk kôi',
      district_id: '580800',
    },
    {
      id: '7756',
      name: 'Xã đăk tơ lùng',
      district_id: '580800',
    },
    {
      id: '7757',
      name: 'Xã đăk ruồng',
      district_id: '580800',
    },
    {
      id: '7758',
      name: 'Xã đăk pne',
      district_id: '580800',
    },
    {
      id: '7759',
      name: 'Xã đăk tờ re',
      district_id: '580800',
    },
    {
      id: '7760',
      name: 'Xã tân lập',
      district_id: '580800',
    },
    {
      id: '7809',
      name: 'Thị trấn sa thầy',
      district_id: '580500',
    },
    {
      id: '7810',
      name: 'Xã rơ kơi',
      district_id: '580500',
    },
    {
      id: '7811',
      name: 'Xã sa nhơn',
      district_id: '580500',
    },
    {
      id: '7813',
      name: 'Xã sa sơn',
      district_id: '580500',
    },
    {
      id: '7814',
      name: 'Xã sa nghĩa',
      district_id: '580500',
    },
    {
      id: '7815',
      name: 'Xã sa bình',
      district_id: '580500',
    },
    {
      id: '7816',
      name: 'Xã ya xiêr',
      district_id: '580500',
    },
    {
      id: '7817',
      name: 'Xã ya tăng',
      district_id: '580500',
    },
    {
      id: '7818',
      name: 'Xã ya ly',
      district_id: '580500',
    },
    {
      id: '7819',
      name: 'Xã hơ moong',
      district_id: '580500',
    },
    {
      id: '12090',
      name: 'Xã mô rai',
      district_id: '580500',
    },
    {
      id: '7733',
      name: 'Phường quang trung',
      district_id: '580100',
    },
    {
      id: '7734',
      name: 'Phường quyết thắng',
      district_id: '580100',
    },
    {
      id: '7735',
      name: 'Phường duy tân',
      district_id: '580100',
    },
    {
      id: '7736',
      name: 'Phường trường chinh',
      district_id: '580100',
    },
    {
      id: '7737',
      name: 'Phường ngô mây',
      district_id: '580100',
    },
    {
      id: '7738',
      name: 'Phường lê lợi',
      district_id: '580100',
    },
    {
      id: '7739',
      name: 'Phường trần hưng đạo',
      district_id: '580100',
    },
    {
      id: '7740',
      name: 'Phường nguyễn trãi',
      district_id: '580100',
    },
    {
      id: '7741',
      name: 'Xã chư hreng',
      district_id: '580100',
    },
    {
      id: '7742',
      name: 'Xã hòa bình',
      district_id: '580100',
    },
    {
      id: '7743',
      name: 'Xã đăk blà',
      district_id: '580100',
    },
    {
      id: '7745',
      name: 'Xã ia chim',
      district_id: '580100',
    },
    {
      id: '7746',
      name: 'Xã vinh quang',
      district_id: '580100',
    },
    {
      id: '7748',
      name: 'Xã kroong',
      district_id: '580100',
    },
    {
      id: '7749',
      name: 'Xã đăk cấm',
      district_id: '580100',
    },
    {
      id: '7750',
      name: 'Xã đoàn kết',
      district_id: '580100',
    },
    {
      id: '7751',
      name: 'Phường thắng lợi',
      district_id: '580100',
    },
    {
      id: '7752',
      name: 'Phường thống nhất',
      district_id: '580100',
    },
    {
      id: '7753',
      name: 'Xã đắk năng',
      district_id: '580100',
    },
    {
      id: '12091',
      name: 'Xã đắk rơ wa',
      district_id: '580100',
    },
    {
      id: '12092',
      name: 'Xã ngọk bay',
      district_id: '580100',
    },
    {
      id: '7790',
      name: 'Xã đăk ang',
      district_id: '580300',
    },
    {
      id: '7791',
      name: 'Xã đăk dục',
      district_id: '580300',
    },
    {
      id: '7792',
      name: 'Xã đăk nông',
      district_id: '580300',
    },
    {
      id: '7793',
      name: 'Xã đăk kan',
      district_id: '580300',
    },
    {
      id: '7794',
      name: 'Xã pờ y',
      district_id: '580300',
    },
    {
      id: '7795',
      name: 'Xã sa loong',
      district_id: '580300',
    },
    {
      id: '7796',
      name: 'Xã đăk xú',
      district_id: '580300',
    },
    {
      id: '12087',
      name: 'Thị trấn plei cần',
      district_id: '580300',
    },
    {
      id: '4393',
      name: 'Phường tân phong',
      district_id: '390100',
    },
    {
      id: '4394',
      name: 'Phường quyết thắng',
      district_id: '390100',
    },
    {
      id: '4395',
      name: 'Phường đoàn kết',
      district_id: '390100',
    },
    {
      id: '4396',
      name: 'Xã nậm lỏong',
      district_id: '390100',
    },
    {
      id: '11739',
      name: 'Xã san thàng',
      district_id: '390100',
    },
    {
      id: '11740',
      name: 'Phường đông phong',
      district_id: '390100',
    },
    {
      id: '11741',
      name: 'Phường quyết tiến',
      district_id: '390100',
    },
    {
      id: '4413',
      name: 'Xã bản lang',
      district_id: '390300',
    },
    {
      id: '4414',
      name: 'Xã dào san',
      district_id: '390300',
    },
    {
      id: '4415',
      name: 'Xã hoang thèn',
      district_id: '390300',
    },
    {
      id: '4416',
      name: 'Xã khổng lào',
      district_id: '390300',
    },
    {
      id: '4417',
      name: 'Xã ma li chải',
      district_id: '390300',
    },
    {
      id: '4419',
      name: 'Xã mồ sì san',
      district_id: '390300',
    },
    {
      id: '4420',
      name: 'Xã mù sang',
      district_id: '390300',
    },
    {
      id: '4421',
      name: 'Xã nậm xe',
      district_id: '390300',
    },
    {
      id: '4422',
      name: 'Xã pa vây sử',
      district_id: '390300',
    },
    {
      id: '4423',
      name: 'Xã sì lờ lầu',
      district_id: '390300',
    },
    {
      id: '4424',
      name: 'Xã mường so',
      district_id: '390300',
    },
    {
      id: '4425',
      name: 'Thị trấn phong thổ',
      district_id: '390300',
    },
    {
      id: '4428',
      name: 'Xã sìn suối hồ',
      district_id: '390300',
    },
    {
      id: '4429',
      name: 'Xã tông qua lìn',
      district_id: '390300',
    },
    {
      id: '4430',
      name: 'Xã huổi luông',
      district_id: '390300',
    },
    {
      id: '4431',
      name: 'Xã vàng ma chải',
      district_id: '390300',
    },
    {
      id: '11742',
      name: 'Xã lả nhì thàng',
      district_id: '390300',
    },
    {
      id: '11743',
      name: 'Xã ma ly pho',
      district_id: '390300',
    },
    {
      id: '4448',
      name: 'Xã chăn nưa',
      district_id: '390400',
    },
    {
      id: '4449',
      name: 'Xã làng mô',
      district_id: '390400',
    },
    {
      id: '4450',
      name: 'Xã pa tần',
      district_id: '390400',
    },
    {
      id: '4451',
      name: 'Xã phăng sô lin',
      district_id: '390400',
    },
    {
      id: '4452',
      name: 'Xã tả phìn',
      district_id: '390400',
    },
    {
      id: '4453',
      name: 'Thị trấn sìn hồ',
      district_id: '390400',
    },
    {
      id: '4454',
      name: 'Xã căn co',
      district_id: '390400',
    },
    {
      id: '4455',
      name: 'Xã hồng thu',
      district_id: '390400',
    },
    {
      id: '4457',
      name: 'Xã ma quai',
      district_id: '390400',
    },
    {
      id: '4459',
      name: 'Xã nậm cha',
      district_id: '390400',
    },
    {
      id: '4460',
      name: 'Xã nậm cuổi',
      district_id: '390400',
    },
    {
      id: '4461',
      name: 'Xã nậm hãn',
      district_id: '390400',
    },
    {
      id: '4462',
      name: 'Xã nậm mạ',
      district_id: '390400',
    },
    {
      id: '4463',
      name: 'Xã nậm tăm',
      district_id: '390400',
    },
    {
      id: '4464',
      name: 'Xã noong hẻo',
      district_id: '390400',
    },
    {
      id: '4465',
      name: 'Xã phìn hồ',
      district_id: '390400',
    },
    {
      id: '4467',
      name: 'Xã pu sam cáp',
      district_id: '390400',
    },
    {
      id: '4468',
      name: 'Xã sà dề phìn',
      district_id: '390400',
    },
    {
      id: '4469',
      name: 'Xã tả ngảo',
      district_id: '390400',
    },
    {
      id: '4470',
      name: 'Xã tủa sín chải',
      district_id: '390400',
    },
    {
      id: '11734',
      name: 'Xã lùng thàng',
      district_id: '390400',
    },
    {
      id: '11735',
      name: 'Xã pa khoá',
      district_id: '390400',
    },
    {
      id: '4482',
      name: 'Xã mường kim',
      district_id: '390600',
    },
    {
      id: '4483',
      name: 'Xã mường than',
      district_id: '390600',
    },
    {
      id: '4485',
      name: 'Xã tà gia',
      district_id: '390600',
    },
    {
      id: '4486',
      name: 'Thị trấn than uyên',
      district_id: '390600',
    },
    {
      id: '4488',
      name: 'Xã khoen on',
      district_id: '390600',
    },
    {
      id: '4489',
      name: 'Xã mường mít',
      district_id: '390600',
    },
    {
      id: '4491',
      name: 'Xã tà hừa',
      district_id: '390600',
    },
    {
      id: '4492',
      name: 'Xã mường cang',
      district_id: '390600',
    },
    {
      id: '4494',
      name: 'Xã phúc than',
      district_id: '390600',
    },
    {
      id: '4495',
      name: 'Xã tà mung',
      district_id: '390600',
    },
    {
      id: '4496',
      name: 'Xã hua nà',
      district_id: '390600',
    },
    {
      id: '11744',
      name: 'Xã pha mu',
      district_id: '390600',
    },
    {
      id: '4433',
      name: 'Xã Bum Nưa',
      district_id: '390500',
    },
    {
      id: '4434',
      name: 'Thị trấn mường tè',
      district_id: '390500',
    },
    {
      id: '4435',
      name: 'Xã bun tở',
      district_id: '390500',
    },
    {
      id: '4437',
      name: 'Xã ka lăng',
      district_id: '390500',
    },
    {
      id: '4438',
      name: 'Xã kan hồ',
      district_id: '390500',
    },
    {
      id: '4439',
      name: 'Xã mù cả',
      district_id: '390500',
    },
    {
      id: '4441',
      name: 'Xã mường tè',
      district_id: '390500',
    },
    {
      id: '4443',
      name: 'Xã nậm khao',
      district_id: '390500',
    },
    {
      id: '4444',
      name: 'Xã pa ủ',
      district_id: '390500',
    },
    {
      id: '4445',
      name: 'Xã pa vệ sử',
      district_id: '390500',
    },
    {
      id: '4446',
      name: 'Xã tà tổng',
      district_id: '390500',
    },
    {
      id: '4447',
      name: 'Xã thu lũm',
      district_id: '390500',
    },
    {
      id: '11736',
      name: 'Xã tá bạ',
      district_id: '390500',
    },
    {
      id: '11737',
      name: 'Xã vàng san',
      district_id: '390500',
    },
    {
      id: '4497',
      name: 'Xã nậm cần',
      district_id: '390700',
    },
    {
      id: '4498',
      name: 'Xã pắc ta',
      district_id: '390700',
    },
    {
      id: '4499',
      name: 'Xã thân thuộc',
      district_id: '390700',
    },
    {
      id: '4501',
      name: 'Xã mường khoa',
      district_id: '390700',
    },
    {
      id: '4502',
      name: 'Xã nậm sỏ',
      district_id: '390700',
    },
    {
      id: '4503',
      name: 'Xã tà mít',
      district_id: '390700',
    },
    {
      id: '4504',
      name: 'Xã trung đồng',
      district_id: '390700',
    },
    {
      id: '4505',
      name: 'Thị trấn tân uyên',
      district_id: '390700',
    },
    {
      id: '4506',
      name: 'Xã phúc khoa',
      district_id: '390700',
    },
    {
      id: '4507',
      name: 'Xã hố mít',
      district_id: '390700',
    },
    {
      id: '8888',
      name: 'Xã lộc quảng',
      district_id: '671100',
    },
    {
      id: '8889',
      name: 'Xã lộc ngãi',
      district_id: '671100',
    },
    {
      id: '8890',
      name: 'Xã lộc đức',
      district_id: '671100',
    },
    {
      id: '8891',
      name: 'Xã lộc phú',
      district_id: '671100',
    },
    {
      id: '8893',
      name: 'Thị trấn lộc thắng',
      district_id: '671100',
    },
    {
      id: '8894',
      name: 'Xã lộc bắc',
      district_id: '671100',
    },
    {
      id: '8895',
      name: 'Xã Lộc Bảo',
      district_id: '671100',
    },
    {
      id: '8896',
      name: 'Xã lộc an',
      district_id: '671100',
    },
    {
      id: '8897',
      name: 'Xã lộc tân',
      district_id: '671100',
    },
    {
      id: '8898',
      name: 'Xã lộc thành',
      district_id: '671100',
    },
    {
      id: '8899',
      name: 'Xã lộc nam',
      district_id: '671100',
    },
    {
      id: '8901',
      name: 'Xã tân lạc',
      district_id: '671100',
    },
    {
      id: '12100',
      name: "Xã b' lá",
      district_id: '671100',
    },
    {
      id: '12101',
      name: 'Xã lộc lâm',
      district_id: '671100',
    },
    {
      id: '12674',
      name: 'Xã Bảo Lộc',
      district_id: '671100',
    },
    {
      id: '8902',
      name: 'Phường lộc sơn',
      district_id: '670200',
    },
    {
      id: '8903',
      name: 'Phường lộc tiến',
      district_id: '670200',
    },
    {
      id: '8905',
      name: 'Phường lộc phát',
      district_id: '670200',
    },
    {
      id: '8906',
      name: 'Phường 1',
      district_id: '670200',
    },
    {
      id: '8907',
      name: 'Phường Blao',
      district_id: '670200',
    },
    {
      id: '8908',
      name: 'Phường 2',
      district_id: '670200',
    },
    {
      id: '8909',
      name: 'Xã đại lào',
      district_id: '670200',
    },
    {
      id: '8910',
      name: 'Xã lộc châu',
      district_id: '670200',
    },
    {
      id: '8911',
      name: 'Xã lộc thanh',
      district_id: '670200',
    },
    {
      id: '8912',
      name: 'Xã lộc nga',
      district_id: '670200',
    },
    {
      id: '12099',
      name: 'Xã đạm bri',
      district_id: '670200',
    },
    {
      id: '8869',
      name: 'Xã đinh trang hòa',
      district_id: '670400',
    },
    {
      id: '8870',
      name: 'Xã gung ré',
      district_id: '670400',
    },
    {
      id: '8871',
      name: 'Xã liên đầm',
      district_id: '670400',
    },
    {
      id: '8872',
      name: 'Xã bảo thuận',
      district_id: '670400',
    },
    {
      id: '8873',
      name: 'Xã hòa ninh',
      district_id: '670400',
    },
    {
      id: '8874',
      name: 'Xã hòa trung',
      district_id: '670400',
    },
    {
      id: '8875',
      name: 'Xã hòa nam',
      district_id: '670400',
    },
    {
      id: '8876',
      name: 'Xã hòa bắc',
      district_id: '670400',
    },
    {
      id: '8877',
      name: 'Xã sơn điền',
      district_id: '670400',
    },
    {
      id: '8878',
      name: 'Xã gia bắc',
      district_id: '670400',
    },
    {
      id: '8879',
      name: 'Xã tân lâm',
      district_id: '670400',
    },
    {
      id: '8880',
      name: 'Thị trấn di linh',
      district_id: '670400',
    },
    {
      id: '8881',
      name: 'Xã đinh trang thượng',
      district_id: '670400',
    },
    {
      id: '8882',
      name: 'Xã tân thượng',
      district_id: '670400',
    },
    {
      id: '8883',
      name: 'Xã tân châu',
      district_id: '670400',
    },
    {
      id: '8884',
      name: 'Xã tân nghĩa',
      district_id: '670400',
    },
    {
      id: '8885',
      name: 'Xã gia hiệp',
      district_id: '670400',
    },
    {
      id: '8886',
      name: 'Xã đinh lạc',
      district_id: '670400',
    },
    {
      id: '8887',
      name: 'Xã tam bố',
      district_id: '670400',
    },
    {
      id: '8806',
      name: 'Phường 2',
      district_id: '670100',
    },
    {
      id: '8807',
      name: 'Phường 3',
      district_id: '670100',
    },
    {
      id: '8808',
      name: 'Phường 4',
      district_id: '670100',
    },
    {
      id: '8809',
      name: 'Phường 5',
      district_id: '670100',
    },
    {
      id: '8810',
      name: 'Phường 6',
      district_id: '670100',
    },
    {
      id: '8811',
      name: 'Phường 7',
      district_id: '670100',
    },
    {
      id: '8812',
      name: 'Phường 8',
      district_id: '670100',
    },
    {
      id: '8813',
      name: 'Phường 9',
      district_id: '670100',
    },
    {
      id: '8814',
      name: 'Phường 10',
      district_id: '670100',
    },
    {
      id: '8815',
      name: 'Phường 11',
      district_id: '670100',
    },
    {
      id: '8816',
      name: 'Phường 12',
      district_id: '670100',
    },
    {
      id: '8817',
      name: 'Phường 1',
      district_id: '670100',
    },
    {
      id: '8818',
      name: 'Xã tà nung',
      district_id: '670100',
    },
    {
      id: '8819',
      name: 'Xã xuân trường',
      district_id: '670100',
    },
    {
      id: '8820',
      name: 'Xã xuân thọ',
      district_id: '670100',
    },
    {
      id: '8821',
      name: 'Xã trạm hành',
      district_id: '670100',
    },
    {
      id: '8832',
      name: 'Xã đạ nhim',
      district_id: '670600',
    },
    {
      id: '8833',
      name: 'Thị trấn lạc dương',
      district_id: '670600',
    },
    {
      id: '8834',
      name: 'Xã lát',
      district_id: '670600',
    },
    {
      id: '8835',
      name: 'Xã đạ sar',
      district_id: '670600',
    },
    {
      id: '8836',
      name: 'Xã đạ chais',
      district_id: '670600',
    },
    {
      id: '12107',
      name: 'Xã đưng knớ',
      district_id: '670600',
    },
    {
      id: '8838',
      name: 'Thị trấn nam ban',
      district_id: '671000',
    },
    {
      id: '8839',
      name: 'Xã tân văn',
      district_id: '671000',
    },
    {
      id: '8840',
      name: 'Xã đạ đờn',
      district_id: '671000',
    },
    {
      id: '8841',
      name: 'Xã phú sơn',
      district_id: '671000',
    },
    {
      id: '8842',
      name: 'Xã phi tô',
      district_id: '671000',
    },
    {
      id: '8843',
      name: 'Xã tân hà',
      district_id: '671000',
    },
    {
      id: '8844',
      name: 'Xã liên hà',
      district_id: '671000',
    },
    {
      id: '8845',
      name: 'Xã phúc thọ',
      district_id: '671000',
    },
    {
      id: '8846',
      name: 'Xã hoài đức',
      district_id: '671000',
    },
    {
      id: '8847',
      name: 'Xã đan phượng',
      district_id: '671000',
    },
    {
      id: '8848',
      name: 'Xã tân thanh',
      district_id: '671000',
    },
    {
      id: '8849',
      name: 'Xã nam hà',
      district_id: '671000',
    },
    {
      id: '8850',
      name: 'Xã gia lâm',
      district_id: '671000',
    },
    {
      id: '8851',
      name: 'Xã đông thanh',
      district_id: '671000',
    },
    {
      id: '8852',
      name: 'Xã mê linh',
      district_id: '671000',
    },
    {
      id: '8853',
      name: 'Thị trấn đinh văn',
      district_id: '671000',
    },
    {
      id: '8924',
      name: 'Xã đức phổ',
      district_id: '670900',
    },
    {
      id: '8925',
      name: 'Xã gia viễn',
      district_id: '670900',
    },
    {
      id: '8926',
      name: 'Xã phước cát 2',
      district_id: '670900',
    },
    {
      id: '8927',
      name: 'Xã quảng ngãi',
      district_id: '670900',
    },
    {
      id: '8928',
      name: 'Xã tư nghĩa',
      district_id: '670900',
    },
    {
      id: '8929',
      name: 'Xã tiên hoàng',
      district_id: '670900',
    },
    {
      id: '8931',
      name: 'Xã đồng nai thượng',
      district_id: '670900',
    },
    {
      id: '8932',
      name: 'Xã mỹ lâm',
      district_id: '670900',
    },
    {
      id: '8933',
      name: 'Xã nam ninh',
      district_id: '670900',
    },
    {
      id: '8934',
      name: 'Xã phước cát 1',
      district_id: '670900',
    },
    {
      id: '12108',
      name: 'Thị trấn cát tiên',
      district_id: '670900',
    },
    {
      id: '12579',
      name: 'Thị Trấn Phước Cát',
      district_id: '670900',
    },
    {
      id: '1982',
      name: 'Xã bắc sơn',
      district_id: '240500',
    },
    {
      id: '1983',
      name: 'Xã chiến thắng',
      district_id: '240500',
    },
    {
      id: '1984',
      name: 'Xã nhất hòa',
      district_id: '240500',
    },
    {
      id: '1985',
      name: 'Xã nhất tiến',
      district_id: '240500',
    },
    {
      id: '1986',
      name: 'Xã quỳnh sơn',
      district_id: '240500',
    },
    {
      id: '1987',
      name: 'Xã tân lập',
      district_id: '240500',
    },
    {
      id: '1988',
      name: 'Xã tân thành',
      district_id: '240500',
    },
    {
      id: '1989',
      name: 'Xã tân tri',
      district_id: '240500',
    },
    {
      id: '1990',
      name: 'Xã trấn yên',
      district_id: '240500',
    },
    {
      id: '1991',
      name: 'Xã vạn thủy',
      district_id: '240500',
    },
    {
      id: '1992',
      name: 'Xã vũ lăng',
      district_id: '240500',
    },
    {
      id: '1993',
      name: 'Xã vũ lễ',
      district_id: '240500',
    },
    {
      id: '1994',
      name: 'Xã vũ sơn',
      district_id: '240500',
    },
    {
      id: '1995',
      name: 'Xã chiêu vũ',
      district_id: '240500',
    },
    {
      id: '1996',
      name: 'Xã đồng ý',
      district_id: '240500',
    },
    {
      id: '1997',
      name: 'Xã hưng vũ',
      district_id: '240500',
    },
    {
      id: '1998',
      name: 'Xã hữu vĩnh',
      district_id: '240500',
    },
    {
      id: '1999',
      name: 'Xã long đồng',
      district_id: '240500',
    },
    {
      id: '2000',
      name: 'Thị trấn bắc sơn',
      district_id: '240500',
    },
    {
      id: '2001',
      name: 'Xã tân hương',
      district_id: '240500',
    },
    {
      id: '1962',
      name: 'Xã bình la',
      district_id: '240300',
    },
    {
      id: '1963',
      name: 'Xã hòa bình',
      district_id: '240300',
    },
    {
      id: '1964',
      name: 'Xã hoa thám',
      district_id: '240300',
    },
    {
      id: '1965',
      name: 'Xã hồng phong',
      district_id: '240300',
    },
    {
      id: '1966',
      name: 'Xã hưng đạo',
      district_id: '240300',
    },
    {
      id: '1967',
      name: 'Xã quang trung',
      district_id: '240300',
    },
    {
      id: '1968',
      name: 'Xã quý hòa',
      district_id: '240300',
    },
    {
      id: '1969',
      name: 'Xã tân hòa',
      district_id: '240300',
    },
    {
      id: '1970',
      name: 'Xã thiện hòa',
      district_id: '240300',
    },
    {
      id: '1971',
      name: 'Xã thiện long',
      district_id: '240300',
    },
    {
      id: '1972',
      name: 'Xã thiện thuật',
      district_id: '240300',
    },
    {
      id: '1973',
      name: 'Xã vĩnh yên',
      district_id: '240300',
    },
    {
      id: '1974',
      name: 'Xã yên lỗ',
      district_id: '240300',
    },
    {
      id: '1975',
      name: 'Xã hoàng văn thụ',
      district_id: '240300',
    },
    {
      id: '1976',
      name: 'Xã minh khai',
      district_id: '240300',
    },
    {
      id: '1977',
      name: 'Xã mông ân',
      district_id: '240300',
    },
    {
      id: '1978',
      name: 'Xã tân văn',
      district_id: '240300',
    },
    {
      id: '1979',
      name: 'Xã tô hiệu',
      district_id: '240300',
    },
    {
      id: '1980',
      name: 'Thị trấn bình gia',
      district_id: '240300',
    },
    {
      id: '1981',
      name: 'Xã hồng thái',
      district_id: '240300',
    },
    {
      id: '2004',
      name: 'Xã bằng hữu',
      district_id: '240900',
    },
    {
      id: '2005',
      name: 'Xã hữu kiên',
      district_id: '240900',
    },
    {
      id: '2006',
      name: 'Xã lâm sơn',
      district_id: '240900',
    },
    {
      id: '2007',
      name: 'Xã liên sơn',
      district_id: '240900',
    },
    {
      id: '2008',
      name: 'Xã nhân lý',
      district_id: '240900',
    },
    {
      id: '2009',
      name: 'Xã quan sơn',
      district_id: '240900',
    },
    {
      id: '2010',
      name: 'Xã thượng cường',
      district_id: '240900',
    },
    {
      id: '2011',
      name: 'Xã vân an',
      district_id: '240900',
    },
    {
      id: '2012',
      name: 'Xã vạn linh',
      district_id: '240900',
    },
    {
      id: '2013',
      name: 'Xã vân thủy',
      district_id: '240900',
    },
    {
      id: '2014',
      name: 'Xã y tịch',
      district_id: '240900',
    },
    {
      id: '2015',
      name: 'Xã bắc thủy',
      district_id: '240900',
    },
    {
      id: '2016',
      name: 'Xã bằng mạc',
      district_id: '240900',
    },
    {
      id: '2017',
      name: 'Xã chiến thắng',
      district_id: '240900',
    },
    {
      id: '2018',
      name: 'Xã gia lộc',
      district_id: '240900',
    },
    {
      id: '2019',
      name: 'Xã mai sao',
      district_id: '240900',
    },
    {
      id: '2020',
      name: 'Xã quang lang',
      district_id: '240900',
    },
    {
      id: '2021',
      name: 'Thị trấn chi lăng',
      district_id: '240900',
    },
    {
      id: '2022',
      name: 'Thị trấn đồng mỏ',
      district_id: '240900',
    },
    {
      id: '2023',
      name: 'Xã hòa bình',
      district_id: '240900',
    },
    {
      id: '2024',
      name: 'Xã chi lăng',
      district_id: '240900',
    },
    {
      id: '2080',
      name: 'Xã bắc lãng',
      district_id: '241000',
    },
    {
      id: '2081',
      name: 'Xã bắc xa',
      district_id: '241000',
    },
    {
      id: '2082',
      name: 'Xã bính xá',
      district_id: '241000',
    },
    {
      id: '2083',
      name: 'Xã châu sơn',
      district_id: '241000',
    },
    {
      id: '2084',
      name: 'Xã cường lợi',
      district_id: '241000',
    },
    {
      id: '2085',
      name: 'Xã đồng thắng',
      district_id: '241000',
    },
    {
      id: '2086',
      name: 'Xã kiên mộc',
      district_id: '241000',
    },
    {
      id: '2087',
      name: 'Xã lâm ca',
      district_id: '241000',
    },
    {
      id: '2088',
      name: 'Xã thái bình',
      district_id: '241000',
    },
    {
      id: '2090',
      name: 'Thị trấn đình lập',
      district_id: '241000',
    },
    {
      id: '2091',
      name: 'Xã đình lập',
      district_id: '241000',
    },
    {
      id: '11767',
      name: 'Thị trấn nt thái bình',
      district_id: '241000',
    },
    {
      id: '2025',
      name: 'Xã cai kinh',
      district_id: '241100',
    },
    {
      id: '2026',
      name: 'Xã đô lương',
      district_id: '241100',
    },
    {
      id: '2027',
      name: 'Xã đồng tiến',
      district_id: '241100',
    },
    {
      id: '2028',
      name: 'Xã hồ sơn',
      district_id: '241100',
    },
    {
      id: '2029',
      name: 'Xã hòa bình',
      district_id: '241100',
    },
    {
      id: '2030',
      name: 'Xã hòa lạc',
      district_id: '241100',
    },
    {
      id: '2031',
      name: 'Xã hòa sơn',
      district_id: '241100',
    },
    {
      id: '2032',
      name: 'Xã hòa thắng',
      district_id: '241100',
    },
    {
      id: '2033',
      name: 'Xã hữu liên',
      district_id: '241100',
    },
    {
      id: '2034',
      name: 'Xã minh hòa',
      district_id: '241100',
    },
    {
      id: '2035',
      name: 'Xã quyết thắng',
      district_id: '241100',
    },
    {
      id: '2036',
      name: 'Xã sơn hà',
      district_id: '241100',
    },
    {
      id: '2037',
      name: 'Xã tân lập',
      district_id: '241100',
    },
    {
      id: '2038',
      name: 'Xã tân thành',
      district_id: '241100',
    },
    {
      id: '2039',
      name: 'Xã thanh sơn',
      district_id: '241100',
    },
    {
      id: '2040',
      name: 'Xã thiên ky',
      district_id: '241100',
    },
    {
      id: '2041',
      name: 'Xã văn nham',
      district_id: '241100',
    },
    {
      id: '2042',
      name: 'Xã yên bình',
      district_id: '241100',
    },
    {
      id: '2043',
      name: 'Xã yên sơn',
      district_id: '241100',
    },
    {
      id: '2044',
      name: 'Xã yên thịnh',
      district_id: '241100',
    },
    {
      id: '2045',
      name: 'Xã yên vượng',
      district_id: '241100',
    },
    {
      id: '2046',
      name: 'Xã đồng tân',
      district_id: '241100',
    },
    {
      id: '2047',
      name: 'Xã minh sơn',
      district_id: '241100',
    },
    {
      id: '2048',
      name: 'Xã minh tiến',
      district_id: '241100',
    },
    {
      id: '2049',
      name: 'Xã nhật tiến',
      district_id: '241100',
    },
    {
      id: '2050',
      name: 'Thị trấn hữu lũng',
      district_id: '241100',
    },
    {
      id: '1864',
      name: 'Phường đông kinh',
      district_id: '240100',
    },
    {
      id: '1865',
      name: 'Xã hoàng đồng',
      district_id: '240100',
    },
    {
      id: '1866',
      name: 'Phường hoàng văn thụ',
      district_id: '240100',
    },
    {
      id: '1867',
      name: 'Phường chi lăng',
      district_id: '240100',
    },
    {
      id: '1868',
      name: 'Phường tam thanh',
      district_id: '240100',
    },
    {
      id: '1869',
      name: 'Xã mai pha',
      district_id: '240100',
    },
    {
      id: '1870',
      name: 'Phường vĩnh trại',
      district_id: '240100',
    },
    {
      id: '1871',
      name: 'Xã quảng lạc',
      district_id: '240100',
    },
    {
      id: '2051',
      name: 'Xã ái quốc',
      district_id: '240800',
    },
    {
      id: '2052',
      name: 'Xã bằng khánh',
      district_id: '240800',
    },
    {
      id: '2054',
      name: 'Xã đông quan',
      district_id: '240800',
    },
    {
      id: '2056',
      name: 'Xã hữu khánh',
      district_id: '240800',
    },
    {
      id: '2058',
      name: 'Xã khuất xá',
      district_id: '240800',
    },
    {
      id: '2059',
      name: 'Xã lợi bác',
      district_id: '240800',
    },
    {
      id: '2060',
      name: 'Xã lục thôn',
      district_id: '240800',
    },
    {
      id: '2061',
      name: 'Xã mẫu sơn',
      district_id: '240800',
    },
    {
      id: '2062',
      name: 'Xã minh phát',
      district_id: '240800',
    },
    {
      id: '2063',
      name: 'Xã nam quan',
      district_id: '240800',
    },
    {
      id: '2065',
      name: 'Xã nhượng bạn',
      district_id: '240800',
    },
    {
      id: '2066',
      name: 'Xã quan bản',
      district_id: '240800',
    },
    {
      id: '2067',
      name: 'Xã sàn viên',
      district_id: '240800',
    },
    {
      id: '2068',
      name: 'Xã tam gia',
      district_id: '240800',
    },
    {
      id: '2069',
      name: 'Xã tĩnh bắc',
      district_id: '240800',
    },
    {
      id: '2070',
      name: 'Xã tú đoạn',
      district_id: '240800',
    },
    {
      id: '2071',
      name: 'Xã tú mịch',
      district_id: '240800',
    },
    {
      id: '2072',
      name: 'Xã vân mộng',
      district_id: '240800',
    },
    {
      id: '2073',
      name: 'Xã xuân dương',
      district_id: '240800',
    },
    {
      id: '2074',
      name: 'Xã xuân lễ',
      district_id: '240800',
    },
    {
      id: '2075',
      name: 'Xã xuân mãn',
      district_id: '240800',
    },
    {
      id: '2076',
      name: 'Xã xuân tình',
      district_id: '240800',
    },
    {
      id: '2077',
      name: 'Xã yên khoái',
      district_id: '240800',
    },
    {
      id: '2078',
      name: 'Thị trấn lộc bình',
      district_id: '240800',
    },
    {
      id: '2079',
      name: 'Thị trấn na dương',
      district_id: '240800',
    },
    {
      id: '11763',
      name: 'Xã đồng bục',
      district_id: '240800',
    },
    {
      id: '11764',
      name: 'Xã hiệp hạ',
      district_id: '240800',
    },
    {
      id: '11765',
      name: 'Xã hữu lân',
      district_id: '240800',
    },
    {
      id: '11766',
      name: 'Xã như khuê',
      district_id: '240800',
    },
    {
      id: '1939',
      name: 'Xã chu túc',
      district_id: '240600',
    },
    {
      id: '1941',
      name: 'Xã hữu lễ',
      district_id: '240600',
    },
    {
      id: '1942',
      name: 'Xã khánh khê',
      district_id: '240600',
    },
    {
      id: '1943',
      name: 'Xã lương năng',
      district_id: '240600',
    },
    {
      id: '1944',
      name: 'Xã tân đoàn',
      district_id: '240600',
    },
    {
      id: '1945',
      name: 'Xã trấn ninh',
      district_id: '240600',
    },
    {
      id: '1946',
      name: 'Xã tràng các',
      district_id: '240600',
    },
    {
      id: '1947',
      name: 'Xã việt yên',
      district_id: '240600',
    },
    {
      id: '1948',
      name: 'Xã vĩnh lại',
      district_id: '240600',
    },
    {
      id: '1949',
      name: 'Xã xuân mai',
      district_id: '240600',
    },
    {
      id: '1950',
      name: 'Yên Phúc',
      district_id: '240600',
    },
    {
      id: '1951',
      name: 'Xã bình phúc',
      district_id: '240600',
    },
    {
      id: '1953',
      name: 'Xã hòa bình',
      district_id: '240600',
    },
    {
      id: '1954',
      name: 'Xã phú mỹ',
      district_id: '240600',
    },
    {
      id: '1955',
      name: 'Xã song giang',
      district_id: '240600',
    },
    {
      id: '1956',
      name: 'Xã tràng phái',
      district_id: '240600',
    },
    {
      id: '1957',
      name: 'Xã tràng sơn',
      district_id: '240600',
    },
    {
      id: '1958',
      name: 'Thị trấn văn quan',
      district_id: '240600',
    },
    {
      id: '1959',
      name: 'Xã tú xuyên',
      district_id: '240600',
    },
    {
      id: '1960',
      name: 'Xã văn an',
      district_id: '240600',
    },
    {
      id: '1961',
      name: 'Xã vân mộng',
      district_id: '240600',
    },
    {
      id: '11760',
      name: 'Xã đại an',
      district_id: '240600',
    },
    {
      id: '11761',
      name: 'Xã đồng giáp',
      district_id: '240600',
    },
    {
      id: '11762',
      name: 'Xã tri lễ',
      district_id: '240600',
    },
    {
      id: '12782',
      name: 'Xã An Sơn',
      district_id: '240600',
    },
    {
      id: '12783',
      name: 'Xã Liên Hội',
      district_id: '240600',
    },
    {
      id: '12784',
      name: 'Xã Điềm He',
      district_id: '240600',
    },
    {
      id: '1872',
      name: 'Xã bảo lâm',
      district_id: '240700',
    },
    {
      id: '1873',
      name: 'Xã bình trung',
      district_id: '240700',
    },
    {
      id: '1874',
      name: 'Xã cao lâu',
      district_id: '240700',
    },
    {
      id: '1875',
      name: 'Xã công sơn',
      district_id: '240700',
    },
    {
      id: '1876',
      name: 'Xã gia cát',
      district_id: '240700',
    },
    {
      id: '1877',
      name: 'Xã hải yến',
      district_id: '240700',
    },
    {
      id: '1878',
      name: 'Xã hoà cư',
      district_id: '240700',
    },
    {
      id: '1879',
      name: 'Xã lộc yên',
      district_id: '240700',
    },
    {
      id: '1880',
      name: 'Xã mẫu sơn',
      district_id: '240700',
    },
    {
      id: '1881',
      name: 'Xã phú xá',
      district_id: '240700',
    },
    {
      id: '1882',
      name: 'Xã tân liên',
      district_id: '240700',
    },
    {
      id: '1883',
      name: 'Xã tân thành',
      district_id: '240700',
    },
    {
      id: '1884',
      name: 'Xã thạch đạn',
      district_id: '240700',
    },
    {
      id: '1885',
      name: 'Xã thanh lòa',
      district_id: '240700',
    },
    {
      id: '1886',
      name: 'Xã thụy hùng',
      district_id: '240700',
    },
    {
      id: '1887',
      name: 'Xã xuân long',
      district_id: '240700',
    },
    {
      id: '1888',
      name: 'Xã xuất lễ',
      district_id: '240700',
    },
    {
      id: '1889',
      name: 'Xã hồng phong',
      district_id: '240700',
    },
    {
      id: '1890',
      name: 'Xã hợp thành',
      district_id: '240700',
    },
    {
      id: '1891',
      name: 'Xã song giáp',
      district_id: '240700',
    },
    {
      id: '1892',
      name: 'Thị trấn cao lộc',
      district_id: '240700',
    },
    {
      id: '1893',
      name: 'Thị trấn đồng đăng',
      district_id: '240700',
    },
    {
      id: '1894',
      name: 'Xã yên trạch',
      district_id: '240700',
    },
    {
      id: '1915',
      name: 'Xã hùng việt',
      district_id: '240200',
    },
    {
      id: '1916',
      name: 'Xã kháng chiến',
      district_id: '240200',
    },
    {
      id: '1917',
      name: 'Xã khánh long',
      district_id: '240200',
    },
    {
      id: '1918',
      name: 'Xã kim đồng',
      district_id: '240200',
    },
    {
      id: '1919',
      name: 'Xã quốc khánh',
      district_id: '240200',
    },
    {
      id: '1920',
      name: 'Xã quốc việt',
      district_id: '240200',
    },
    {
      id: '1921',
      name: 'Xã tân minh',
      district_id: '240200',
    },
    {
      id: '1922',
      name: 'Xã tân tiến',
      district_id: '240200',
    },
    {
      id: '1923',
      name: 'Xã tân yên',
      district_id: '240200',
    },
    {
      id: '1924',
      name: 'Xã tri phương',
      district_id: '240200',
    },
    {
      id: '1925',
      name: 'Xã trung thành',
      district_id: '240200',
    },
    {
      id: '1926',
      name: 'Xã vĩnh tiến',
      district_id: '240200',
    },
    {
      id: '1927',
      name: 'Xã chi lăng',
      district_id: '240200',
    },
    {
      id: '1928',
      name: 'Xã đại đồng',
      district_id: '240200',
    },
    {
      id: '1929',
      name: 'Xã đề thám',
      district_id: '240200',
    },
    {
      id: '1930',
      name: 'Xã hùng sơn',
      district_id: '240200',
    },
    {
      id: '1931',
      name: 'Thị Trấn Thất Khê',
      district_id: '240200',
    },
    {
      id: '1932',
      name: 'Xã bác ái',
      district_id: '240200',
    },
    {
      id: '1933',
      name: 'Xã cao minh',
      district_id: '240200',
    },
    {
      id: '1934',
      name: 'Xã chí minh',
      district_id: '240200',
    },
    {
      id: '1935',
      name: 'Xã đào viên',
      district_id: '240200',
    },
    {
      id: '1936',
      name: 'Xã đoàn kết',
      district_id: '240200',
    },
    {
      id: '1937',
      name: 'Xã đội cấn',
      district_id: '240200',
    },
    {
      id: '1895',
      name: 'Xã hoàng việt',
      district_id: '240400',
    },
    {
      id: '1896',
      name: 'Thị trấn na sầm',
      district_id: '240400',
    },
    {
      id: '1897',
      name: 'Xã an hùng',
      district_id: '240400',
    },
    {
      id: '1898',
      name: 'Xã gia miễn',
      district_id: '240400',
    },
    {
      id: '1899',
      name: 'Xã bắc la',
      district_id: '240400',
    },
    {
      id: '1900',
      name: 'Xã Hoàng Văn Thụ',
      district_id: '240400',
    },
    {
      id: '1901',
      name: 'Xã hồng thái',
      district_id: '240400',
    },
    {
      id: '1902',
      name: 'Xã hội hoan',
      district_id: '240400',
    },
    {
      id: '1903',
      name: 'Xã nam la',
      district_id: '240400',
    },
    {
      id: '1904',
      name: 'Xã nhạc kỳ',
      district_id: '240400',
    },
    {
      id: '1905',
      name: 'Xã thanh long',
      district_id: '240400',
    },
    {
      id: '1906',
      name: 'Xã thành hòa',
      district_id: '240400',
    },
    {
      id: '1907',
      name: 'Xã thụy hùng',
      district_id: '240400',
    },
    {
      id: '1908',
      name: 'Xã trùng khánh',
      district_id: '240400',
    },
    {
      id: '1909',
      name: 'Xã trùng quán',
      district_id: '240400',
    },
    {
      id: '1910',
      name: 'Xã tân mỹ',
      district_id: '240400',
    },
    {
      id: '1911',
      name: 'Xã tân tác',
      district_id: '240400',
    },
    {
      id: '1912',
      name: 'Xã tân việt',
      district_id: '240400',
    },
    {
      id: '1913',
      name: 'Xã tân lang',
      district_id: '240400',
    },
    {
      id: '1914',
      name: 'Xã tân thanh',
      district_id: '240400',
    },
    {
      id: '10044',
      name: 'Xã nhựt chánh',
      district_id: '850800',
    },
    {
      id: '10045',
      name: 'Xã thạnh đức',
      district_id: '850800',
    },
    {
      id: '10046',
      name: 'Xã long hiệp',
      district_id: '850800',
    },
    {
      id: '10047',
      name: 'Xã phước lợi',
      district_id: '850800',
    },
    {
      id: '10048',
      name: 'Xã lương hòa',
      district_id: '850800',
    },
    {
      id: '10049',
      name: 'Xã lương bình',
      district_id: '850800',
    },
    {
      id: '10050',
      name: 'Xã thạnh lợi',
      district_id: '850800',
    },
    {
      id: '10051',
      name: 'Xã tân bữu',
      district_id: '850800',
    },
    {
      id: '10052',
      name: 'Xã thạnh hòa',
      district_id: '850800',
    },
    {
      id: '10053',
      name: 'Xã tân hòa',
      district_id: '850800',
    },
    {
      id: '10054',
      name: 'Xã bình đức',
      district_id: '850800',
    },
    {
      id: '10055',
      name: 'Xã thạnh phú',
      district_id: '850800',
    },
    {
      id: '10056',
      name: 'Xã an thạnh',
      district_id: '850800',
    },
    {
      id: '10057',
      name: 'Xã mỹ yên',
      district_id: '850800',
    },
    {
      id: '10058',
      name: 'Thị trấn bến lức',
      district_id: '850800',
    },
    {
      id: '10059',
      name: 'Xã phước lợi',
      district_id: '850800',
    },
    {
      id: '10060',
      name: 'Thị trấn cần đước',
      district_id: '851200',
    },
    {
      id: '10061',
      name: 'Xã long hựu đông',
      district_id: '851200',
    },
    {
      id: '10062',
      name: 'Xã long hựu tây',
      district_id: '851200',
    },
    {
      id: '10063',
      name: 'Xã phước đông',
      district_id: '851200',
    },
    {
      id: '10064',
      name: 'Xã tân chánh',
      district_id: '851200',
    },
    {
      id: '10065',
      name: 'Xã tân ân',
      district_id: '851200',
    },
    {
      id: '10066',
      name: 'Xã tân lân',
      district_id: '851200',
    },
    {
      id: '10067',
      name: 'Xã phước tuy',
      district_id: '851200',
    },
    {
      id: '10068',
      name: 'Xã mỹ lệ',
      district_id: '851200',
    },
    {
      id: '10069',
      name: 'Xã long định',
      district_id: '851200',
    },
    {
      id: '10070',
      name: 'Xã tân trạch',
      district_id: '851200',
    },
    {
      id: '10071',
      name: 'Xã long sơn',
      district_id: '851200',
    },
    {
      id: '10072',
      name: 'Xã long hòa',
      district_id: '851200',
    },
    {
      id: '10073',
      name: 'Xã long cang',
      district_id: '851200',
    },
    {
      id: '10074',
      name: 'Xã long khê',
      district_id: '851200',
    },
    {
      id: '10075',
      name: 'Xã long trạch',
      district_id: '851200',
    },
    {
      id: '10076',
      name: 'Xã phước vân',
      district_id: '851200',
    },
    {
      id: '10077',
      name: 'Xã mỹ lệ',
      district_id: '851200',
    },
    {
      id: '10078',
      name: 'Xã long khê',
      district_id: '851200',
    },
    {
      id: '10080',
      name: 'Xã long thượng',
      district_id: '851300',
    },
    {
      id: '10081',
      name: 'Xã phước lý',
      district_id: '851300',
    },
    {
      id: '10082',
      name: 'Xã phước hậu',
      district_id: '851300',
    },
    {
      id: '10083',
      name: 'Xã mỹ lộc',
      district_id: '851300',
    },
    {
      id: '10084',
      name: 'Xã tân kim',
      district_id: '851300',
    },
    {
      id: '10085',
      name: 'Xã long hậu',
      district_id: '851300',
    },
    {
      id: '10086',
      name: 'Xã phước lâm',
      district_id: '851300',
    },
    {
      id: '10087',
      name: 'Xã phước lại',
      district_id: '851300',
    },
    {
      id: '10088',
      name: 'Xã trường bình',
      district_id: '851300',
    },
    {
      id: '10089',
      name: 'Xã thuận thành',
      district_id: '851300',
    },
    {
      id: '10090',
      name: 'Xã long an',
      district_id: '851300',
    },
    {
      id: '10091',
      name: 'Xã phước vĩnh tây',
      district_id: '851300',
    },
    {
      id: '10092',
      name: 'Xã phước vĩnh đông',
      district_id: '851300',
    },
    {
      id: '10093',
      name: 'Xã long phụng',
      district_id: '851300',
    },
    {
      id: '10095',
      name: 'Xã đông thạnh',
      district_id: '851300',
    },
    {
      id: '12321',
      name: 'Thị trấn cần giuộc',
      district_id: '851300',
    },
    {
      id: '12322',
      name: 'Xã tân tập',
      district_id: '851300',
    },
    {
      id: '10020',
      name: 'Xã hiệp thạnh',
      district_id: '851000',
    },
    {
      id: '10021',
      name: 'Xã phước tân hưng',
      district_id: '851000',
    },
    {
      id: '10022',
      name: 'Xã dương xuân hội',
      district_id: '851000',
    },
    {
      id: '10023',
      name: 'Xã long trì',
      district_id: '851000',
    },
    {
      id: '10024',
      name: 'Xã an lục long',
      district_id: '851000',
    },
    {
      id: '10025',
      name: 'Xã thanh phú long',
      district_id: '851000',
    },
    {
      id: '10026',
      name: 'Xã thanh vĩnh đông',
      district_id: '851000',
    },
    {
      id: '10027',
      name: 'Xã thuận mỹ',
      district_id: '851000',
    },
    {
      id: '10028',
      name: 'Thị trấn tầm vu',
      district_id: '851000',
    },
    {
      id: '10029',
      name: 'Xã bình quới',
      district_id: '851000',
    },
    {
      id: '10030',
      name: 'Xã hòa phú',
      district_id: '851000',
    },
    {
      id: '10031',
      name: 'Xã vĩnh công',
      district_id: '851000',
    },
    {
      id: '10032',
      name: 'Xã phú ngãi trị',
      district_id: '851000',
    },
    {
      id: '10109',
      name: 'Thị trấn đức hòa',
      district_id: '850700',
    },
    {
      id: '10110',
      name: 'Xã đức hòa hạ',
      district_id: '850700',
    },
    {
      id: '10111',
      name: 'Xã đức hòa đông',
      district_id: '850700',
    },
    {
      id: '10112',
      name: 'Xã mỹ hạnh bắc',
      district_id: '850700',
    },
    {
      id: '10113',
      name: 'Xã mỹ hạnh nam',
      district_id: '850700',
    },
    {
      id: '10114',
      name: 'Thị trấn hậu nghĩa',
      district_id: '850700',
    },
    {
      id: '10115',
      name: 'Thị trấn hiệp hòa',
      district_id: '850700',
    },
    {
      id: '10116',
      name: 'Xã lộc giang',
      district_id: '850700',
    },
    {
      id: '10117',
      name: 'Xã an ninh tây',
      district_id: '850700',
    },
    {
      id: '10118',
      name: 'Xã an ninh đông',
      district_id: '850700',
    },
    {
      id: '10119',
      name: 'Xã tân mỹ',
      district_id: '850700',
    },
    {
      id: '10120',
      name: 'Xã đức lập thượng',
      district_id: '850700',
    },
    {
      id: '10121',
      name: 'Xã đức lập hạ',
      district_id: '850700',
    },
    {
      id: '10122',
      name: 'Xã hòa khánh tây',
      district_id: '850700',
    },
    {
      id: '10123',
      name: 'Xã hòa khánh đông',
      district_id: '850700',
    },
    {
      id: '10124',
      name: 'Xã hòa khánh nam',
      district_id: '850700',
    },
    {
      id: '10125',
      name: 'Xã hựu thành',
      district_id: '850700',
    },
    {
      id: '10126',
      name: 'Xã đức hòa thượng',
      district_id: '850700',
    },
    {
      id: '10127',
      name: 'Xã hiệp hòa',
      district_id: '850700',
    },
    {
      id: '10128',
      name: 'Xã tân phú',
      district_id: '850700',
    },
    {
      id: '10129',
      name: 'Thị trấn đồng thành',
      district_id: '850600',
    },
    {
      id: '10130',
      name: 'Xã mỹ quý đông',
      district_id: '850600',
    },
    {
      id: '10131',
      name: 'Xã mỹ quý tây',
      district_id: '850600',
    },
    {
      id: '10132',
      name: 'Xã mỹ thạnh bắc',
      district_id: '850600',
    },
    {
      id: '10133',
      name: 'Xã bình thành',
      district_id: '850600',
    },
    {
      id: '10134',
      name: 'Xã bình hòa hưng',
      district_id: '850600',
    },
    {
      id: '10135',
      name: 'Xã bình hòa nam',
      district_id: '850600',
    },
    {
      id: '10136',
      name: 'Xã bình hòa bắc',
      district_id: '850600',
    },
    {
      id: '10137',
      name: 'Xã mỹ thạnh đông',
      district_id: '850600',
    },
    {
      id: '10138',
      name: 'Xã mỹ thạnh tây',
      district_id: '850600',
    },
    {
      id: '10139',
      name: 'Xã mỹ bình',
      district_id: '850600',
    },
    {
      id: '10170',
      name: 'Xã bình hòa tây',
      district_id: '850300',
    },
    {
      id: '10171',
      name: 'Xã bình hòa trung',
      district_id: '850300',
    },
    {
      id: '10172',
      name: 'Xã bình thạnh',
      district_id: '850300',
    },
    {
      id: '10173',
      name: 'Xã bình phong thạnh',
      district_id: '850300',
    },
    {
      id: '10174',
      name: 'Xã tân lập',
      district_id: '850300',
    },
    {
      id: '10175',
      name: 'Xã tân thành',
      district_id: '850300',
    },
    {
      id: '10176',
      name: 'Xã bình hòa đông',
      district_id: '850300',
    },
    {
      id: '10187',
      name: 'Thị trấn tân hưng',
      district_id: '851400',
    },
    {
      id: '10188',
      name: 'Xã hưng hà',
      district_id: '851400',
    },
    {
      id: '10189',
      name: 'Xã hưng thạnh',
      district_id: '851400',
    },
    {
      id: '10190',
      name: 'Xã thạnh hưng',
      district_id: '851400',
    },
    {
      id: '10191',
      name: 'Xã hưng điền',
      district_id: '851400',
    },
    {
      id: '10192',
      name: 'Xã vĩnh thạnh',
      district_id: '851400',
    },
    {
      id: '10193',
      name: 'Xã hưng điền b',
      district_id: '851400',
    },
    {
      id: '10194',
      name: 'Xã vĩnh lợi',
      district_id: '851400',
    },
    {
      id: '10195',
      name: 'Xã vĩnh châu b',
      district_id: '851400',
    },
    {
      id: '10196',
      name: 'Xã vĩnh châu a',
      district_id: '851400',
    },
    {
      id: '10197',
      name: 'Xã vĩnh đại',
      district_id: '851400',
    },
    {
      id: '10198',
      name: 'Xã vĩnh bửu',
      district_id: '851400',
    },
    {
      id: '10151',
      name: 'Thị trấn tân thạnh',
      district_id: '850400',
    },
    {
      id: '10152',
      name: 'Xã hậu thạnh tây',
      district_id: '850400',
    },
    {
      id: '10153',
      name: 'Xã hậu thạnh đông',
      district_id: '850400',
    },
    {
      id: '10154',
      name: 'Xã bắc hòa',
      district_id: '850400',
    },
    {
      id: '10155',
      name: 'Xã nhơn hòa lập',
      district_id: '850400',
    },
    {
      id: '10156',
      name: 'Xã tân lập',
      district_id: '850400',
    },
    {
      id: '10157',
      name: 'Xã tân thành',
      district_id: '850400',
    },
    {
      id: '10158',
      name: 'Xã tân ninh',
      district_id: '850400',
    },
    {
      id: '10159',
      name: 'Xã nhơn ninh',
      district_id: '850400',
    },
    {
      id: '10160',
      name: 'Xã tân hòa',
      district_id: '850400',
    },
    {
      id: '10161',
      name: 'Xã tân bình',
      district_id: '850400',
    },
    {
      id: '10162',
      name: 'Xã nhơn hòa',
      district_id: '850400',
    },
    {
      id: '10163',
      name: 'Xã kiến bình',
      district_id: '850400',
    },
    {
      id: '10033',
      name: 'Thị trấn tân trụ',
      district_id: '851100',
    },
    {
      id: '10034',
      name: 'Xã bình tịnh',
      district_id: '851100',
    },
    {
      id: '10035',
      name: 'Xã bình trinh đông',
      district_id: '851100',
    },
    {
      id: '10036',
      name: 'Xã tân phước tây',
      district_id: '851100',
    },
    {
      id: '10037',
      name: 'Xã đức tân',
      district_id: '851100',
    },
    {
      id: '10038',
      name: 'Xã nhựt ninh',
      district_id: '851100',
    },
    {
      id: '10039',
      name: 'Xã mỹ bình',
      district_id: '851100',
    },
    {
      id: '10040',
      name: 'Xã quê mỹ thạnh',
      district_id: '851100',
    },
    {
      id: '10041',
      name: 'Xã an nhựt tân',
      district_id: '851100',
    },
    {
      id: '10042',
      name: 'Xã lạc tấn',
      district_id: '851100',
    },
    {
      id: '10043',
      name: 'Xã bình lãng',
      district_id: '851100',
    },
    {
      id: '10140',
      name: 'Thị trấn thạnh hóa',
      district_id: '850500',
    },
    {
      id: '10141',
      name: 'Xã tân hiệp',
      district_id: '850500',
    },
    {
      id: '10142',
      name: 'Xã thuận bình',
      district_id: '850500',
    },
    {
      id: '10143',
      name: 'Xã thạnh phước',
      district_id: '850500',
    },
    {
      id: '10144',
      name: 'Xã thạnh phú',
      district_id: '850500',
    },
    {
      id: '10145',
      name: 'Xã thuận nghĩa hòa',
      district_id: '850500',
    },
    {
      id: '10146',
      name: 'Xã thuỷ đông',
      district_id: '850500',
    },
    {
      id: '10147',
      name: 'Xã thủy tây',
      district_id: '850500',
    },
    {
      id: '10148',
      name: 'Xã tân tây',
      district_id: '850500',
    },
    {
      id: '10149',
      name: 'Xã tân đông',
      district_id: '850500',
    },
    {
      id: '10150',
      name: 'Xã thanh an',
      district_id: '850500',
    },
    {
      id: '10096',
      name: 'Xã nhị thành',
      district_id: '850900',
    },
    {
      id: '10097',
      name: 'Thị trấn thủ thừa',
      district_id: '850900',
    },
    {
      id: '10098',
      name: 'Xã long thạnh',
      district_id: '850900',
    },
    {
      id: '10099',
      name: 'Xã long thuận',
      district_id: '850900',
    },
    {
      id: '10100',
      name: 'Xã tân thành',
      district_id: '850900',
    },
    {
      id: '10101',
      name: 'Xã mỹ lạc',
      district_id: '850900',
    },
    {
      id: '10102',
      name: 'Xã mỹ thạnh',
      district_id: '850900',
    },
    {
      id: '10103',
      name: 'Xã bình an',
      district_id: '850900',
    },
    {
      id: '10104',
      name: 'Xã mỹ an',
      district_id: '850900',
    },
    {
      id: '10105',
      name: 'Xã mỹ phú',
      district_id: '850900',
    },
    {
      id: '10106',
      name: 'Xã bình thạnh',
      district_id: '850900',
    },
    {
      id: '10107',
      name: 'Xã tân lập',
      district_id: '850900',
    },
    {
      id: '10108',
      name: 'Xã long thành',
      district_id: '850900',
    },
    {
      id: '10177',
      name: 'Thị trấn vĩnh hưng',
      district_id: '850200',
    },
    {
      id: '10178',
      name: 'Xã hưng điền a',
      district_id: '850200',
    },
    {
      id: '10179',
      name: 'Xã khánh hưng',
      district_id: '850200',
    },
    {
      id: '10180',
      name: 'Xã vĩnh trị',
      district_id: '850200',
    },
    {
      id: '10181',
      name: 'Xã thái trị',
      district_id: '850200',
    },
    {
      id: '10182',
      name: 'Xã thái bình trung',
      district_id: '850200',
    },
    {
      id: '10183',
      name: 'Xã tuyên bình',
      district_id: '850200',
    },
    {
      id: '10184',
      name: 'Xã tuyên bình tây',
      district_id: '850200',
    },
    {
      id: '10185',
      name: 'Xã vĩnh thuận',
      district_id: '850200',
    },
    {
      id: '10186',
      name: 'Xã vĩnh bình',
      district_id: '850200',
    },
    {
      id: '6318',
      name: 'Xã cẩm sơn',
      district_id: '461300',
    },
    {
      id: '6319',
      name: 'Xã cao sơn',
      district_id: '461300',
    },
    {
      id: '6320',
      name: 'Xã hoa sơn',
      district_id: '461300',
    },
    {
      id: '6321',
      name: 'Xã hội sơn',
      district_id: '461300',
    },
    {
      id: '6322',
      name: 'Xã hùng sơn',
      district_id: '461300',
    },
    {
      id: '6323',
      name: 'Xã lĩnh sơn',
      district_id: '461300',
    },
    {
      id: '6324',
      name: 'Xã tam sơn',
      district_id: '461300',
    },
    {
      id: '6325',
      name: 'Xã tào sơn',
      district_id: '461300',
    },
    {
      id: '6326',
      name: 'Xã thạch sơn',
      district_id: '461300',
    },
    {
      id: '6327',
      name: 'Xã thành sơn',
      district_id: '461300',
    },
    {
      id: '6328',
      name: 'Xã thọ sơn',
      district_id: '461300',
    },
    {
      id: '6329',
      name: 'Xã tường sơn',
      district_id: '461300',
    },
    {
      id: '6330',
      name: 'Thị trấn anh sơn',
      district_id: '461300',
    },
    {
      id: '6331',
      name: 'Xã đỉnh sơn',
      district_id: '461300',
    },
    {
      id: '6332',
      name: 'Xã đức sơn',
      district_id: '461300',
    },
    {
      id: '6333',
      name: 'Xã khai sơn',
      district_id: '461300',
    },
    {
      id: '6334',
      name: 'Xã lạng sơn',
      district_id: '461300',
    },
    {
      id: '6335',
      name: 'Xã long sơn',
      district_id: '461300',
    },
    {
      id: '6336',
      name: 'Xã phúc sơn',
      district_id: '461300',
    },
    {
      id: '6337',
      name: 'Xã vĩnh sơn',
      district_id: '461300',
    },
    {
      id: '6338',
      name: 'Xã bình sơn',
      district_id: '461300',
    },
    {
      id: '6344',
      name: 'Xã môn sơn',
      district_id: '460900',
    },
    {
      id: '6345',
      name: 'Xã bồng khê',
      district_id: '460900',
    },
    {
      id: '6346',
      name: 'Xã châu khê',
      district_id: '460900',
    },
    {
      id: '6347',
      name: 'Xã cam lâm',
      district_id: '460900',
    },
    {
      id: '6348',
      name: 'Xã lạng khê',
      district_id: '460900',
    },
    {
      id: '6349',
      name: 'Xã bình chuẩn',
      district_id: '460900',
    },
    {
      id: '6350',
      name: 'Xã mậu đức',
      district_id: '460900',
    },
    {
      id: '6351',
      name: 'Thị trấn con cuông',
      district_id: '460900',
    },
    {
      id: '6352',
      name: 'Xã đôn phục',
      district_id: '460900',
    },
    {
      id: '6353',
      name: 'Xã thạch ngàn',
      district_id: '460900',
    },
    {
      id: '6354',
      name: 'Xã lục dạ',
      district_id: '460900',
    },
    {
      id: '6355',
      name: 'Xã yên khê',
      district_id: '460900',
    },
    {
      id: '6356',
      name: 'Xã chi khê',
      district_id: '460900',
    },
    {
      id: '6012',
      name: 'Phường nghi thủy',
      district_id: '460200',
    },
    {
      id: '6013',
      name: 'Phường thu thủy',
      district_id: '460200',
    },
    {
      id: '6014',
      name: 'Phường nghi hương',
      district_id: '460200',
    },
    {
      id: '6015',
      name: 'Phường nghi tân',
      district_id: '460200',
    },
    {
      id: '6016',
      name: 'Phường nghi thu',
      district_id: '460200',
    },
    {
      id: '6017',
      name: 'Phường nghi hải',
      district_id: '460200',
    },
    {
      id: '6018',
      name: 'Phường nghi hòa',
      district_id: '460200',
    },
    {
      id: '6053',
      name: 'Thị trấn diễn châu',
      district_id: '461200',
    },
    {
      id: '6054',
      name: 'Xã diễn ngọc',
      district_id: '461200',
    },
    {
      id: '6055',
      name: 'Xã diễn bích',
      district_id: '461200',
    },
    {
      id: '6056',
      name: 'Xã diễn kỷ',
      district_id: '461200',
    },
    {
      id: '6057',
      name: 'Xã diễn phúc',
      district_id: '461200',
    },
    {
      id: '6058',
      name: 'Xã diễn thịnh',
      district_id: '461200',
    },
    {
      id: '6059',
      name: 'Xã diễn thành',
      district_id: '461200',
    },
    {
      id: '6060',
      name: 'Xã diễn hồng',
      district_id: '461200',
    },
    {
      id: '6061',
      name: 'Xã diễn xuân',
      district_id: '461200',
    },
    {
      id: '6062',
      name: 'Xã diễn hoa',
      district_id: '461200',
    },
    {
      id: '6063',
      name: 'Xã diễn hạnh',
      district_id: '461200',
    },
    {
      id: '6064',
      name: 'Xã diễn tháp',
      district_id: '461200',
    },
    {
      id: '6065',
      name: 'Xã diễn đồng',
      district_id: '461200',
    },
    {
      id: '6066',
      name: 'Xã diễn an',
      district_id: '461200',
    },
    {
      id: '6067',
      name: 'Xã diễn đoài',
      district_id: '461200',
    },
    {
      id: '6068',
      name: 'Xã diễn hoàng',
      district_id: '461200',
    },
    {
      id: '6069',
      name: 'Xã diễn lâm',
      district_id: '461200',
    },
    {
      id: '6070',
      name: 'Xã diễn liên',
      district_id: '461200',
    },
    {
      id: '6071',
      name: 'Xã diễn lộc',
      district_id: '461200',
    },
    {
      id: '6072',
      name: 'Xã diễn lợi',
      district_id: '461200',
    },
    {
      id: '6073',
      name: 'Xã diễn minh',
      district_id: '461200',
    },
    {
      id: '6074',
      name: 'Xã diễn mỹ',
      district_id: '461200',
    },
    {
      id: '6075',
      name: 'Xã diễn thọ',
      district_id: '461200',
    },
    {
      id: '6076',
      name: 'Xã diễn trung',
      district_id: '461200',
    },
    {
      id: '6077',
      name: 'Xã diễn trường',
      district_id: '461200',
    },
    {
      id: '6078',
      name: 'Xã diễn cát',
      district_id: '461200',
    },
    {
      id: '6079',
      name: 'Xã diễn phú',
      district_id: '461200',
    },
    {
      id: '6080',
      name: 'Xã diễn yên',
      district_id: '461200',
    },
    {
      id: '6081',
      name: 'Xã diễn quảng',
      district_id: '461200',
    },
    {
      id: '6082',
      name: 'Xã diễn nguyên',
      district_id: '461200',
    },
    {
      id: '6083',
      name: 'Xã diễn phong',
      district_id: '461200',
    },
    {
      id: '6084',
      name: 'Xã diễn hùng',
      district_id: '461200',
    },
    {
      id: '6086',
      name: 'Xã diễn bình',
      district_id: '461200',
    },
    {
      id: '6087',
      name: 'Xã diễn tân',
      district_id: '461200',
    },
    {
      id: '6088',
      name: 'Xã diễn thắng',
      district_id: '461200',
    },
    {
      id: '6089',
      name: 'Xã diễn vạn',
      district_id: '461200',
    },
    {
      id: '6090',
      name: 'Xã diễn thái',
      district_id: '461200',
    },
    {
      id: '6091',
      name: 'Xã diễn kim',
      district_id: '461200',
    },
    {
      id: '6092',
      name: 'Xã diễn hải',
      district_id: '461200',
    },
    {
      id: '6273',
      name: 'Thị trấn đô lương',
      district_id: '461400',
    },
    {
      id: '6274',
      name: 'Xã tân sơn',
      district_id: '461400',
    },
    {
      id: '6275',
      name: 'Xã thịnh sơn',
      district_id: '461400',
    },
    {
      id: '6276',
      name: 'Xã hòa sơn',
      district_id: '461400',
    },
    {
      id: '6277',
      name: 'Xã thái sơn',
      district_id: '461400',
    },
    {
      id: '6278',
      name: 'Xã xuân sơn',
      district_id: '461400',
    },
    {
      id: '6279',
      name: 'Xã minh sơn',
      district_id: '461400',
    },
    {
      id: '6280',
      name: 'Xã lạc sơn',
      district_id: '461400',
    },
    {
      id: '6281',
      name: 'Xã quang sơn',
      district_id: '461400',
    },
    {
      id: '6282',
      name: 'Xã đà sơn',
      district_id: '461400',
    },
    {
      id: '6283',
      name: 'Xã văn sơn',
      district_id: '461400',
    },
    {
      id: '6284',
      name: 'Xã lưu sơn',
      district_id: '461400',
    },
    {
      id: '6285',
      name: 'Xã hiến sơn',
      district_id: '461400',
    },
    {
      id: '6287',
      name: 'Xã bắc sơn',
      district_id: '461400',
    },
    {
      id: '6288',
      name: 'Xã bài sơn',
      district_id: '461400',
    },
    {
      id: '6289',
      name: 'Xã bồi sơn',
      district_id: '461400',
    },
    {
      id: '6290',
      name: 'Xã đông sơn',
      district_id: '461400',
    },
    {
      id: '6291',
      name: 'Xã đại sơn',
      district_id: '461400',
    },
    {
      id: '6292',
      name: 'Xã hồng sơn',
      district_id: '461400',
    },
    {
      id: '6293',
      name: 'Xã lam sơn',
      district_id: '461400',
    },
    {
      id: '6294',
      name: 'Xã mỹ sơn',
      district_id: '461400',
    },
    {
      id: '6295',
      name: 'Xã thượng sơn',
      district_id: '461400',
    },
    {
      id: '6296',
      name: 'Xã nam sơn',
      district_id: '461400',
    },
    {
      id: '6297',
      name: 'Xã ngọc sơn',
      district_id: '461400',
    },
    {
      id: '6298',
      name: 'Xã đặng sơn',
      district_id: '461400',
    },
    {
      id: '6299',
      name: 'Xã trung sơn',
      district_id: '461400',
    },
    {
      id: '6300',
      name: 'Xã giang sơn tây',
      district_id: '461400',
    },
    {
      id: '6301',
      name: 'Xã giang sơn đông',
      district_id: '461400',
    },
    {
      id: '6302',
      name: 'Xã nhân sơn',
      district_id: '461400',
    },
    {
      id: '6303',
      name: 'Xã thuận sơn',
      district_id: '461400',
    },
    {
      id: '6304',
      name: 'Xã tràng sơn',
      district_id: '461400',
    },
    {
      id: '6305',
      name: 'Xã trù sơn',
      district_id: '461400',
    },
    {
      id: '6306',
      name: 'Xã yên sơn',
      district_id: '461400',
    },
    {
      id: '6400',
      name: 'Thị trấn hưng nguyên',
      district_id: '461800',
    },
    {
      id: '6401',
      name: 'Xã hưng tây',
      district_id: '461800',
    },
    {
      id: '6402',
      name: 'Xã hưng đạo',
      district_id: '461800',
    },
    {
      id: '6403',
      name: 'Xã hưng mỹ',
      district_id: '461800',
    },
    {
      id: '6404',
      name: 'Xã hưng thịnh',
      district_id: '461800',
    },
    {
      id: '6405',
      name: 'Xã hưng lĩnh',
      district_id: '461800',
    },
    {
      id: '6406',
      name: 'Xã hưng thông',
      district_id: '461800',
    },
    {
      id: '6407',
      name: 'Xã hưng tân',
      district_id: '461800',
    },
    {
      id: '6408',
      name: 'Xã hưng lợi',
      district_id: '461800',
    },
    {
      id: '6409',
      name: 'Xã hưng thắng',
      district_id: '461800',
    },
    {
      id: '6410',
      name: 'Xã hưng phúc',
      district_id: '461800',
    },
    {
      id: '6411',
      name: 'Xã hưng long',
      district_id: '461800',
    },
    {
      id: '6412',
      name: 'Xã hưng tiến',
      district_id: '461800',
    },
    {
      id: '6413',
      name: 'Xã hưng xá',
      district_id: '461800',
    },
    {
      id: '6415',
      name: 'Xã hưng xuân',
      district_id: '461800',
    },
    {
      id: '6417',
      name: 'Xã hưng phú',
      district_id: '461800',
    },
    {
      id: '6418',
      name: 'Xã hưng khánh',
      district_id: '461800',
    },
    {
      id: '6419',
      name: 'Xã hưng lam',
      district_id: '461800',
    },
    {
      id: '6420',
      name: 'Xã hưng trung',
      district_id: '461800',
    },
    {
      id: '6421',
      name: 'Xã hưng yên',
      district_id: '461800',
    },
    {
      id: '11944',
      name: 'Xã hưng yên bắc',
      district_id: '461800',
    },
    {
      id: '12723',
      name: 'Xã Châu Nhân',
      district_id: '461800',
    },
    {
      id: '12814',
      name: 'Xã Hưng Nghĩa',
      district_id: '461800',
    },
    {
      id: '6379',
      name: 'Thị trấn mường xén',
      district_id: '460700',
    },
    {
      id: '6380',
      name: 'Xã keng đu',
      district_id: '460700',
    },
    {
      id: '6381',
      name: 'Xã đoọc mạy',
      district_id: '460700',
    },
    {
      id: '6382',
      name: 'Xã mường lống',
      district_id: '460700',
    },
    {
      id: '6383',
      name: 'Xã phà đánh',
      district_id: '460700',
    },
    {
      id: '6384',
      name: 'Xã bảo nam',
      district_id: '460700',
    },
    {
      id: '6385',
      name: 'Xã huồi tụ',
      district_id: '460700',
    },
    {
      id: '6386',
      name: 'Xã bảo thắng',
      district_id: '460700',
    },
    {
      id: '6387',
      name: 'Xã hữu lập',
      district_id: '460700',
    },
    {
      id: '6388',
      name: 'Xã hữu kiệm',
      district_id: '460700',
    },
    {
      id: '6389',
      name: 'Xã mường ải',
      district_id: '460700',
    },
    {
      id: '6390',
      name: 'Xã tây sơn',
      district_id: '460700',
    },
    {
      id: '6391',
      name: 'Xã na ngoi',
      district_id: '460700',
    },
    {
      id: '6392',
      name: 'Xã nậm càn',
      district_id: '460700',
    },
    {
      id: '6393',
      name: 'Xã nậm cắn',
      district_id: '460700',
    },
    {
      id: '6394',
      name: 'Xã na loi',
      district_id: '460700',
    },
    {
      id: '6395',
      name: 'Xã mỹ lý',
      district_id: '460700',
    },
    {
      id: '6396',
      name: 'Xã bắc lý',
      district_id: '460700',
    },
    {
      id: '6397',
      name: 'Xã tà cạ',
      district_id: '460700',
    },
    {
      id: '6398',
      name: 'Xã chiêu lưu',
      district_id: '460700',
    },
    {
      id: '6399',
      name: 'Xã mường típ',
      district_id: '460700',
    },
    {
      id: '6019',
      name: 'Xã nghi khánh',
      district_id: '461600',
    },
    {
      id: '6020',
      name: 'Xã nghi phong',
      district_id: '461600',
    },
    {
      id: '6021',
      name: 'Xã nghi long',
      district_id: '461600',
    },
    {
      id: '6022',
      name: 'Xã nghi phương',
      district_id: '461600',
    },
    {
      id: '6023',
      name: 'Xã nghi thạch',
      district_id: '461600',
    },
    {
      id: '6024',
      name: 'Xã nghi thịnh',
      district_id: '461600',
    },
    {
      id: '6025',
      name: 'Xã nghi thuận',
      district_id: '461600',
    },
    {
      id: '6026',
      name: 'Xã nghi trung',
      district_id: '461600',
    },
    {
      id: '6027',
      name: 'Xã nghi trường',
      district_id: '461600',
    },
    {
      id: '6028',
      name: 'Xã nghi xá',
      district_id: '461600',
    },
    {
      id: '6029',
      name: 'Xã nghi yên',
      district_id: '461600',
    },
    {
      id: '6030',
      name: 'Xã nghi công bắc',
      district_id: '461600',
    },
    {
      id: '6031',
      name: 'Xã nghi công nam',
      district_id: '461600',
    },
    {
      id: '6032',
      name: 'Xã nghi đồng',
      district_id: '461600',
    },
    {
      id: '6033',
      name: 'Xã nghi hưng',
      district_id: '461600',
    },
    {
      id: '6034',
      name: 'Xã nghi kiều',
      district_id: '461600',
    },
    {
      id: '6035',
      name: 'Xã nghi lâm',
      district_id: '461600',
    },
    {
      id: '6036',
      name: 'Xã nghi mỹ',
      district_id: '461600',
    },
    {
      id: '6037',
      name: 'Xã nghi quang',
      district_id: '461600',
    },
    {
      id: '6038',
      name: 'Xã nghi thái',
      district_id: '461600',
    },
    {
      id: '6039',
      name: 'Xã nghi thiết',
      district_id: '461600',
    },
    {
      id: '6040',
      name: 'Xã nghi vạn',
      district_id: '461600',
    },
    {
      id: '6041',
      name: 'Xã nghi tiến',
      district_id: '461600',
    },
    {
      id: '6042',
      name: 'Xã nghi văn',
      district_id: '461600',
    },
    {
      id: '6043',
      name: 'Xã nghi xuân',
      district_id: '461600',
    },
    {
      id: '6044',
      name: 'Xã phúc thọ',
      district_id: '461600',
    },
    {
      id: '6045',
      name: 'Thị trấn quán hành',
      district_id: '461600',
    },
    {
      id: '6046',
      name: 'Xã nghi diên',
      district_id: '461600',
    },
    {
      id: '6047',
      name: 'Xã nghi hoa',
      district_id: '461600',
    },
    {
      id: '6048',
      name: 'Xã nghi hợp',
      district_id: '461600',
    },
    {
      id: '12813',
      name: 'Xã Khánh Hợp',
      district_id: '461600',
    },
    {
      id: '6226',
      name: 'Thị trấn quỳ hợp',
      district_id: '460400',
    },
    {
      id: '6227',
      name: 'Xã châu cường',
      district_id: '460400',
    },
    {
      id: '6228',
      name: 'Xã châu đình',
      district_id: '460400',
    },
    {
      id: '6229',
      name: 'Xã châu lộc',
      district_id: '460400',
    },
    {
      id: '6230',
      name: 'Xã châu lý',
      district_id: '460400',
    },
    {
      id: '6231',
      name: 'Xã châu quang',
      district_id: '460400',
    },
    {
      id: '6232',
      name: 'Xã châu thái',
      district_id: '460400',
    },
    {
      id: '6233',
      name: 'Xã đồng hợp',
      district_id: '460400',
    },
    {
      id: '6234',
      name: 'Xã tam hợp',
      district_id: '460400',
    },
    {
      id: '6235',
      name: 'Xã thọ hợp',
      district_id: '460400',
    },
    {
      id: '6236',
      name: 'Xã bắc sơn',
      district_id: '460400',
    },
    {
      id: '6237',
      name: 'Xã châu hồng',
      district_id: '460400',
    },
    {
      id: '6238',
      name: 'Xã châu thành',
      district_id: '460400',
    },
    {
      id: '6239',
      name: 'Xã châu tiến',
      district_id: '460400',
    },
    {
      id: '6240',
      name: 'Xã hạ sơn',
      district_id: '460400',
    },
    {
      id: '6241',
      name: 'Xã liên hợp',
      district_id: '460400',
    },
    {
      id: '6242',
      name: 'Xã minh hợp',
      district_id: '460400',
    },
    {
      id: '6243',
      name: 'Xã nam sơn',
      district_id: '460400',
    },
    {
      id: '6244',
      name: 'Xã nghĩa xuân',
      district_id: '460400',
    },
    {
      id: '6245',
      name: 'Xã văn lợi',
      district_id: '460400',
    },
    {
      id: '6246',
      name: 'Xã yên hợp',
      district_id: '460400',
    },
    {
      id: '6096',
      name: 'Xã quỳnh long',
      district_id: '460600',
    },
    {
      id: '6097',
      name: 'Xã quỳnh lương',
      district_id: '460600',
    },
    {
      id: '6098',
      name: 'Xã quỳnh minh',
      district_id: '460600',
    },
    {
      id: '6100',
      name: 'Xã an hòa',
      district_id: '460600',
    },
    {
      id: '6101',
      name: 'Xã quỳnh bá',
      district_id: '460600',
    },
    {
      id: '6103',
      name: 'Xã quỳnh diện',
      district_id: '460600',
    },
    {
      id: '6104',
      name: 'Xã quỳnh giang',
      district_id: '460600',
    },
    {
      id: '6105',
      name: 'Xã quỳnh hậu',
      district_id: '460600',
    },
    {
      id: '6106',
      name: 'Xã quỳnh hoa',
      district_id: '460600',
    },
    {
      id: '6107',
      name: 'Xã quỳnh hồng',
      district_id: '460600',
    },
    {
      id: '6108',
      name: 'Xã quỳnh hưng',
      district_id: '460600',
    },
    {
      id: '6109',
      name: 'Xã quỳnh lâm',
      district_id: '460600',
    },
    {
      id: '6110',
      name: 'Xã quỳnh thạch',
      district_id: '460600',
    },
    {
      id: '6111',
      name: 'Xã quỳnh văn',
      district_id: '460600',
    },
    {
      id: '6112',
      name: 'Xã quỳnh yên',
      district_id: '460600',
    },
    {
      id: '6113',
      name: 'Xã sơn hài',
      district_id: '460600',
    },
    {
      id: '6114',
      name: 'Thị trấn cầu giát',
      district_id: '460600',
    },
    {
      id: '6116',
      name: 'Xã ngọc sơn',
      district_id: '460600',
    },
    {
      id: '6117',
      name: 'Xã quỳnh bảng',
      district_id: '460600',
    },
    {
      id: '6118',
      name: 'Xã quỳnh châu',
      district_id: '460600',
    },
    {
      id: '6119',
      name: 'Xã quỳnh đôi',
      district_id: '460600',
    },
    {
      id: '6120',
      name: 'Xã tân sơn',
      district_id: '460600',
    },
    {
      id: '6121',
      name: 'Xã tân thắng',
      district_id: '460600',
    },
    {
      id: '6122',
      name: 'Xã tiến thủy',
      district_id: '460600',
    },
    {
      id: '6125',
      name: 'Xã quỳnh mỹ',
      district_id: '460600',
    },
    {
      id: '6126',
      name: 'Xã quỳnh nghĩa',
      district_id: '460600',
    },
    {
      id: '6127',
      name: 'Xã quỳnh ngọc',
      district_id: '460600',
    },
    {
      id: '6129',
      name: 'Xã quỳnh tam',
      district_id: '460600',
    },
    {
      id: '6130',
      name: 'Xã quỳnh tân',
      district_id: '460600',
    },
    {
      id: '6131',
      name: 'Xã quỳnh thắng',
      district_id: '460600',
    },
    {
      id: '6132',
      name: 'Xã quỳnh thanh',
      district_id: '460600',
    },
    {
      id: '6134',
      name: 'Xã quỳnh thọ',
      district_id: '460600',
    },
    {
      id: '6135',
      name: 'Xã quỳnh thuận',
      district_id: '460600',
    },
    {
      id: '12561',
      name: 'Xã Sơn Hải',
      district_id: '460600',
    },
    {
      id: '6204',
      name: 'Thị trấn tân kỳ',
      district_id: '461000',
    },
    {
      id: '6205',
      name: 'Xã kỳ sơn',
      district_id: '461000',
    },
    {
      id: '6206',
      name: 'Xã kỳ tân',
      district_id: '461000',
    },
    {
      id: '6207',
      name: 'Xã nghĩa dũng',
      district_id: '461000',
    },
    {
      id: '6208',
      name: 'Xã nghĩa hành',
      district_id: '461000',
    },
    {
      id: '6209',
      name: 'Xã tân long',
      district_id: '461000',
    },
    {
      id: '6210',
      name: 'Xã tân hương',
      district_id: '461000',
    },
    {
      id: '6211',
      name: 'Xã đồng văn',
      district_id: '461000',
    },
    {
      id: '6212',
      name: 'Xã giai xuân',
      district_id: '461000',
    },
    {
      id: '6213',
      name: 'Xã hương sơn',
      district_id: '461000',
    },
    {
      id: '6214',
      name: 'Xã nghĩa bình',
      district_id: '461000',
    },
    {
      id: '6215',
      name: 'Xã nghĩa đồng',
      district_id: '461000',
    },
    {
      id: '6216',
      name: 'Xã nghĩa hoàn',
      district_id: '461000',
    },
    {
      id: '6217',
      name: 'Xã nghĩa hợp',
      district_id: '461000',
    },
    {
      id: '6218',
      name: 'Xã nghĩa phúc',
      district_id: '461000',
    },
    {
      id: '6219',
      name: 'Xã nghĩa thái',
      district_id: '461000',
    },
    {
      id: '6220',
      name: 'Xã phú sơn',
      district_id: '461000',
    },
    {
      id: '6221',
      name: 'Xã tân an',
      district_id: '461000',
    },
    {
      id: '6222',
      name: 'Xã tân hợp',
      district_id: '461000',
    },
    {
      id: '6223',
      name: 'Xã tân phú',
      district_id: '461000',
    },
    {
      id: '6224',
      name: 'Xã tân xuân',
      district_id: '461000',
    },
    {
      id: '6225',
      name: 'Xã tiên kỳ',
      district_id: '461000',
    },
    {
      id: '6308',
      name: 'Xã nghĩa hòa',
      district_id: '462000',
    },
    {
      id: '6309',
      name: 'Xã tây hiếu',
      district_id: '462000',
    },
    {
      id: '6310',
      name: 'Phường quang phong',
      district_id: '462000',
    },
    {
      id: '6311',
      name: 'Phường quang tiến',
      district_id: '462000',
    },
    {
      id: '6312',
      name: 'Phường long sơn',
      district_id: '462000',
    },
    {
      id: '6313',
      name: 'Xã nghĩa tiến',
      district_id: '462000',
    },
    {
      id: '6314',
      name: 'Xã nghĩa mỹ',
      district_id: '462000',
    },
    {
      id: '6315',
      name: 'Xã nghĩa thuận',
      district_id: '462000',
    },
    {
      id: '6316',
      name: 'Xã đông hiếu',
      district_id: '462000',
    },
    {
      id: '6317',
      name: 'Phường hòa hiếu',
      district_id: '462000',
    },
    {
      id: '6448',
      name: 'Xã thanh xuân',
      district_id: '461500',
    },
    {
      id: '6449',
      name: 'Xã thanh yên',
      district_id: '461500',
    },
    {
      id: '6451',
      name: 'Xã thanh đồng',
      district_id: '461500',
    },
    {
      id: '6452',
      name: 'Xã thanh lĩnh',
      district_id: '461500',
    },
    {
      id: '6453',
      name: 'Xã thanh tiên',
      district_id: '461500',
    },
    {
      id: '6454',
      name: 'Xã thanh hưng',
      district_id: '461500',
    },
    {
      id: '6455',
      name: 'Xã thanh văn',
      district_id: '461500',
    },
    {
      id: '6456',
      name: 'Xã đồng văn',
      district_id: '461500',
    },
    {
      id: '6457',
      name: 'Xã thanh ngọc',
      district_id: '461500',
    },
    {
      id: '6458',
      name: 'Xã ngọc sơn',
      district_id: '461500',
    },
    {
      id: '6459',
      name: 'Xã thanh hương',
      district_id: '461500',
    },
    {
      id: '6460',
      name: 'Xã thanh thịnh',
      district_id: '461500',
    },
    {
      id: '6461',
      name: 'Xã cát văn',
      district_id: '461500',
    },
    {
      id: '6462',
      name: 'Xã phong thịnh',
      district_id: '461500',
    },
    {
      id: '6463',
      name: 'Xã thanh an',
      district_id: '461500',
    },
    {
      id: '6464',
      name: 'Xã thanh chi',
      district_id: '461500',
    },
    {
      id: '6466',
      name: 'Xã thanh đức',
      district_id: '461500',
    },
    {
      id: '6467',
      name: 'Xã thanh dương',
      district_id: '461500',
    },
    {
      id: '6468',
      name: 'Xã thanh giang',
      district_id: '461500',
    },
    {
      id: '6470',
      name: 'Xã thanh hà',
      district_id: '461500',
    },
    {
      id: '6471',
      name: 'Xã thanh khai',
      district_id: '461500',
    },
    {
      id: '6472',
      name: 'Xã thanh khê',
      district_id: '461500',
    },
    {
      id: '6473',
      name: 'Xã thanh lâm',
      district_id: '461500',
    },
    {
      id: '6474',
      name: 'Xã thanh liên',
      district_id: '461500',
    },
    {
      id: '6475',
      name: 'Xã thanh phong',
      district_id: '461500',
    },
    {
      id: '6476',
      name: 'Xã thanh lương',
      district_id: '461500',
    },
    {
      id: '6477',
      name: 'Xã thanh mai',
      district_id: '461500',
    },
    {
      id: '6478',
      name: 'Xã thanh mỹ',
      district_id: '461500',
    },
    {
      id: '6479',
      name: 'Xã thanh nho',
      district_id: '461500',
    },
    {
      id: '6480',
      name: 'Xã thanh thủy',
      district_id: '461500',
    },
    {
      id: '6481',
      name: 'Xã thanh tùng',
      district_id: '461500',
    },
    {
      id: '6483',
      name: 'Xã thanh tường',
      district_id: '461500',
    },
    {
      id: '6484',
      name: 'Xã hạnh lâm',
      district_id: '461500',
    },
    {
      id: '6486',
      name: 'Xã thanh long',
      district_id: '461500',
    },
    {
      id: '6487',
      name: 'Xã thanh sơn',
      district_id: '461500',
    },
    {
      id: '6488',
      name: 'Xã thanh hòa',
      district_id: '461500',
    },
    {
      id: '6489',
      name: 'Xã võ liệt',
      district_id: '461500',
    },
    {
      id: '6490',
      name: 'Xã ngọc lâm',
      district_id: '461500',
    },
    {
      id: '11947',
      name: 'Thị trấn thanh chương',
      district_id: '461500',
    },
    {
      id: '11948',
      name: 'Xã xuân tường',
      district_id: '461500',
    },
    {
      id: '5987',
      name: 'Phường cửa nam',
      district_id: '460100',
    },
    {
      id: '5988',
      name: 'Phường đội cung',
      district_id: '460100',
    },
    {
      id: '5989',
      name: 'Phường đông vĩnh',
      district_id: '460100',
    },
    {
      id: '5990',
      name: 'Phường hà huy tập',
      district_id: '460100',
    },
    {
      id: '5991',
      name: 'Phường hồng sơn',
      district_id: '460100',
    },
    {
      id: '5992',
      name: 'Phường hưng bình',
      district_id: '460100',
    },
    {
      id: '5993',
      name: 'Xã hưng đông',
      district_id: '460100',
    },
    {
      id: '5994',
      name: 'Phường hưng dũng',
      district_id: '460100',
    },
    {
      id: '5995',
      name: 'Xã hưng hoà',
      district_id: '460100',
    },
    {
      id: '5996',
      name: 'Xã Hưng Lộc',
      district_id: '460100',
    },
    {
      id: '5997',
      name: 'Phường hưng phúc',
      district_id: '460100',
    },
    {
      id: '5998',
      name: 'Phường lê lợi',
      district_id: '460100',
    },
    {
      id: '5999',
      name: 'Phường trường thi',
      district_id: '460100',
    },
    {
      id: '6000',
      name: 'Phường vinh tân',
      district_id: '460100',
    },
    {
      id: '6001',
      name: 'Xã nghi ân',
      district_id: '460100',
    },
    {
      id: '6002',
      name: 'Xã nghi phú',
      district_id: '460100',
    },
    {
      id: '6003',
      name: 'Xã nghi đức',
      district_id: '460100',
    },
    {
      id: '6004',
      name: 'Xã nghi liên',
      district_id: '460100',
    },
    {
      id: '6005',
      name: 'Phường bến thủy',
      district_id: '460100',
    },
    {
      id: '6006',
      name: 'Phường lê mao',
      district_id: '460100',
    },
    {
      id: '6007',
      name: 'Xã nghi kim',
      district_id: '460100',
    },
    {
      id: '6008',
      name: 'Phường quán bàu',
      district_id: '460100',
    },
    {
      id: '6009',
      name: 'Phường quang trung',
      district_id: '460100',
    },
    {
      id: '6010',
      name: 'Phường trung đô',
      district_id: '460100',
    },
    {
      id: '6011',
      name: 'Xã hưng chính',
      district_id: '460100',
    },
    {
      id: '6139',
      name: 'Xã khánh thành',
      district_id: '461100',
    },
    {
      id: '6140',
      name: 'Xã long thành',
      district_id: '461100',
    },
    {
      id: '6141',
      name: 'Xã tăng thành',
      district_id: '461100',
    },
    {
      id: '6142',
      name: 'Xã trung thành',
      district_id: '461100',
    },
    {
      id: '6143',
      name: 'Xã bảo thành',
      district_id: '461100',
    },
    {
      id: '6144',
      name: 'Xã công thành',
      district_id: '461100',
    },
    {
      id: '6145',
      name: 'Xã đại thành',
      district_id: '461100',
    },
    {
      id: '6146',
      name: 'Xã đô thành',
      district_id: '461100',
    },
    {
      id: '6147',
      name: 'Xã đồng thành',
      district_id: '461100',
    },
    {
      id: '6148',
      name: 'Xã đức thành',
      district_id: '461100',
    },
    {
      id: '6149',
      name: 'Xã hậu thành',
      district_id: '461100',
    },
    {
      id: '6150',
      name: 'Xã hồng thành',
      district_id: '461100',
    },
    {
      id: '6151',
      name: 'Xã kim thành',
      district_id: '461100',
    },
    {
      id: '6152',
      name: 'Xã lăng thành',
      district_id: '461100',
    },
    {
      id: '6153',
      name: 'Xã liên thành',
      district_id: '461100',
    },
    {
      id: '6154',
      name: 'Xã lý thành',
      district_id: '461100',
    },
    {
      id: '6155',
      name: 'Xã mã thành',
      district_id: '461100',
    },
    {
      id: '6156',
      name: 'Xã minh thành',
      district_id: '461100',
    },
    {
      id: '6157',
      name: 'Xã bắc thành',
      district_id: '461100',
    },
    {
      id: '6158',
      name: 'Thị trấn yên thành',
      district_id: '461100',
    },
    {
      id: '6159',
      name: 'Xã hoa thành',
      district_id: '461100',
    },
    {
      id: '6160',
      name: 'Xã hợp thành',
      district_id: '461100',
    },
    {
      id: '6161',
      name: 'Xã mỹ thành',
      district_id: '461100',
    },
    {
      id: '6162',
      name: 'Xã nam thành',
      district_id: '461100',
    },
    {
      id: '6163',
      name: 'Xã nhân thành',
      district_id: '461100',
    },
    {
      id: '6164',
      name: 'Xã phú thành',
      district_id: '461100',
    },
    {
      id: '6165',
      name: 'Xã phúc thành',
      district_id: '461100',
    },
    {
      id: '6166',
      name: 'Xã quang thành',
      district_id: '461100',
    },
    {
      id: '6167',
      name: 'Xã sơn thành',
      district_id: '461100',
    },
    {
      id: '6168',
      name: 'Xã tân thành',
      district_id: '461100',
    },
    {
      id: '6169',
      name: 'Xã tây thành',
      district_id: '461100',
    },
    {
      id: '6170',
      name: 'Xã thịnh thành',
      district_id: '461100',
    },
    {
      id: '6171',
      name: 'Xã thọ thành',
      district_id: '461100',
    },
    {
      id: '6172',
      name: 'Xã văn thành',
      district_id: '461100',
    },
    {
      id: '6173',
      name: 'Xã viên thành',
      district_id: '461100',
    },
    {
      id: '6174',
      name: 'Xã vĩnh thành',
      district_id: '461100',
    },
    {
      id: '6175',
      name: 'Xã hùng thành',
      district_id: '461100',
    },
    {
      id: '6176',
      name: 'Xã xuân thành',
      district_id: '461100',
    },
    {
      id: '6177',
      name: 'Xã tiến thành',
      district_id: '461100',
    },
    {
      id: '6259',
      name: 'Xã quế sơn',
      district_id: '461900',
    },
    {
      id: '6260',
      name: 'Xã tri lễ',
      district_id: '461900',
    },
    {
      id: '6261',
      name: 'Xã thông thụ',
      district_id: '461900',
    },
    {
      id: '6262',
      name: 'Xã tiền phong',
      district_id: '461900',
    },
    {
      id: '6263',
      name: 'Xã cắm muộn',
      district_id: '461900',
    },
    {
      id: '6265',
      name: 'Xã hạnh dịch',
      district_id: '461900',
    },
    {
      id: '6266',
      name: 'Xã châu thôn',
      district_id: '461900',
    },
    {
      id: '6267',
      name: 'Xã châu kim',
      district_id: '461900',
    },
    {
      id: '6268',
      name: 'Thị trấn kim sơn',
      district_id: '461900',
    },
    {
      id: '6269',
      name: 'Xã nậm giải',
      district_id: '461900',
    },
    {
      id: '6270',
      name: 'Xã nậm nhoóng',
      district_id: '461900',
    },
    {
      id: '6271',
      name: 'Xã quang phong',
      district_id: '461900',
    },
    {
      id: '6272',
      name: 'Xã đồng văn',
      district_id: '461900',
    },
    {
      id: '11945',
      name: 'Xã mường nọc',
      district_id: '461900',
    },
    {
      id: '6247',
      name: 'Xã châu bính',
      district_id: '460300',
    },
    {
      id: '6248',
      name: 'Xã châu hội',
      district_id: '460300',
    },
    {
      id: '6249',
      name: 'Xã châu nga',
      district_id: '460300',
    },
    {
      id: '6250',
      name: 'Xã châu thắng',
      district_id: '460300',
    },
    {
      id: '6251',
      name: 'Xã châu hoàn',
      district_id: '460300',
    },
    {
      id: '6253',
      name: 'Xã châu thuận',
      district_id: '460300',
    },
    {
      id: '6254',
      name: 'Xã châu tiến',
      district_id: '460300',
    },
    {
      id: '6255',
      name: 'Xã châu hạnh',
      district_id: '460300',
    },
    {
      id: '6256',
      name: 'Xã diên lãm',
      district_id: '460300',
    },
    {
      id: '6257',
      name: 'Xã châu phong',
      district_id: '460300',
    },
    {
      id: '6258',
      name: 'Xã châu bình',
      district_id: '460300',
    },
    {
      id: '11943',
      name: 'Thị trấn tân lạc',
      district_id: '460300',
    },
    {
      id: '6357',
      name: 'Xã tam quang',
      district_id: '460800',
    },
    {
      id: '6358',
      name: 'Xã lưu kiền',
      district_id: '460800',
    },
    {
      id: '6359',
      name: 'Xã lượng minh',
      district_id: '460800',
    },
    {
      id: '6360',
      name: 'Xã tam đình',
      district_id: '460800',
    },
    {
      id: '6361',
      name: 'Thị trấn hòa bình',
      district_id: '460800',
    },
    {
      id: '6362',
      name: 'Xã tam thái',
      district_id: '460800',
    },
    {
      id: '6363',
      name: 'Xã tam hợp',
      district_id: '460800',
    },
    {
      id: '6364',
      name: 'Xã mai sơn',
      district_id: '460800',
    },
    {
      id: '6365',
      name: 'Xã yên tĩnh',
      district_id: '460800',
    },
    {
      id: '6366',
      name: 'Xã yên thắng',
      district_id: '460800',
    },
    {
      id: '6367',
      name: 'Xã nga my',
      district_id: '460800',
    },
    {
      id: '6372',
      name: 'Xã thạch giám',
      district_id: '460800',
    },
    {
      id: '6373',
      name: 'Xã xá lượng',
      district_id: '460800',
    },
    {
      id: '6374',
      name: 'Xã hữu khuông',
      district_id: '460800',
    },
    {
      id: '6375',
      name: 'Xã nhôn mai',
      district_id: '460800',
    },
    {
      id: '6376',
      name: 'Xã yên na',
      district_id: '460800',
    },
    {
      id: '6377',
      name: 'Xã yên hòa',
      district_id: '460800',
    },
    {
      id: '6378',
      name: 'Xã xiêng my',
      district_id: '460800',
    },
    {
      id: '5212',
      name: 'Xã gia hoà',
      district_id: '430400',
    },
    {
      id: '5213',
      name: 'Xã gia hưng',
      district_id: '430400',
    },
    {
      id: '5214',
      name: 'Xã gia lạc',
      district_id: '430400',
    },
    {
      id: '5215',
      name: 'Xã gia lập',
      district_id: '430400',
    },
    {
      id: '5216',
      name: 'Xã gia phú',
      district_id: '430400',
    },
    {
      id: '5217',
      name: 'Xã gia phương',
      district_id: '430400',
    },
    {
      id: '5218',
      name: 'Xã Gia Thành',
      district_id: '430400',
    },
    {
      id: '5219',
      name: 'Xã gia trấn',
      district_id: '430400',
    },
    {
      id: '5220',
      name: 'Xã gia vân',
      district_id: '430400',
    },
    {
      id: '5221',
      name: 'Xã gia vượng',
      district_id: '430400',
    },
    {
      id: '5222',
      name: 'Xã gia xuân',
      district_id: '430400',
    },
    {
      id: '5223',
      name: 'Thị Trấn Me',
      district_id: '430400',
    },
    {
      id: '5224',
      name: 'Xã gia minh',
      district_id: '430400',
    },
    {
      id: '5225',
      name: 'Xã gia phong',
      district_id: '430400',
    },
    {
      id: '5226',
      name: 'Xã gia sinh',
      district_id: '430400',
    },
    {
      id: '5227',
      name: 'Xã gia tân',
      district_id: '430400',
    },
    {
      id: '5228',
      name: 'Xã gia thắng',
      district_id: '430400',
    },
    {
      id: '5229',
      name: 'Xã gia thịnh',
      district_id: '430400',
    },
    {
      id: '5230',
      name: 'Xã gia tiến',
      district_id: '430400',
    },
    {
      id: '5231',
      name: 'Xã gia trung',
      district_id: '430400',
    },
    {
      id: '5232',
      name: 'Xã liên sơn',
      district_id: '430400',
    },
    {
      id: '5289',
      name: 'Xã lưu phương',
      district_id: '430700',
    },
    {
      id: '5291',
      name: 'Xã như hòa',
      district_id: '430700',
    },
    {
      id: '5292',
      name: 'Xã quang thiện',
      district_id: '430700',
    },
    {
      id: '5293',
      name: 'Xã tân thành',
      district_id: '430700',
    },
    {
      id: '5295',
      name: 'Xã thượng kiêm',
      district_id: '430700',
    },
    {
      id: '5296',
      name: 'Thị trấn bình minh',
      district_id: '430700',
    },
    {
      id: '5297',
      name: 'Thị trấn phát diệm',
      district_id: '430700',
    },
    {
      id: '5298',
      name: 'Xã văn hải',
      district_id: '430700',
    },
    {
      id: '5300',
      name: 'Xã yên lộc',
      district_id: '430700',
    },
    {
      id: '5301',
      name: 'Xã yên mật',
      district_id: '430700',
    },
    {
      id: '5302',
      name: 'Xã đồng hướng',
      district_id: '430700',
    },
    {
      id: '5303',
      name: 'Xã ân Hoà',
      district_id: '430700',
    },
    {
      id: '5304',
      name: 'Xã chất bình',
      district_id: '430700',
    },
    {
      id: '5305',
      name: 'Xã chính tâm',
      district_id: '430700',
    },
    {
      id: '5306',
      name: 'Xã cồn thoi',
      district_id: '430700',
    },
    {
      id: '5307',
      name: 'Xã định hoá',
      district_id: '430700',
    },
    {
      id: '5308',
      name: 'Xã hồi ninh',
      district_id: '430700',
    },
    {
      id: '5309',
      name: 'Xã hùng tiến',
      district_id: '430700',
    },
    {
      id: '5310',
      name: 'Xã kim chính',
      district_id: '430700',
    },
    {
      id: '5311',
      name: 'Xã kim định',
      district_id: '430700',
    },
    {
      id: '5312',
      name: 'Xã Kim động',
      district_id: '430700',
    },
    {
      id: '5313',
      name: 'Xã kim hải',
      district_id: '430700',
    },
    {
      id: '5314',
      name: 'Xã kim mỹ',
      district_id: '430700',
    },
    {
      id: '5315',
      name: 'Xã kim tân',
      district_id: '430700',
    },
    {
      id: '5316',
      name: 'Xã kim trung',
      district_id: '430700',
    },
    {
      id: '5317',
      name: 'Xã lai thành',
      district_id: '430700',
    },
    {
      id: '11806',
      name: 'Xã xuân thiện',
      district_id: '430700',
    },
    {
      id: '5234',
      name: 'Xã cúc phương',
      district_id: '430300',
    },
    {
      id: '5235',
      name: 'Xã đồng phong',
      district_id: '430300',
    },
    {
      id: '5236',
      name: 'Xã đức long',
      district_id: '430300',
    },
    {
      id: '5237',
      name: 'Xã gia sơn',
      district_id: '430300',
    },
    {
      id: '5238',
      name: 'Xã kỳ phú',
      district_id: '430300',
    },
    {
      id: '5239',
      name: 'Xã gia lâm',
      district_id: '430300',
    },
    {
      id: '5240',
      name: 'Xã gia tường',
      district_id: '430300',
    },
    {
      id: '5241',
      name: 'Xã lạc vân',
      district_id: '430300',
    },
    {
      id: '5243',
      name: 'Xã gia thuỷ',
      district_id: '430300',
    },
    {
      id: '5244',
      name: 'Xã phú lộc',
      district_id: '430300',
    },
    {
      id: '5245',
      name: 'Xã phú long',
      district_id: '430300',
    },
    {
      id: '5246',
      name: 'Xã phú sơn',
      district_id: '430300',
    },
    {
      id: '5247',
      name: 'Xã quảng lạc',
      district_id: '430300',
    },
    {
      id: '5248',
      name: 'Xã quỳnh lưu',
      district_id: '430300',
    },
    {
      id: '5249',
      name: 'Xã sơn hà',
      district_id: '430300',
    },
    {
      id: '5250',
      name: 'Xã sơn lai',
      district_id: '430300',
    },
    {
      id: '5251',
      name: 'Xã sơn thành',
      district_id: '430300',
    },
    {
      id: '5252',
      name: 'Xã thạch bình',
      district_id: '430300',
    },
    {
      id: '5253',
      name: 'Xã thanh lạc',
      district_id: '430300',
    },
    {
      id: '5254',
      name: 'Xã thượng hòa',
      district_id: '430300',
    },
    {
      id: '5255',
      name: 'Thị trấn nho quan',
      district_id: '430300',
    },
    {
      id: '5256',
      name: 'Xã văn phong',
      district_id: '430300',
    },
    {
      id: '5257',
      name: 'Xã văn phú',
      district_id: '430300',
    },
    {
      id: '5258',
      name: 'Xã văn phương',
      district_id: '430300',
    },
    {
      id: '5259',
      name: 'Xã xích thổ',
      district_id: '430300',
    },
    {
      id: '5260',
      name: 'Xã yên quang',
      district_id: '430300',
    },
    {
      id: '11805',
      name: 'Xã lạng phong',
      district_id: '430300',
    },
    {
      id: '5181',
      name: 'Phường bích đào',
      district_id: '430100',
    },
    {
      id: '5182',
      name: 'Phường đông thành',
      district_id: '430100',
    },
    {
      id: '5183',
      name: 'Phường nam bình',
      district_id: '430100',
    },
    {
      id: '5184',
      name: 'Phường nam thành',
      district_id: '430100',
    },
    {
      id: '5185',
      name: 'Phường ninh khánh',
      district_id: '430100',
    },
    {
      id: '5187',
      name: 'Phường ninh phong',
      district_id: '430100',
    },
    {
      id: '5189',
      name: 'Phường ninh sơn',
      district_id: '430100',
    },
    {
      id: '5191',
      name: 'Phường phúc thành',
      district_id: '430100',
    },
    {
      id: '5193',
      name: 'Phường tân thành',
      district_id: '430100',
    },
    {
      id: '5194',
      name: 'Phường thanh bình',
      district_id: '430100',
    },
    {
      id: '5195',
      name: 'Phường vân giang',
      district_id: '430100',
    },
    {
      id: '11808',
      name: 'Xã ninh nhất',
      district_id: '430100',
    },
    {
      id: '11809',
      name: 'Xã ninh phúc',
      district_id: '430100',
    },
    {
      id: '11810',
      name: 'Xã ninh tiến',
      district_id: '430100',
    },
    {
      id: '5261',
      name: 'Phường bắc sơn',
      district_id: '430200',
    },
    {
      id: '5262',
      name: 'Xã đông sơn',
      district_id: '430200',
    },
    {
      id: '5263',
      name: 'Phường nam sơn',
      district_id: '430200',
    },
    {
      id: '5264',
      name: 'Xã quang sơn',
      district_id: '430200',
    },
    {
      id: '5265',
      name: 'Phường tân bình',
      district_id: '430200',
    },
    {
      id: '5266',
      name: 'Phường tây sơn',
      district_id: '430200',
    },
    {
      id: '5267',
      name: 'Phường trung sơn',
      district_id: '430200',
    },
    {
      id: '5268',
      name: 'Phường yên bình',
      district_id: '430200',
    },
    {
      id: '11807',
      name: 'Xã yên sơn',
      district_id: '430200',
    },
    {
      id: '5198',
      name: 'Xã ninh giang',
      district_id: '430500',
    },
    {
      id: '5199',
      name: 'Xã ninh hoà',
      district_id: '430500',
    },
    {
      id: '5200',
      name: 'Xã ninh khang',
      district_id: '430500',
    },
    {
      id: '5202',
      name: 'Xã ninh mỹ',
      district_id: '430500',
    },
    {
      id: '5204',
      name: 'Xã ninh thắng',
      district_id: '430500',
    },
    {
      id: '5205',
      name: 'Xã ninh xuân',
      district_id: '430500',
    },
    {
      id: '5206',
      name: 'Xã trường yên',
      district_id: '430500',
    },
    {
      id: '5207',
      name: 'Thị trấn thiên tôn',
      district_id: '430500',
    },
    {
      id: '5209',
      name: 'Xã ninh hải',
      district_id: '430500',
    },
    {
      id: '5210',
      name: 'Xã ninh vân',
      district_id: '430500',
    },
    {
      id: '5211',
      name: 'Xã ninh an',
      district_id: '430500',
    },
    {
      id: '5318',
      name: 'Xã khánh an',
      district_id: '430800',
    },
    {
      id: '5319',
      name: 'Xã khánh cư',
      district_id: '430800',
    },
    {
      id: '5320',
      name: 'Xã khánh hải',
      district_id: '430800',
    },
    {
      id: '5321',
      name: 'Xã Khánh Hòa',
      district_id: '430800',
    },
    {
      id: '5322',
      name: 'Xã khánh nhạc',
      district_id: '430800',
    },
    {
      id: '5323',
      name: 'Xã khánh phú',
      district_id: '430800',
    },
    {
      id: '5324',
      name: 'Xã khánh vân',
      district_id: '430800',
    },
    {
      id: '5325',
      name: 'Thị trấn yên ninh',
      district_id: '430800',
    },
    {
      id: '5326',
      name: 'Xã khánh công',
      district_id: '430800',
    },
    {
      id: '5327',
      name: 'Xã khánh cường',
      district_id: '430800',
    },
    {
      id: '5328',
      name: 'Xã khánh hội',
      district_id: '430800',
    },
    {
      id: '5329',
      name: 'Xã khánh hồng',
      district_id: '430800',
    },
    {
      id: '5330',
      name: 'Xã khánh lợi',
      district_id: '430800',
    },
    {
      id: '5331',
      name: 'Xã khánh mậu',
      district_id: '430800',
    },
    {
      id: '5333',
      name: 'Xã khánh thành',
      district_id: '430800',
    },
    {
      id: '5334',
      name: 'Xã khánh thiện',
      district_id: '430800',
    },
    {
      id: '5335',
      name: 'Xã khánh thuỷ',
      district_id: '430800',
    },
    {
      id: '5336',
      name: 'Xã khánh tiên',
      district_id: '430800',
    },
    {
      id: '5337',
      name: 'Xã khánh trung',
      district_id: '430800',
    },
    {
      id: '5270',
      name: 'Xã khánh dương',
      district_id: '430600',
    },
    {
      id: '5271',
      name: 'Xã khánh thịnh',
      district_id: '430600',
    },
    {
      id: '5272',
      name: 'Thị trấn yên thịnh',
      district_id: '430600',
    },
    {
      id: '5273',
      name: 'Xã yên hoà',
      district_id: '430600',
    },
    {
      id: '5274',
      name: 'Xã yên hưng',
      district_id: '430600',
    },
    {
      id: '5275',
      name: 'Xã yên lâm',
      district_id: '430600',
    },
    {
      id: '5276',
      name: 'Xã yên mạc',
      district_id: '430600',
    },
    {
      id: '5277',
      name: 'Xã yên mỹ',
      district_id: '430600',
    },
    {
      id: '5278',
      name: 'Xã yên nhân',
      district_id: '430600',
    },
    {
      id: '5279',
      name: 'Xã yên phong',
      district_id: '430600',
    },
    {
      id: '5281',
      name: 'Xã yên từ',
      district_id: '430600',
    },
    {
      id: '5282',
      name: 'Xã khánh thượng',
      district_id: '430600',
    },
    {
      id: '5283',
      name: 'Xã mai sơn',
      district_id: '430600',
    },
    {
      id: '5284',
      name: 'Xã yên đông',
      district_id: '430600',
    },
    {
      id: '5285',
      name: 'Xã yên thái',
      district_id: '430600',
    },
    {
      id: '5286',
      name: 'Xã yên thắng',
      district_id: '430600',
    },
    {
      id: '5287',
      name: 'Xã yên thành',
      district_id: '430600',
    },
    {
      id: '8782',
      name: 'Thị trấn tân sơn',
      district_id: '660200',
    },
    {
      id: '8783',
      name: 'Xã lương sơn',
      district_id: '660200',
    },
    {
      id: '8784',
      name: 'Xã quảng sơn',
      district_id: '660200',
    },
    {
      id: '8785',
      name: 'Xã hòa sơn',
      district_id: '660200',
    },
    {
      id: '8786',
      name: 'Xã nhơn sơn',
      district_id: '660200',
    },
    {
      id: '8787',
      name: 'Xã lâm sơn',
      district_id: '660200',
    },
    {
      id: '8788',
      name: 'Xã mỹ sơn',
      district_id: '660200',
    },
    {
      id: '8789',
      name: 'Xã ma nới',
      district_id: '660200',
    },
    {
      id: '8767',
      name: 'Xã phước tân',
      district_id: '660500',
    },
    {
      id: '8768',
      name: 'Xã phước chính',
      district_id: '660500',
    },
    {
      id: '8769',
      name: 'Xã phước bình',
      district_id: '660500',
    },
    {
      id: '8770',
      name: 'Xã phước hòa',
      district_id: '660500',
    },
    {
      id: '8771',
      name: 'Xã phước tiến',
      district_id: '660500',
    },
    {
      id: '8772',
      name: 'Xã phước thành',
      district_id: '660500',
    },
    {
      id: '8773',
      name: 'Xã phước thắng',
      district_id: '660500',
    },
    {
      id: '8774',
      name: 'Xã phước trung',
      district_id: '660500',
    },
    {
      id: '8775',
      name: 'Xã phước đại',
      district_id: '660500',
    },
    {
      id: '8758',
      name: 'Thị trấn khánh hải',
      district_id: '660300',
    },
    {
      id: '8759',
      name: 'Xã hộ hải',
      district_id: '660300',
    },
    {
      id: '8760',
      name: 'Xã nhơn hải',
      district_id: '660300',
    },
    {
      id: '8761',
      name: 'Xã phương hải',
      district_id: '660300',
    },
    {
      id: '8762',
      name: 'Xã thanh hải',
      district_id: '660300',
    },
    {
      id: '8763',
      name: 'Xã tri hải',
      district_id: '660300',
    },
    {
      id: '8764',
      name: 'Xã tân hải',
      district_id: '660300',
    },
    {
      id: '8765',
      name: 'Xã vĩnh hải',
      district_id: '660300',
    },
    {
      id: '8766',
      name: 'Xã xuân hải',
      district_id: '660300',
    },
    {
      id: '8790',
      name: 'Thị trấn phước dân',
      district_id: '660400',
    },
    {
      id: '8791',
      name: 'Xã phước thái',
      district_id: '660400',
    },
    {
      id: '8792',
      name: 'Xã phước hậu',
      district_id: '660400',
    },
    {
      id: '8793',
      name: 'Xã an hải',
      district_id: '660400',
    },
    {
      id: '8794',
      name: 'Xã phước sơn',
      district_id: '660400',
    },
    {
      id: '8795',
      name: 'Xã phước thuận',
      district_id: '660400',
    },
    {
      id: '8796',
      name: 'Xã phước hải',
      district_id: '660400',
    },
    {
      id: '8797',
      name: 'Xã phước hữu',
      district_id: '660400',
    },
    {
      id: '12481',
      name: 'Xã phước vinh',
      district_id: '660400',
    },
    {
      id: '8799',
      name: 'Xã bắc phong',
      district_id: '660600',
    },
    {
      id: '8800',
      name: 'Xã bắc sơn',
      district_id: '660600',
    },
    {
      id: '8801',
      name: 'Xã công hải',
      district_id: '660600',
    },
    {
      id: '8802',
      name: 'Xã lợi hải',
      district_id: '660600',
    },
    {
      id: '8803',
      name: 'Xã phước chiến',
      district_id: '660600',
    },
    {
      id: '8804',
      name: 'Xã phước kháng',
      district_id: '660600',
    },
    {
      id: '8776',
      name: 'Xã phước nam',
      district_id: '660700',
    },
    {
      id: '8777',
      name: 'Xã nhị hà',
      district_id: '660700',
    },
    {
      id: '8778',
      name: 'Xã phước dinh',
      district_id: '660700',
    },
    {
      id: '8779',
      name: 'Xã phước minh',
      district_id: '660700',
    },
    {
      id: '8780',
      name: 'Xã phước diêm',
      district_id: '660700',
    },
    {
      id: '8781',
      name: 'Xã phước hà',
      district_id: '660700',
    },
    {
      id: '12482',
      name: 'Xã cà ná',
      district_id: '660700',
    },
    {
      id: '12483',
      name: 'Xã phước ninh',
      district_id: '660700',
    },
    {
      id: '2857',
      name: 'Thị trấn đoan hùng',
      district_id: '290300',
    },
    {
      id: '2858',
      name: 'Xã ngọc quan',
      district_id: '290300',
    },
    {
      id: '2859',
      name: 'Xã tây cốc',
      district_id: '290300',
    },
    {
      id: '2860',
      name: 'Xã bằng luân',
      district_id: '290300',
    },
    {
      id: '2861',
      name: 'Xã ca đình',
      district_id: '290300',
    },
    {
      id: '2862',
      name: 'Xã hùng long',
      district_id: '290300',
    },
    {
      id: '2863',
      name: 'Xã chi đám',
      district_id: '290300',
    },
    {
      id: '2864',
      name: 'Xã sóc đăng',
      district_id: '290300',
    },
    {
      id: '2865',
      name: 'Xã phương trung',
      district_id: '290300',
    },
    {
      id: '2866',
      name: 'Xã yên kiện',
      district_id: '290300',
    },
    {
      id: '2867',
      name: 'Xã đại nghĩa',
      district_id: '290300',
    },
    {
      id: '2868',
      name: 'Xã phú thứ',
      district_id: '290300',
    },
    {
      id: '2869',
      name: 'Xã quế lâm',
      district_id: '290300',
    },
    {
      id: '2870',
      name: 'Xã tiêu sơn',
      district_id: '290300',
    },
    {
      id: '2871',
      name: 'Xã vân đồn',
      district_id: '290300',
    },
    {
      id: '2872',
      name: 'Xã vân du',
      district_id: '290300',
    },
    {
      id: '2873',
      name: 'Xã bằng doãn',
      district_id: '290300',
    },
    {
      id: '2874',
      name: 'Xã chí đám',
      district_id: '290300',
    },
    {
      id: '2875',
      name: 'Xã phong phú',
      district_id: '290300',
    },
    {
      id: '2876',
      name: 'Xã phúc lai',
      district_id: '290300',
    },
    {
      id: '2877',
      name: 'Xã minh phú',
      district_id: '290300',
    },
    {
      id: '2878',
      name: 'Xã chân mộng',
      district_id: '290300',
    },
    {
      id: '2879',
      name: 'Xã hữu đô',
      district_id: '290300',
    },
    {
      id: '2880',
      name: 'Xã vụ quang',
      district_id: '290300',
    },
    {
      id: '2884',
      name: 'Xã minh tiến',
      district_id: '290300',
    },
    {
      id: '2885',
      name: 'Xã minh lương',
      district_id: '290300',
    },
    {
      id: '12714',
      name: 'Xã Hùng Xuyên',
      district_id: '290300',
    },
    {
      id: '12726',
      name: 'Xã Phú Lâm',
      district_id: '290300',
    },
    {
      id: '2913',
      name: 'Xã lệnh khanh',
      district_id: '290500',
    },
    {
      id: '2914',
      name: 'Xã đan hạ',
      district_id: '290500',
    },
    {
      id: '2915',
      name: 'Xã cáo điền',
      district_id: '290500',
    },
    {
      id: '2916',
      name: 'Xã phương viên',
      district_id: '290500',
    },
    {
      id: '2917',
      name: 'Xã đại phạm',
      district_id: '290500',
    },
    {
      id: '2918',
      name: 'Xã âm hạ',
      district_id: '290500',
    },
    {
      id: '2919',
      name: 'Thị trấn hạ hòa',
      district_id: '290500',
    },
    {
      id: '2920',
      name: 'Xã minh hạc',
      district_id: '290500',
    },
    {
      id: '2921',
      name: 'Xã y sơn',
      district_id: '290500',
    },
    {
      id: '2922',
      name: 'Xã phụ khánh',
      district_id: '290500',
    },
    {
      id: '2923',
      name: 'Xã minh côi',
      district_id: '290500',
    },
    {
      id: '2924',
      name: 'Xã bằng giã',
      district_id: '290500',
    },
    {
      id: '2925',
      name: 'Xã động lâm',
      district_id: '290500',
    },
    {
      id: '2926',
      name: 'Xã lang sơn',
      district_id: '290500',
    },
    {
      id: '2927',
      name: 'Xã vô tranh',
      district_id: '290500',
    },
    {
      id: '2928',
      name: 'Xã lâm lợi',
      district_id: '290500',
    },
    {
      id: '2929',
      name: 'Xã chuế lưu',
      district_id: '290500',
    },
    {
      id: '2930',
      name: 'Xã xuân áng',
      district_id: '290500',
    },
    {
      id: '2931',
      name: 'Xã hiền lương',
      district_id: '290500',
    },
    {
      id: '2932',
      name: 'Xã văn lang',
      district_id: '290500',
    },
    {
      id: '2933',
      name: 'Xã yên luật',
      district_id: '290500',
    },
    {
      id: '2934',
      name: 'Xã yên kỳ',
      district_id: '290500',
    },
    {
      id: '2935',
      name: 'Xã hương xạ',
      district_id: '290500',
    },
    {
      id: '2936',
      name: 'Xã vĩnh chân',
      district_id: '290500',
    },
    {
      id: '2937',
      name: 'Xã đan thượng',
      district_id: '290500',
    },
    {
      id: '2938',
      name: 'Xã hậu bổng',
      district_id: '290500',
    },
    {
      id: '2939',
      name: 'Xã hà lương',
      district_id: '290500',
    },
    {
      id: '2940',
      name: 'Xã liên phương',
      district_id: '290500',
    },
    {
      id: '2941',
      name: 'Xã gia điền',
      district_id: '290500',
    },
    {
      id: '2943',
      name: 'Xã quân khê',
      district_id: '290500',
    },
    {
      id: '2944',
      name: 'Xã chính công',
      district_id: '290500',
    },
    {
      id: '2945',
      name: 'Xã đan hà',
      district_id: '290500',
    },
    {
      id: '2946',
      name: 'Xã mai tùng',
      district_id: '290500',
    },
    {
      id: '2947',
      name: 'Xã vụ cầu',
      district_id: '290500',
    },
    {
      id: '2791',
      name: 'Xã kinh kệ',
      district_id: '291000',
    },
    {
      id: '2792',
      name: 'Xã cao xá',
      district_id: '291000',
    },
    {
      id: '2793',
      name: 'Xã tiên kiên',
      district_id: '291000',
    },
    {
      id: '2794',
      name: 'Xã xuân huy',
      district_id: '291000',
    },
    {
      id: '2795',
      name: 'Xã xuân lũng',
      district_id: '291000',
    },
    {
      id: '2796',
      name: 'Thị trấn lâm thao',
      district_id: '291000',
    },
    {
      id: '2797',
      name: 'Xã sơn vi',
      district_id: '291000',
    },
    {
      id: '2799',
      name: 'Xã tứ xã',
      district_id: '291000',
    },
    {
      id: '2800',
      name: 'Xã bản nguyên',
      district_id: '291000',
    },
    {
      id: '2801',
      name: 'Xã sơn dương',
      district_id: '291000',
    },
    {
      id: '2802',
      name: 'Xã hợp hải',
      district_id: '291000',
    },
    {
      id: '2803',
      name: 'Xã vĩnh lại',
      district_id: '291000',
    },
    {
      id: '2804',
      name: 'Xã thạch sơn',
      district_id: '291000',
    },
    {
      id: '2805',
      name: 'Thị trấn hùng sơn',
      district_id: '291000',
    },
    {
      id: '12803',
      name: 'Xã Phùng Nguyên',
      district_id: '291000',
    },
    {
      id: '2806',
      name: 'Xã hà lộc',
      district_id: '290200',
    },
    {
      id: '2807',
      name: 'Xã văn lung',
      district_id: '290200',
    },
    {
      id: '2808',
      name: 'Phường âu cơ',
      district_id: '290200',
    },
    {
      id: '2809',
      name: 'Xã hà thạch',
      district_id: '290200',
    },
    {
      id: '2813',
      name: 'Phường hùng vương',
      district_id: '290200',
    },
    {
      id: '2814',
      name: 'Phường phong châu',
      district_id: '290200',
    },
    {
      id: '2815',
      name: 'Phường trường thịnh',
      district_id: '290200',
    },
    {
      id: '2816',
      name: 'Xã phú hộ',
      district_id: '290200',
    },
    {
      id: '2817',
      name: 'Xã thanh minh',
      district_id: '290200',
    },
    {
      id: '11709',
      name: 'Phường thanh vinh',
      district_id: '290200',
    },
    {
      id: '2886',
      name: 'Xã đồng xuân',
      district_id: '290400',
    },
    {
      id: '2887',
      name: 'Xã yển khê',
      district_id: '290400',
    },
    {
      id: '2888',
      name: 'Thị trấn thanh ba',
      district_id: '290400',
    },
    {
      id: '2889',
      name: 'Xã phương lĩnh',
      district_id: '290400',
    },
    {
      id: '2890',
      name: 'Xã thanh xá',
      district_id: '290400',
    },
    {
      id: '2891',
      name: 'Xã mạn lạn',
      district_id: '290400',
    },
    {
      id: '2892',
      name: 'Xã chí tiên',
      district_id: '290400',
    },
    {
      id: '2893',
      name: 'Xã lương lỗ',
      district_id: '290400',
    },
    {
      id: '2894',
      name: 'Xã sơn cương',
      district_id: '290400',
    },
    {
      id: '2895',
      name: 'Xã đõ sơn',
      district_id: '290400',
    },
    {
      id: '2896',
      name: 'Xã thanh hà',
      district_id: '290400',
    },
    {
      id: '2897',
      name: 'Xã khải xuân',
      district_id: '290400',
    },
    {
      id: '2898',
      name: 'Xã thanh vân',
      district_id: '290400',
    },
    {
      id: '2899',
      name: 'Xã quảng nạp',
      district_id: '290400',
    },
    {
      id: '2900',
      name: 'Xã ninh dân',
      district_id: '290400',
    },
    {
      id: '2901',
      name: 'Xã yên nội',
      district_id: '290400',
    },
    {
      id: '2902',
      name: 'Xã hanh cù',
      district_id: '290400',
    },
    {
      id: '2903',
      name: 'Xã thái ninh',
      district_id: '290400',
    },
    {
      id: '2904',
      name: 'Xã võ lao',
      district_id: '290400',
    },
    {
      id: '2905',
      name: 'Xã đông lĩnh',
      district_id: '290400',
    },
    {
      id: '2906',
      name: 'Xã đại an',
      district_id: '290400',
    },
    {
      id: '2907',
      name: 'Xã đông thành',
      district_id: '290400',
    },
    {
      id: '2908',
      name: 'Xã hoàng cường',
      district_id: '290400',
    },
    {
      id: '2910',
      name: 'Xã đỗ xuyên',
      district_id: '290400',
    },
    {
      id: '2911',
      name: 'Xã năng yên',
      district_id: '290400',
    },
    {
      id: '2912',
      name: 'Xã vân lĩnh',
      district_id: '290400',
    },
    {
      id: '11715',
      name: 'Xã vũ yển',
      district_id: '290400',
    },
    {
      id: '2997',
      name: 'Xã văn miếu',
      district_id: '290800',
    },
    {
      id: '2999',
      name: 'Xã thục luyện',
      district_id: '290800',
    },
    {
      id: '3000',
      name: 'Xã cự đồng',
      district_id: '290800',
    },
    {
      id: '3001',
      name: 'Xã giáp lai',
      district_id: '290800',
    },
    {
      id: '3002',
      name: 'Xã thắng sơn',
      district_id: '290800',
    },
    {
      id: '3004',
      name: 'Xã cự thắng',
      district_id: '290800',
    },
    {
      id: '3005',
      name: 'Xã tất thắng',
      district_id: '290800',
    },
    {
      id: '3007',
      name: 'Xã tân minh',
      district_id: '290800',
    },
    {
      id: '3008',
      name: 'Xã tân lập',
      district_id: '290800',
    },
    {
      id: '3009',
      name: 'Xã khả cửu',
      district_id: '290800',
    },
    {
      id: '3010',
      name: 'Xã thượng cửu',
      district_id: '290800',
    },
    {
      id: '3011',
      name: 'Xã lương nha',
      district_id: '290800',
    },
    {
      id: '3012',
      name: 'Xã địch quả',
      district_id: '290800',
    },
    {
      id: '3013',
      name: 'Xã yên sơn',
      district_id: '290800',
    },
    {
      id: '3014',
      name: 'Xã thạch khoán',
      district_id: '290800',
    },
    {
      id: '3015',
      name: 'Xã sơn hùng',
      district_id: '290800',
    },
    {
      id: '3016',
      name: 'Xã hương cần',
      district_id: '290800',
    },
    {
      id: '3017',
      name: 'Xã yên lương',
      district_id: '290800',
    },
    {
      id: '3018',
      name: 'Xã yên lãng',
      district_id: '290800',
    },
    {
      id: '3019',
      name: 'Xã võ miếu',
      district_id: '290800',
    },
    {
      id: '3020',
      name: 'Xã đông cửu',
      district_id: '290800',
    },
    {
      id: '11716',
      name: 'Thị Trấn Thanh Sơn',
      district_id: '290800',
    },
    {
      id: '2838',
      name: 'Thị trấn thanh thủy',
      district_id: '291200',
    },
    {
      id: '2839',
      name: 'Xã hoàng xá',
      district_id: '291200',
    },
    {
      id: '2841',
      name: 'Xã tân phương',
      district_id: '291200',
    },
    {
      id: '2842',
      name: 'Xã đoan hạ',
      district_id: '291200',
    },
    {
      id: '2843',
      name: 'Xã thạch đồng',
      district_id: '291200',
    },
    {
      id: '2844',
      name: 'Xã bảo yên',
      district_id: '291200',
    },
    {
      id: '2845',
      name: 'Xã sơn thủy',
      district_id: '291200',
    },
    {
      id: '2846',
      name: 'Xã xuân lộc',
      district_id: '291200',
    },
    {
      id: '2847',
      name: 'Xã đào xá',
      district_id: '291200',
    },
    {
      id: '2848',
      name: 'Xã yến mao',
      district_id: '291200',
    },
    {
      id: '2849',
      name: 'Xã phượng mao',
      district_id: '291200',
    },
    {
      id: '2850',
      name: 'Xã Lương Nha',
      district_id: '291200',
    },
    {
      id: '2852',
      name: 'Xã trung nghĩa',
      district_id: '291200',
    },
    {
      id: '2853',
      name: 'Xã tu vũ',
      district_id: '291200',
    },
    {
      id: '2854',
      name: 'Xã đồng luận',
      district_id: '291200',
    },
    {
      id: '2855',
      name: 'Xã Tinh Nhuệ',
      district_id: '291200',
    },
    {
      id: '2856',
      name: 'Xã trung thịnh',
      district_id: '291200',
    },
    {
      id: '12633',
      name: 'Xã Đồng Trung',
      district_id: '291200',
    },
    {
      id: '2748',
      name: 'Phường tiên cát',
      district_id: '290100',
    },
    {
      id: '2749',
      name: 'Phường nông trang',
      district_id: '290100',
    },
    {
      id: '2750',
      name: 'Phường minh nông',
      district_id: '290100',
    },
    {
      id: '2751',
      name: 'Phường Gia Cẩm',
      district_id: '290100',
    },
    {
      id: '2752',
      name: 'Phường minh phương',
      district_id: '290100',
    },
    {
      id: '2753',
      name: 'Xã trưng vương',
      district_id: '290100',
    },
    {
      id: '2754',
      name: 'Phường bến gót',
      district_id: '290100',
    },
    {
      id: '2755',
      name: 'Phường thọ sơn',
      district_id: '290100',
    },
    {
      id: '2756',
      name: 'Xã sông lô',
      district_id: '290100',
    },
    {
      id: '2757',
      name: 'Phường bạch hạc',
      district_id: '290100',
    },
    {
      id: '2758',
      name: 'Phường thanh miếu',
      district_id: '290100',
    },
    {
      id: '2759',
      name: 'Phường dữu lâu',
      district_id: '290100',
    },
    {
      id: '2760',
      name: 'Xã phượng lâu',
      district_id: '290100',
    },
    {
      id: '2761',
      name: 'Xã hùng lô',
      district_id: '290100',
    },
    {
      id: '2762',
      name: 'Phường vân cơ',
      district_id: '290100',
    },
    {
      id: '2763',
      name: 'Phường vân phú',
      district_id: '290100',
    },
    {
      id: '2765',
      name: 'Phường tân dân',
      district_id: '290100',
    },
    {
      id: '2766',
      name: 'Xã kim đức',
      district_id: '290100',
    },
    {
      id: '2767',
      name: 'Xã tân đức',
      district_id: '290100',
    },
    {
      id: '2768',
      name: 'Xã hy cương',
      district_id: '290100',
    },
    {
      id: '11710',
      name: 'Xã chu hóa',
      district_id: '290100',
    },
    {
      id: '11711',
      name: 'Xã thanh đình',
      district_id: '290100',
    },
    {
      id: '11712',
      name: 'Xã thụy vân',
      district_id: '290100',
    },
    {
      id: '2980',
      name: 'Xã hưng long',
      district_id: '290700',
    },
    {
      id: '2981',
      name: 'Xã xuân thủy',
      district_id: '290700',
    },
    {
      id: '2982',
      name: 'Xã nga hoàng',
      district_id: '290700',
    },
    {
      id: '2983',
      name: 'Xã đồng thịnh',
      district_id: '290700',
    },
    {
      id: '2984',
      name: 'Xã phúc khánh',
      district_id: '290700',
    },
    {
      id: '2985',
      name: 'Xã đồng lạc',
      district_id: '290700',
    },
    {
      id: '2986',
      name: 'Xã ngọc đồng',
      district_id: '290700',
    },
    {
      id: '2987',
      name: 'Xã minh hòa',
      district_id: '290700',
    },
    {
      id: '2988',
      name: 'Xã xuân viên',
      district_id: '290700',
    },
    {
      id: '2989',
      name: 'Xã mỹ lung',
      district_id: '290700',
    },
    {
      id: '2990',
      name: 'Xã mỹ lương',
      district_id: '290700',
    },
    {
      id: '2991',
      name: 'Xã xuân an',
      district_id: '290700',
    },
    {
      id: '2992',
      name: 'Xã lương sơn',
      district_id: '290700',
    },
    {
      id: '2993',
      name: 'Xã ngọc lập',
      district_id: '290700',
    },
    {
      id: '2994',
      name: 'Thị trấn yên lập',
      district_id: '290700',
    },
    {
      id: '2995',
      name: 'Xã trung sơn',
      district_id: '290700',
    },
    {
      id: '2996',
      name: 'Xã thượng long',
      district_id: '290700',
    },
    {
      id: '2769',
      name: 'Xã bình bộ',
      district_id: '290900',
    },
    {
      id: '2770',
      name: 'Xã tử đà',
      district_id: '290900',
    },
    {
      id: '2771',
      name: 'Xã vĩnh phú',
      district_id: '290900',
    },
    {
      id: '2772',
      name: 'Xã liên hoa',
      district_id: '290900',
    },
    {
      id: '2773',
      name: 'Xã phú mỹ',
      district_id: '290900',
    },
    {
      id: '2774',
      name: 'Xã hạ giáp',
      district_id: '290900',
    },
    {
      id: '2775',
      name: 'Thị trấn phong châu',
      district_id: '290900',
    },
    {
      id: '2776',
      name: 'Xã phú lộc',
      district_id: '290900',
    },
    {
      id: '2777',
      name: 'Xã bảo thanh',
      district_id: '290900',
    },
    {
      id: '2778',
      name: 'Xã gia thanh',
      district_id: '290900',
    },
    {
      id: '2779',
      name: 'Xã phú nham',
      district_id: '290900',
    },
    {
      id: '2780',
      name: 'Xã tiên du',
      district_id: '290900',
    },
    {
      id: '2781',
      name: 'Xã an đạo',
      district_id: '290900',
    },
    {
      id: '2782',
      name: 'Xã phù ninh',
      district_id: '290900',
    },
    {
      id: '2784',
      name: 'Xã tiên phú',
      district_id: '290900',
    },
    {
      id: '2785',
      name: 'Xã trạm thản',
      district_id: '290900',
    },
    {
      id: '2786',
      name: 'Xã trung giáp',
      district_id: '290900',
    },
    {
      id: '2787',
      name: 'Xã lệ mỹ',
      district_id: '290900',
    },
    {
      id: '2788',
      name: 'Xã trị quận',
      district_id: '290900',
    },
    {
      id: '12686',
      name: 'Xã Bình Phú',
      district_id: '290900',
    },
    {
      id: '2818',
      name: 'Thị trấn hưng hóa',
      district_id: '291100',
    },
    {
      id: '2819',
      name: 'Xã thọ văn',
      district_id: '291100',
    },
    {
      id: '2820',
      name: 'Xã hương nộn',
      district_id: '291100',
    },
    {
      id: '2823',
      name: 'Xã dị nâu',
      district_id: '291100',
    },
    {
      id: '2825',
      name: 'Xã tề lễ',
      district_id: '291100',
    },
    {
      id: '2827',
      name: 'Xã thanh uyên',
      district_id: '291100',
    },
    {
      id: '2828',
      name: 'Xã quang húc',
      district_id: '291100',
    },
    {
      id: '2832',
      name: 'Xã hiền quan',
      district_id: '291100',
    },
    {
      id: '12694',
      name: 'Xã Vạn Xuân',
      district_id: '291100',
    },
    {
      id: '12695',
      name: 'Xã Bắc Sơn',
      district_id: '291100',
    },
    {
      id: '12696',
      name: 'Xã Dân Quyền',
      district_id: '291100',
    },
    {
      id: '12697',
      name: 'Xã Lam Sơn',
      district_id: '291100',
    },
    {
      id: '3021',
      name: 'Xã tân phú',
      district_id: '291300',
    },
    {
      id: '3022',
      name: 'Xã mỹ thuận',
      district_id: '291300',
    },
    {
      id: '3023',
      name: 'Xã thu ngạc',
      district_id: '291300',
    },
    {
      id: '3024',
      name: 'Xã văn luông',
      district_id: '291300',
    },
    {
      id: '3025',
      name: 'Xã minh đài',
      district_id: '291300',
    },
    {
      id: '3026',
      name: 'Xã thạch kiệt',
      district_id: '291300',
    },
    {
      id: '3027',
      name: 'Xã kiệt sơn',
      district_id: '291300',
    },
    {
      id: '3028',
      name: 'Xã tân sơn',
      district_id: '291300',
    },
    {
      id: '3029',
      name: 'Xã xuân đài',
      district_id: '291300',
    },
    {
      id: '3030',
      name: 'Xã lai đồng',
      district_id: '291300',
    },
    {
      id: '3031',
      name: 'Xã thu cúc',
      district_id: '291300',
    },
    {
      id: '3032',
      name: 'Xã tam thanh',
      district_id: '291300',
    },
    {
      id: '3033',
      name: 'Xã long cốc',
      district_id: '291300',
    },
    {
      id: '3034',
      name: 'Xã xuân sơn',
      district_id: '291300',
    },
    {
      id: '3035',
      name: 'Xã đông sơn',
      district_id: '291300',
    },
    {
      id: '3036',
      name: 'Xã tam thanh',
      district_id: '291300',
    },
    {
      id: '3037',
      name: 'Xã vinh tiến',
      district_id: '291300',
    },
    {
      id: '3038',
      name: 'Xã kim thượng',
      district_id: '291300',
    },
    {
      id: '2948',
      name: 'Xã văn khúc',
      district_id: '290600',
    },
    {
      id: '2949',
      name: 'Xã điêu lương',
      district_id: '290600',
    },
    {
      id: '2950',
      name: 'Xã đồng lương',
      district_id: '290600',
    },
    {
      id: '2951',
      name: 'Xã phú khê',
      district_id: '290600',
    },
    {
      id: '2953',
      name: 'Xã phú lạc',
      district_id: '290600',
    },
    {
      id: '2954',
      name: 'Xã phùng xá',
      district_id: '290600',
    },
    {
      id: '2955',
      name: 'Xã phương xá',
      district_id: '290600',
    },
    {
      id: '2956',
      name: 'Xã sơn nga',
      district_id: '290600',
    },
    {
      id: '2957',
      name: 'Xã sai nga',
      district_id: '290600',
    },
    {
      id: '2958',
      name: 'Xã thanh nga',
      district_id: '290600',
    },
    {
      id: '2959',
      name: 'Xã sơn tỉnh',
      district_id: '290600',
    },
    {
      id: '2960',
      name: 'Xã xương thịnh',
      district_id: '290600',
    },
    {
      id: '2961',
      name: 'Xã yên tập',
      district_id: '290600',
    },
    {
      id: '2962',
      name: 'Xã tùng khê',
      district_id: '290600',
    },
    {
      id: '2963',
      name: 'Xã cấp dẫn',
      district_id: '290600',
    },
    {
      id: '2964',
      name: 'Xã cát trù',
      district_id: '290600',
    },
    {
      id: '2965',
      name: 'Xã hiền đa',
      district_id: '290600',
    },
    {
      id: '2966',
      name: 'Xã tuy lộc',
      district_id: '290600',
    },
    {
      id: '2967',
      name: 'Xã ta xá',
      district_id: '290600',
    },
    {
      id: '2968',
      name: 'Xã tỉnh cương',
      district_id: '290600',
    },
    {
      id: '2969',
      name: 'Xã đồng cam',
      district_id: '290600',
    },
    {
      id: '2971',
      name: 'Xã ngô xá',
      district_id: '290600',
    },
    {
      id: '2972',
      name: 'Xã phượng vĩ',
      district_id: '290600',
    },
    {
      id: '2973',
      name: 'Xã yên dưỡng',
      district_id: '290600',
    },
    {
      id: '2974',
      name: 'Xã tiên lương',
      district_id: '290600',
    },
    {
      id: '2975',
      name: 'Xã tam sơn',
      district_id: '290600',
    },
    {
      id: '2976',
      name: 'Xã hương lung',
      district_id: '290600',
    },
    {
      id: '2977',
      name: 'Xã thụy liễu',
      district_id: '290600',
    },
    {
      id: '2978',
      name: 'Xã văn bán',
      district_id: '290600',
    },
    {
      id: '2979',
      name: 'Xã sơn tỉnh',
      district_id: '290600',
    },
    {
      id: '11713',
      name: 'Thị trấn sông thao',
      district_id: '290600',
    },
    {
      id: '11714',
      name: 'Xã chương xá',
      district_id: '290600',
    },
    {
      id: '12631',
      name: 'Thị Trấn Cẩm Khê',
      district_id: '290600',
    },
    {
      id: '12778',
      name: 'Xã Hùng Việt',
      district_id: '290600',
    },
    {
      id: '12779',
      name: 'Xã Minh Tân',
      district_id: '290600',
    },
    {
      id: '8249',
      name: 'Xã xuân thọ 1',
      district_id: '620300',
    },
    {
      id: '8250',
      name: 'Xã xuân thọ 2',
      district_id: '620300',
    },
    {
      id: '8251',
      name: 'Xã xuân hải',
      district_id: '620300',
    },
    {
      id: '8252',
      name: 'Xã xuân lộc',
      district_id: '620300',
    },
    {
      id: '8253',
      name: 'Xã xuân bình',
      district_id: '620300',
    },
    {
      id: '8254',
      name: 'Xã xuân cảnh',
      district_id: '620300',
    },
    {
      id: '8255',
      name: 'Xã xuân hoà',
      district_id: '620300',
    },
    {
      id: '8256',
      name: 'Xã xuân thịnh',
      district_id: '620300',
    },
    {
      id: '8257',
      name: 'Xã xuân phương',
      district_id: '620300',
    },
    {
      id: '8258',
      name: 'Xã xuân lâm',
      district_id: '620300',
    },
    {
      id: '8259',
      name: 'Phường xuân phú',
      district_id: '620300',
    },
    {
      id: '8260',
      name: 'Phường xuân đài',
      district_id: '620300',
    },
    {
      id: '8261',
      name: 'Phường xuân yên',
      district_id: '620300',
    },
    {
      id: '8262',
      name: 'Phường xuân thành',
      district_id: '620300',
    },
    {
      id: '8232',
      name: 'Xã an xuân',
      district_id: '620400',
    },
    {
      id: '8233',
      name: 'Xã an lĩnh',
      district_id: '620400',
    },
    {
      id: '8234',
      name: 'Xã an dân',
      district_id: '620400',
    },
    {
      id: '8235',
      name: 'Xã an thạch',
      district_id: '620400',
    },
    {
      id: '8236',
      name: 'Xã an cư',
      district_id: '620400',
    },
    {
      id: '8237',
      name: 'Xã an định',
      district_id: '620400',
    },
    {
      id: '8238',
      name: 'Xã an hòa',
      district_id: '620400',
    },
    {
      id: '8239',
      name: 'Xã an chấn',
      district_id: '620400',
    },
    {
      id: '8240',
      name: 'Xã an ninh tây',
      district_id: '620400',
    },
    {
      id: '8241',
      name: 'Xã an thọ',
      district_id: '620400',
    },
    {
      id: '8242',
      name: 'Thị trấn chí thạnh',
      district_id: '620400',
    },
    {
      id: '8243',
      name: 'Xã an ninh đông',
      district_id: '620400',
    },
    {
      id: '8245',
      name: 'Xã an mỹ',
      district_id: '620400',
    },
    {
      id: '8246',
      name: 'Xã an hải',
      district_id: '620400',
    },
    {
      id: '8247',
      name: 'Xã an hiệp',
      district_id: '620400',
    },
    {
      id: '8248',
      name: 'Xã an nghiệp',
      district_id: '620400',
    },
    {
      id: '8218',
      name: 'Phường 1',
      district_id: '620100',
    },
    {
      id: '8219',
      name: 'Phường 2',
      district_id: '620100',
    },
    {
      id: '8220',
      name: 'Phường 3',
      district_id: '620100',
    },
    {
      id: '8221',
      name: 'Phường 4',
      district_id: '620100',
    },
    {
      id: '8222',
      name: 'Phường 5',
      district_id: '620100',
    },
    {
      id: '8223',
      name: 'Phường 6',
      district_id: '620100',
    },
    {
      id: '8224',
      name: 'Phường 7',
      district_id: '620100',
    },
    {
      id: '8225',
      name: 'Phường 8',
      district_id: '620100',
    },
    {
      id: '8226',
      name: 'Phường 9',
      district_id: '620100',
    },
    {
      id: '8227',
      name: 'Phường phú lâm',
      district_id: '620100',
    },
    {
      id: '8228',
      name: 'Xã bình kiến',
      district_id: '620100',
    },
    {
      id: '8229',
      name: 'Xã bình ngọc',
      district_id: '620100',
    },
    {
      id: '8230',
      name: 'Phường phú thạnh',
      district_id: '620100',
    },
    {
      id: '8231',
      name: 'Phường phú đông',
      district_id: '620100',
    },
    {
      id: '12028',
      name: 'Xã an phú',
      district_id: '620100',
    },
    {
      id: '12029',
      name: 'Xã hòa kiến',
      district_id: '620100',
    },
    {
      id: '8326',
      name: 'Xã hoà trị',
      district_id: '620800',
    },
    {
      id: '8327',
      name: 'Xã hoà thắng',
      district_id: '620800',
    },
    {
      id: '8328',
      name: 'Thị trấn phú hoà',
      district_id: '620800',
    },
    {
      id: '8329',
      name: 'Xã hoà an',
      district_id: '620800',
    },
    {
      id: '8330',
      name: 'Xã hòa định tây',
      district_id: '620800',
    },
    {
      id: '8331',
      name: 'Xã hòa quang bắc',
      district_id: '620800',
    },
    {
      id: '8332',
      name: 'Xã hòa quang nam',
      district_id: '620800',
    },
    {
      id: '8333',
      name: 'Xã hòa hội',
      district_id: '620800',
    },
    {
      id: '8334',
      name: 'Xã hòa định đông',
      district_id: '620800',
    },
    {
      id: '8289',
      name: 'Xã ea lâm',
      district_id: '620600',
    },
    {
      id: '8290',
      name: 'Thị trấn hai riêng',
      district_id: '620600',
    },
    {
      id: '8291',
      name: 'Xã eabia',
      district_id: '620600',
    },
    {
      id: '8293',
      name: 'Xã eabar',
      district_id: '620600',
    },
    {
      id: '8294',
      name: 'Xã ealy',
      district_id: '620600',
    },
    {
      id: '8295',
      name: 'Xã đức bình tây',
      district_id: '620600',
    },
    {
      id: '8296',
      name: 'Xã đức bình đông',
      district_id: '620600',
    },
    {
      id: '8298',
      name: 'Xã eatrol',
      district_id: '620600',
    },
    {
      id: '8299',
      name: 'Xã sơn giang',
      district_id: '620600',
    },
    {
      id: '8300',
      name: 'Xã sông hinh',
      district_id: '620600',
    },
    {
      id: '8301',
      name: 'Xã chí thán',
      district_id: '620600',
    },
    {
      id: '12024',
      name: 'Xã ea bá',
      district_id: '620600',
    },
    {
      id: '8275',
      name: 'Thị trấn củng sơn',
      district_id: '620500',
    },
    {
      id: '8276',
      name: 'Xã suối bạc',
      district_id: '620500',
    },
    {
      id: '8277',
      name: 'Xã sơn hà',
      district_id: '620500',
    },
    {
      id: '8278',
      name: 'Xã sơn nguyên',
      district_id: '620500',
    },
    {
      id: '8279',
      name: 'Xã sơn định',
      district_id: '620500',
    },
    {
      id: '8281',
      name: 'Xã krong pa',
      district_id: '620500',
    },
    {
      id: '8282',
      name: 'Xã sơn long',
      district_id: '620500',
    },
    {
      id: '8283',
      name: 'Xã sơn hội',
      district_id: '620500',
    },
    {
      id: '8284',
      name: 'Xã suối trai',
      district_id: '620500',
    },
    {
      id: '8285',
      name: 'Xã sơn phước',
      district_id: '620500',
    },
    {
      id: '8286',
      name: 'Xã sơn xuân',
      district_id: '620500',
    },
    {
      id: '8287',
      name: 'Xã phước tân',
      district_id: '620500',
    },
    {
      id: '8288',
      name: 'Xã cà lúi',
      district_id: '620500',
    },
    {
      id: '12027',
      name: 'Xã eachà rang',
      district_id: '620500',
    },
    {
      id: '8315',
      name: 'Xã hoà bình 1',
      district_id: '620900',
    },
    {
      id: '8316',
      name: 'Xã hòa mỹ đông',
      district_id: '620900',
    },
    {
      id: '8317',
      name: 'Xã hòa mỹ tây',
      district_id: '620900',
    },
    {
      id: '8318',
      name: 'Xã hòa phong',
      district_id: '620900',
    },
    {
      id: '8319',
      name: 'Xã hòa phú',
      district_id: '620900',
    },
    {
      id: '8320',
      name: 'Xã hòa thịnh',
      district_id: '620900',
    },
    {
      id: '8321',
      name: 'Xã hòa đồng',
      district_id: '620900',
    },
    {
      id: '8322',
      name: 'Xã hòa tân tây',
      district_id: '620900',
    },
    {
      id: '8323',
      name: 'Xã sơn thành tây',
      district_id: '620900',
    },
    {
      id: '8324',
      name: 'Xã sơn thành đông',
      district_id: '620900',
    },
    {
      id: '12025',
      name: 'Thị Trấn Phú Thứ',
      district_id: '620900',
    },
    {
      id: '6784',
      name: 'Thị trấn hoàn lão',
      district_id: '510500',
    },
    {
      id: '6785',
      name: 'Xã nhân trạch',
      district_id: '510500',
    },
    {
      id: '6786',
      name: 'Xã thượng trạch',
      district_id: '510500',
    },
    {
      id: '6787',
      name: 'Xã tân trạch',
      district_id: '510500',
    },
    {
      id: '6788',
      name: 'Xã xuân trạch',
      district_id: '510500',
    },
    {
      id: '6789',
      name: 'Xã lâm trạch',
      district_id: '510500',
    },
    {
      id: '6790',
      name: 'Xã phúc trạch',
      district_id: '510500',
    },
    {
      id: '6791',
      name: 'Xã hưng trạch',
      district_id: '510500',
    },
    {
      id: '6792',
      name: 'Xã liên trạch',
      district_id: '510500',
    },
    {
      id: '6793',
      name: 'Xã mỹ trạch',
      district_id: '510500',
    },
    {
      id: '6794',
      name: 'Xã hạ trạch',
      district_id: '510500',
    },
    {
      id: '6795',
      name: 'Xã bắc trạch',
      district_id: '510500',
    },
    {
      id: '6796',
      name: 'Xã thanh trạch',
      district_id: '510500',
    },
    {
      id: '6798',
      name: 'Xã đồng trạch',
      district_id: '510500',
    },
    {
      id: '6799',
      name: 'Xã đức trạch',
      district_id: '510500',
    },
    {
      id: '6801',
      name: 'Xã đại trạch',
      district_id: '510500',
    },
    {
      id: '6802',
      name: 'Xã nam trạch',
      district_id: '510500',
    },
    {
      id: '6803',
      name: 'Xã trung trạch',
      district_id: '510500',
    },
    {
      id: '6804',
      name: 'Xã hòa trạch',
      district_id: '510500',
    },
    {
      id: '6805',
      name: 'Xã lý trạch',
      district_id: '510500',
    },
    {
      id: '6806',
      name: 'Xã vạn trạch',
      district_id: '510500',
    },
    {
      id: '6808',
      name: 'Xã cự nẫm',
      district_id: '510500',
    },
    {
      id: '6811',
      name: 'Xã sơn lộc',
      district_id: '510500',
    },
    {
      id: '6812',
      name: 'Xã phú định',
      district_id: '510500',
    },
    {
      id: '6813',
      name: 'Xã tây trạch',
      district_id: '510500',
    },
    {
      id: '11992',
      name: 'Thị Trấn Nông Trường Việt Trung',
      district_id: '510500',
    },
    {
      id: '12675',
      name: 'Xã Hải Phú',
      district_id: '510500',
    },
    {
      id: '12715',
      name: 'Thị Trấn Phong Nha',
      district_id: '510500',
    },
    {
      id: '6767',
      name: 'Xã quang phú',
      district_id: '510100',
    },
    {
      id: '6768',
      name: 'Xã thuận đức',
      district_id: '510100',
    },
    {
      id: '6769',
      name: 'Phường bắc lý',
      district_id: '510100',
    },
    {
      id: '6770',
      name: 'Phường bắc nghĩa',
      district_id: '510100',
    },
    {
      id: '6772',
      name: 'Phường đồng phú',
      district_id: '510100',
    },
    {
      id: '6776',
      name: 'Phường hải thành',
      district_id: '510100',
    },
    {
      id: '6777',
      name: 'Phường nam lý',
      district_id: '510100',
    },
    {
      id: '6778',
      name: 'Phường phú hải',
      district_id: '510100',
    },
    {
      id: '6779',
      name: 'Xã bảo ninh',
      district_id: '510100',
    },
    {
      id: '6780',
      name: 'Phường đức ninh đông',
      district_id: '510100',
    },
    {
      id: '6781',
      name: 'Xã lộc ninh',
      district_id: '510100',
    },
    {
      id: '6782',
      name: 'Xã nghĩa ninh',
      district_id: '510100',
    },
    {
      id: '11994',
      name: 'Xã đức ninh',
      district_id: '510100',
    },
    {
      id: '11995',
      name: 'Phường đồng sơn',
      district_id: '510100',
    },
    {
      id: '12698',
      name: 'Phường Đồng Hải',
      district_id: '510100',
    },
    {
      id: '6899',
      name: 'Thị trấn kiến giang',
      district_id: '510700',
    },
    {
      id: '6900',
      name: 'Xã phong thủy',
      district_id: '510700',
    },
    {
      id: '6901',
      name: 'Xã liên thủy',
      district_id: '510700',
    },
    {
      id: '6902',
      name: 'Xã lộc thủy',
      district_id: '510700',
    },
    {
      id: '6903',
      name: 'Xã hồng thủy',
      district_id: '510700',
    },
    {
      id: '6904',
      name: 'Xã thanh thủy',
      district_id: '510700',
    },
    {
      id: '6905',
      name: 'Xã hoa thủy',
      district_id: '510700',
    },
    {
      id: '6906',
      name: 'Xã an thủy',
      district_id: '510700',
    },
    {
      id: '6907',
      name: 'Xã sơn thủy',
      district_id: '510700',
    },
    {
      id: '6908',
      name: 'Xã ngân thủy',
      district_id: '510700',
    },
    {
      id: '6909',
      name: 'Xã hưng thủy',
      district_id: '510700',
    },
    {
      id: '6910',
      name: 'Xã tân thủy',
      district_id: '510700',
    },
    {
      id: '6911',
      name: 'Xã xuân thủy',
      district_id: '510700',
    },
    {
      id: '6912',
      name: 'Xã dương thủy',
      district_id: '510700',
    },
    {
      id: '6913',
      name: 'Xã mai thủy',
      district_id: '510700',
    },
    {
      id: '6914',
      name: 'Xã phú thủy',
      district_id: '510700',
    },
    {
      id: '6915',
      name: 'Xã mỹ thủy',
      district_id: '510700',
    },
    {
      id: '6916',
      name: 'Xã sen thủy',
      district_id: '510700',
    },
    {
      id: '6917',
      name: 'Xã trường thủy',
      district_id: '510700',
    },
    {
      id: '6918',
      name: 'Xã văn thủy',
      district_id: '510700',
    },
    {
      id: '6919',
      name: 'Xã kim thủy',
      district_id: '510700',
    },
    {
      id: '6920',
      name: 'Xã thái thủy',
      district_id: '510700',
    },
    {
      id: '6922',
      name: 'Xã cam thủy',
      district_id: '510700',
    },
    {
      id: '6923',
      name: 'Xã lâm thủy',
      district_id: '510700',
    },
    {
      id: '6924',
      name: 'Xã ngư thủy bắc',
      district_id: '510700',
    },
    {
      id: '6925',
      name: 'Xã ngư thủy trung',
      district_id: '510700',
    },
    {
      id: '6926',
      name: 'Xã ngư thủy nam',
      district_id: '510700',
    },
    {
      id: '11993',
      name: 'Thị trấn nt lệ ninh',
      district_id: '510700',
    },
    {
      id: '6868',
      name: 'Xã yên hóa',
      district_id: '510300',
    },
    {
      id: '6869',
      name: 'Thị trấn quy đạt',
      district_id: '510300',
    },
    {
      id: '6870',
      name: 'Xã xuân hóa',
      district_id: '510300',
    },
    {
      id: '6871',
      name: 'Xã trung hóa',
      district_id: '510300',
    },
    {
      id: '6872',
      name: 'Xã tân hóa',
      district_id: '510300',
    },
    {
      id: '6873',
      name: 'Xã minh hóa',
      district_id: '510300',
    },
    {
      id: '6874',
      name: 'Xã hồng hóa',
      district_id: '510300',
    },
    {
      id: '6875',
      name: 'Xã hóa tiến',
      district_id: '510300',
    },
    {
      id: '6876',
      name: 'Xã hóa hợp',
      district_id: '510300',
    },
    {
      id: '6877',
      name: 'Xã hóa phúc',
      district_id: '510300',
    },
    {
      id: '6878',
      name: 'Xã hóa thanh',
      district_id: '510300',
    },
    {
      id: '6879',
      name: 'Xã dân hóa',
      district_id: '510300',
    },
    {
      id: '6880',
      name: 'Xã thượng hóa',
      district_id: '510300',
    },
    {
      id: '6881',
      name: 'Xã trọng hóa',
      district_id: '510300',
    },
    {
      id: '6882',
      name: 'Xã quy hóa',
      district_id: '510300',
    },
    {
      id: '6883',
      name: 'Xã hóa sơn',
      district_id: '510300',
    },
    {
      id: '6884',
      name: 'Thị trấn quán hàu',
      district_id: '510600',
    },
    {
      id: '6885',
      name: 'Xã võ ninh',
      district_id: '510600',
    },
    {
      id: '6886',
      name: 'Xã lương ninh',
      district_id: '510600',
    },
    {
      id: '6887',
      name: 'Xã hải ninh',
      district_id: '510600',
    },
    {
      id: '6888',
      name: 'Xã duy ninh',
      district_id: '510600',
    },
    {
      id: '6889',
      name: 'Xã vĩnh ninh',
      district_id: '510600',
    },
    {
      id: '6890',
      name: 'Xã hàm ninh',
      district_id: '510600',
    },
    {
      id: '6891',
      name: 'Xã hiền ninh',
      district_id: '510600',
    },
    {
      id: '6892',
      name: 'Xã xuân ninh',
      district_id: '510600',
    },
    {
      id: '6893',
      name: 'Xã an ninh',
      district_id: '510600',
    },
    {
      id: '6894',
      name: 'Xã gia ninh',
      district_id: '510600',
    },
    {
      id: '6895',
      name: 'Xã tân ninh',
      district_id: '510600',
    },
    {
      id: '6896',
      name: 'Xã vạn ninh',
      district_id: '510600',
    },
    {
      id: '6897',
      name: 'Xã trường xuân',
      district_id: '510600',
    },
    {
      id: '6898',
      name: 'Xã trường sơn',
      district_id: '510600',
    },
    {
      id: '6818',
      name: 'Xã quảng hợp',
      district_id: '510400',
    },
    {
      id: '6820',
      name: 'Xã quảng xuân',
      district_id: '510400',
    },
    {
      id: '6821',
      name: 'Xã quảng thanh',
      district_id: '510400',
    },
    {
      id: '6822',
      name: 'Xã quảng kim',
      district_id: '510400',
    },
    {
      id: '6823',
      name: 'Xã quảng phú',
      district_id: '510400',
    },
    {
      id: '6824',
      name: 'Xã quảng đông',
      district_id: '510400',
    },
    {
      id: '6825',
      name: 'Xã quảng liên',
      district_id: '510400',
    },
    {
      id: '6826',
      name: 'Xã quảng tiến',
      district_id: '510400',
    },
    {
      id: '6827',
      name: 'Xã quảng châu',
      district_id: '510400',
    },
    {
      id: '6828',
      name: 'Xã quảng lưu',
      district_id: '510400',
    },
    {
      id: '6829',
      name: 'Xã quảng trường',
      district_id: '510400',
    },
    {
      id: '6838',
      name: 'Xã quảng tiên',
      district_id: '510400',
    },
    {
      id: '6840',
      name: 'Xã cảnh hóa',
      district_id: '510400',
    },
    {
      id: '6842',
      name: 'Xã phù hóa',
      district_id: '510400',
    },
    {
      id: '6843',
      name: 'Xã quảng hưng',
      district_id: '510400',
    },
    {
      id: '6844',
      name: 'Xã quảng phương',
      district_id: '510400',
    },
    {
      id: '6845',
      name: 'Xã quảng thạch',
      district_id: '510400',
    },
    {
      id: '6846',
      name: 'Xã quảng tùng',
      district_id: '510400',
    },
    {
      id: '6847',
      name: 'Xã cảnh dương',
      district_id: '510400',
    },
    {
      id: '12811',
      name: 'Xã Liên Trường',
      district_id: '510400',
    },
    {
      id: '6848',
      name: 'Thị Trấn đồng Lê',
      district_id: '510200',
    },
    {
      id: '6849',
      name: 'Xã lâm hóa',
      district_id: '510200',
    },
    {
      id: '6850',
      name: 'Xã hương hóa',
      district_id: '510200',
    },
    {
      id: '6851',
      name: 'Xã thanh hóa',
      district_id: '510200',
    },
    {
      id: '6852',
      name: 'Xã thanh thạch',
      district_id: '510200',
    },
    {
      id: '6853',
      name: 'Xã kim hóa',
      district_id: '510200',
    },
    {
      id: '6854',
      name: 'Xã sơn hóa',
      district_id: '510200',
    },
    {
      id: '6855',
      name: 'Xã lê hóa',
      district_id: '510200',
    },
    {
      id: '6856',
      name: 'Xã thuận hóa',
      district_id: '510200',
    },
    {
      id: '6857',
      name: 'Xã đồng hóa',
      district_id: '510200',
    },
    {
      id: '6858',
      name: 'Xã thạch hóa',
      district_id: '510200',
    },
    {
      id: '6859',
      name: 'Xã nam hóa',
      district_id: '510200',
    },
    {
      id: '6860',
      name: 'Xã đức hóa',
      district_id: '510200',
    },
    {
      id: '6861',
      name: 'Xã phong hóa',
      district_id: '510200',
    },
    {
      id: '6862',
      name: 'Xã mai hóa',
      district_id: '510200',
    },
    {
      id: '6863',
      name: 'Xã ngư hóa',
      district_id: '510200',
    },
    {
      id: '6864',
      name: 'Xã tiến hóa',
      district_id: '510200',
    },
    {
      id: '6865',
      name: 'Xã châu hóa',
      district_id: '510200',
    },
    {
      id: '6866',
      name: 'Xã cao quảng',
      district_id: '510200',
    },
    {
      id: '6867',
      name: 'Xã văn hóa',
      district_id: '510200',
    },
    {
      id: '7427',
      name: 'Phường thanh hà',
      district_id: '560200',
    },
    {
      id: '7428',
      name: 'Phường tân an',
      district_id: '560200',
    },
    {
      id: '7429',
      name: 'Phường cửa đại',
      district_id: '560200',
    },
    {
      id: '7430',
      name: 'Phường minh an',
      district_id: '560200',
    },
    {
      id: '7431',
      name: 'Phường cẩm phô',
      district_id: '560200',
    },
    {
      id: '7432',
      name: 'Phường sơn phong',
      district_id: '560200',
    },
    {
      id: '7433',
      name: 'Xã cầm hà',
      district_id: '560200',
    },
    {
      id: '7434',
      name: 'Xã cẩm thanh',
      district_id: '560200',
    },
    {
      id: '7435',
      name: 'Phường cẩm an',
      district_id: '560200',
    },
    {
      id: '7436',
      name: 'Phường cẩm châu',
      district_id: '560200',
    },
    {
      id: '7437',
      name: 'Phường cẩm nam',
      district_id: '560200',
    },
    {
      id: '7438',
      name: 'Xã cẩm kim',
      district_id: '560200',
    },
    {
      id: '7439',
      name: 'Xã tân hiệp',
      district_id: '560200',
    },
    {
      id: '7357',
      name: 'Thị trấn núi thành',
      district_id: '560900',
    },
    {
      id: '7358',
      name: 'Xã tam hòa',
      district_id: '560900',
    },
    {
      id: '7359',
      name: 'Xã tam tiến',
      district_id: '560900',
    },
    {
      id: '7360',
      name: 'Xã tam nghĩa',
      district_id: '560900',
    },
    {
      id: '7361',
      name: 'Xã tam quang',
      district_id: '560900',
    },
    {
      id: '7362',
      name: 'Xã tam hải',
      district_id: '560900',
    },
    {
      id: '7363',
      name: 'Xã tam sơn',
      district_id: '560900',
    },
    {
      id: '7364',
      name: 'Xã tam trà',
      district_id: '560900',
    },
    {
      id: '7366',
      name: 'Xã tam anh bắc',
      district_id: '560900',
    },
    {
      id: '7367',
      name: 'Xã tam hiệp',
      district_id: '560900',
    },
    {
      id: '7368',
      name: 'Xã tam anh nam',
      district_id: '560900',
    },
    {
      id: '7369',
      name: 'Xã tam mỹ tây',
      district_id: '560900',
    },
    {
      id: '7371',
      name: 'Xã tam thạnh',
      district_id: '560900',
    },
    {
      id: '7372',
      name: 'Xã tam giang',
      district_id: '560900',
    },
    {
      id: '7373',
      name: 'Xã tam mỹ đông',
      district_id: '560900',
    },
    {
      id: '11984',
      name: 'Xã tam xuân i',
      district_id: '560900',
    },
    {
      id: '11985',
      name: 'Xã tam xuân ii',
      district_id: '560900',
    },
    {
      id: '7534',
      name: 'Thị trấn phú thịnh',
      district_id: '561700',
    },
    {
      id: '7535',
      name: 'Xã tam đại',
      district_id: '561700',
    },
    {
      id: '7536',
      name: 'Xã tam phước',
      district_id: '561700',
    },
    {
      id: '7537',
      name: 'Xã tam vinh',
      district_id: '561700',
    },
    {
      id: '7538',
      name: 'Xã tam dân',
      district_id: '561700',
    },
    {
      id: '7539',
      name: 'Xã tam thành',
      district_id: '561700',
    },
    {
      id: '7540',
      name: 'Xã tam lộc',
      district_id: '561700',
    },
    {
      id: '7541',
      name: 'Xã tam an',
      district_id: '561700',
    },
    {
      id: '7542',
      name: 'Xã tam đàn',
      district_id: '561700',
    },
    {
      id: '7543',
      name: 'Xã tam thái',
      district_id: '561700',
    },
    {
      id: '7544',
      name: 'Xã tam lãnh',
      district_id: '561700',
    },
    {
      id: '7320',
      name: 'Thị Trấn Hà Lam',
      district_id: '560800',
    },
    {
      id: '7321',
      name: 'Xã bình nguyên',
      district_id: '560800',
    },
    {
      id: '7322',
      name: 'Xã bình đào',
      district_id: '560800',
    },
    {
      id: '7323',
      name: 'Xã bình hải',
      district_id: '560800',
    },
    {
      id: '7324',
      name: 'Xã bình minh',
      district_id: '560800',
    },
    {
      id: '7325',
      name: 'Xã bình tú',
      district_id: '560800',
    },
    {
      id: '7326',
      name: 'Xã bình an',
      district_id: '560800',
    },
    {
      id: '7327',
      name: 'Xã bình lãnh',
      district_id: '560800',
    },
    {
      id: '7328',
      name: 'Xã bình trị',
      district_id: '560800',
    },
    {
      id: '7329',
      name: 'Xã bình định nam',
      district_id: '560800',
    },
    {
      id: '7330',
      name: 'Xã bình quý',
      district_id: '560800',
    },
    {
      id: '7331',
      name: 'Xã bình sa',
      district_id: '560800',
    },
    {
      id: '7332',
      name: 'Xã bình chánh',
      district_id: '560800',
    },
    {
      id: '7333',
      name: 'Xã bình giang',
      district_id: '560800',
    },
    {
      id: '7334',
      name: 'Xã bình phục',
      district_id: '560800',
    },
    {
      id: '7335',
      name: 'Xã bình triều',
      district_id: '560800',
    },
    {
      id: '7336',
      name: 'Xã bình định bắc',
      district_id: '560800',
    },
    {
      id: '7337',
      name: 'Xã bình nam',
      district_id: '560800',
    },
    {
      id: '7338',
      name: 'Xã bình trung',
      district_id: '560800',
    },
    {
      id: '7339',
      name: 'Xã bình quế',
      district_id: '560800',
    },
    {
      id: '7340',
      name: 'Xã bình dương',
      district_id: '560800',
    },
    {
      id: '7341',
      name: 'Xã bình phú',
      district_id: '560800',
    },
    {
      id: '7342',
      name: 'Thị trấn tiên kỳ',
      district_id: '561000',
    },
    {
      id: '7343',
      name: 'Xã tiên cảnh',
      district_id: '561000',
    },
    {
      id: '7344',
      name: 'Xã tiên phong',
      district_id: '561000',
    },
    {
      id: '7345',
      name: 'Xã tiên hiệp',
      district_id: '561000',
    },
    {
      id: '7346',
      name: 'Xã tiên hà',
      district_id: '561000',
    },
    {
      id: '7347',
      name: 'Xã tiên thọ',
      district_id: '561000',
    },
    {
      id: '7348',
      name: 'Xã tiên châu',
      district_id: '561000',
    },
    {
      id: '7349',
      name: 'Xã tiên lập',
      district_id: '561000',
    },
    {
      id: '7350',
      name: 'Xã tiên lộc',
      district_id: '561000',
    },
    {
      id: '7351',
      name: 'Xã tiên an',
      district_id: '561000',
    },
    {
      id: '7352',
      name: 'Xã tiên lãnh',
      district_id: '561000',
    },
    {
      id: '7353',
      name: 'Xã tiên ngọc',
      district_id: '561000',
    },
    {
      id: '7354',
      name: 'Xã tiên cẩm',
      district_id: '561000',
    },
    {
      id: '7355',
      name: 'Xã tiên mỹ',
      district_id: '561000',
    },
    {
      id: '7356',
      name: 'Xã tiên sơn',
      district_id: '561000',
    },
    {
      id: '7491',
      name: 'Xã trà don',
      district_id: '561500',
    },
    {
      id: '7492',
      name: 'Xã trà vân',
      district_id: '561500',
    },
    {
      id: '7493',
      name: 'Xã trà leng',
      district_id: '561500',
    },
    {
      id: '7494',
      name: 'Xã trà vinh',
      district_id: '561500',
    },
    {
      id: '7495',
      name: 'Xã trà tập',
      district_id: '561500',
    },
    {
      id: '7496',
      name: 'Xã trà dơn',
      district_id: '561500',
    },
    {
      id: '7497',
      name: 'Xã trà nam',
      district_id: '561500',
    },
    {
      id: '7498',
      name: 'Xã trà cang',
      district_id: '561500',
    },
    {
      id: '7499',
      name: 'Xã trà mai',
      district_id: '561500',
    },
    {
      id: '7500',
      name: 'Xã trà linh',
      district_id: '561500',
    },
    {
      id: '7414',
      name: 'Thị trấn trà my',
      district_id: '561100',
    },
    {
      id: '7415',
      name: 'Xã trà bui',
      district_id: '561100',
    },
    {
      id: '7416',
      name: 'Xã trà giang',
      district_id: '561100',
    },
    {
      id: '7417',
      name: 'Xã trà đông',
      district_id: '561100',
    },
    {
      id: '7418',
      name: 'Xã trà tân',
      district_id: '561100',
    },
    {
      id: '7419',
      name: 'Xã trà đốc',
      district_id: '561100',
    },
    {
      id: '7420',
      name: 'Xã trà dương',
      district_id: '561100',
    },
    {
      id: '7421',
      name: 'Xã trà giác',
      district_id: '561100',
    },
    {
      id: '7422',
      name: 'Xã trà nú',
      district_id: '561100',
    },
    {
      id: '7423',
      name: 'Xã trà giáp',
      district_id: '561100',
    },
    {
      id: '7424',
      name: 'Xã trà ka',
      district_id: '561100',
    },
    {
      id: '7425',
      name: 'Xã trà kót',
      district_id: '561100',
    },
    {
      id: '7426',
      name: 'Xã trà sơn',
      district_id: '561100',
    },
    {
      id: '7374',
      name: 'Xã duy hải',
      district_id: '560300',
    },
    {
      id: '7375',
      name: 'Thị trấn nam phước',
      district_id: '560300',
    },
    {
      id: '7376',
      name: 'Xã duy hòa',
      district_id: '560300',
    },
    {
      id: '7377',
      name: 'Xã duy trung',
      district_id: '560300',
    },
    {
      id: '7378',
      name: 'Xã duy trinh',
      district_id: '560300',
    },
    {
      id: '7379',
      name: 'Xã duy châu',
      district_id: '560300',
    },
    {
      id: '7380',
      name: 'Xã duy phước',
      district_id: '560300',
    },
    {
      id: '7381',
      name: 'Xã duy vinh',
      district_id: '560300',
    },
    {
      id: '7382',
      name: 'Xã duy sơn',
      district_id: '560300',
    },
    {
      id: '7383',
      name: 'Xã duy nghĩa',
      district_id: '560300',
    },
    {
      id: '7384',
      name: 'Xã duy thành',
      district_id: '560300',
    },
    {
      id: '7385',
      name: 'Xã duy thu',
      district_id: '560300',
    },
    {
      id: '7386',
      name: 'Xã duy phú',
      district_id: '560300',
    },
    {
      id: '7387',
      name: 'Xã duy tân',
      district_id: '560300',
    },
    {
      id: '7522',
      name: 'Thị trấn thạnh mỹ',
      district_id: '561300',
    },
    {
      id: '7523',
      name: 'Xã cà dy',
      district_id: '561300',
    },
    {
      id: '7524',
      name: 'Xã tà bhinh',
      district_id: '561300',
    },
    {
      id: '7526',
      name: 'Xã đac pre',
      district_id: '561300',
    },
    {
      id: '7527',
      name: 'Xã la dêê',
      district_id: '561300',
    },
    {
      id: '7531',
      name: 'Xã đắc tôi',
      district_id: '561300',
    },
    {
      id: '7532',
      name: 'Xã tà pơơ',
      district_id: '561300',
    },
    {
      id: '7533',
      name: 'Xã chơ chun',
      district_id: '561300',
    },
    {
      id: '11986',
      name: 'Xã chà vàl',
      district_id: '561300',
    },
    {
      id: '11987',
      name: 'Xã đắc pring',
      district_id: '561300',
    },
    {
      id: '11988',
      name: 'Xã laêê',
      district_id: '561300',
    },
    {
      id: '11989',
      name: 'Xã zuôich',
      district_id: '561300',
    },
    {
      id: '7479',
      name: 'Xã phước lộc',
      district_id: '561400',
    },
    {
      id: '7480',
      name: 'Xã phước thành',
      district_id: '561400',
    },
    {
      id: '7481',
      name: 'Xã phước kim',
      district_id: '561400',
    },
    {
      id: '7482',
      name: 'Xã phước công',
      district_id: '561400',
    },
    {
      id: '7483',
      name: 'Xã phước chánh',
      district_id: '561400',
    },
    {
      id: '7484',
      name: 'Xã phước mỹ',
      district_id: '561400',
    },
    {
      id: '7485',
      name: 'Xã phước năng',
      district_id: '561400',
    },
    {
      id: '7486',
      name: 'Xã phước đức',
      district_id: '561400',
    },
    {
      id: '7487',
      name: 'Xã phước xuân',
      district_id: '561400',
    },
    {
      id: '7488',
      name: 'Xã phước hiệp',
      district_id: '561400',
    },
    {
      id: '7489',
      name: 'Xã phước hòa',
      district_id: '561400',
    },
    {
      id: '7490',
      name: 'Thị trấn khâm đức',
      district_id: '561400',
    },
    {
      id: '7388',
      name: 'Xã quế xuân 1',
      district_id: '560600',
    },
    {
      id: '7389',
      name: 'Xã quế xuân 2',
      district_id: '560600',
    },
    {
      id: '7390',
      name: 'Xã quế phú',
      district_id: '560600',
    },
    {
      id: '7391',
      name: 'Xã quế cường',
      district_id: '560600',
    },
    {
      id: '7392',
      name: 'Xã phú thọ',
      district_id: '560600',
    },
    {
      id: '7393',
      name: 'Xã quế thuận',
      district_id: '560600',
    },
    {
      id: '7394',
      name: 'Xã quế hiệp',
      district_id: '560600',
    },
    {
      id: '7395',
      name: 'Xã quế châu',
      district_id: '560600',
    },
    {
      id: '7396',
      name: 'Xã quế minh',
      district_id: '560600',
    },
    {
      id: '7397',
      name: 'Xã quế an',
      district_id: '560600',
    },
    {
      id: '7398',
      name: 'Xã quế phong',
      district_id: '560600',
    },
    {
      id: '7399',
      name: 'Xã quế long',
      district_id: '560600',
    },
    {
      id: '7400',
      name: 'Thị Trấn Hương An',
      district_id: '560600',
    },
    {
      id: '7401',
      name: 'Thị trấn đông phú',
      district_id: '560600',
    },
    {
      id: '7512',
      name: "Xã ch'ơm",
      district_id: '561600',
    },
    {
      id: '7513',
      name: 'Xã a xan',
      district_id: '561600',
    },
    {
      id: '7514',
      name: "Xã tr'hy",
      district_id: '561600',
    },
    {
      id: '7515',
      name: 'Xã lăng',
      district_id: '561600',
    },
    {
      id: '7516',
      name: 'Xã a tiêng',
      district_id: '561600',
    },
    {
      id: '7519',
      name: 'Xã a nông',
      district_id: '561600',
    },
    {
      id: '7520',
      name: 'Xã dang',
      district_id: '561600',
    },
    {
      id: '7521',
      name: 'Xã a vương',
      district_id: '561600',
    },
    {
      id: '11975',
      name: 'Xã bha lê',
      district_id: '561600',
    },
    {
      id: '11976',
      name: 'Xã ga ri',
      district_id: '561600',
    },
    {
      id: '7313',
      name: 'Xã quế trung',
      district_id: '561800',
    },
    {
      id: '7314',
      name: 'Xã quế lộc',
      district_id: '561800',
    },
    {
      id: '7315',
      name: 'Xã quế ninh',
      district_id: '561800',
    },
    {
      id: '7316',
      name: 'Xã quế phước',
      district_id: '561800',
    },
    {
      id: '7317',
      name: 'Xã sơn viên',
      district_id: '561800',
    },
    {
      id: '7318',
      name: 'Xã phước ninh',
      district_id: '561800',
    },
    {
      id: '7319',
      name: 'Xã quế lâm',
      district_id: '561800',
    },
    {
      id: '7665',
      name: 'Xã ba chùa',
      district_id: '571200',
    },
    {
      id: '7666',
      name: 'Xã ba cung',
      district_id: '571200',
    },
    {
      id: '7667',
      name: 'Xã ba điền',
      district_id: '571200',
    },
    {
      id: '7668',
      name: 'Xã ba dinh',
      district_id: '571200',
    },
    {
      id: '7669',
      name: 'Xã ba động',
      district_id: '571200',
    },
    {
      id: '7670',
      name: 'Xã ba khâm',
      district_id: '571200',
    },
    {
      id: '7671',
      name: 'Xã ba lễ',
      district_id: '571200',
    },
    {
      id: '7672',
      name: 'Xã ba liên',
      district_id: '571200',
    },
    {
      id: '7673',
      name: 'Xã ba nam',
      district_id: '571200',
    },
    {
      id: '7674',
      name: 'Xã ba ngạc',
      district_id: '571200',
    },
    {
      id: '7675',
      name: 'Xã ba thành',
      district_id: '571200',
    },
    {
      id: '7676',
      name: 'Xã ba tiêu',
      district_id: '571200',
    },
    {
      id: '7677',
      name: 'Xã ba tô',
      district_id: '571200',
    },
    {
      id: '7678',
      name: 'Xã ba trang',
      district_id: '571200',
    },
    {
      id: '7679',
      name: 'Xã Ba Vì',
      district_id: '571200',
    },
    {
      id: '7680',
      name: 'Xã ba vinh',
      district_id: '571200',
    },
    {
      id: '7681',
      name: 'Xã ba xa',
      district_id: '571200',
    },
    {
      id: '7682',
      name: 'Xã ba bích',
      district_id: '571200',
    },
    {
      id: '7683',
      name: 'Thị trấn ba tơ',
      district_id: '571200',
    },
    {
      id: '11999',
      name: 'Xã ba giang',
      district_id: '571200',
    },
    {
      id: '7686',
      name: 'Thị trấn đức phổ',
      district_id: '571100',
    },
    {
      id: '7687',
      name: 'Xã phổ minh',
      district_id: '571100',
    },
    {
      id: '7688',
      name: 'Xã phổ châu',
      district_id: '571100',
    },
    {
      id: '7689',
      name: 'Xã phổ an',
      district_id: '571100',
    },
    {
      id: '7690',
      name: 'Xã phổ cường',
      district_id: '571100',
    },
    {
      id: '7691',
      name: 'Xã phổ khánh',
      district_id: '571100',
    },
    {
      id: '7692',
      name: 'Xã phổ nhơn',
      district_id: '571100',
    },
    {
      id: '7693',
      name: 'Xã phổ phong',
      district_id: '571100',
    },
    {
      id: '7694',
      name: 'Xã phổ quang',
      district_id: '571100',
    },
    {
      id: '7695',
      name: 'Xã phổ thạnh',
      district_id: '571100',
    },
    {
      id: '7696',
      name: 'Xã phổ văn',
      district_id: '571100',
    },
    {
      id: '7697',
      name: 'Xã phổ vinh',
      district_id: '571100',
    },
    {
      id: '7698',
      name: 'Xã phổ hoà',
      district_id: '571100',
    },
    {
      id: '7699',
      name: 'Xã phổ thuận',
      district_id: '571100',
    },
    {
      id: '7700',
      name: 'Xã phổ ninh',
      district_id: '571100',
    },
    {
      id: '12800',
      name: 'Phường Nguyễn Nghiêm',
      district_id: '571100',
    },
    {
      id: '7555',
      name: 'Xã an bình',
      district_id: '570200',
    },
    {
      id: '7556',
      name: 'Xã an hải',
      district_id: '570200',
    },
    {
      id: '7557',
      name: 'Xã an vĩnh',
      district_id: '570200',
    },
    {
      id: '7659',
      name: 'Xã long hiệp',
      district_id: '570900',
    },
    {
      id: '7660',
      name: 'Xã long mai',
      district_id: '570900',
    },
    {
      id: '7661',
      name: 'Xã long môn',
      district_id: '570900',
    },
    {
      id: '7662',
      name: 'Xã long sơn',
      district_id: '570900',
    },
    {
      id: '7663',
      name: 'Xã thanh an',
      district_id: '570900',
    },
    {
      id: '7701',
      name: 'Thị trấn mộ đức',
      district_id: '571000',
    },
    {
      id: '7702',
      name: 'Xã đức phong',
      district_id: '571000',
    },
    {
      id: '7703',
      name: 'Xã đức phú',
      district_id: '571000',
    },
    {
      id: '7704',
      name: 'Xã đức tân',
      district_id: '571000',
    },
    {
      id: '7705',
      name: 'Xã đức thắng',
      district_id: '571000',
    },
    {
      id: '7706',
      name: 'Xã đức thạnh',
      district_id: '571000',
    },
    {
      id: '7707',
      name: 'Xã đức chánh',
      district_id: '571000',
    },
    {
      id: '7708',
      name: 'Xã đức hiệp',
      district_id: '571000',
    },
    {
      id: '7709',
      name: 'Xã đức hòa',
      district_id: '571000',
    },
    {
      id: '7710',
      name: 'Xã đức lân',
      district_id: '571000',
    },
    {
      id: '7711',
      name: 'Xã đức lợi',
      district_id: '571000',
    },
    {
      id: '7712',
      name: 'Xã đức minh',
      district_id: '571000',
    },
    {
      id: '7713',
      name: 'Xã đức nhuận',
      district_id: '571000',
    },
    {
      id: '7545',
      name: 'Phường nguyễn nghiêm',
      district_id: '570100',
    },
    {
      id: '7546',
      name: 'Phường lê hồng phong',
      district_id: '570100',
    },
    {
      id: '7547',
      name: 'Phường trần phú',
      district_id: '570100',
    },
    {
      id: '7548',
      name: 'Phường quảng phú',
      district_id: '570100',
    },
    {
      id: '7549',
      name: 'Phường trần hưng đạo',
      district_id: '570100',
    },
    {
      id: '7550',
      name: 'Phường chánh lộ',
      district_id: '570100',
    },
    {
      id: '7551',
      name: 'Phường nghĩa lộ',
      district_id: '570100',
    },
    {
      id: '7552',
      name: 'Phường nghĩa chánh',
      district_id: '570100',
    },
    {
      id: '7553',
      name: 'Xã nghĩa dõng',
      district_id: '570100',
    },
    {
      id: '7554',
      name: 'Xã nghĩa dũng',
      district_id: '570100',
    },
    {
      id: '12001',
      name: 'Phường trương quang trọng',
      district_id: '570100',
    },
    {
      id: '12002',
      name: 'Xã tịnh long',
      district_id: '570100',
    },
    {
      id: '12003',
      name: 'Xã nghĩa an',
      district_id: '570100',
    },
    {
      id: '12004',
      name: 'Xã nghĩa hà',
      district_id: '570100',
    },
    {
      id: '12005',
      name: 'Xã nghĩa phú',
      district_id: '570100',
    },
    {
      id: '12006',
      name: 'Xã tịnh an',
      district_id: '570100',
    },
    {
      id: '12007',
      name: 'Xã tịnh ấn đông',
      district_id: '570100',
    },
    {
      id: '12008',
      name: 'Xã tịnh ấn tây',
      district_id: '570100',
    },
    {
      id: '12009',
      name: 'Xã tịnh châu',
      district_id: '570100',
    },
    {
      id: '12010',
      name: 'Xã tịnh hòa',
      district_id: '570100',
    },
    {
      id: '12011',
      name: 'Xã tịnh khê',
      district_id: '570100',
    },
    {
      id: '12012',
      name: 'Xã tịnh kỳ',
      district_id: '570100',
    },
    {
      id: '12013',
      name: 'Xã tịnh thiện',
      district_id: '570100',
    },
    {
      id: '7624',
      name: 'Xã sơn ba',
      district_id: '570600',
    },
    {
      id: '7625',
      name: 'Xã sơn bao',
      district_id: '570600',
    },
    {
      id: '7626',
      name: 'Xã sơn cao',
      district_id: '570600',
    },
    {
      id: '7627',
      name: 'Xã sơn giang',
      district_id: '570600',
    },
    {
      id: '7628',
      name: 'Xã sơn hạ',
      district_id: '570600',
    },
    {
      id: '7629',
      name: 'Xã sơn hải',
      district_id: '570600',
    },
    {
      id: '7630',
      name: 'Xã sơn linh',
      district_id: '570600',
    },
    {
      id: '7631',
      name: 'Xã sơn nham',
      district_id: '570600',
    },
    {
      id: '7632',
      name: 'Xã sơn thành',
      district_id: '570600',
    },
    {
      id: '7633',
      name: 'Xã sơn thượng',
      district_id: '570600',
    },
    {
      id: '7634',
      name: 'Xã sơn kỳ',
      district_id: '570600',
    },
    {
      id: '7635',
      name: 'Xã sơn thủy',
      district_id: '570600',
    },
    {
      id: '7636',
      name: 'Xã sơn trung',
      district_id: '570600',
    },
    {
      id: '7637',
      name: 'Thị trấn di lăng',
      district_id: '570600',
    },
    {
      id: '7563',
      name: 'Xã tịnh minh',
      district_id: '570500',
    },
    {
      id: '7564',
      name: 'Xã tịnh phong',
      district_id: '570500',
    },
    {
      id: '7565',
      name: 'Xã tịnh sơn',
      district_id: '570500',
    },
    {
      id: '7567',
      name: 'Xã tịnh thọ',
      district_id: '570500',
    },
    {
      id: '7568',
      name: 'Xã tịnh trà',
      district_id: '570500',
    },
    {
      id: '7569',
      name: 'Xã tịnh bắc',
      district_id: '570500',
    },
    {
      id: '7573',
      name: 'Xã tịnh bình',
      district_id: '570500',
    },
    {
      id: '7575',
      name: 'Xã tịnh đông',
      district_id: '570500',
    },
    {
      id: '7576',
      name: 'Xã tịnh giang',
      district_id: '570500',
    },
    {
      id: '7577',
      name: 'Xã tịnh hà',
      district_id: '570500',
    },
    {
      id: '7578',
      name: 'Xã tịnh hiệp',
      district_id: '570500',
    },
    {
      id: '7604',
      name: 'Xã trà bình',
      district_id: '570400',
    },
    {
      id: '7605',
      name: 'Xã trà bùi',
      district_id: '570400',
    },
    {
      id: '7606',
      name: 'Xã trà giang',
      district_id: '570400',
    },
    {
      id: '7607',
      name: 'Xã trà hiệp',
      district_id: '570400',
    },
    {
      id: '7608',
      name: 'Xã trà lâm',
      district_id: '570400',
    },
    {
      id: '7609',
      name: 'Xã trà tân',
      district_id: '570400',
    },
    {
      id: '7610',
      name: 'Xã trà thủy',
      district_id: '570400',
    },
    {
      id: '7612',
      name: 'Thị trấn trà xuân',
      district_id: '570400',
    },
    {
      id: '7613',
      name: 'Xã trà phú',
      district_id: '570400',
    },
    {
      id: '7614',
      name: 'Xã trà sơn',
      district_id: '570400',
    },
    {
      id: '7623',
      name: 'Xã Trà Xinh',
      district_id: '570400',
    },
    {
      id: '12678',
      name: 'Xã Hương Trà',
      district_id: '570400',
    },
    {
      id: '7579',
      name: 'Xã bình thanh tây',
      district_id: '570300',
    },
    {
      id: '7580',
      name: 'Xã bình chánh',
      district_id: '570300',
    },
    {
      id: '7581',
      name: 'Xã bình chương',
      district_id: '570300',
    },
    {
      id: '7582',
      name: 'Xã bình an',
      district_id: '570300',
    },
    {
      id: '7583',
      name: 'Xã bình châu',
      district_id: '570300',
    },
    {
      id: '7584',
      name: 'Xã bình dương',
      district_id: '570300',
    },
    {
      id: '7585',
      name: 'Xã bình hiệp',
      district_id: '570300',
    },
    {
      id: '7586',
      name: 'Xã bình hòa',
      district_id: '570300',
    },
    {
      id: '7587',
      name: 'Xã bình khương',
      district_id: '570300',
    },
    {
      id: '7588',
      name: 'Xã bình long',
      district_id: '570300',
    },
    {
      id: '7589',
      name: 'Xã bình minh',
      district_id: '570300',
    },
    {
      id: '7590',
      name: 'Xã bình mỹ',
      district_id: '570300',
    },
    {
      id: '7591',
      name: 'Xã bình nguyên',
      district_id: '570300',
    },
    {
      id: '7592',
      name: 'Xã bình phú',
      district_id: '570300',
    },
    {
      id: '7593',
      name: 'Xã bình phước',
      district_id: '570300',
    },
    {
      id: '7594',
      name: 'Xã bình tân',
      district_id: '570300',
    },
    {
      id: '7595',
      name: 'Xã bình thanh đông',
      district_id: '570300',
    },
    {
      id: '7596',
      name: 'Xã bình thới',
      district_id: '570300',
    },
    {
      id: '7597',
      name: 'Xã bình trung',
      district_id: '570300',
    },
    {
      id: '7598',
      name: 'Xã bình đông',
      district_id: '570300',
    },
    {
      id: '7599',
      name: 'Xã bình thạnh',
      district_id: '570300',
    },
    {
      id: '7600',
      name: 'Thị trấn châu ổ',
      district_id: '570300',
    },
    {
      id: '7601',
      name: 'Xã bình hải',
      district_id: '570300',
    },
    {
      id: '7602',
      name: 'Xã bình trị',
      district_id: '570300',
    },
    {
      id: '7603',
      name: 'Xã bình thuận',
      district_id: '570300',
    },
    {
      id: '7647',
      name: 'Xã hành đức',
      district_id: '570800',
    },
    {
      id: '7648',
      name: 'Xã hành dũng',
      district_id: '570800',
    },
    {
      id: '7649',
      name: 'Xã hành minh',
      district_id: '570800',
    },
    {
      id: '7650',
      name: 'Xã hành nhân',
      district_id: '570800',
    },
    {
      id: '7651',
      name: 'Xã hành phước',
      district_id: '570800',
    },
    {
      id: '7652',
      name: 'Xã hành thiện',
      district_id: '570800',
    },
    {
      id: '7653',
      name: 'Xã hành thịnh',
      district_id: '570800',
    },
    {
      id: '7654',
      name: 'Xã Hành Tín đông',
      district_id: '570800',
    },
    {
      id: '7655',
      name: 'Xã hành tín tây',
      district_id: '570800',
    },
    {
      id: '7656',
      name: 'Xã hành trung',
      district_id: '570800',
    },
    {
      id: '7657',
      name: 'Xã hành thuận',
      district_id: '570800',
    },
    {
      id: '7658',
      name: 'Thị trấn chợ chùa',
      district_id: '570800',
    },
    {
      id: '7638',
      name: 'Xã sơn dung',
      district_id: '571300',
    },
    {
      id: '7639',
      name: 'Xã sơn lập',
      district_id: '571300',
    },
    {
      id: '7640',
      name: 'Xã sơn liên',
      district_id: '571300',
    },
    {
      id: '7641',
      name: 'Xã sơn long',
      district_id: '571300',
    },
    {
      id: '7642',
      name: 'Xã sơn bua',
      district_id: '571300',
    },
    {
      id: '7643',
      name: 'Xã sơn màu',
      district_id: '571300',
    },
    {
      id: '7644',
      name: 'Xã sơn mùa',
      district_id: '571300',
    },
    {
      id: '7645',
      name: 'Xã sơn tân',
      district_id: '571300',
    },
    {
      id: '7646',
      name: 'Xã sơn tinh',
      district_id: '571300',
    },
    {
      id: '7615',
      name: 'Xã trà khê',
      district_id: '571400',
    },
    {
      id: '7616',
      name: 'Xã trà lãnh',
      district_id: '571400',
    },
    {
      id: '7617',
      name: 'Xã trà nham',
      district_id: '571400',
    },
    {
      id: '7618',
      name: 'Xã trà phong',
      district_id: '571400',
    },
    {
      id: '7619',
      name: 'Xã trà quân',
      district_id: '571400',
    },
    {
      id: '7620',
      name: 'Xã trà thanh',
      district_id: '571400',
    },
    {
      id: '7621',
      name: 'Xã trà thọ',
      district_id: '571400',
    },
    {
      id: '7622',
      name: 'Xã trà trung',
      district_id: '571400',
    },
    {
      id: '6996',
      name: 'Thị trấn cam lộ',
      district_id: '520500',
    },
    {
      id: '6997',
      name: 'Xã cam thành',
      district_id: '520500',
    },
    {
      id: '6998',
      name: 'Xã cam an',
      district_id: '520500',
    },
    {
      id: '6999',
      name: 'Xã cam thanh',
      district_id: '520500',
    },
    {
      id: '7000',
      name: 'Xã cam thủy',
      district_id: '520500',
    },
    {
      id: '7001',
      name: 'Xã cam tuyền',
      district_id: '520500',
    },
    {
      id: '7002',
      name: 'Xã cam hiếu',
      district_id: '520500',
    },
    {
      id: '7003',
      name: 'Xã cam chính',
      district_id: '520500',
    },
    {
      id: '7004',
      name: 'Xã cam nghĩa',
      district_id: '520500',
    },
    {
      id: '6952',
      name: 'Thị trấn gio linh',
      district_id: '520400',
    },
    {
      id: '6953',
      name: 'Thị trấn cửa việt',
      district_id: '520400',
    },
    {
      id: '6954',
      name: 'Xã gio châu',
      district_id: '520400',
    },
    {
      id: '6955',
      name: 'Xã trung hải',
      district_id: '520400',
    },
    {
      id: '6956',
      name: 'Xã trung giang',
      district_id: '520400',
    },
    {
      id: '6957',
      name: 'Xã trung sơn',
      district_id: '520400',
    },
    {
      id: '6958',
      name: 'Xã gio mỹ',
      district_id: '520400',
    },
    {
      id: '6959',
      name: 'Xã gio phong',
      district_id: '520400',
    },
    {
      id: '6960',
      name: 'Xã gio an',
      district_id: '520400',
    },
    {
      id: '6961',
      name: 'Xã gio bình',
      district_id: '520400',
    },
    {
      id: '6962',
      name: 'Xã gio hải',
      district_id: '520400',
    },
    {
      id: '6963',
      name: 'Xã gio sơn',
      district_id: '520400',
    },
    {
      id: '6964',
      name: 'Xã gio hòa',
      district_id: '520400',
    },
    {
      id: '6965',
      name: 'Xã linh hải',
      district_id: '520400',
    },
    {
      id: '6966',
      name: 'Xã gio việt',
      district_id: '520400',
    },
    {
      id: '6967',
      name: 'Xã vĩnh trường',
      district_id: '520400',
    },
    {
      id: '6968',
      name: 'Xã hải thái',
      district_id: '520400',
    },
    {
      id: '6969',
      name: 'Xã gio mai',
      district_id: '520400',
    },
    {
      id: '6970',
      name: 'Xã gio quang',
      district_id: '520400',
    },
    {
      id: '6971',
      name: 'Xã linh thượng',
      district_id: '520400',
    },
    {
      id: '6972',
      name: 'Xã gio thành',
      district_id: '520400',
    },
    {
      id: '7065',
      name: 'Xã hải chánh',
      district_id: '520700',
    },
    {
      id: '7066',
      name: 'Xã hải khê',
      district_id: '520700',
    },
    {
      id: '7067',
      name: 'Thị Trấn Diên Sanh',
      district_id: '520700',
    },
    {
      id: '7068',
      name: 'Xã hải lâm',
      district_id: '520700',
    },
    {
      id: '7069',
      name: 'Xã hải an',
      district_id: '520700',
    },
    {
      id: '7070',
      name: 'Xã hải ba',
      district_id: '520700',
    },
    {
      id: '7072',
      name: 'Xã hải quy',
      district_id: '520700',
    },
    {
      id: '7073',
      name: 'Xã hải quế',
      district_id: '520700',
    },
    {
      id: '7075',
      name: 'Xã hải phú',
      district_id: '520700',
    },
    {
      id: '7076',
      name: 'Xã hải thượng',
      district_id: '520700',
    },
    {
      id: '7077',
      name: 'Xã hải dương',
      district_id: '520700',
    },
    {
      id: '7082',
      name: 'Xã hải trường',
      district_id: '520700',
    },
    {
      id: '7084',
      name: 'Xã hải sơn',
      district_id: '520700',
    },
    {
      id: '12745',
      name: 'Xã Hải Phong',
      district_id: '520700',
    },
    {
      id: '12746',
      name: 'Xã Hải Hưng',
      district_id: '520700',
    },
    {
      id: '12747',
      name: 'Xã Hải Định',
      district_id: '520700',
    },
    {
      id: '7060',
      name: 'Phường 1',
      district_id: '520200',
    },
    {
      id: '7061',
      name: 'Phường 2',
      district_id: '520200',
    },
    {
      id: '7062',
      name: 'Phường 3',
      district_id: '520200',
    },
    {
      id: '7063',
      name: 'Phường an đôn',
      district_id: '520200',
    },
    {
      id: '11997',
      name: 'Xã hải lệ',
      district_id: '520200',
    },
    {
      id: '6973',
      name: 'Thị trấn hồ xá',
      district_id: '520300',
    },
    {
      id: '6974',
      name: 'Thị trấn bến quan',
      district_id: '520300',
    },
    {
      id: '6975',
      name: 'Thị trấn cửa tùng',
      district_id: '520300',
    },
    {
      id: '6976',
      name: 'Xã vĩnh thái',
      district_id: '520300',
    },
    {
      id: '6977',
      name: 'Xã vĩnh ô',
      district_id: '520300',
    },
    {
      id: '6978',
      name: 'Xã vĩnh khê',
      district_id: '520300',
    },
    {
      id: '6979',
      name: 'Xã vĩnh hà',
      district_id: '520300',
    },
    {
      id: '6980',
      name: 'Xã vĩnh long',
      district_id: '520300',
    },
    {
      id: '6981',
      name: 'Xã vĩnh chấp',
      district_id: '520300',
    },
    {
      id: '6982',
      name: 'Xã vĩnh lâm',
      district_id: '520300',
    },
    {
      id: '6983',
      name: 'Xã vĩnh sơn',
      district_id: '520300',
    },
    {
      id: '6984',
      name: 'Xã vĩnh thủy',
      district_id: '520300',
    },
    {
      id: '6985',
      name: 'Xã vĩnh nam',
      district_id: '520300',
    },
    {
      id: '6986',
      name: 'Xã vĩnh trung',
      district_id: '520300',
    },
    {
      id: '6987',
      name: 'Xã vĩnh tú',
      district_id: '520300',
    },
    {
      id: '6988',
      name: 'Xã vĩnh hiền',
      district_id: '520300',
    },
    {
      id: '6989',
      name: 'Xã vĩnh hòa',
      district_id: '520300',
    },
    {
      id: '6990',
      name: 'Xã vĩnh thạch',
      district_id: '520300',
    },
    {
      id: '6991',
      name: 'Xã vĩnh kim',
      district_id: '520300',
    },
    {
      id: '6992',
      name: 'Xã vĩnh giang',
      district_id: '520300',
    },
    {
      id: '6993',
      name: 'Xã vĩnh tân',
      district_id: '520300',
    },
    {
      id: '6994',
      name: 'Xã vĩnh thành',
      district_id: '520300',
    },
    {
      id: '12829',
      name: 'Xã Hiền Thành',
      district_id: '520300',
    },
    {
      id: '7005',
      name: 'Xã húc',
      district_id: '520800',
    },
    {
      id: '7006',
      name: 'Xã hướng lộc',
      district_id: '520800',
    },
    {
      id: '7007',
      name: 'Xã tân hợp',
      district_id: '520800',
    },
    {
      id: '7008',
      name: 'Xã tân liên',
      district_id: '520800',
    },
    {
      id: '7009',
      name: 'Xã tân lập',
      district_id: '520800',
    },
    {
      id: '7010',
      name: 'Xã tân long',
      district_id: '520800',
    },
    {
      id: '7011',
      name: 'Xã tân thành',
      district_id: '520800',
    },
    {
      id: '7012',
      name: 'Xã hướng tân',
      district_id: '520800',
    },
    {
      id: '7013',
      name: 'Xã hướng linh',
      district_id: '520800',
    },
    {
      id: '7014',
      name: 'Xã hướng phùng',
      district_id: '520800',
    },
    {
      id: '7015',
      name: 'Xã hướng sơn',
      district_id: '520800',
    },
    {
      id: '7016',
      name: 'Xã hướng việt',
      district_id: '520800',
    },
    {
      id: '7017',
      name: 'Xã hướng lập',
      district_id: '520800',
    },
    {
      id: '7018',
      name: 'Thị trấn khe sanh',
      district_id: '520800',
    },
    {
      id: '7019',
      name: 'Thị trấn lao bảo',
      district_id: '520800',
    },
    {
      id: '7020',
      name: 'Xã xy',
      district_id: '520800',
    },
    {
      id: '7021',
      name: 'Xã a túc',
      district_id: '520800',
    },
    {
      id: '7022',
      name: 'Xã A Dơi',
      district_id: '520800',
    },
    {
      id: '7023',
      name: 'Xã a xing',
      district_id: '520800',
    },
    {
      id: '7024',
      name: 'Xã thanh',
      district_id: '520800',
    },
    {
      id: '7025',
      name: 'Xã thuận',
      district_id: '520800',
    },
    {
      id: '11998',
      name: 'Xã ba tầng',
      district_id: '520800',
    },
    {
      id: '7041',
      name: 'Xã triệu vân',
      district_id: '520600',
    },
    {
      id: '7042',
      name: 'Xã triệu độ',
      district_id: '520600',
    },
    {
      id: '7043',
      name: 'Xã triệu đại',
      district_id: '520600',
    },
    {
      id: '7044',
      name: 'Xã triệu lăng',
      district_id: '520600',
    },
    {
      id: '7045',
      name: 'Xã triệu an',
      district_id: '520600',
    },
    {
      id: '7046',
      name: 'Xã triệu trạch',
      district_id: '520600',
    },
    {
      id: '7047',
      name: 'Xã triệu trung',
      district_id: '520600',
    },
    {
      id: '7048',
      name: 'Xã triệu ái',
      district_id: '520600',
    },
    {
      id: '7049',
      name: 'Thị trấn ải tử',
      district_id: '520600',
    },
    {
      id: '7050',
      name: 'Xã triệu thượng',
      district_id: '520600',
    },
    {
      id: '7051',
      name: 'Xã triệu phước',
      district_id: '520600',
    },
    {
      id: '7052',
      name: 'Xã triệu thành',
      district_id: '520600',
    },
    {
      id: '7053',
      name: 'Xã triệu long',
      district_id: '520600',
    },
    {
      id: '7054',
      name: 'Xã triệu hòa',
      district_id: '520600',
    },
    {
      id: '7055',
      name: 'Xã triệu tài',
      district_id: '520600',
    },
    {
      id: '7056',
      name: 'Xã triệu sơn',
      district_id: '520600',
    },
    {
      id: '7057',
      name: 'Xã triệu đông',
      district_id: '520600',
    },
    {
      id: '7058',
      name: 'Xã triệu giang',
      district_id: '520600',
    },
    {
      id: '7059',
      name: 'Xã triệu thuận',
      district_id: '520600',
    },
    {
      id: '11492',
      name: 'Xã an thạnh tây',
      district_id: '950800',
    },
    {
      id: '11493',
      name: 'Thị trấn cù lao dung',
      district_id: '950800',
    },
    {
      id: '11494',
      name: 'Xã an thạnh đông',
      district_id: '950800',
    },
    {
      id: '11498',
      name: 'Xã an thạnh nam',
      district_id: '950800',
    },
    {
      id: '12462',
      name: 'Xã an thạnh 1',
      district_id: '950800',
    },
    {
      id: '12463',
      name: 'Xã an thạnh 2',
      district_id: '950800',
    },
    {
      id: '12464',
      name: 'Xã an thạnh 3',
      district_id: '950800',
    },
    {
      id: '12465',
      name: 'Xã đại ân 1',
      district_id: '950800',
    },
    {
      id: '11429',
      name: 'Thị trấn kế sách',
      district_id: '950200',
    },
    {
      id: '11431',
      name: 'Xã xuân hoà',
      district_id: '950200',
    },
    {
      id: '11433',
      name: 'Xã ba trinh',
      district_id: '950200',
    },
    {
      id: '11434',
      name: 'Xã trinh phú',
      district_id: '950200',
    },
    {
      id: '11435',
      name: 'Xã an lạc tây',
      district_id: '950200',
    },
    {
      id: '11436',
      name: 'Xã thới an hội',
      district_id: '950200',
    },
    {
      id: '11437',
      name: 'Xã đại hải',
      district_id: '950200',
    },
    {
      id: '11438',
      name: 'Xã kế an',
      district_id: '950200',
    },
    {
      id: '11439',
      name: 'Xã kế thành',
      district_id: '950200',
    },
    {
      id: '11440',
      name: 'Xã nhơn mỹ',
      district_id: '950200',
    },
    {
      id: '11441',
      name: 'Xã an mỹ',
      district_id: '950200',
    },
    {
      id: '11442',
      name: 'Xã phong nẫm',
      district_id: '950200',
    },
    {
      id: '12461',
      name: 'Thị trấn an lạc thôn',
      district_id: '950200',
    },
    {
      id: '11415',
      name: 'Xã tân thạnh',
      district_id: '950600',
    },
    {
      id: '11416',
      name: 'Xã long phú',
      district_id: '950600',
    },
    {
      id: '11417',
      name: 'Xã châu khánh',
      district_id: '950600',
    },
    {
      id: '11421',
      name: 'Xã trường khánh',
      district_id: '950600',
    },
    {
      id: '11422',
      name: 'Xã hậu thạnh',
      district_id: '950600',
    },
    {
      id: '11423',
      name: 'Xã long đức',
      district_id: '950600',
    },
    {
      id: '11424',
      name: 'Xã tân hưng',
      district_id: '950600',
    },
    {
      id: '11425',
      name: 'Xã phú hữu',
      district_id: '950600',
    },
    {
      id: '11428',
      name: 'Xã song phụng',
      district_id: '950600',
    },
    {
      id: '12455',
      name: 'Thị trấn long phú',
      district_id: '950600',
    },
    {
      id: '12456',
      name: 'Thị trấn đại ngãi',
      district_id: '950600',
    },
    {
      id: '11444',
      name: 'Xã mỹ hương',
      district_id: '950300',
    },
    {
      id: '11447',
      name: 'Xã mỹ thuận',
      district_id: '950300',
    },
    {
      id: '11448',
      name: 'Xã thuận hưng',
      district_id: '950300',
    },
    {
      id: '11449',
      name: 'Thị trấn huỳnh hữu nghĩa',
      district_id: '950300',
    },
    {
      id: '11450',
      name: 'Xã hưng phú',
      district_id: '950300',
    },
    {
      id: '11451',
      name: 'Xã mỹ phước',
      district_id: '950300',
    },
    {
      id: '11452',
      name: 'Xã mỹ tú',
      district_id: '950300',
    },
    {
      id: '11454',
      name: 'Xã long hưng',
      district_id: '950300',
    },
    {
      id: '11455',
      name: 'Xã phú mỹ',
      district_id: '950300',
    },
    {
      id: '11467',
      name: 'Thị trấn mỹ xuyên',
      district_id: '950400',
    },
    {
      id: '11468',
      name: 'Xã ngọc đông',
      district_id: '950400',
    },
    {
      id: '11475',
      name: 'Xã thạnh phú',
      district_id: '950400',
    },
    {
      id: '11476',
      name: 'Xã hòa tú ii',
      district_id: '950400',
    },
    {
      id: '11477',
      name: 'Xã ngọc tố',
      district_id: '950400',
    },
    {
      id: '11478',
      name: 'Xã thạnh quới',
      district_id: '950400',
    },
    {
      id: '11479',
      name: 'Xã đại tâm',
      district_id: '950400',
    },
    {
      id: '12451',
      name: 'Xã gia hòa 1',
      district_id: '950400',
    },
    {
      id: '12452',
      name: 'Xã gia hòa 2',
      district_id: '950400',
    },
    {
      id: '12453',
      name: 'Xã hòa tú 1',
      district_id: '950400',
    },
    {
      id: '12454',
      name: 'Xã tham đôn',
      district_id: '950400',
    },
    {
      id: '11500',
      name: 'Xã long bình',
      district_id: '950900',
    },
    {
      id: '11501',
      name: 'Xã mỹ bỉnh',
      district_id: '950900',
    },
    {
      id: '11502',
      name: 'Xã mỹ quới',
      district_id: '950900',
    },
    {
      id: '11504',
      name: 'Xã vĩnh quới',
      district_id: '950900',
    },
    {
      id: '11506',
      name: 'Xã tân long',
      district_id: '950900',
    },
    {
      id: '12466',
      name: 'Phường 1',
      district_id: '950900',
    },
    {
      id: '12467',
      name: 'Phường 2',
      district_id: '950900',
    },
    {
      id: '12468',
      name: 'Phường 3',
      district_id: '950900',
    },
    {
      id: '11393',
      name: 'Phường 1',
      district_id: '950100',
    },
    {
      id: '11394',
      name: 'Phường 7',
      district_id: '950100',
    },
    {
      id: '11395',
      name: 'Phường 8',
      district_id: '950100',
    },
    {
      id: '11396',
      name: 'Phường 9',
      district_id: '950100',
    },
    {
      id: '11397',
      name: 'Phường 2',
      district_id: '950100',
    },
    {
      id: '11398',
      name: 'Phường 3',
      district_id: '950100',
    },
    {
      id: '11399',
      name: 'Phường 4',
      district_id: '950100',
    },
    {
      id: '11400',
      name: 'Phường 5',
      district_id: '950100',
    },
    {
      id: '11401',
      name: 'Phường 6',
      district_id: '950100',
    },
    {
      id: '11402',
      name: 'Phường 10',
      district_id: '950100',
    },
    {
      id: '11456',
      name: 'Xã thạnh tân',
      district_id: '950500',
    },
    {
      id: '11457',
      name: 'Xã vĩnh thành',
      district_id: '950500',
    },
    {
      id: '11458',
      name: 'Xã tuân tức',
      district_id: '950500',
    },
    {
      id: '11459',
      name: 'Xã lâm tân',
      district_id: '950500',
    },
    {
      id: '11460',
      name: 'Xã châu hưng',
      district_id: '950500',
    },
    {
      id: '11461',
      name: 'Thị trấn phú lộc',
      district_id: '950500',
    },
    {
      id: '11462',
      name: 'Xã lâm kiết',
      district_id: '950500',
    },
    {
      id: '11463',
      name: 'Xã thạnh trị',
      district_id: '950500',
    },
    {
      id: '11464',
      name: 'Xã vĩnh lợi',
      district_id: '950500',
    },
    {
      id: '11465',
      name: 'Thị trấn hưng lợi',
      district_id: '950500',
    },
    {
      id: '11483',
      name: 'Xã vĩnh hiệp',
      district_id: '950700',
    },
    {
      id: '11484',
      name: 'Xã vĩnh tân',
      district_id: '950700',
    },
    {
      id: '11486',
      name: 'Xã lạc hòa',
      district_id: '950700',
    },
    {
      id: '11487',
      name: 'Xã vĩnh hải',
      district_id: '950700',
    },
    {
      id: '11488',
      name: 'Xã hòa đông',
      district_id: '950700',
    },
    {
      id: '11490',
      name: 'Xã lai hòa',
      district_id: '950700',
    },
    {
      id: '12457',
      name: 'Phường khánh hòa',
      district_id: '950700',
    },
    {
      id: '12458',
      name: 'Phường vĩnh phước',
      district_id: '950700',
    },
    {
      id: '12459',
      name: 'Phường 1',
      district_id: '950700',
    },
    {
      id: '12460',
      name: 'Phường 2',
      district_id: '950700',
    },
    {
      id: '12548',
      name: 'Phường 1',
      district_id: '950700',
    },
    {
      id: '12549',
      name: 'Xã hòa đông',
      district_id: '950700',
    },
    {
      id: '12550',
      name: 'Phường khánh hòa',
      district_id: '950700',
    },
    {
      id: '12551',
      name: 'Xã vĩnh hiệp',
      district_id: '950700',
    },
    {
      id: '12552',
      name: 'Xã vĩnh hải',
      district_id: '950700',
    },
    {
      id: '12553',
      name: 'Xã lạc hòa',
      district_id: '950700',
    },
    {
      id: '12554',
      name: 'Phường 2',
      district_id: '950700',
    },
    {
      id: '12555',
      name: 'Phường vĩnh phước',
      district_id: '950700',
    },
    {
      id: '12556',
      name: 'Xã vĩnh tân',
      district_id: '950700',
    },
    {
      id: '12557',
      name: 'Xã lai hòa',
      district_id: '950700',
    },
    {
      id: '11507',
      name: 'Xã phú tân',
      district_id: '951000',
    },
    {
      id: '11508',
      name: 'Xã phú tâm',
      district_id: '951000',
    },
    {
      id: '11509',
      name: 'Xã an hiệp',
      district_id: '951000',
    },
    {
      id: '11510',
      name: 'Xã thuận hoà',
      district_id: '951000',
    },
    {
      id: '11511',
      name: 'Thị trấn châu thành',
      district_id: '951000',
    },
    {
      id: '11513',
      name: 'Xã thiện mỹ',
      district_id: '951000',
    },
    {
      id: '12485',
      name: 'Xã an ninh',
      district_id: '951000',
    },
    {
      id: '12486',
      name: 'Xã hồ đắc kiện',
      district_id: '951000',
    },
    {
      id: '4142',
      name: 'Thị trấn bắc yên',
      district_id: '360500',
    },
    {
      id: '4143',
      name: 'Xã phiềng ban',
      district_id: '360500',
    },
    {
      id: '4144',
      name: 'Xã hang chú',
      district_id: '360500',
    },
    {
      id: '4146',
      name: 'Xã tà xùa',
      district_id: '360500',
    },
    {
      id: '4148',
      name: 'Xã làng chếu',
      district_id: '360500',
    },
    {
      id: '4149',
      name: 'Xã chim vàn',
      district_id: '360500',
    },
    {
      id: '4150',
      name: 'Xã mường khoa',
      district_id: '360500',
    },
    {
      id: '4151',
      name: 'Xã song pe',
      district_id: '360500',
    },
    {
      id: '4152',
      name: 'Xã hồng ngài',
      district_id: '360500',
    },
    {
      id: '4153',
      name: 'Xã tạ khoa',
      district_id: '360500',
    },
    {
      id: '4154',
      name: 'Xã phiêng kôn',
      district_id: '360500',
    },
    {
      id: '4155',
      name: 'Xã chiềng sại',
      district_id: '360500',
    },
    {
      id: '4156',
      name: 'Xã hua nhàn',
      district_id: '360500',
    },
    {
      id: '11731',
      name: 'Xã háng đồng',
      district_id: '360500',
    },
    {
      id: '11732',
      name: 'Xã bắc ngà',
      district_id: '360500',
    },
    {
      id: '11733',
      name: 'Xã xín vàng',
      district_id: '360500',
    },
    {
      id: '4100',
      name: 'Thị trấn mộc châu',
      district_id: '361000',
    },
    {
      id: '4101',
      name: 'Xã chiềng hặc',
      district_id: '361000',
    },
    {
      id: '4102',
      name: 'Xã đông sang',
      district_id: '361000',
    },
    {
      id: '4103',
      name: 'Xã hua păng',
      district_id: '361000',
    },
    {
      id: '4104',
      name: 'Xã chiềng sơn',
      district_id: '361000',
    },
    {
      id: '4105',
      name: 'Xã tân hợp',
      district_id: '361000',
    },
    {
      id: '4106',
      name: 'Xã qui hướng',
      district_id: '361000',
    },
    {
      id: '4107',
      name: 'Xã nà mường',
      district_id: '361000',
    },
    {
      id: '4108',
      name: 'Xã tà lai',
      district_id: '361000',
    },
    {
      id: '4109',
      name: 'Xã chiềng khừa',
      district_id: '361000',
    },
    {
      id: '4110',
      name: 'Xã mường sang',
      district_id: '361000',
    },
    {
      id: '4111',
      name: 'Xã phiêng luông',
      district_id: '361000',
    },
    {
      id: '4112',
      name: 'Xã lóng sập',
      district_id: '361000',
    },
    {
      id: '4114',
      name: 'Xã tân lập',
      district_id: '361000',
    },
    {
      id: '11725',
      name: 'Thị Trấn Nt Mộc Châu',
      district_id: '361000',
    },
    {
      id: '4115',
      name: 'Thị trấn phù yên',
      district_id: '360600',
    },
    {
      id: '4116',
      name: 'Xã tân lang',
      district_id: '360600',
    },
    {
      id: '4117',
      name: 'Xã gia phù',
      district_id: '360600',
    },
    {
      id: '4118',
      name: 'Xã tường phù',
      district_id: '360600',
    },
    {
      id: '4119',
      name: 'Xã huy hạ',
      district_id: '360600',
    },
    {
      id: '4120',
      name: 'Xã huy tân',
      district_id: '360600',
    },
    {
      id: '4121',
      name: 'Xã mường lang',
      district_id: '360600',
    },
    {
      id: '4122',
      name: 'Xã suối bau',
      district_id: '360600',
    },
    {
      id: '4123',
      name: 'Xã huy tường',
      district_id: '360600',
    },
    {
      id: '4124',
      name: 'Xã mường do',
      district_id: '360600',
    },
    {
      id: '4125',
      name: 'Xã sập xa',
      district_id: '360600',
    },
    {
      id: '4126',
      name: 'Xã tường thượng',
      district_id: '360600',
    },
    {
      id: '4127',
      name: 'Xã tường tiến',
      district_id: '360600',
    },
    {
      id: '4128',
      name: 'Xã tường phong',
      district_id: '360600',
    },
    {
      id: '4129',
      name: 'Xã tường hạ',
      district_id: '360600',
    },
    {
      id: '4130',
      name: 'Xã kim bon',
      district_id: '360600',
    },
    {
      id: '4131',
      name: 'Xã mường bang',
      district_id: '360600',
    },
    {
      id: '4132',
      name: 'Xã đá đỏ',
      district_id: '360600',
    },
    {
      id: '4133',
      name: 'Xã tân phong',
      district_id: '360600',
    },
    {
      id: '4134',
      name: 'Xã nam phong',
      district_id: '360600',
    },
    {
      id: '4135',
      name: 'Xã bắc phong',
      district_id: '360600',
    },
    {
      id: '4136',
      name: 'Xã mường thải',
      district_id: '360600',
    },
    {
      id: '4137',
      name: 'Xã mường cơi',
      district_id: '360600',
    },
    {
      id: '4138',
      name: 'Xã quang huy',
      district_id: '360600',
    },
    {
      id: '4139',
      name: 'Xã huy bắc',
      district_id: '360600',
    },
    {
      id: '4140',
      name: 'Xã huy thượng',
      district_id: '360600',
    },
    {
      id: '4141',
      name: 'Xã suối tọ',
      district_id: '360600',
    },
    {
      id: '4174',
      name: 'Xã mường chiên',
      district_id: '360200',
    },
    {
      id: '4175',
      name: 'Xã cà nàng',
      district_id: '360200',
    },
    {
      id: '4176',
      name: 'Xã chiềng khay',
      district_id: '360200',
    },
    {
      id: '4178',
      name: 'Xã mường gion',
      district_id: '360200',
    },
    {
      id: '4180',
      name: 'Xã chiềng ơn',
      district_id: '360200',
    },
    {
      id: '4181',
      name: 'Xã mường giàng',
      district_id: '360200',
    },
    {
      id: '4182',
      name: 'Xã chiềng bằng',
      district_id: '360200',
    },
    {
      id: '4183',
      name: 'Xã mường sai',
      district_id: '360200',
    },
    {
      id: '4184',
      name: 'Xã nậm ét',
      district_id: '360200',
    },
    {
      id: '4186',
      name: 'Xã chiềng khoang',
      district_id: '360200',
    },
    {
      id: '11726',
      name: 'Xã pá ma pha khinh',
      district_id: '360200',
    },
    {
      id: '4219',
      name: 'Thị trấn sông mã',
      district_id: '360900',
    },
    {
      id: '4220',
      name: 'Xã bó sinh',
      district_id: '360900',
    },
    {
      id: '4221',
      name: 'Xã pú pẩu',
      district_id: '360900',
    },
    {
      id: '4222',
      name: 'Xã chiềng phung',
      district_id: '360900',
    },
    {
      id: '4223',
      name: 'Xã chiềng en',
      district_id: '360900',
    },
    {
      id: '4224',
      name: 'Xã mường lầm',
      district_id: '360900',
    },
    {
      id: '4225',
      name: 'Xã nậm ty',
      district_id: '360900',
    },
    {
      id: '4227',
      name: 'Xã yên hưng',
      district_id: '360900',
    },
    {
      id: '4228',
      name: 'Xã chiềng sơ',
      district_id: '360900',
    },
    {
      id: '4230',
      name: 'Xã nậm mằn',
      district_id: '360900',
    },
    {
      id: '4231',
      name: 'Xã chiềng khoong',
      district_id: '360900',
    },
    {
      id: '4232',
      name: 'Xã chiềng cang',
      district_id: '360900',
    },
    {
      id: '4233',
      name: 'Xã huổi một',
      district_id: '360900',
    },
    {
      id: '4234',
      name: 'Xã mường sai',
      district_id: '360900',
    },
    {
      id: '4235',
      name: 'Xã mường cai',
      district_id: '360900',
    },
    {
      id: '4236',
      name: 'Xã mường hung',
      district_id: '360900',
    },
    {
      id: '4237',
      name: 'Xã Chiềng Khương.',
      district_id: '360900',
    },
    {
      id: '11723',
      name: 'Xã đứa mòn',
      district_id: '360900',
    },
    {
      id: '11724',
      name: 'Xã nà ngựu',
      district_id: '360900',
    },
    {
      id: '4239',
      name: 'Xã púng bánh',
      district_id: '361100',
    },
    {
      id: '4240',
      name: 'Xã sốp cộp',
      district_id: '361100',
    },
    {
      id: '4241',
      name: 'Xã dồm cang',
      district_id: '361100',
    },
    {
      id: '4242',
      name: 'Xã nậm lạnh',
      district_id: '361100',
    },
    {
      id: '4243',
      name: 'Xã mường lèo',
      district_id: '361100',
    },
    {
      id: '4244',
      name: 'Xã mường và',
      district_id: '361100',
    },
    {
      id: '4245',
      name: 'Xã mường lạn',
      district_id: '361100',
    },
    {
      id: '11718',
      name: 'Xã sam kha',
      district_id: '361100',
    },
    {
      id: '11719',
      name: 'Xã xốp cộp',
      district_id: '361100',
    },
    {
      id: '4031',
      name: 'Phường chiềng an',
      district_id: '360100',
    },
    {
      id: '4032',
      name: 'Phường chiềng lề',
      district_id: '360100',
    },
    {
      id: '4033',
      name: 'Phường tô hiệu',
      district_id: '360100',
    },
    {
      id: '4034',
      name: 'Phường quyết thắng',
      district_id: '360100',
    },
    {
      id: '4035',
      name: 'Phường quyết tâm',
      district_id: '360100',
    },
    {
      id: '4036',
      name: 'Phường chiềng sinh',
      district_id: '360100',
    },
    {
      id: '4037',
      name: 'Xã chiềng cọ',
      district_id: '360100',
    },
    {
      id: '4038',
      name: 'Xã chiềng đen',
      district_id: '360100',
    },
    {
      id: '4039',
      name: 'Xã chiềng xôm',
      district_id: '360100',
    },
    {
      id: '4040',
      name: 'Phường chiềng cơi',
      district_id: '360100',
    },
    {
      id: '4041',
      name: 'Xã hua la',
      district_id: '360100',
    },
    {
      id: '4042',
      name: 'Xã chiềng ngần',
      district_id: '360100',
    },
    {
      id: '4188',
      name: 'Thị trấn thuận châu',
      district_id: '360400',
    },
    {
      id: '4189',
      name: 'Xã tông lệnh',
      district_id: '360400',
    },
    {
      id: '4190',
      name: 'Xã chiềng la',
      district_id: '360400',
    },
    {
      id: '4191',
      name: 'Xã phỏng lập',
      district_id: '360400',
    },
    {
      id: '4192',
      name: 'Xã chiềng sơ',
      district_id: '360400',
    },
    {
      id: '4193',
      name: 'Xã chiềng ly',
      district_id: '360400',
    },
    {
      id: '4194',
      name: 'Xã chiềng ngàm',
      district_id: '360400',
    },
    {
      id: '4195',
      name: 'Xã liệp tè',
      district_id: '360400',
    },
    {
      id: '4196',
      name: 'Xã e tòng',
      district_id: '360400',
    },
    {
      id: '4199',
      name: 'Xã mường khiêng',
      district_id: '360400',
    },
    {
      id: '4200',
      name: 'Xã mường bám',
      district_id: '360400',
    },
    {
      id: '4201',
      name: 'Xã long hẹ',
      district_id: '360400',
    },
    {
      id: '4202',
      name: 'Xã chiềng bôm',
      district_id: '360400',
    },
    {
      id: '4204',
      name: 'Xã Tông Cọ',
      district_id: '360400',
    },
    {
      id: '4205',
      name: 'Xã bó mười',
      district_id: '360400',
    },
    {
      id: '4206',
      name: 'Xã co mạ',
      district_id: '360400',
    },
    {
      id: '4208',
      name: 'Xã chiềng pấc',
      district_id: '360400',
    },
    {
      id: '4209',
      name: 'Xã nậm lầu',
      district_id: '360400',
    },
    {
      id: '4210',
      name: 'Xã bon phặng',
      district_id: '360400',
    },
    {
      id: '4211',
      name: 'Xã co tòng',
      district_id: '360400',
    },
    {
      id: '4212',
      name: 'Xã muổi nọi',
      district_id: '360400',
    },
    {
      id: '4213',
      name: 'Xẫ pá lông',
      district_id: '360400',
    },
    {
      id: '4214',
      name: 'Xã bản lầm',
      district_id: '360400',
    },
    {
      id: '4215',
      name: 'Xã mường é',
      district_id: '360400',
    },
    {
      id: '4216',
      name: 'Xã Phổng Lái',
      district_id: '360400',
    },
    {
      id: '4217',
      name: 'Xã chiềng pha',
      district_id: '360400',
    },
    {
      id: '4218',
      name: 'Xã phổng lăng',
      district_id: '360400',
    },
    {
      id: '11727',
      name: 'Xã nong lay',
      district_id: '360400',
    },
    {
      id: '11728',
      name: 'Xã púng tra',
      district_id: '360400',
    },
    {
      id: '11729',
      name: 'Xã thôn mòn',
      district_id: '360400',
    },
    {
      id: '4082',
      name: 'Xã chiềng đông',
      district_id: '360800',
    },
    {
      id: '4084',
      name: 'Thị Trấn Yên Châu',
      district_id: '360800',
    },
    {
      id: '4085',
      name: 'Xã sạp vạt',
      district_id: '360800',
    },
    {
      id: '4086',
      name: 'Xã phiêng khoài',
      district_id: '360800',
    },
    {
      id: '4087',
      name: 'Xã chiềng tương',
      district_id: '360800',
    },
    {
      id: '4088',
      name: 'Xã lóng phiêng',
      district_id: '360800',
    },
    {
      id: '4089',
      name: 'Xã chiềng pằn',
      district_id: '360800',
    },
    {
      id: '4090',
      name: 'Xã chiềng sàng',
      district_id: '360800',
    },
    {
      id: '4091',
      name: 'Xã chiềng hặc',
      district_id: '360800',
    },
    {
      id: '4092',
      name: 'Xã mường lựm',
      district_id: '360800',
    },
    {
      id: '4093',
      name: 'Xã chiềng on',
      district_id: '360800',
    },
    {
      id: '4094',
      name: 'Xã yên sơn',
      district_id: '360800',
    },
    {
      id: '4095',
      name: 'Xã chiềng khoi',
      district_id: '360800',
    },
    {
      id: '4096',
      name: 'Xã tú nang',
      district_id: '360800',
    },
    {
      id: '11730',
      name: 'Xã viêng lán',
      district_id: '360800',
    },
    {
      id: '4060',
      name: 'Xã chiềng chung',
      district_id: '360700',
    },
    {
      id: '4061',
      name: 'Xã chiềng mai',
      district_id: '360700',
    },
    {
      id: '4062',
      name: 'Xã hát lót',
      district_id: '360700',
    },
    {
      id: '4063',
      name: 'Xã cò nòi',
      district_id: '360700',
    },
    {
      id: '4064',
      name: 'Xã chiềng nơi',
      district_id: '360700',
    },
    {
      id: '4065',
      name: 'Xã phiêng cằm',
      district_id: '360700',
    },
    {
      id: '4066',
      name: 'Xã chiềng dong',
      district_id: '360700',
    },
    {
      id: '4067',
      name: 'Xã chiềng kheo',
      district_id: '360700',
    },
    {
      id: '4068',
      name: 'Xã chiềng ve',
      district_id: '360700',
    },
    {
      id: '4069',
      name: 'Xã chiềng lương',
      district_id: '360700',
    },
    {
      id: '4070',
      name: 'Xã phiêng pằn',
      district_id: '360700',
    },
    {
      id: '4071',
      name: 'Xã nà ớt',
      district_id: '360700',
    },
    {
      id: '4073',
      name: 'Xã chiềng sung',
      district_id: '360700',
    },
    {
      id: '4074',
      name: 'Xã mường bằng',
      district_id: '360700',
    },
    {
      id: '4075',
      name: 'Xã chiềng chăn',
      district_id: '360700',
    },
    {
      id: '4076',
      name: 'Xã mường chanh',
      district_id: '360700',
    },
    {
      id: '4077',
      name: 'Xã chiềng ban',
      district_id: '360700',
    },
    {
      id: '4078',
      name: 'Xã chiềng mung',
      district_id: '360700',
    },
    {
      id: '4079',
      name: 'Xã mường bon',
      district_id: '360700',
    },
    {
      id: '4080',
      name: 'Thị trấn hát lót',
      district_id: '360700',
    },
    {
      id: '4081',
      name: 'Xã nà bó',
      district_id: '360700',
    },
    {
      id: '11720',
      name: 'Xã mương tranh',
      district_id: '360700',
    },
    {
      id: '11721',
      name: 'Xã nà pó',
      district_id: '360700',
    },
    {
      id: '11722',
      name: 'Xã tà hộc',
      district_id: '360700',
    },
    {
      id: '4158',
      name: 'Thị trấn ít ong',
      district_id: '360300',
    },
    {
      id: '4159',
      name: 'Xã nậm giốn',
      district_id: '360300',
    },
    {
      id: '4160',
      name: 'Xã chiềng lao',
      district_id: '360300',
    },
    {
      id: '4161',
      name: 'Xã hua trai',
      district_id: '360300',
    },
    {
      id: '4162',
      name: 'Xã ngọc chiến',
      district_id: '360300',
    },
    {
      id: '4163',
      name: 'Xã mường trai',
      district_id: '360300',
    },
    {
      id: '4164',
      name: 'Xã nậm păm',
      district_id: '360300',
    },
    {
      id: '4165',
      name: 'Xã chiềng muôn',
      district_id: '360300',
    },
    {
      id: '4166',
      name: 'Xã chiềng ân',
      district_id: '360300',
    },
    {
      id: '4167',
      name: 'Xã pi toong',
      district_id: '360300',
    },
    {
      id: '4168',
      name: 'Xã chiềng công',
      district_id: '360300',
    },
    {
      id: '4169',
      name: 'Xã tạ bú',
      district_id: '360300',
    },
    {
      id: '4170',
      name: 'Xã chiềng san',
      district_id: '360300',
    },
    {
      id: '4171',
      name: 'Xã mường bú',
      district_id: '360300',
    },
    {
      id: '4172',
      name: 'Xã chiềng hoa',
      district_id: '360300',
    },
    {
      id: '4173',
      name: 'Xã mường chùm',
      district_id: '360300',
    },
    {
      id: '9977',
      name: 'Thị trấn bến cầu',
      district_id: '840700',
    },
    {
      id: '9978',
      name: 'Xã lợi thuận',
      district_id: '840700',
    },
    {
      id: '9979',
      name: 'Xã long chữ',
      district_id: '840700',
    },
    {
      id: '9980',
      name: 'Xã long giang',
      district_id: '840700',
    },
    {
      id: '9981',
      name: 'Xã long phước',
      district_id: '840700',
    },
    {
      id: '9982',
      name: 'Xã long thuận',
      district_id: '840700',
    },
    {
      id: '9983',
      name: 'Xã long khánh',
      district_id: '840700',
    },
    {
      id: '9984',
      name: 'Xã tiên thuận',
      district_id: '840700',
    },
    {
      id: '9985',
      name: 'Xã an thạnh',
      district_id: '840700',
    },
    {
      id: '9952',
      name: 'Thị trấn châu thành',
      district_id: '840500',
    },
    {
      id: '9953',
      name: 'Xã an bình',
      district_id: '840500',
    },
    {
      id: '9954',
      name: 'Xã biên giới',
      district_id: '840500',
    },
    {
      id: '9955',
      name: 'Xã đồng khởi',
      district_id: '840500',
    },
    {
      id: '9956',
      name: 'Xã hảo đước',
      district_id: '840500',
    },
    {
      id: '9957',
      name: 'Xã ninh điền',
      district_id: '840500',
    },
    {
      id: '9958',
      name: 'Xã phước vinh',
      district_id: '840500',
    },
    {
      id: '9959',
      name: 'Xã trí bình',
      district_id: '840500',
    },
    {
      id: '9960',
      name: 'Xã an cơ',
      district_id: '840500',
    },
    {
      id: '9961',
      name: 'Xã hoà hội',
      district_id: '840500',
    },
    {
      id: '9962',
      name: 'Xã hoà thạnh',
      district_id: '840500',
    },
    {
      id: '9963',
      name: 'Xã long vĩnh',
      district_id: '840500',
    },
    {
      id: '9964',
      name: 'Xã thái bình',
      district_id: '840500',
    },
    {
      id: '9965',
      name: 'Xã thanh điền',
      district_id: '840500',
    },
    {
      id: '9966',
      name: 'Xã thành long',
      district_id: '840500',
    },
    {
      id: '9919',
      name: 'Thị trấn dương minh châu',
      district_id: '840400',
    },
    {
      id: '9920',
      name: 'Xã bàu năng',
      district_id: '840400',
    },
    {
      id: '9921',
      name: 'Xã phước ninh',
      district_id: '840400',
    },
    {
      id: '9922',
      name: 'Xã suối đá',
      district_id: '840400',
    },
    {
      id: '9923',
      name: 'Xã truông mít',
      district_id: '840400',
    },
    {
      id: '9924',
      name: 'Xã chà là',
      district_id: '840400',
    },
    {
      id: '9925',
      name: 'Xã bến củi',
      district_id: '840400',
    },
    {
      id: '9926',
      name: 'Xã cầu khởi',
      district_id: '840400',
    },
    {
      id: '9927',
      name: 'Xã lộc ninh',
      district_id: '840400',
    },
    {
      id: '9928',
      name: 'Xã phan',
      district_id: '840400',
    },
    {
      id: '9929',
      name: 'Xã phước minh',
      district_id: '840400',
    },
    {
      id: '9986',
      name: 'Xã phước trạch',
      district_id: '840800',
    },
    {
      id: '9987',
      name: 'Xã thạnh đức',
      district_id: '840800',
    },
    {
      id: '9988',
      name: 'Xã thanh phước',
      district_id: '840800',
    },
    {
      id: '9989',
      name: 'Thị Trấn Gò Dầu',
      district_id: '840800',
    },
    {
      id: '9990',
      name: 'Xã bàu đôn',
      district_id: '840800',
    },
    {
      id: '9991',
      name: 'Xã cẩm giang',
      district_id: '840800',
    },
    {
      id: '9992',
      name: 'Xã hiệp thạnh',
      district_id: '840800',
    },
    {
      id: '9993',
      name: 'Xã phước đông',
      district_id: '840800',
    },
    {
      id: '9994',
      name: 'Xã phước thạnh',
      district_id: '840800',
    },
    {
      id: '9968',
      name: 'Thị trấn hoà thành',
      district_id: '840600',
    },
    {
      id: '9969',
      name: 'Xã hiệp tân',
      district_id: '840600',
    },
    {
      id: '9971',
      name: 'Xã trường đông',
      district_id: '840600',
    },
    {
      id: '9972',
      name: 'Xã trường hoà',
      district_id: '840600',
    },
    {
      id: '9973',
      name: 'Xã trường tây',
      district_id: '840600',
    },
    {
      id: '9976',
      name: 'Xã long thành nam',
      district_id: '840600',
    },
    {
      id: '12587',
      name: 'Phường Long Hoa',
      district_id: '840600',
    },
    {
      id: '12588',
      name: 'Phường Hiệp Tân',
      district_id: '840600',
    },
    {
      id: '12589',
      name: 'Phường Long Thành Bắc',
      district_id: '840600',
    },
    {
      id: '12590',
      name: 'Phường Long Thành Trung',
      district_id: '840600',
    },
    {
      id: '9942',
      name: 'Xã tân bình',
      district_id: '840200',
    },
    {
      id: '9943',
      name: 'Xã tân lập',
      district_id: '840200',
    },
    {
      id: '9944',
      name: 'Xã tân phong',
      district_id: '840200',
    },
    {
      id: '9945',
      name: 'Xã thạnh bắc',
      district_id: '840200',
    },
    {
      id: '9946',
      name: 'Xã thạnh bình',
      district_id: '840200',
    },
    {
      id: '9947',
      name: 'Xã thạnh tây',
      district_id: '840200',
    },
    {
      id: '9948',
      name: 'Xã trà vong',
      district_id: '840200',
    },
    {
      id: '9949',
      name: 'Thị trấn tân biên',
      district_id: '840200',
    },
    {
      id: '9950',
      name: 'Xã hoà hiệp',
      district_id: '840200',
    },
    {
      id: '9951',
      name: 'Xã mỏ công',
      district_id: '840200',
    },
    {
      id: '9930',
      name: 'Xã tân đông',
      district_id: '840300',
    },
    {
      id: '9931',
      name: 'Xã tân hà',
      district_id: '840300',
    },
    {
      id: '9932',
      name: 'Xã tân hiệp',
      district_id: '840300',
    },
    {
      id: '9933',
      name: 'Xã tân hoà',
      district_id: '840300',
    },
    {
      id: '9934',
      name: 'Xã tân hội',
      district_id: '840300',
    },
    {
      id: '9935',
      name: 'Xã tân hưng',
      district_id: '840300',
    },
    {
      id: '9936',
      name: 'Xã tân phú',
      district_id: '840300',
    },
    {
      id: '9937',
      name: 'Xã tân thành',
      district_id: '840300',
    },
    {
      id: '9938',
      name: 'Xã thạnh đông',
      district_id: '840300',
    },
    {
      id: '9939',
      name: 'Xã suối ngô',
      district_id: '840300',
    },
    {
      id: '9940',
      name: 'Thị trấn tân châu',
      district_id: '840300',
    },
    {
      id: '9941',
      name: 'Xã suối dây',
      district_id: '840300',
    },
    {
      id: '9909',
      name: 'Phường 1',
      district_id: '840100',
    },
    {
      id: '9910',
      name: 'Phường 2',
      district_id: '840100',
    },
    {
      id: '9911',
      name: 'Phường 3',
      district_id: '840100',
    },
    {
      id: '9912',
      name: 'Phường 4',
      district_id: '840100',
    },
    {
      id: '9913',
      name: 'Xã bình minh',
      district_id: '840100',
    },
    {
      id: '9916',
      name: 'Xã tân bình',
      district_id: '840100',
    },
    {
      id: '9917',
      name: 'Xã thạnh tân',
      district_id: '840100',
    },
    {
      id: '9918',
      name: 'Phường hiệp ninh',
      district_id: '840100',
    },
    {
      id: '12214',
      name: 'Phường ninh sơn',
      district_id: '840100',
    },
    {
      id: '12215',
      name: 'Phường Ninh Thạnh',
      district_id: '840100',
    },
    {
      id: '9995',
      name: 'Xã phước chỉ',
      district_id: '840900',
    },
    {
      id: '9996',
      name: 'Phường An Hòa',
      district_id: '840900',
    },
    {
      id: '9997',
      name: 'Thị trấn trảng bàng',
      district_id: '840900',
    },
    {
      id: '9998',
      name: 'Xã an tịnh',
      district_id: '840900',
    },
    {
      id: '9999',
      name: 'Xã bình thạnh',
      district_id: '840900',
    },
    {
      id: '10000',
      name: 'Xã đôn thuận',
      district_id: '840900',
    },
    {
      id: '10001',
      name: 'Xã gia bình',
      district_id: '840900',
    },
    {
      id: '10002',
      name: 'Xã gia lộc',
      district_id: '840900',
    },
    {
      id: '10003',
      name: 'Xã hưng thuận',
      district_id: '840900',
    },
    {
      id: '10004',
      name: 'Xã lộc hưng',
      district_id: '840900',
    },
    {
      id: '10005',
      name: 'Xã phước lưu',
      district_id: '840900',
    },
    {
      id: '12795',
      name: 'Xã Phước Bình',
      district_id: '840900',
    },
    {
      id: '4783',
      name: 'Xã chí hòa',
      district_id: '410300',
    },
    {
      id: '4784',
      name: 'Xã cộng hòa',
      district_id: '410300',
    },
    {
      id: '4785',
      name: 'Xã dân chủ',
      district_id: '410300',
    },
    {
      id: '4786',
      name: 'Xã đoan hùng',
      district_id: '410300',
    },
    {
      id: '4787',
      name: 'Xã độc lập',
      district_id: '410300',
    },
    {
      id: '4788',
      name: 'Xã đông đô',
      district_id: '410300',
    },
    {
      id: '4789',
      name: 'Xã duyên hải',
      district_id: '410300',
    },
    {
      id: '4790',
      name: 'Xã hồng an',
      district_id: '410300',
    },
    {
      id: '4791',
      name: 'Xã hồng lĩnh',
      district_id: '410300',
    },
    {
      id: '4792',
      name: 'Xã hồng minh',
      district_id: '410300',
    },
    {
      id: '4793',
      name: 'Xã hùng dũng',
      district_id: '410300',
    },
    {
      id: '4795',
      name: 'Xã minh hòa',
      district_id: '410300',
    },
    {
      id: '4796',
      name: 'Xã minh khai',
      district_id: '410300',
    },
    {
      id: '4797',
      name: 'Xã minh tân',
      district_id: '410300',
    },
    {
      id: '4799',
      name: 'Xã phúc khánh',
      district_id: '410300',
    },
    {
      id: '4800',
      name: 'Xã tân hòa',
      district_id: '410300',
    },
    {
      id: '4801',
      name: 'Xã thái hưng',
      district_id: '410300',
    },
    {
      id: '4802',
      name: 'Xã thái phương',
      district_id: '410300',
    },
    {
      id: '4803',
      name: 'Xã thống nhất',
      district_id: '410300',
    },
    {
      id: '4804',
      name: 'Xã tiến đức',
      district_id: '410300',
    },
    {
      id: '4805',
      name: 'Thị trấn hưng hà',
      district_id: '410300',
    },
    {
      id: '4806',
      name: 'Xã văn lang',
      district_id: '410300',
    },
    {
      id: '4807',
      name: 'Xã bắc sơn',
      district_id: '410300',
    },
    {
      id: '4808',
      name: 'Xã hòa tiến',
      district_id: '410300',
    },
    {
      id: '4809',
      name: 'Xã liên hiệp',
      district_id: '410300',
    },
    {
      id: '4810',
      name: 'Xã tân lễ',
      district_id: '410300',
    },
    {
      id: '4811',
      name: 'Xã tân tiến',
      district_id: '410300',
    },
    {
      id: '4812',
      name: 'Xã tây đô',
      district_id: '410300',
    },
    {
      id: '4813',
      name: 'Xã văn cẩm',
      district_id: '410300',
    },
    {
      id: '4815',
      name: 'Xã canh tân',
      district_id: '410300',
    },
    {
      id: '4816',
      name: 'Xã điệp nông',
      district_id: '410300',
    },
    {
      id: '4817',
      name: 'Xã chi lăng',
      district_id: '410300',
    },
    {
      id: '4818',
      name: 'Xã hòa bình',
      district_id: '410300',
    },
    {
      id: '4821',
      name: 'Thị trấn hưng nhân',
      district_id: '410300',
    },
    {
      id: '11871',
      name: 'Xã kim chung',
      district_id: '410300',
    },
    {
      id: '4858',
      name: 'Xã an bồi',
      district_id: '410600',
    },
    {
      id: '4859',
      name: 'Xã bình định',
      district_id: '410600',
    },
    {
      id: '4860',
      name: 'Xã bình minh',
      district_id: '410600',
    },
    {
      id: '4861',
      name: 'Xã bình nguyên',
      district_id: '410600',
    },
    {
      id: '4862',
      name: 'Xã bình thanh',
      district_id: '410600',
    },
    {
      id: '4863',
      name: 'Xã đình phùng',
      district_id: '410600',
    },
    {
      id: '4864',
      name: 'Xã hòa bình',
      district_id: '410600',
    },
    {
      id: '4865',
      name: 'Xã hồng thái',
      district_id: '410600',
    },
    {
      id: '4866',
      name: 'Xã hồng tiến',
      district_id: '410600',
    },
    {
      id: '4867',
      name: 'Xã lê lợi',
      district_id: '410600',
    },
    {
      id: '4868',
      name: 'Xã minh hưng',
      district_id: '410600',
    },
    {
      id: '4869',
      name: 'Xã minh tân',
      district_id: '410600',
    },
    {
      id: '4870',
      name: 'Xã nam bình',
      district_id: '410600',
    },
    {
      id: '4871',
      name: 'Xã nam cao',
      district_id: '410600',
    },
    {
      id: '4873',
      name: 'Xã quang bình',
      district_id: '410600',
    },
    {
      id: '4874',
      name: 'Xã quang hưng',
      district_id: '410600',
    },
    {
      id: '4875',
      name: 'Xã quang lịch',
      district_id: '410600',
    },
    {
      id: '4876',
      name: 'Xã quang minh',
      district_id: '410600',
    },
    {
      id: '4877',
      name: 'Xã quang trung',
      district_id: '410600',
    },
    {
      id: '4878',
      name: 'Xã quốc tuấn',
      district_id: '410600',
    },
    {
      id: '4879',
      name: 'Xã quyết tiến',
      district_id: '410600',
    },
    {
      id: '4881',
      name: 'Xã thanh tân',
      district_id: '410600',
    },
    {
      id: '4882',
      name: 'Thị trấn kiến xương',
      district_id: '410600',
    },
    {
      id: '4883',
      name: 'Xã thượng hiền',
      district_id: '410600',
    },
    {
      id: '4884',
      name: 'Xã trà giang',
      district_id: '410600',
    },
    {
      id: '4885',
      name: 'Thị trấn thanh nê',
      district_id: '410600',
    },
    {
      id: '4886',
      name: 'Xã vũ an',
      district_id: '410600',
    },
    {
      id: '4887',
      name: 'Xã vũ bình',
      district_id: '410600',
    },
    {
      id: '4888',
      name: 'Xã vũ công',
      district_id: '410600',
    },
    {
      id: '4890',
      name: 'Xã vũ hòa',
      district_id: '410600',
    },
    {
      id: '4891',
      name: 'Xã vũ lạc',
      district_id: '410600',
    },
    {
      id: '4892',
      name: 'Xã vũ lễ',
      district_id: '410600',
    },
    {
      id: '4893',
      name: 'Xã vũ ninh',
      district_id: '410600',
    },
    {
      id: '4895',
      name: 'Xã vũ sơn',
      district_id: '410600',
    },
    {
      id: '4896',
      name: 'Xã vũ tây',
      district_id: '410600',
    },
    {
      id: '4897',
      name: 'Xã vũ thắng',
      district_id: '410600',
    },
    {
      id: '4899',
      name: 'Xã vũ trung',
      district_id: '410600',
    },
    {
      id: '4900',
      name: 'Xã an bình',
      district_id: '410600',
    },
    {
      id: '11872',
      name: 'Xã vũ quí',
      district_id: '410600',
    },
    {
      id: '12797',
      name: 'Xã Tây Sơn',
      district_id: '410600',
    },
    {
      id: '4744',
      name: 'Xã quỳnh bảo',
      district_id: '410200',
    },
    {
      id: '4745',
      name: 'Xã quỳnh châu',
      district_id: '410200',
    },
    {
      id: '4746',
      name: 'Xã quỳnh giao',
      district_id: '410200',
    },
    {
      id: '4747',
      name: 'Xã quỳnh hải',
      district_id: '410200',
    },
    {
      id: '4748',
      name: 'Xã quỳnh hoa',
      district_id: '410200',
    },
    {
      id: '4749',
      name: 'Xã quỳnh hoàng',
      district_id: '410200',
    },
    {
      id: '4750',
      name: 'Xã quỳnh hội',
      district_id: '410200',
    },
    {
      id: '4751',
      name: 'Xã quỳnh hồng',
      district_id: '410200',
    },
    {
      id: '4752',
      name: 'Xã quỳnh hưng',
      district_id: '410200',
    },
    {
      id: '4753',
      name: 'Xã quỳnh trang',
      district_id: '410200',
    },
    {
      id: '4755',
      name: 'Xã quỳnh xá',
      district_id: '410200',
    },
    {
      id: '4756',
      name: 'Thị trấn quỳnh côi',
      district_id: '410200',
    },
    {
      id: '4757',
      name: 'Xã an ấp',
      district_id: '410200',
    },
    {
      id: '4758',
      name: 'Thị trấn an bài',
      district_id: '410200',
    },
    {
      id: '4759',
      name: 'Xã an cầu',
      district_id: '410200',
    },
    {
      id: '4760',
      name: 'Xã quỳnh khê',
      district_id: '410200',
    },
    {
      id: '4761',
      name: 'Xã quỳnh lâm',
      district_id: '410200',
    },
    {
      id: '4762',
      name: 'Xã quỳnh minh',
      district_id: '410200',
    },
    {
      id: '4763',
      name: 'Xã quỳnh mỹ',
      district_id: '410200',
    },
    {
      id: '4764',
      name: 'Xã quỳnh ngọc',
      district_id: '410200',
    },
    {
      id: '4765',
      name: 'Xã quỳnh nguyên',
      district_id: '410200',
    },
    {
      id: '4766',
      name: 'Xã quỳnh sơn',
      district_id: '410200',
    },
    {
      id: '4767',
      name: 'Xã quỳnh thọ',
      district_id: '410200',
    },
    {
      id: '4768',
      name: 'Xã an hiệp',
      district_id: '410200',
    },
    {
      id: '4769',
      name: 'Xã an đồng',
      district_id: '410200',
    },
    {
      id: '4770',
      name: 'Xã an dục',
      district_id: '410200',
    },
    {
      id: '4771',
      name: 'Xã an khê',
      district_id: '410200',
    },
    {
      id: '4772',
      name: 'Xã an lễ',
      district_id: '410200',
    },
    {
      id: '4773',
      name: 'Xã an mỹ',
      district_id: '410200',
    },
    {
      id: '4774',
      name: 'Xã an ninh',
      district_id: '410200',
    },
    {
      id: '4776',
      name: 'Xã an thái',
      district_id: '410200',
    },
    {
      id: '4777',
      name: 'Xã an thanh',
      district_id: '410200',
    },
    {
      id: '4778',
      name: 'Xã an tràng',
      district_id: '410200',
    },
    {
      id: '4779',
      name: 'Xã an vinh',
      district_id: '410200',
    },
    {
      id: '4780',
      name: 'Xã an vũ',
      district_id: '410200',
    },
    {
      id: '4781',
      name: 'Xã đông hải',
      district_id: '410200',
    },
    {
      id: '4782',
      name: 'Xã đồng tiến',
      district_id: '410200',
    },
    {
      id: '11870',
      name: 'Xã an quí',
      district_id: '410200',
    },
    {
      id: '12728',
      name: 'Xã Châu Sơn',
      district_id: '410200',
    },
    {
      id: '4627',
      name: 'Phường bồ xuyên',
      district_id: '410100',
    },
    {
      id: '4628',
      name: 'Phường Đề Thám',
      district_id: '410100',
    },
    {
      id: '4629',
      name: 'Xã đông hòa',
      district_id: '410100',
    },
    {
      id: '4630',
      name: 'Phường hoàng diệu',
      district_id: '410100',
    },
    {
      id: '4631',
      name: 'Phường tiền phong',
      district_id: '410100',
    },
    {
      id: '4632',
      name: 'Phường lê hồng phong',
      district_id: '410100',
    },
    {
      id: '4633',
      name: 'Phường kỳ bá',
      district_id: '410100',
    },
    {
      id: '4634',
      name: 'Phường trần lãm',
      district_id: '410100',
    },
    {
      id: '4635',
      name: 'Xã vũ lạc',
      district_id: '410100',
    },
    {
      id: '4636',
      name: 'Xã vũ chính',
      district_id: '410100',
    },
    {
      id: '4637',
      name: 'Xã vũ phúc',
      district_id: '410100',
    },
    {
      id: '4640',
      name: 'Phường quang trung',
      district_id: '410100',
    },
    {
      id: '4641',
      name: 'Phường trần hưng đạo',
      district_id: '410100',
    },
    {
      id: '4645',
      name: 'Xã đông thọ',
      district_id: '410100',
    },
    {
      id: '4646',
      name: 'Xã tân bình',
      district_id: '410100',
    },
    {
      id: '4647',
      name: 'Xã phú xuân',
      district_id: '410100',
    },
    {
      id: '11876',
      name: 'Xã đông mỹ',
      district_id: '410100',
    },
    {
      id: '11877',
      name: 'Phường phú khánh',
      district_id: '410100',
    },
    {
      id: '11878',
      name: 'Xã vũ đông',
      district_id: '410100',
    },
    {
      id: '4696',
      name: 'Xã thái tân',
      district_id: '410800',
    },
    {
      id: '4697',
      name: 'Xã thái thành',
      district_id: '410800',
    },
    {
      id: '4698',
      name: 'Xã thái thịnh',
      district_id: '410800',
    },
    {
      id: '4699',
      name: 'Xã thái thọ',
      district_id: '410800',
    },
    {
      id: '4700',
      name: 'Xã thái thuần',
      district_id: '410800',
    },
    {
      id: '4701',
      name: 'Xã thái thượng',
      district_id: '410800',
    },
    {
      id: '4702',
      name: 'Xã thái thủy',
      district_id: '410800',
    },
    {
      id: '4703',
      name: 'Xã thái xuyên',
      district_id: '410800',
    },
    {
      id: '4704',
      name: 'Thị trấn diêm điền',
      district_id: '410800',
    },
    {
      id: '4705',
      name: 'Xã thụy an',
      district_id: '410800',
    },
    {
      id: '4706',
      name: 'Xã thụy bình',
      district_id: '410800',
    },
    {
      id: '4707',
      name: 'Xã thụy chính',
      district_id: '410800',
    },
    {
      id: '4708',
      name: 'Xã thụy dân',
      district_id: '410800',
    },
    {
      id: '4709',
      name: 'Xã thụy dũng',
      district_id: '410800',
    },
    {
      id: '4711',
      name: 'Xã thụy duyên',
      district_id: '410800',
    },
    {
      id: '4712',
      name: 'Xã thụy hà',
      district_id: '410800',
    },
    {
      id: '4713',
      name: 'Xã thụy hải',
      district_id: '410800',
    },
    {
      id: '4714',
      name: 'Xã thụy việt',
      district_id: '410800',
    },
    {
      id: '4715',
      name: 'Xã thụy xuân',
      district_id: '410800',
    },
    {
      id: '4716',
      name: 'Xã hồng quỳnh',
      district_id: '410800',
    },
    {
      id: '4717',
      name: 'Xã Mỹ Lộc',
      district_id: '410800',
    },
    {
      id: '4718',
      name: 'Xã thái an',
      district_id: '410800',
    },
    {
      id: '4719',
      name: 'Xã thái đô',
      district_id: '410800',
    },
    {
      id: '4720',
      name: 'Xã thái dương',
      district_id: '410800',
    },
    {
      id: '4721',
      name: 'Xã thái giang',
      district_id: '410800',
    },
    {
      id: '4722',
      name: 'Xã thái hà',
      district_id: '410800',
    },
    {
      id: '4723',
      name: 'Xã thái học',
      district_id: '410800',
    },
    {
      id: '4724',
      name: 'Xã thái hồng',
      district_id: '410800',
    },
    {
      id: '4725',
      name: 'Xã thái hưng',
      district_id: '410800',
    },
    {
      id: '4726',
      name: 'Xã thái nguyên',
      district_id: '410800',
    },
    {
      id: '4727',
      name: 'Xã thái phúc',
      district_id: '410800',
    },
    {
      id: '4728',
      name: 'Xã thái sơn',
      district_id: '410800',
    },
    {
      id: '4729',
      name: 'Xã thụy hồng',
      district_id: '410800',
    },
    {
      id: '4730',
      name: 'Xã thụy hưng',
      district_id: '410800',
    },
    {
      id: '4731',
      name: 'Xã thụy liên',
      district_id: '410800',
    },
    {
      id: '4732',
      name: 'Xã thụy lương',
      district_id: '410800',
    },
    {
      id: '4733',
      name: 'Xã thụy ninh',
      district_id: '410800',
    },
    {
      id: '4734',
      name: 'Xã thụy phong',
      district_id: '410800',
    },
    {
      id: '4736',
      name: 'Xã thụy quỳnh',
      district_id: '410800',
    },
    {
      id: '4737',
      name: 'Xã thụy sơn',
      district_id: '410800',
    },
    {
      id: '4738',
      name: 'Xã thụy tân',
      district_id: '410800',
    },
    {
      id: '4739',
      name: 'Xã thụy thanh',
      district_id: '410800',
    },
    {
      id: '4740',
      name: 'Xã thụy trình',
      district_id: '410800',
    },
    {
      id: '4741',
      name: 'Xã thụy trường',
      district_id: '410800',
    },
    {
      id: '4742',
      name: 'Xã thụy văn',
      district_id: '410800',
    },
    {
      id: '4743',
      name: 'Xã thái hòa',
      district_id: '410800',
    },
    {
      id: '12632',
      name: 'Xã Dương Hồng Thủy',
      district_id: '410800',
    },
    {
      id: '12753',
      name: 'Xã Dương Phúc',
      district_id: '410800',
    },
    {
      id: '12817',
      name: 'Xã Tân Học',
      district_id: '410800',
    },
    {
      id: '4901',
      name: 'Xã an ninh',
      district_id: '410700',
    },
    {
      id: '4902',
      name: 'Xã bắc hải',
      district_id: '410700',
    },
    {
      id: '4903',
      name: 'Xã đông cơ',
      district_id: '410700',
    },
    {
      id: '4904',
      name: 'Xã đông hải',
      district_id: '410700',
    },
    {
      id: '4905',
      name: 'Xã đông hoàng',
      district_id: '410700',
    },
    {
      id: '4906',
      name: 'Xã đông lâm',
      district_id: '410700',
    },
    {
      id: '4907',
      name: 'Xã đông long',
      district_id: '410700',
    },
    {
      id: '4908',
      name: 'Xã đông minh',
      district_id: '410700',
    },
    {
      id: '4909',
      name: 'Xã đông phong',
      district_id: '410700',
    },
    {
      id: '4911',
      name: 'Xã đông trà',
      district_id: '410700',
    },
    {
      id: '4912',
      name: 'Xã tây giang',
      district_id: '410700',
    },
    {
      id: '4913',
      name: 'Xã tây lương',
      district_id: '410700',
    },
    {
      id: '4914',
      name: 'Xã tây ninh',
      district_id: '410700',
    },
    {
      id: '4915',
      name: 'Xã tây phong',
      district_id: '410700',
    },
    {
      id: '4916',
      name: 'Xã nam chính',
      district_id: '410700',
    },
    {
      id: '4917',
      name: 'Xã nam cường',
      district_id: '410700',
    },
    {
      id: '4918',
      name: 'Xã nam hưng',
      district_id: '410700',
    },
    {
      id: '4919',
      name: 'Xã nam phú',
      district_id: '410700',
    },
    {
      id: '4920',
      name: 'Xã nam thắng',
      district_id: '410700',
    },
    {
      id: '4921',
      name: 'Xã nam thanh',
      district_id: '410700',
    },
    {
      id: '4922',
      name: 'Xã nam thịnh',
      district_id: '410700',
    },
    {
      id: '4923',
      name: 'Xã nam trung',
      district_id: '410700',
    },
    {
      id: '4924',
      name: 'Xã phương công',
      district_id: '410700',
    },
    {
      id: '4925',
      name: 'Xã nam hà',
      district_id: '410700',
    },
    {
      id: '4926',
      name: 'Xã nam hải',
      district_id: '410700',
    },
    {
      id: '4927',
      name: 'Xã nam hồng',
      district_id: '410700',
    },
    {
      id: '4928',
      name: 'Xã đông trung',
      district_id: '410700',
    },
    {
      id: '4929',
      name: 'Xã đông xuyên',
      district_id: '410700',
    },
    {
      id: '4930',
      name: 'Xã tây an',
      district_id: '410700',
    },
    {
      id: '4931',
      name: 'Xã tây sơn',
      district_id: '410700',
    },
    {
      id: '4932',
      name: 'Xã tây tiến',
      district_id: '410700',
    },
    {
      id: '4933',
      name: 'Thị trấn tiền hải',
      district_id: '410700',
    },
    {
      id: '4934',
      name: 'Xã vân trường',
      district_id: '410700',
    },
    {
      id: '4935',
      name: 'Xã vũ lăng',
      district_id: '410700',
    },
    {
      id: '11873',
      name: 'Xã đông quí',
      district_id: '410700',
    },
    {
      id: '4822',
      name: 'Xã hồng lý',
      district_id: '410500',
    },
    {
      id: '4823',
      name: 'Xã hồng phong',
      district_id: '410500',
    },
    {
      id: '4824',
      name: 'Xã minh khai',
      district_id: '410500',
    },
    {
      id: '4825',
      name: 'Xã minh lãng',
      district_id: '410500',
    },
    {
      id: '4826',
      name: 'Xã minh quang',
      district_id: '410500',
    },
    {
      id: '4828',
      name: 'Xã nguyên xá',
      district_id: '410500',
    },
    {
      id: '4830',
      name: 'Xã phúc thành',
      district_id: '410500',
    },
    {
      id: '4831',
      name: 'Xã song an',
      district_id: '410500',
    },
    {
      id: '4832',
      name: 'Xã song lãng',
      district_id: '410500',
    },
    {
      id: '4833',
      name: 'Xã tam quang',
      district_id: '410500',
    },
    {
      id: '4835',
      name: 'Xã tân hòa',
      district_id: '410500',
    },
    {
      id: '4836',
      name: 'Xã tân lập',
      district_id: '410500',
    },
    {
      id: '4837',
      name: 'Xã tân phong',
      district_id: '410500',
    },
    {
      id: '4839',
      name: 'Xã trung an',
      district_id: '410500',
    },
    {
      id: '4840',
      name: 'Xã tự tân',
      district_id: '410500',
    },
    {
      id: '4841',
      name: 'Xã việt hùng',
      district_id: '410500',
    },
    {
      id: '4842',
      name: 'Xã việt thuận',
      district_id: '410500',
    },
    {
      id: '4843',
      name: 'Xã vũ đoài',
      district_id: '410500',
    },
    {
      id: '4844',
      name: 'Xã vũ hội',
      district_id: '410500',
    },
    {
      id: '4846',
      name: 'Xã vũ tiến',
      district_id: '410500',
    },
    {
      id: '4847',
      name: 'Xã vũ vân',
      district_id: '410500',
    },
    {
      id: '4849',
      name: 'Xã bách thuận',
      district_id: '410500',
    },
    {
      id: '4850',
      name: 'Xã đồng thanh',
      district_id: '410500',
    },
    {
      id: '4851',
      name: 'Xã dũng nghĩa',
      district_id: '410500',
    },
    {
      id: '4852',
      name: 'Xã duy nhất',
      district_id: '410500',
    },
    {
      id: '4853',
      name: 'Xã hiệp hoà',
      district_id: '410500',
    },
    {
      id: '4854',
      name: 'Xã hoà bình',
      district_id: '410500',
    },
    {
      id: '4855',
      name: 'Xã vũ vinh',
      district_id: '410500',
    },
    {
      id: '4856',
      name: 'Xã xuân hòa',
      district_id: '410500',
    },
    {
      id: '4857',
      name: 'Thị trấn vũ thư',
      district_id: '410500',
    },
    {
      id: '2227',
      name: 'Phường mỏ chè',
      district_id: '250200',
    },
    {
      id: '2228',
      name: 'Phường cải đan',
      district_id: '250200',
    },
    {
      id: '2229',
      name: 'Phường thắng lợi',
      district_id: '250200',
    },
    {
      id: '2230',
      name: 'Phường phố cò',
      district_id: '250200',
    },
    {
      id: '2232',
      name: 'Xã tân quang',
      district_id: '250200',
    },
    {
      id: '2233',
      name: 'Xã bình sơn',
      district_id: '250200',
    },
    {
      id: '2234',
      name: 'Xã bá xuyên',
      district_id: '250200',
    },
    {
      id: '2235',
      name: 'Phường bách quang',
      district_id: '250200',
    },
    {
      id: '11786',
      name: 'Phường lương sơn',
      district_id: '250200',
    },
    {
      id: '12724',
      name: 'Phường Châu Sơn',
      district_id: '250200',
    },
    {
      id: '2092',
      name: 'Phường quán triều',
      district_id: '250100',
    },
    {
      id: '2093',
      name: 'Phường quang vinh',
      district_id: '250100',
    },
    {
      id: '2094',
      name: 'Phường túc duyên',
      district_id: '250100',
    },
    {
      id: '2095',
      name: 'Phường hoàng văn thụ',
      district_id: '250100',
    },
    {
      id: '2096',
      name: 'Phường quang trung',
      district_id: '250100',
    },
    {
      id: '2097',
      name: 'Phường phan đình phùng',
      district_id: '250100',
    },
    {
      id: '2098',
      name: 'Phường tân thịnh',
      district_id: '250100',
    },
    {
      id: '2099',
      name: 'Phường thịnh đán',
      district_id: '250100',
    },
    {
      id: '2100',
      name: 'Phường đồng quang',
      district_id: '250100',
    },
    {
      id: '2101',
      name: 'Phường gia sàng',
      district_id: '250100',
    },
    {
      id: '2102',
      name: 'Phường Tân Lập',
      district_id: '250100',
    },
    {
      id: '2103',
      name: 'Phường cam giá',
      district_id: '250100',
    },
    {
      id: '2104',
      name: 'Phường phú xá',
      district_id: '250100',
    },
    {
      id: '2105',
      name: 'Phường hương sơn',
      district_id: '250100',
    },
    {
      id: '2106',
      name: 'Phường Trung Thành',
      district_id: '250100',
    },
    {
      id: '2107',
      name: 'Phường tân thành',
      district_id: '250100',
    },
    {
      id: '2108',
      name: 'Phường tân long',
      district_id: '250100',
    },
    {
      id: '2109',
      name: 'Xã phúc hà',
      district_id: '250100',
    },
    {
      id: '2110',
      name: 'Xã phúc xuân',
      district_id: '250100',
    },
    {
      id: '2111',
      name: 'Xã quyết thắng',
      district_id: '250100',
    },
    {
      id: '2112',
      name: 'Xã phúc trìu',
      district_id: '250100',
    },
    {
      id: '2113',
      name: 'Xã thịnh đức',
      district_id: '250100',
    },
    {
      id: '2115',
      name: 'Xã tân cương',
      district_id: '250100',
    },
    {
      id: '2117',
      name: 'Phường trưng vương',
      district_id: '250100',
    },
    {
      id: '2118',
      name: 'Xã cao ngạn',
      district_id: '250100',
    },
    {
      id: '2119',
      name: 'Xã đồng bẩm',
      district_id: '250100',
    },
    {
      id: '11793',
      name: 'Phường tích lương',
      district_id: '250100',
    },
    {
      id: '12558',
      name: 'Phường chùa hang',
      district_id: '250100',
    },
    {
      id: '12676',
      name: 'Xã Sơn Cẩm',
      district_id: '250100',
    },
    {
      id: '12727',
      name: 'Xã Huống Thượng',
      district_id: '250100',
    },
    {
      id: '2240',
      name: 'Xã phúc tân',
      district_id: '250900',
    },
    {
      id: '2241',
      name: 'Xã Phúc Thuận',
      district_id: '250900',
    },
    {
      id: '2242',
      name: 'Phường Hồng Tiến',
      district_id: '250900',
    },
    {
      id: '2243',
      name: 'Xã minh đức',
      district_id: '250900',
    },
    {
      id: '2244',
      name: 'Xã đắc sơn',
      district_id: '250900',
    },
    {
      id: '2246',
      name: 'Xã thành công',
      district_id: '250900',
    },
    {
      id: '2247',
      name: 'Xã tiên phong',
      district_id: '250900',
    },
    {
      id: '2248',
      name: 'Xã vạn phái',
      district_id: '250900',
    },
    {
      id: '2249',
      name: 'Xã nam tiến',
      district_id: '250900',
    },
    {
      id: '2250',
      name: 'Xã tân hương',
      district_id: '250900',
    },
    {
      id: '2251',
      name: 'Xã đông cao',
      district_id: '250900',
    },
    {
      id: '2252',
      name: 'Xã trung thành',
      district_id: '250900',
    },
    {
      id: '2253',
      name: 'Xã tân phú',
      district_id: '250900',
    },
    {
      id: '2254',
      name: 'Xã thuận thành',
      district_id: '250900',
    },
    {
      id: '11788',
      name: 'Phường ba hàng',
      district_id: '250900',
    },
    {
      id: '11789',
      name: 'Phường bắc sơn',
      district_id: '250900',
    },
    {
      id: '11790',
      name: 'Phường bãi bông',
      district_id: '250900',
    },
    {
      id: '11791',
      name: 'Phường đồng tiến',
      district_id: '250900',
    },
    {
      id: '2255',
      name: 'Thị trấn hương sơn',
      district_id: '250800',
    },
    {
      id: '2256',
      name: 'Xã bàn đạt',
      district_id: '250800',
    },
    {
      id: '2257',
      name: 'Xã đồng liên',
      district_id: '250800',
    },
    {
      id: '2258',
      name: 'Xã tân khánh',
      district_id: '250800',
    },
    {
      id: '2259',
      name: 'Xã tân kim',
      district_id: '250800',
    },
    {
      id: '2260',
      name: 'Xã tân thành',
      district_id: '250800',
    },
    {
      id: '2261',
      name: 'Xã đào xá',
      district_id: '250800',
    },
    {
      id: '2262',
      name: 'Xã bảo lý',
      district_id: '250800',
    },
    {
      id: '2263',
      name: 'Xã thượng đình',
      district_id: '250800',
    },
    {
      id: '2264',
      name: 'Xã tân hoà',
      district_id: '250800',
    },
    {
      id: '2265',
      name: 'Xã nhã lộng',
      district_id: '250800',
    },
    {
      id: '2266',
      name: 'Xã điềm thuỵ',
      district_id: '250800',
    },
    {
      id: '2267',
      name: 'Xã xuân phương',
      district_id: '250800',
    },
    {
      id: '2268',
      name: 'Xã tân đức',
      district_id: '250800',
    },
    {
      id: '2269',
      name: 'Xã úc kỳ',
      district_id: '250800',
    },
    {
      id: '2270',
      name: 'Xã lương phú',
      district_id: '250800',
    },
    {
      id: '2271',
      name: 'Xã nga my',
      district_id: '250800',
    },
    {
      id: '2272',
      name: 'Xã kha sơn',
      district_id: '250800',
    },
    {
      id: '2273',
      name: 'Xã thanh ninh',
      district_id: '250800',
    },
    {
      id: '2274',
      name: 'Xã dương thành',
      district_id: '250800',
    },
    {
      id: '2275',
      name: 'Xã hà châu',
      district_id: '250800',
    },
    {
      id: '2155',
      name: 'Xã yên trạch',
      district_id: '250400',
    },
    {
      id: '2156',
      name: 'Xã yên đổ',
      district_id: '250400',
    },
    {
      id: '2157',
      name: 'Xã yên lạc',
      district_id: '250400',
    },
    {
      id: '2158',
      name: 'Xã ôn lương',
      district_id: '250400',
    },
    {
      id: '2159',
      name: 'Xã động đạt',
      district_id: '250400',
    },
    {
      id: '2160',
      name: 'Xã phủ lý',
      district_id: '250400',
    },
    {
      id: '2161',
      name: 'Xã phú đô',
      district_id: '250400',
    },
    {
      id: '2162',
      name: 'Xã hợp thành',
      district_id: '250400',
    },
    {
      id: '2163',
      name: 'Xã túc tranh',
      district_id: '250400',
    },
    {
      id: '2164',
      name: 'Xã phấn mễ',
      district_id: '250400',
    },
    {
      id: '2165',
      name: 'Xã vô tranh',
      district_id: '250400',
    },
    {
      id: '2166',
      name: 'Xã cổ lũng',
      district_id: '250400',
    },
    {
      id: '2167',
      name: 'Xã sơn cẩm',
      district_id: '250400',
    },
    {
      id: '2168',
      name: 'Thị trấn giang tiên',
      district_id: '250400',
    },
    {
      id: '2169',
      name: 'Thị trấn đu',
      district_id: '250400',
    },
    {
      id: '2170',
      name: 'Xã yên ninh',
      district_id: '250400',
    },
    {
      id: '2140',
      name: 'Thị trấn đình cả',
      district_id: '250500',
    },
    {
      id: '2141',
      name: 'Xã sảng mộc',
      district_id: '250500',
    },
    {
      id: '2143',
      name: 'Xã thần xa',
      district_id: '250500',
    },
    {
      id: '2144',
      name: 'Xã vũ chấn',
      district_id: '250500',
    },
    {
      id: '2145',
      name: 'Xã thượng nung',
      district_id: '250500',
    },
    {
      id: '2146',
      name: 'Xã phú thượng',
      district_id: '250500',
    },
    {
      id: '2147',
      name: 'Xã cúc đường',
      district_id: '250500',
    },
    {
      id: '2148',
      name: 'Xã la hiên',
      district_id: '250500',
    },
    {
      id: '2149',
      name: 'Xã lâu thượng',
      district_id: '250500',
    },
    {
      id: '2150',
      name: 'Xã tràng xá',
      district_id: '250500',
    },
    {
      id: '2151',
      name: 'Xã phương giao',
      district_id: '250500',
    },
    {
      id: '2152',
      name: 'Xã liên minh',
      district_id: '250500',
    },
    {
      id: '2153',
      name: 'Xã dân tiến',
      district_id: '250500',
    },
    {
      id: '2154',
      name: 'Xã bình long',
      district_id: '250500',
    },
    {
      id: '11787',
      name: 'Xã nghinh tường',
      district_id: '250500',
    },
    {
      id: '5646',
      name: 'Xã ái thượng',
      district_id: '440700',
    },
    {
      id: '5647',
      name: 'Thị trấn cành nàng',
      district_id: '440700',
    },
    {
      id: '5648',
      name: 'Xã lũng cao',
      district_id: '440700',
    },
    {
      id: '5649',
      name: 'Xã hạ trung',
      district_id: '440700',
    },
    {
      id: '5650',
      name: 'Xã lượng nội',
      district_id: '440700',
    },
    {
      id: '5651',
      name: 'Xã kỳ tân',
      district_id: '440700',
    },
    {
      id: '5652',
      name: 'Xã văn nho',
      district_id: '440700',
    },
    {
      id: '5653',
      name: 'Xã điền thượng',
      district_id: '440700',
    },
    {
      id: '5654',
      name: 'Xã điền hạ',
      district_id: '440700',
    },
    {
      id: '5655',
      name: 'Xã điền trung',
      district_id: '440700',
    },
    {
      id: '5656',
      name: 'Xã lương trung',
      district_id: '440700',
    },
    {
      id: '5657',
      name: 'Xã điền quang',
      district_id: '440700',
    },
    {
      id: '5658',
      name: 'Xã điền lư',
      district_id: '440700',
    },
    {
      id: '5659',
      name: 'Xã tân lập',
      district_id: '440700',
    },
    {
      id: '5660',
      name: 'Xã lâm sa',
      district_id: '440700',
    },
    {
      id: '5661',
      name: 'Xã lũng niêm',
      district_id: '440700',
    },
    {
      id: '5662',
      name: 'Xã thanh lâm',
      district_id: '440700',
    },
    {
      id: '5663',
      name: 'Xã cổ lũng',
      district_id: '440700',
    },
    {
      id: '5664',
      name: 'Xã ban công',
      district_id: '440700',
    },
    {
      id: '5665',
      name: 'Xã lương ngoại',
      district_id: '440700',
    },
    {
      id: '5666',
      name: 'Xã thiết kế',
      district_id: '440700',
    },
    {
      id: '5668',
      name: 'Xã thành sơn',
      district_id: '440700',
    },
    {
      id: '11891',
      name: 'Xã thiết ống',
      district_id: '440700',
    },
    {
      id: '5488',
      name: 'Phường ngọc trạo',
      district_id: '440200',
    },
    {
      id: '5489',
      name: 'Phường lam sơn',
      district_id: '440200',
    },
    {
      id: '5490',
      name: 'Phường bắc sơn',
      district_id: '440200',
    },
    {
      id: '5491',
      name: 'Phường ba đình',
      district_id: '440200',
    },
    {
      id: '5493',
      name: 'Xã hà lan',
      district_id: '440200',
    },
    {
      id: '5494',
      name: 'Phường Đông Sơn',
      district_id: '440200',
    },
    {
      id: '11926',
      name: 'Xã quang trung',
      district_id: '440200',
    },
    {
      id: '12562',
      name: 'Phường Phú Sơn',
      district_id: '440200',
    },
    {
      id: '5627',
      name: 'Xã cẩm liên',
      district_id: '441400',
    },
    {
      id: '5628',
      name: 'Xã cẩm châu',
      district_id: '441400',
    },
    {
      id: '5629',
      name: 'Xã phúc do',
      district_id: '441400',
    },
    {
      id: '5632',
      name: 'Xã cẩm quý',
      district_id: '441400',
    },
    {
      id: '5633',
      name: 'Xã cẩm thành',
      district_id: '441400',
    },
    {
      id: '5634',
      name: 'Xã cẩm lương',
      district_id: '441400',
    },
    {
      id: '5635',
      name: 'Xã cẩm giang',
      district_id: '441400',
    },
    {
      id: '5636',
      name: 'Xã cẩm thạch',
      district_id: '441400',
    },
    {
      id: '5637',
      name: 'Xã cẩm bình',
      district_id: '441400',
    },
    {
      id: '5638',
      name: 'Xã cẩm tú',
      district_id: '441400',
    },
    {
      id: '5639',
      name: 'Xã cẩm ngọc',
      district_id: '441400',
    },
    {
      id: '5640',
      name: 'Xã cẩm tân',
      district_id: '441400',
    },
    {
      id: '5641',
      name: 'Xã cẩm vân',
      district_id: '441400',
    },
    {
      id: '5642',
      name: 'Xã cẩm long',
      district_id: '441400',
    },
    {
      id: '5643',
      name: 'Xã cẩm yên',
      district_id: '441400',
    },
    {
      id: '5644',
      name: 'Xã cẩm phú',
      district_id: '441400',
    },
    {
      id: '11936',
      name: 'Xã cẩm tâm',
      district_id: '441400',
    },
    {
      id: '12701',
      name: 'Thị Trấn Phong Sơn',
      district_id: '441400',
    },
    {
      id: '5464',
      name: 'Xã hà tân',
      district_id: '442100',
    },
    {
      id: '5465',
      name: 'Xã hà ngọc',
      district_id: '442100',
    },
    {
      id: '5466',
      name: 'Xã hà lâm',
      district_id: '442100',
    },
    {
      id: '5467',
      name: 'Xã hà thái',
      district_id: '442100',
    },
    {
      id: '5468',
      name: 'Xã hà phú',
      district_id: '442100',
    },
    {
      id: '5469',
      name: 'Xã hà phong',
      district_id: '442100',
    },
    {
      id: '5470',
      name: 'Xã hà ninh',
      district_id: '442100',
    },
    {
      id: '5471',
      name: 'Xã hà hải',
      district_id: '442100',
    },
    {
      id: '5472',
      name: 'Xã hà toại',
      district_id: '442100',
    },
    {
      id: '5473',
      name: 'Xã hà thanh',
      district_id: '442100',
    },
    {
      id: '5474',
      name: 'Xã hà châu',
      district_id: '442100',
    },
    {
      id: '5475',
      name: 'Xã hà vân',
      district_id: '442100',
    },
    {
      id: '5476',
      name: 'Xã hà dương',
      district_id: '442100',
    },
    {
      id: '5477',
      name: 'Xã hà đông',
      district_id: '442100',
    },
    {
      id: '5478',
      name: 'Xã hà bình',
      district_id: '442100',
    },
    {
      id: '5479',
      name: 'Xã hà lai',
      district_id: '442100',
    },
    {
      id: '5480',
      name: 'Xã hà vinh',
      district_id: '442100',
    },
    {
      id: '5481',
      name: 'Xã hà yên',
      district_id: '442100',
    },
    {
      id: '5482',
      name: 'Xã hà sơn',
      district_id: '442100',
    },
    {
      id: '5483',
      name: 'Xã hà long',
      district_id: '442100',
    },
    {
      id: '5484',
      name: 'Xã hà giang',
      district_id: '442100',
    },
    {
      id: '5485',
      name: 'Xã hà bắc',
      district_id: '442100',
    },
    {
      id: '5486',
      name: 'Xã hà tiến',
      district_id: '442100',
    },
    {
      id: '5487',
      name: 'Xã hà lĩnh',
      district_id: '442100',
    },
    {
      id: '11890',
      name: 'Thị trấn hà trung',
      district_id: '442100',
    },
    {
      id: '12824',
      name: 'Xã Yên Dương',
      district_id: '442100',
    },
    {
      id: '5411',
      name: 'Xã hưng lộc',
      district_id: '442400',
    },
    {
      id: '5412',
      name: 'Xã phú lộc',
      district_id: '442400',
    },
    {
      id: '5413',
      name: 'Thị trấn hậu lộc',
      district_id: '442400',
    },
    {
      id: '5414',
      name: 'Xã châu lộc',
      district_id: '442400',
    },
    {
      id: '5415',
      name: 'Xã đa lộc',
      district_id: '442400',
    },
    {
      id: '5416',
      name: 'Xã triệu lộc',
      district_id: '442400',
    },
    {
      id: '5417',
      name: 'Xã thành lộc',
      district_id: '442400',
    },
    {
      id: '5418',
      name: 'Xã tiên lộc',
      district_id: '442400',
    },
    {
      id: '5419',
      name: 'Xã đồng lộc',
      district_id: '442400',
    },
    {
      id: '5420',
      name: 'Xã phong lộc',
      district_id: '442400',
    },
    {
      id: '5421',
      name: 'Xã cầu lộc',
      district_id: '442400',
    },
    {
      id: '5422',
      name: 'Xã lộc sơn',
      district_id: '442400',
    },
    {
      id: '5423',
      name: 'Xã lộc tân',
      district_id: '442400',
    },
    {
      id: '5424',
      name: 'Xã thịnh lộc',
      district_id: '442400',
    },
    {
      id: '5425',
      name: 'Xã liên lộc',
      district_id: '442400',
    },
    {
      id: '5426',
      name: 'Xã tuy lộc',
      district_id: '442400',
    },
    {
      id: '5427',
      name: 'Xã quang lộc',
      district_id: '442400',
    },
    {
      id: '5428',
      name: 'Xã thuần lộc',
      district_id: '442400',
    },
    {
      id: '5429',
      name: 'Xã văn lộc',
      district_id: '442400',
    },
    {
      id: '5430',
      name: 'Xã hòa lộc',
      district_id: '442400',
    },
    {
      id: '5431',
      name: 'Xã xuân lộc',
      district_id: '442400',
    },
    {
      id: '5432',
      name: 'Xã hải lộc',
      district_id: '442400',
    },
    {
      id: '5433',
      name: 'Xã minh lộc',
      district_id: '442400',
    },
    {
      id: '5434',
      name: 'Xã ngư lộc',
      district_id: '442400',
    },
    {
      id: '5435',
      name: 'Xã mỹ lộc',
      district_id: '442400',
    },
    {
      id: '5436',
      name: 'Xã đại lộc',
      district_id: '442400',
    },
    {
      id: '5362',
      name: 'Thị trấn bút sơn',
      district_id: '442200',
    },
    {
      id: '5364',
      name: 'Xã hoằng kim',
      district_id: '442200',
    },
    {
      id: '5365',
      name: 'Xã hoằng phú',
      district_id: '442200',
    },
    {
      id: '5366',
      name: 'Xã hoằng khê',
      district_id: '442200',
    },
    {
      id: '5368',
      name: 'Xã hoằng thắng',
      district_id: '442200',
    },
    {
      id: '5369',
      name: 'Xã hoằng thanh',
      district_id: '442200',
    },
    {
      id: '5370',
      name: 'Xã hoằng lưu',
      district_id: '442200',
    },
    {
      id: '5371',
      name: 'Xã hoằng hợp',
      district_id: '442200',
    },
    {
      id: '5372',
      name: 'Xã hoằng cát',
      district_id: '442200',
    },
    {
      id: '5374',
      name: 'Xã hoằng phúc',
      district_id: '442200',
    },
    {
      id: '5376',
      name: 'Xã hoằng đông',
      district_id: '442200',
    },
    {
      id: '5377',
      name: 'Xã hoằng phượng',
      district_id: '442200',
    },
    {
      id: '5378',
      name: 'Xã hoằng quý',
      district_id: '442200',
    },
    {
      id: '5379',
      name: 'Xã hoằng sơn',
      district_id: '442200',
    },
    {
      id: '5380',
      name: 'Xã hoằng xuyên',
      district_id: '442200',
    },
    {
      id: '5381',
      name: 'Xã hoằng đạt',
      district_id: '442200',
    },
    {
      id: '5382',
      name: 'Xã hoằng đạo',
      district_id: '442200',
    },
    {
      id: '5384',
      name: 'Xã hoằng thịnh',
      district_id: '442200',
    },
    {
      id: '5385',
      name: 'Xã hoằng thái',
      district_id: '442200',
    },
    {
      id: '5386',
      name: 'Xã hoằng yến',
      district_id: '442200',
    },
    {
      id: '5387',
      name: 'Xã hoằng trường',
      district_id: '442200',
    },
    {
      id: '5388',
      name: 'Xã hoằng tiến',
      district_id: '442200',
    },
    {
      id: '5389',
      name: 'Xã hoằng châu',
      district_id: '442200',
    },
    {
      id: '5390',
      name: 'Xã hoằng trung',
      district_id: '442200',
    },
    {
      id: '5391',
      name: 'Xã hoằng giang',
      district_id: '442200',
    },
    {
      id: '5392',
      name: 'Xã hoằng đức',
      district_id: '442200',
    },
    {
      id: '5393',
      name: 'Xã hoằng đồng',
      district_id: '442200',
    },
    {
      id: '5394',
      name: 'Xã hoằng hà',
      district_id: '442200',
    },
    {
      id: '5395',
      name: 'Xã hoằng hải',
      district_id: '442200',
    },
    {
      id: '5396',
      name: 'Xã hoằng tân',
      district_id: '442200',
    },
    {
      id: '5397',
      name: 'Xã hoằng trạch',
      district_id: '442200',
    },
    {
      id: '5398',
      name: 'Xã hoằng ngọc',
      district_id: '442200',
    },
    {
      id: '5399',
      name: 'Xã hoằng phong',
      district_id: '442200',
    },
    {
      id: '5400',
      name: 'Xã hoằng quỳ',
      district_id: '442200',
    },
    {
      id: '5401',
      name: 'Xã hoằng trinh',
      district_id: '442200',
    },
    {
      id: '5402',
      name: 'Xã hoằng lương',
      district_id: '442200',
    },
    {
      id: '5404',
      name: 'Xã hoằng minh',
      district_id: '442200',
    },
    {
      id: '5405',
      name: 'Xã hoằng vinh',
      district_id: '442200',
    },
    {
      id: '5406',
      name: 'Xã hoằng khánh',
      district_id: '442200',
    },
    {
      id: '5407',
      name: 'Xã hoằng xuân',
      district_id: '442200',
    },
    {
      id: '5408',
      name: 'Xã hoằng phụ',
      district_id: '442200',
    },
    {
      id: '5410',
      name: 'Xã hoằng lộc',
      district_id: '442200',
    },
    {
      id: '11892',
      name: 'Thị trấn hoằng hóa',
      district_id: '442200',
    },
    {
      id: '5769',
      name: 'Thị Trấn Lang Chánh',
      district_id: '441100',
    },
    {
      id: '5770',
      name: 'Xã lâm phú',
      district_id: '441100',
    },
    {
      id: '5771',
      name: 'Xã yên khương',
      district_id: '441100',
    },
    {
      id: '5772',
      name: 'Xã giao thiện',
      district_id: '441100',
    },
    {
      id: '5773',
      name: 'Xã đồng lương',
      district_id: '441100',
    },
    {
      id: '5774',
      name: 'Xã tam văn',
      district_id: '441100',
    },
    {
      id: '5775',
      name: 'Xã giao an',
      district_id: '441100',
    },
    {
      id: '5776',
      name: 'Xã tan phúc',
      district_id: '441100',
    },
    {
      id: '5777',
      name: 'Xã quang hiến',
      district_id: '441100',
    },
    {
      id: '5778',
      name: 'Xã yên thắng',
      district_id: '441100',
    },
    {
      id: '11942',
      name: 'Xã trí nang',
      district_id: '441100',
    },
    {
      id: '5811',
      name: 'Xã tén tằn',
      district_id: '440600',
    },
    {
      id: '5812',
      name: 'Xã nhi sơn',
      district_id: '440600',
    },
    {
      id: '5813',
      name: 'Xã mường lý',
      district_id: '440600',
    },
    {
      id: '5814',
      name: 'Xã trung lý',
      district_id: '440600',
    },
    {
      id: '5815',
      name: 'Thị trấn mường lát',
      district_id: '440600',
    },
    {
      id: '5816',
      name: 'Xã quang chiểu',
      district_id: '440600',
    },
    {
      id: '5817',
      name: 'Xã mường chanh',
      district_id: '440600',
    },
    {
      id: '11927',
      name: 'Xã pù nhi',
      district_id: '440600',
    },
    {
      id: '11928',
      name: 'Xã tam chung',
      district_id: '440600',
    },
    {
      id: '5437',
      name: 'Thị Trắn Nga Sơn',
      district_id: '442300',
    },
    {
      id: '5438',
      name: 'Xã nga nhân',
      district_id: '442300',
    },
    {
      id: '5439',
      name: 'Xã nga mỹ',
      district_id: '442300',
    },
    {
      id: '5440',
      name: 'Xã nga giáp',
      district_id: '442300',
    },
    {
      id: '5441',
      name: 'Xã nga thủy',
      district_id: '442300',
    },
    {
      id: '5442',
      name: 'Xã nga yên',
      district_id: '442300',
    },
    {
      id: '5443',
      name: 'Xã nga hải',
      district_id: '442300',
    },
    {
      id: '5444',
      name: 'Xã nga an',
      district_id: '442300',
    },
    {
      id: '5445',
      name: 'Xã nga tiến',
      district_id: '442300',
    },
    {
      id: '5446',
      name: 'Xã nga liên',
      district_id: '442300',
    },
    {
      id: '5447',
      name: 'Xã nga thành',
      district_id: '442300',
    },
    {
      id: '5448',
      name: 'Xã nga thái',
      district_id: '442300',
    },
    {
      id: '5449',
      name: 'Xã nga phú',
      district_id: '442300',
    },
    {
      id: '5450',
      name: 'Xã nga điền',
      district_id: '442300',
    },
    {
      id: '5451',
      name: 'Xã nga thiện',
      district_id: '442300',
    },
    {
      id: '5452',
      name: 'Xã nga trường',
      district_id: '442300',
    },
    {
      id: '5453',
      name: 'Xã nga thắng',
      district_id: '442300',
    },
    {
      id: '5454',
      name: 'Xã nga trung',
      district_id: '442300',
    },
    {
      id: '5455',
      name: 'Xã nga bạch',
      district_id: '442300',
    },
    {
      id: '5456',
      name: 'Xã nga văn',
      district_id: '442300',
    },
    {
      id: '5457',
      name: 'Xã nga vịnh',
      district_id: '442300',
    },
    {
      id: '5458',
      name: 'Xã nga lĩnh',
      district_id: '442300',
    },
    {
      id: '5459',
      name: 'Xã nga thạch',
      district_id: '442300',
    },
    {
      id: '5460',
      name: 'Xã nga tân',
      district_id: '442300',
    },
    {
      id: '5461',
      name: 'Xã nga hưng',
      district_id: '442300',
    },
    {
      id: '5462',
      name: 'Xã ba đình',
      district_id: '442300',
    },
    {
      id: '12758',
      name: 'Xã Nga Phượng',
      district_id: '442300',
    },
    {
      id: '5747',
      name: 'Xã mỹ tân',
      district_id: '441200',
    },
    {
      id: '5748',
      name: 'Xã cao ngọc',
      district_id: '441200',
    },
    {
      id: '5749',
      name: 'Xã ngọc khê',
      district_id: '441200',
    },
    {
      id: '5750',
      name: 'Xã phùng minh',
      district_id: '441200',
    },
    {
      id: '5751',
      name: 'Xã thúy sơn',
      district_id: '441200',
    },
    {
      id: '5752',
      name: 'Thị trấn ngọc lặc',
      district_id: '441200',
    },
    {
      id: '5753',
      name: 'Xã thạch lập',
      district_id: '441200',
    },
    {
      id: '5754',
      name: 'Xã phùng giáo',
      district_id: '441200',
    },
    {
      id: '5755',
      name: 'Xã nguyệt ấn',
      district_id: '441200',
    },
    {
      id: '5756',
      name: 'Xã phúc thịnh',
      district_id: '441200',
    },
    {
      id: '5757',
      name: 'Xã quang trung',
      district_id: '441200',
    },
    {
      id: '5758',
      name: 'Xã lam sơn',
      district_id: '441200',
    },
    {
      id: '5759',
      name: 'Xã ngọc trung',
      district_id: '441200',
    },
    {
      id: '5760',
      name: 'Xã ngọc liên',
      district_id: '441200',
    },
    {
      id: '5761',
      name: 'Xã kiên thọ',
      district_id: '441200',
    },
    {
      id: '5762',
      name: 'Xã vân âm',
      district_id: '441200',
    },
    {
      id: '5763',
      name: 'Xã đồng thịnh',
      district_id: '441200',
    },
    {
      id: '5764',
      name: 'Xã ngọc sơn',
      district_id: '441200',
    },
    {
      id: '5765',
      name: 'Xã lộc thịnh',
      district_id: '441200',
    },
    {
      id: '5766',
      name: 'Xã cao thịnh',
      district_id: '441200',
    },
    {
      id: '5767',
      name: 'Xã minh sơn',
      district_id: '441200',
    },
    {
      id: '5768',
      name: 'Xã minh tiến',
      district_id: '441200',
    },
    {
      id: '5839',
      name: 'Xã hoàng giang',
      district_id: '441900',
    },
    {
      id: '5841',
      name: 'Xã trung chính',
      district_id: '441900',
    },
    {
      id: '5842',
      name: 'Xã minh nghĩa',
      district_id: '441900',
    },
    {
      id: '5843',
      name: 'Xã trường sơn',
      district_id: '441900',
    },
    {
      id: '5844',
      name: 'Xã thăng bình',
      district_id: '441900',
    },
    {
      id: '5845',
      name: 'Xã tượng lĩnh',
      district_id: '441900',
    },
    {
      id: '5847',
      name: 'Xã minh khôi',
      district_id: '441900',
    },
    {
      id: '5848',
      name: 'Xã vạn thiện',
      district_id: '441900',
    },
    {
      id: '5849',
      name: 'Xã vạn thắng',
      district_id: '441900',
    },
    {
      id: '5850',
      name: 'Xã trung thành',
      district_id: '441900',
    },
    {
      id: '5851',
      name: 'Xã công liêm',
      district_id: '441900',
    },
    {
      id: '5852',
      name: 'Xã trường giang',
      district_id: '441900',
    },
    {
      id: '5853',
      name: 'Xã trường minh',
      district_id: '441900',
    },
    {
      id: '5854',
      name: 'Xã thăng thọ',
      district_id: '441900',
    },
    {
      id: '5855',
      name: 'Xã tượng sơn',
      district_id: '441900',
    },
    {
      id: '5857',
      name: 'Xã Tế Nông',
      district_id: '441900',
    },
    {
      id: '5858',
      name: 'Xã vạn hòa',
      district_id: '441900',
    },
    {
      id: '5859',
      name: 'Xã tượng văn',
      district_id: '441900',
    },
    {
      id: '5860',
      name: 'Xã thăng long',
      district_id: '441900',
    },
    {
      id: '5862',
      name: 'Xã hoàng sơn',
      district_id: '441900',
    },
    {
      id: '5863',
      name: 'Xã tân khang',
      district_id: '441900',
    },
    {
      id: '5864',
      name: 'Xã trung ý',
      district_id: '441900',
    },
    {
      id: '5865',
      name: 'Xã tế lợi',
      district_id: '441900',
    },
    {
      id: '5866',
      name: 'Thị trấn nông cống',
      district_id: '441900',
    },
    {
      id: '5867',
      name: 'Xã tân phúc',
      district_id: '441900',
    },
    {
      id: '5868',
      name: 'Xã tân thọ',
      district_id: '441900',
    },
    {
      id: '5869',
      name: 'Xã tế tân',
      district_id: '441900',
    },
    {
      id: '5870',
      name: 'Xã tế thắng',
      district_id: '441900',
    },
    {
      id: '5871',
      name: 'Xã trường trung',
      district_id: '441900',
    },
    {
      id: '5872',
      name: 'Xã công chính',
      district_id: '441900',
    },
    {
      id: '5873',
      name: 'Xã công bình',
      district_id: '441900',
    },
    {
      id: '5874',
      name: 'Xã yên mỹ',
      district_id: '441900',
    },
    {
      id: '5780',
      name: 'Xã hiền kiệt',
      district_id: '440400',
    },
    {
      id: '5781',
      name: 'Xã phú sơn',
      district_id: '440400',
    },
    {
      id: '5782',
      name: 'Xã thanh xuân',
      district_id: '440400',
    },
    {
      id: '5783',
      name: 'Xã nam xuân',
      district_id: '440400',
    },
    {
      id: '5785',
      name: 'Xã trung sơn',
      district_id: '440400',
    },
    {
      id: '5786',
      name: 'Xã thành sơn',
      district_id: '440400',
    },
    {
      id: '5787',
      name: 'Xã nam động',
      district_id: '440400',
    },
    {
      id: '5788',
      name: 'Xã nam tiến',
      district_id: '440400',
    },
    {
      id: '5789',
      name: 'Xã phú xuân',
      district_id: '440400',
    },
    {
      id: '5790',
      name: 'Xã hồi xuân',
      district_id: '440400',
    },
    {
      id: '5792',
      name: 'Thị trấn quan hóa',
      district_id: '440400',
    },
    {
      id: '5793',
      name: 'Xã phú lệ',
      district_id: '440400',
    },
    {
      id: '5794',
      name: 'Xã thiên phủ',
      district_id: '440400',
    },
    {
      id: '5795',
      name: 'Xã phú nghiêm',
      district_id: '440400',
    },
    {
      id: '5796',
      name: 'Xã trung thành',
      district_id: '440400',
    },
    {
      id: '5797',
      name: 'Xã phú thanh',
      district_id: '440400',
    },
    {
      id: '11937',
      name: 'Xã hiền chung',
      district_id: '440400',
    },
    {
      id: '11938',
      name: 'Xã xuân phú',
      district_id: '440400',
    },
    {
      id: '12808',
      name: 'Thị Trấn Hồi Xuân',
      district_id: '440400',
    },
    {
      id: '5798',
      name: 'Thị trấn quan sơn',
      district_id: '440500',
    },
    {
      id: '5799',
      name: 'Xã tam lư',
      district_id: '440500',
    },
    {
      id: '5800',
      name: 'Xã tam thanh',
      district_id: '440500',
    },
    {
      id: '5801',
      name: 'Xã sơn lư',
      district_id: '440500',
    },
    {
      id: '5802',
      name: 'Xã sơn điện',
      district_id: '440500',
    },
    {
      id: '5803',
      name: 'Xã trung hạ',
      district_id: '440500',
    },
    {
      id: '5804',
      name: 'Xã mường mìn',
      district_id: '440500',
    },
    {
      id: '5805',
      name: 'Xã sơn hà',
      district_id: '440500',
    },
    {
      id: '5806',
      name: 'Xã trung thượng',
      district_id: '440500',
    },
    {
      id: '5807',
      name: 'Xã trung tiến',
      district_id: '440500',
    },
    {
      id: '5808',
      name: 'Xã sơn thủy',
      district_id: '440500',
    },
    {
      id: '5809',
      name: 'Xã na mèo',
      district_id: '440500',
    },
    {
      id: '5810',
      name: 'Xã trung xuân',
      district_id: '440500',
    },
    {
      id: '12776',
      name: 'Thị Trấn Sơn Lư',
      district_id: '440500',
    },
    {
      id: '5910',
      name: 'Xã quảng tân',
      district_id: '442500',
    },
    {
      id: '5911',
      name: 'Xã quảng yên',
      district_id: '442500',
    },
    {
      id: '5914',
      name: 'Xã quảng phong',
      district_id: '442500',
    },
    {
      id: '5916',
      name: 'Xã quảng lợi',
      district_id: '442500',
    },
    {
      id: '5917',
      name: 'Thị trấn quảng xương',
      district_id: '442500',
    },
    {
      id: '5918',
      name: 'Xã quảng hòa',
      district_id: '442500',
    },
    {
      id: '5919',
      name: 'Xã quảng ninh',
      district_id: '442500',
    },
    {
      id: '5920',
      name: 'Xã quảng lưu',
      district_id: '442500',
    },
    {
      id: '5921',
      name: 'Xã quảng định',
      district_id: '442500',
    },
    {
      id: '5923',
      name: 'Xã quảng long',
      district_id: '442500',
    },
    {
      id: '5924',
      name: 'Xã quảng phúc',
      district_id: '442500',
    },
    {
      id: '5925',
      name: 'Xã quảng vọng',
      district_id: '442500',
    },
    {
      id: '5926',
      name: 'Xã quảng ngọc',
      district_id: '442500',
    },
    {
      id: '5927',
      name: 'Xã quảng trương',
      district_id: '442500',
    },
    {
      id: '5928',
      name: 'Xã quảng khê',
      district_id: '442500',
    },
    {
      id: '5929',
      name: 'Xã quảng trung',
      district_id: '442500',
    },
    {
      id: '5930',
      name: 'Xã quảng thái',
      district_id: '442500',
    },
    {
      id: '5931',
      name: 'Xã quảng bình',
      district_id: '442500',
    },
    {
      id: '5932',
      name: 'Xã quảng đức',
      district_id: '442500',
    },
    {
      id: '5933',
      name: 'Xã quảng hải',
      district_id: '442500',
    },
    {
      id: '5935',
      name: 'Xã quảng lĩnh',
      district_id: '442500',
    },
    {
      id: '5938',
      name: 'Xã quảng giao',
      district_id: '442500',
    },
    {
      id: '5940',
      name: 'Xã quảng trạch',
      district_id: '442500',
    },
    {
      id: '5941',
      name: 'Xã quảng văn',
      district_id: '442500',
    },
    {
      id: '5942',
      name: 'Xã quảng chính',
      district_id: '442500',
    },
    {
      id: '5943',
      name: 'Xã quảng nham',
      district_id: '442500',
    },
    {
      id: '5944',
      name: 'Xã quảng thạch',
      district_id: '442500',
    },
    {
      id: '5945',
      name: 'Xã quảng lộc',
      district_id: '442500',
    },
    {
      id: '5946',
      name: 'Xã quảng hợp',
      district_id: '442500',
    },
    {
      id: '5947',
      name: 'Xã quảng nhân',
      district_id: '442500',
    },
    {
      id: '12721',
      name: 'Xã Tiên Trang',
      district_id: '442500',
    },
    {
      id: '12750',
      name: 'Thị Trấn Tân Phong',
      district_id: '442500',
    },
    {
      id: '5357',
      name: 'Phường bắc sơn',
      district_id: '440300',
    },
    {
      id: '5358',
      name: 'Phường trung sơn',
      district_id: '440300',
    },
    {
      id: '5359',
      name: 'Phường trường sơn',
      district_id: '440300',
    },
    {
      id: '11919',
      name: 'Phường quảng tiến',
      district_id: '440300',
    },
    {
      id: '11921',
      name: 'Xã quảng đại',
      district_id: '440300',
    },
    {
      id: '11922',
      name: 'Xã quảng hùng',
      district_id: '440300',
    },
    {
      id: '11923',
      name: 'Xã quảng minh',
      district_id: '440300',
    },
    {
      id: '11924',
      name: 'Phường Quảng Thọ',
      district_id: '440300',
    },
    {
      id: '11925',
      name: 'Phường Quảng Vinh',
      district_id: '440300',
    },
    {
      id: '12580',
      name: 'Phường Quảng Cư',
      district_id: '440300',
    },
    {
      id: '12744',
      name: 'Phường Quảng Châu',
      district_id: '440300',
    },
    {
      id: '5599',
      name: 'Xã thạch tượng',
      district_id: '441300',
    },
    {
      id: '5600',
      name: 'Xã thành mỹ',
      district_id: '441300',
    },
    {
      id: '5601',
      name: 'Xã thạch sơn',
      district_id: '441300',
    },
    {
      id: '5602',
      name: 'Xã thạch đồng',
      district_id: '441300',
    },
    {
      id: '5603',
      name: 'Xã thành tâm',
      district_id: '441300',
    },
    {
      id: '5604',
      name: 'Xã thạch lâm',
      district_id: '441300',
    },
    {
      id: '5605',
      name: 'Xã thành yên',
      district_id: '441300',
    },
    {
      id: '5606',
      name: 'Xã thành vân',
      district_id: '441300',
    },
    {
      id: '5607',
      name: 'Xã thành tiến',
      district_id: '441300',
    },
    {
      id: '5608',
      name: 'Xã thành thọ',
      district_id: '441300',
    },
    {
      id: '5609',
      name: 'Xã thành an',
      district_id: '441300',
    },
    {
      id: '5610',
      name: 'Xã thành kim',
      district_id: '441300',
    },
    {
      id: '5611',
      name: 'Xã thành hưng',
      district_id: '441300',
    },
    {
      id: '5612',
      name: 'Xã thạch quảng',
      district_id: '441300',
    },
    {
      id: '5613',
      name: 'Xã thành công',
      district_id: '441300',
    },
    {
      id: '5614',
      name: 'Xã thành long',
      district_id: '441300',
    },
    {
      id: '5615',
      name: 'Thị trấn kim tân',
      district_id: '441300',
    },
    {
      id: '5616',
      name: 'Xã thành minh',
      district_id: '441300',
    },
    {
      id: '5617',
      name: 'Xã thành tân',
      district_id: '441300',
    },
    {
      id: '5618',
      name: 'Xã thạch cẩm',
      district_id: '441300',
    },
    {
      id: '5619',
      name: 'Thị trấn vân du',
      district_id: '441300',
    },
    {
      id: '5620',
      name: 'Xã thành vinh',
      district_id: '441300',
    },
    {
      id: '5621',
      name: 'Xã thành trực',
      district_id: '441300',
    },
    {
      id: '5622',
      name: 'Xã ngọc trạo',
      district_id: '441300',
    },
    {
      id: '5625',
      name: 'Xã thạch long',
      district_id: '441300',
    },
    {
      id: '11931',
      name: 'Xã thạch bình',
      district_id: '441300',
    },
    {
      id: '11932',
      name: 'Xã thạch định',
      district_id: '441300',
    },
    {
      id: '11933',
      name: 'Xã thạch tân',
      district_id: '441300',
    },
    {
      id: '5339',
      name: 'Phường ba đình',
      district_id: '440100',
    },
    {
      id: '5340',
      name: 'Phường ngọc trạo',
      district_id: '440100',
    },
    {
      id: '5341',
      name: 'Phường đông vệ',
      district_id: '440100',
    },
    {
      id: '5342',
      name: 'Phường phú sơn',
      district_id: '440100',
    },
    {
      id: '5343',
      name: 'Phường tân sơn',
      district_id: '440100',
    },
    {
      id: '5344',
      name: 'Phường điện biên',
      district_id: '440100',
    },
    {
      id: '5346',
      name: 'Phường đông sơn',
      district_id: '440100',
    },
    {
      id: '5347',
      name: 'Phường lam sơn',
      district_id: '440100',
    },
    {
      id: '5348',
      name: 'Phường trường thi',
      district_id: '440100',
    },
    {
      id: '5349',
      name: 'Phường đông thọ',
      district_id: '440100',
    },
    {
      id: '5350',
      name: 'Phường hàm rồng',
      district_id: '440100',
    },
    {
      id: '5351',
      name: 'Phường nam ngạn',
      district_id: '440100',
    },
    {
      id: '11894',
      name: 'Phường đông cương',
      district_id: '440100',
    },
    {
      id: '11895',
      name: 'Phường đông hải',
      district_id: '440100',
    },
    {
      id: '11896',
      name: 'Phường đông hương',
      district_id: '440100',
    },
    {
      id: '11897',
      name: 'Phường quảng hưng',
      district_id: '440100',
    },
    {
      id: '11898',
      name: 'Phường quảng thắng',
      district_id: '440100',
    },
    {
      id: '11899',
      name: 'Phường quảng thành',
      district_id: '440100',
    },
    {
      id: '11900',
      name: 'Phường an hoạch',
      district_id: '440100',
    },
    {
      id: '11901',
      name: 'Phường tào xuyên',
      district_id: '440100',
    },
    {
      id: '11903',
      name: 'Phường Đông Lĩnh',
      district_id: '440100',
    },
    {
      id: '11904',
      name: 'Phường Đông Tân',
      district_id: '440100',
    },
    {
      id: '11905',
      name: 'Xã đông vinh',
      district_id: '440100',
    },
    {
      id: '11906',
      name: 'Xã hoằng đại',
      district_id: '440100',
    },
    {
      id: '11908',
      name: 'Xã hoằng long',
      district_id: '440100',
    },
    {
      id: '11909',
      name: 'Xã hoằng lý',
      district_id: '440100',
    },
    {
      id: '11910',
      name: 'Xã hoằng quang',
      district_id: '440100',
    },
    {
      id: '11911',
      name: 'Phường Quảng Cát',
      district_id: '440100',
    },
    {
      id: '11912',
      name: 'Phường Quảng Đông',
      district_id: '440100',
    },
    {
      id: '11913',
      name: 'Phường Quảng Phú',
      district_id: '440100',
    },
    {
      id: '11914',
      name: 'Phường Quảng Tâm',
      district_id: '440100',
    },
    {
      id: '11915',
      name: 'Phường Quảng Thịnh',
      district_id: '440100',
    },
    {
      id: '11916',
      name: 'Phường Thiệu Dương',
      district_id: '440100',
    },
    {
      id: '11917',
      name: 'Phường Thiệu Khánh',
      district_id: '440100',
    },
    {
      id: '11918',
      name: 'Xã thiệu vân',
      district_id: '440100',
    },
    {
      id: '12700',
      name: 'Phường An Hưng',
      district_id: '440100',
    },
    {
      id: '12755',
      name: 'Phường Long Anh',
      district_id: '440100',
    },
    {
      id: '5520',
      name: 'Xã thiệu chính',
      district_id: '441700',
    },
    {
      id: '5521',
      name: 'Xã thiệu viên',
      district_id: '441700',
    },
    {
      id: '5522',
      name: 'Xã thiệu long',
      district_id: '441700',
    },
    {
      id: '5523',
      name: 'Xã thiệu phúc',
      district_id: '441700',
    },
    {
      id: '5524',
      name: 'Xã thiệu trung',
      district_id: '441700',
    },
    {
      id: '5525',
      name: 'Xã thiệu tiến',
      district_id: '441700',
    },
    {
      id: '5526',
      name: 'Xã thiệu công',
      district_id: '441700',
    },
    {
      id: '5528',
      name: 'Xã thiệu ngọc',
      district_id: '441700',
    },
    {
      id: '5529',
      name: 'Xã thiệu toán',
      district_id: '441700',
    },
    {
      id: '5530',
      name: 'Xã thiệu thành',
      district_id: '441700',
    },
    {
      id: '5531',
      name: 'Xã thiệu vũ',
      district_id: '441700',
    },
    {
      id: '5532',
      name: 'Xã thiệu phú',
      district_id: '441700',
    },
    {
      id: '5533',
      name: 'Xã thiệu nguyên',
      district_id: '441700',
    },
    {
      id: '5534',
      name: 'Xã thiệu duy',
      district_id: '441700',
    },
    {
      id: '5536',
      name: 'Xã thiệu giao',
      district_id: '441700',
    },
    {
      id: '5538',
      name: 'Xã thiệu châu',
      district_id: '441700',
    },
    {
      id: '5539',
      name: 'Xã thiệu lý',
      district_id: '441700',
    },
    {
      id: '5540',
      name: 'Xã thiệu hòa',
      district_id: '441700',
    },
    {
      id: '5541',
      name: 'Xã thiệu giang',
      district_id: '441700',
    },
    {
      id: '5542',
      name: 'Xã thiệu vân',
      district_id: '441700',
    },
    {
      id: '5544',
      name: 'Xã thiệu tân',
      district_id: '441700',
    },
    {
      id: '5545',
      name: 'Xã thiệu minh',
      district_id: '441700',
    },
    {
      id: '5546',
      name: 'Xã thiệu tâm',
      district_id: '441700',
    },
    {
      id: '5547',
      name: 'Xã thiệu vận',
      district_id: '441700',
    },
    {
      id: '5548',
      name: 'Xã thiệu quang',
      district_id: '441700',
    },
    {
      id: '5549',
      name: 'Xã thiệu hợp',
      district_id: '441700',
    },
    {
      id: '5550',
      name: 'Xã thiệu thịnh',
      district_id: '441700',
    },
    {
      id: '12699',
      name: 'Thị Trấn Thiệu Hóa',
      district_id: '441700',
    },
    {
      id: '5707',
      name: 'Thị trấn sao vàng',
      district_id: '441500',
    },
    {
      id: '5708',
      name: 'Thị trấn thọ xuân',
      district_id: '441500',
    },
    {
      id: '5709',
      name: 'Xã xuân tân',
      district_id: '441500',
    },
    {
      id: '5710',
      name: 'Thị trấn lam sơn',
      district_id: '441500',
    },
    {
      id: '5711',
      name: 'Xã xuân châu',
      district_id: '441500',
    },
    {
      id: '5712',
      name: 'Xã xuân tín',
      district_id: '441500',
    },
    {
      id: '5713',
      name: 'Xã thọ thắng',
      district_id: '441500',
    },
    {
      id: '5714',
      name: 'Xã xuân lập',
      district_id: '441500',
    },
    {
      id: '5715',
      name: 'Xã xuân hòa',
      district_id: '441500',
    },
    {
      id: '5716',
      name: 'Xã xuân phong',
      district_id: '441500',
    },
    {
      id: '5717',
      name: 'Xã nam giang',
      district_id: '441500',
    },
    {
      id: '5718',
      name: 'Xã xuân quang',
      district_id: '441500',
    },
    {
      id: '5719',
      name: 'Xã xuân thiên',
      district_id: '441500',
    },
    {
      id: '5720',
      name: 'Xã xuân lâm',
      district_id: '441500',
    },
    {
      id: '5721',
      name: 'Xã thọ xương',
      district_id: '441500',
    },
    {
      id: '5722',
      name: 'Xã xuân khánh',
      district_id: '441500',
    },
    {
      id: '5723',
      name: 'Xã Thọ Trường',
      district_id: '441500',
    },
    {
      id: '5724',
      name: 'Xã thọ nguyên',
      district_id: '441500',
    },
    {
      id: '5725',
      name: 'Xã xuân thành',
      district_id: '441500',
    },
    {
      id: '5726',
      name: 'Xã hạnh phúc',
      district_id: '441500',
    },
    {
      id: '5727',
      name: 'Xã bắc lương',
      district_id: '441500',
    },
    {
      id: '5728',
      name: 'Xã thọ lập',
      district_id: '441500',
    },
    {
      id: '5729',
      name: 'Xã thọ hải',
      district_id: '441500',
    },
    {
      id: '5730',
      name: 'Xã xuân giang',
      district_id: '441500',
    },
    {
      id: '5731',
      name: 'Xã thọ diên',
      district_id: '441500',
    },
    {
      id: '5732',
      name: 'Xã xuân phú',
      district_id: '441500',
    },
    {
      id: '5733',
      name: 'Xã xuân thắng',
      district_id: '441500',
    },
    {
      id: '5734',
      name: 'Xã xuân lam',
      district_id: '441500',
    },
    {
      id: '5735',
      name: 'Xã thọ minh',
      district_id: '441500',
    },
    {
      id: '5736',
      name: 'Xã quảng phú',
      district_id: '441500',
    },
    {
      id: '5737',
      name: 'Xã phú yên',
      district_id: '441500',
    },
    {
      id: '5738',
      name: 'Xã xuân lai',
      district_id: '441500',
    },
    {
      id: '5739',
      name: 'Xã xuân minh',
      district_id: '441500',
    },
    {
      id: '5740',
      name: 'Xã Thọ Lộc',
      district_id: '441500',
    },
    {
      id: '5741',
      name: 'Xã xuân hưng',
      district_id: '441500',
    },
    {
      id: '5742',
      name: 'Xã xuân sơn',
      district_id: '441500',
    },
    {
      id: '5743',
      name: 'Xã xuân bái',
      district_id: '441500',
    },
    {
      id: '5744',
      name: 'Xã xuân vinh',
      district_id: '441500',
    },
    {
      id: '5745',
      name: 'Xã xuân trường',
      district_id: '441500',
    },
    {
      id: '5746',
      name: 'Xã xuân yên',
      district_id: '441500',
    },
    {
      id: '11934',
      name: 'Xã tây hồ',
      district_id: '441500',
    },
    {
      id: '11935',
      name: 'Xã Thọ Lâm',
      district_id: '441500',
    },
    {
      id: '12763',
      name: 'Xã Trường Xuân',
      district_id: '441500',
    },
    {
      id: '12827',
      name: 'Xã Xuân Hồng',
      district_id: '441500',
    },
    {
      id: '5820',
      name: 'Xã thọ thanh',
      district_id: '440800',
    },
    {
      id: '5821',
      name: 'Xã ngọc phụng',
      district_id: '440800',
    },
    {
      id: '5822',
      name: 'Thị trấn thường xuân',
      district_id: '440800',
    },
    {
      id: '5823',
      name: 'Xã lương sơn',
      district_id: '440800',
    },
    {
      id: '5824',
      name: 'Xã bát mọt',
      district_id: '440800',
    },
    {
      id: '5826',
      name: 'Xã xuân chinh',
      district_id: '440800',
    },
    {
      id: '5827',
      name: 'Xã luận thành',
      district_id: '440800',
    },
    {
      id: '5828',
      name: 'Xã luận khê',
      district_id: '440800',
    },
    {
      id: '5829',
      name: 'Xã xuân cẩm',
      district_id: '440800',
    },
    {
      id: '5831',
      name: 'Xã xuân cao',
      district_id: '440800',
    },
    {
      id: '5833',
      name: 'Xã vạn xuân',
      district_id: '440800',
    },
    {
      id: '5834',
      name: 'Xã xuân lẹ',
      district_id: '440800',
    },
    {
      id: '5835',
      name: 'Xã xuân thắng',
      district_id: '440800',
    },
    {
      id: '5836',
      name: 'Xã xuân lộc',
      district_id: '440800',
    },
    {
      id: '5837',
      name: 'Xã tân thành',
      district_id: '440800',
    },
    {
      id: '5838',
      name: 'Xã xuân dương',
      district_id: '440800',
    },
    {
      id: '11889',
      name: 'Xã yên nhân',
      district_id: '440800',
    },
    {
      id: '5669',
      name: 'Xã hợp tiến',
      district_id: '441800',
    },
    {
      id: '5670',
      name: 'Xã minh sơn',
      district_id: '441800',
    },
    {
      id: '5671',
      name: 'Xã dân lực',
      district_id: '441800',
    },
    {
      id: '5672',
      name: 'Xã tiến nông',
      district_id: '441800',
    },
    {
      id: '5673',
      name: 'Xã khuyến nông',
      district_id: '441800',
    },
    {
      id: '5674',
      name: 'Xã thọ thế',
      district_id: '441800',
    },
    {
      id: '5675',
      name: 'Xã thọ dân',
      district_id: '441800',
    },
    {
      id: '5676',
      name: 'Xã thọ tân',
      district_id: '441800',
    },
    {
      id: '5677',
      name: 'Xã hợp lý',
      district_id: '441800',
    },
    {
      id: '5678',
      name: 'Xã hợp thắng',
      district_id: '441800',
    },
    {
      id: '5679',
      name: 'Xã thái hòa',
      district_id: '441800',
    },
    {
      id: '5680',
      name: 'Xã đồng thắng',
      district_id: '441800',
    },
    {
      id: '5681',
      name: 'Xã bình sơn',
      district_id: '441800',
    },
    {
      id: '5682',
      name: 'Xã thọ sơn',
      district_id: '441800',
    },
    {
      id: '5683',
      name: 'Xã thọ ngọc',
      district_id: '441800',
    },
    {
      id: '5684',
      name: 'Xã thọ tiến',
      district_id: '441800',
    },
    {
      id: '5685',
      name: 'Xã triệu thành',
      district_id: '441800',
    },
    {
      id: '5686',
      name: 'Xã hợp thành',
      district_id: '441800',
    },
    {
      id: '5687',
      name: 'Xã an nông',
      district_id: '441800',
    },
    {
      id: '5688',
      name: 'Xã văn sơn',
      district_id: '441800',
    },
    {
      id: '5689',
      name: 'Xã tân ninh',
      district_id: '441800',
    },
    {
      id: '5690',
      name: 'Xã nông trường',
      district_id: '441800',
    },
    {
      id: '5691',
      name: 'Xã đồng lợi',
      district_id: '441800',
    },
    {
      id: '5692',
      name: 'Xã đồng tiến',
      district_id: '441800',
    },
    {
      id: '5693',
      name: 'Xã minh châu',
      district_id: '441800',
    },
    {
      id: '5694',
      name: 'Xã dân lý',
      district_id: '441800',
    },
    {
      id: '5695',
      name: 'Thị trấn triệu sơn',
      district_id: '441800',
    },
    {
      id: '5698',
      name: 'Xã thọ cường',
      district_id: '441800',
    },
    {
      id: '5699',
      name: 'Xã thọ bình',
      district_id: '441800',
    },
    {
      id: '5700',
      name: 'Xã xuân thọ',
      district_id: '441800',
    },
    {
      id: '5701',
      name: 'Xã xuân lộc',
      district_id: '441800',
    },
    {
      id: '5702',
      name: 'Xã thọ vực',
      district_id: '441800',
    },
    {
      id: '5703',
      name: 'Xã xuân thịnh',
      district_id: '441800',
    },
    {
      id: '5704',
      name: 'Xã thọ phú',
      district_id: '441800',
    },
    {
      id: '5705',
      name: 'Xã minh dân',
      district_id: '441800',
    },
    {
      id: '5706',
      name: 'Xã dân quyền',
      district_id: '441800',
    },
    {
      id: '5583',
      name: 'Xã vĩnh quang',
      district_id: '441600',
    },
    {
      id: '5584',
      name: 'Xã vĩnh tiến',
      district_id: '441600',
    },
    {
      id: '5585',
      name: 'Xã vĩnh long',
      district_id: '441600',
    },
    {
      id: '5586',
      name: 'Xã vĩnh hưng',
      district_id: '441600',
    },
    {
      id: '5587',
      name: 'Xã vĩnh phúc',
      district_id: '441600',
    },
    {
      id: '5588',
      name: 'Xã vĩnh hòa',
      district_id: '441600',
    },
    {
      id: '5589',
      name: 'Xã vĩnh minh',
      district_id: '441600',
    },
    {
      id: '5590',
      name: 'Xã vĩnh hùng',
      district_id: '441600',
    },
    {
      id: '5591',
      name: 'Xã vĩnh tân',
      district_id: '441600',
    },
    {
      id: '5592',
      name: 'Xã vĩnh an',
      district_id: '441600',
    },
    {
      id: '5593',
      name: 'Thị trấn vĩnh lộc',
      district_id: '441600',
    },
    {
      id: '5594',
      name: 'Xã vĩnh yên',
      district_id: '441600',
    },
    {
      id: '5595',
      name: 'Xã vĩnh thành',
      district_id: '441600',
    },
    {
      id: '5596',
      name: 'Xã vĩnh ninh',
      district_id: '441600',
    },
    {
      id: '5597',
      name: 'Xã vĩnh thịnh',
      district_id: '441600',
    },
    {
      id: '5598',
      name: 'Xã vĩnh khang',
      district_id: '441600',
    },
    {
      id: '12734',
      name: 'Xã Ninh Khang',
      district_id: '441600',
    },
    {
      id: '5553',
      name: 'Xã yên phong',
      district_id: '442700',
    },
    {
      id: '5554',
      name: 'Xã yên thái',
      district_id: '442700',
    },
    {
      id: '5555',
      name: 'Xã yên ninh',
      district_id: '442700',
    },
    {
      id: '5556',
      name: 'Xã định tường',
      district_id: '442700',
    },
    {
      id: '5557',
      name: 'Xã định long',
      district_id: '442700',
    },
    {
      id: '5558',
      name: 'Xã định hưng',
      district_id: '442700',
    },
    {
      id: '5559',
      name: 'Xã định bình',
      district_id: '442700',
    },
    {
      id: '5560',
      name: 'Xã định tăng',
      district_id: '442700',
    },
    {
      id: '5561',
      name: 'Xã định hòa',
      district_id: '442700',
    },
    {
      id: '5562',
      name: 'Xã yên trường',
      district_id: '442700',
    },
    {
      id: '5564',
      name: 'Xã định thành',
      district_id: '442700',
    },
    {
      id: '5565',
      name: 'Xã định công',
      district_id: '442700',
    },
    {
      id: '5566',
      name: 'Xã định tiến',
      district_id: '442700',
    },
    {
      id: '5567',
      name: 'Xã định tân',
      district_id: '442700',
    },
    {
      id: '5568',
      name: 'Thị trấn quán lào',
      district_id: '442700',
    },
    {
      id: '5569',
      name: 'Xã yên lâm',
      district_id: '442700',
    },
    {
      id: '5570',
      name: 'Xã yên tâm',
      district_id: '442700',
    },
    {
      id: '5571',
      name: 'Xã yên giang',
      district_id: '442700',
    },
    {
      id: '5572',
      name: 'Xã yên phú',
      district_id: '442700',
    },
    {
      id: '5573',
      name: 'Xã yên bái',
      district_id: '442700',
    },
    {
      id: '5574',
      name: 'Xã yên trung',
      district_id: '442700',
    },
    {
      id: '5576',
      name: 'Xã yên thọ',
      district_id: '442700',
    },
    {
      id: '5578',
      name: 'Xã yên hùng',
      district_id: '442700',
    },
    {
      id: '5579',
      name: 'Xã yên thịnh',
      district_id: '442700',
    },
    {
      id: '5580',
      name: 'Xã yên lạc',
      district_id: '442700',
    },
    {
      id: '5581',
      name: 'Xã định liên',
      district_id: '442700',
    },
    {
      id: '5582',
      name: 'Xã định hải',
      district_id: '442700',
    },
    {
      id: '11940',
      name: 'Thị trấn thống nhất',
      district_id: '442700',
    },
    {
      id: '11941',
      name: 'Xã quí lộc',
      district_id: '442700',
    },
    {
      id: '5875',
      name: 'Xã yên thọ',
      district_id: '441000',
    },
    {
      id: '5876',
      name: 'Xã hải vân',
      district_id: '441000',
    },
    {
      id: '5877',
      name: 'Xã phúc đường',
      district_id: '441000',
    },
    {
      id: '5878',
      name: 'Xã thanh tân',
      district_id: '441000',
    },
    {
      id: '5879',
      name: 'Xã hải long',
      district_id: '441000',
    },
    {
      id: '5880',
      name: 'Xã xuân khang',
      district_id: '441000',
    },
    {
      id: '5881',
      name: 'Thị trấn bến sung',
      district_id: '441000',
    },
    {
      id: '5882',
      name: 'Xã bình thuận',
      district_id: '441000',
    },
    {
      id: '5883',
      name: 'Xã cán khê',
      district_id: '441000',
    },
    {
      id: '5884',
      name: 'Xã xuân du',
      district_id: '441000',
    },
    {
      id: '5885',
      name: 'Xã phượng nghi',
      district_id: '441000',
    },
    {
      id: '5886',
      name: 'Xã phú nhuận',
      district_id: '441000',
    },
    {
      id: '5887',
      name: 'Xã mậu lâm',
      district_id: '441000',
    },
    {
      id: '5888',
      name: 'Xã xuân thái',
      district_id: '441000',
    },
    {
      id: '5889',
      name: 'Xã thanh kỳ',
      district_id: '441000',
    },
    {
      id: '5890',
      name: 'Xã xuân thọ',
      district_id: '441000',
    },
    {
      id: '5891',
      name: 'Xã xuân phúc',
      district_id: '441000',
    },
    {
      id: '11893',
      name: 'Xã yên lạc',
      district_id: '441000',
    },
    {
      id: '5892',
      name: 'Xã cát vân',
      district_id: '440900',
    },
    {
      id: '5893',
      name: 'Xã bình lương',
      district_id: '440900',
    },
    {
      id: '5894',
      name: 'Xã thanh phong',
      district_id: '440900',
    },
    {
      id: '5895',
      name: 'Xã yên lễ',
      district_id: '440900',
    },
    {
      id: '5897',
      name: 'Xã xuân hòa',
      district_id: '440900',
    },
    {
      id: '5898',
      name: 'Xã thanh xuân',
      district_id: '440900',
    },
    {
      id: '5899',
      name: 'Xã thanh lâm',
      district_id: '440900',
    },
    {
      id: '5900',
      name: 'Xã cát tân',
      district_id: '440900',
    },
    {
      id: '5901',
      name: 'Thị trấn yên cát',
      district_id: '440900',
    },
    {
      id: '5902',
      name: 'Xã xuân bình',
      district_id: '440900',
    },
    {
      id: '5903',
      name: 'Xã thanh hòa',
      district_id: '440900',
    },
    {
      id: '5904',
      name: 'Xã thanh quân',
      district_id: '440900',
    },
    {
      id: '5905',
      name: 'Xã thanh sơn',
      district_id: '440900',
    },
    {
      id: '5906',
      name: 'Xã hóa quỳ',
      district_id: '440900',
    },
    {
      id: '5907',
      name: 'Xã xuân quỳ',
      district_id: '440900',
    },
    {
      id: '5908',
      name: 'Xã tân bình',
      district_id: '440900',
    },
    {
      id: '5909',
      name: 'Xã thượng ninh',
      district_id: '440900',
    },
    {
      id: '11939',
      name: 'Xã bãi trành',
      district_id: '440900',
    },
    {
      id: '10323',
      name: 'Xã mỹ phước tây',
      district_id: '861100',
    },
    {
      id: '10324',
      name: 'Xã nhị quý',
      district_id: '861100',
    },
    {
      id: '10330',
      name: 'Xã long khánh',
      district_id: '861100',
    },
    {
      id: '10332',
      name: 'Xã mỹ hạnh đông',
      district_id: '861100',
    },
    {
      id: '10333',
      name: 'Xã mỹ hạnh trung',
      district_id: '861100',
    },
    {
      id: '10339',
      name: 'Xã tân phú',
      district_id: '861100',
    },
    {
      id: '10341',
      name: 'Xã tân hội',
      district_id: '861100',
    },
    {
      id: '10344',
      name: 'Xã tân bình',
      district_id: '861100',
    },
    {
      id: '10345',
      name: 'Xã thanh hòa',
      district_id: '861100',
    },
    {
      id: '10347',
      name: 'Xã phú quý',
      district_id: '861100',
    },
    {
      id: '10348',
      name: 'Phường 2',
      district_id: '861100',
    },
    {
      id: '10349',
      name: 'Phường 1',
      district_id: '861100',
    },
    {
      id: '10350',
      name: 'Phường 4',
      district_id: '861100',
    },
    {
      id: '10351',
      name: 'Phường 3',
      district_id: '861100',
    },
    {
      id: '10352',
      name: 'Phường 5',
      district_id: '861100',
    },
    {
      id: '12514',
      name: 'Phường nhị mỹ',
      district_id: '861100',
    },
    {
      id: '10353',
      name: 'Xã hòa hưng',
      district_id: '860300',
    },
    {
      id: '10354',
      name: 'Xã mỹ hội',
      district_id: '860300',
    },
    {
      id: '10355',
      name: 'Xã mỹ đức đông',
      district_id: '860300',
    },
    {
      id: '10356',
      name: 'Xã mỹ lợi a',
      district_id: '860300',
    },
    {
      id: '10357',
      name: 'Xã mỹ lương',
      district_id: '860300',
    },
    {
      id: '10358',
      name: 'Xã mỹ tân',
      district_id: '860300',
    },
    {
      id: '10359',
      name: 'Xã mỹ trung',
      district_id: '860300',
    },
    {
      id: '10360',
      name: 'Xã mỹ đức tây',
      district_id: '860300',
    },
    {
      id: '10361',
      name: 'Xã hậu mỹ bắc a',
      district_id: '860300',
    },
    {
      id: '10362',
      name: 'Xã an thái đông',
      district_id: '860300',
    },
    {
      id: '10363',
      name: 'Xã đông hòa hiệp',
      district_id: '860300',
    },
    {
      id: '10364',
      name: 'Thị trấn cái bè',
      district_id: '860300',
    },
    {
      id: '10365',
      name: 'Xã an hữu',
      district_id: '860300',
    },
    {
      id: '10366',
      name: 'Xã hòa khánh',
      district_id: '860300',
    },
    {
      id: '10367',
      name: 'Xã tân thanh',
      district_id: '860300',
    },
    {
      id: '10368',
      name: 'Xã an thái trung',
      district_id: '860300',
    },
    {
      id: '10369',
      name: 'Xã hậu mỹ bắc b',
      district_id: '860300',
    },
    {
      id: '10370',
      name: 'Xã hậu mỹ trinh',
      district_id: '860300',
    },
    {
      id: '10371',
      name: 'Xã hậu thành',
      district_id: '860300',
    },
    {
      id: '10372',
      name: 'Xã an cư',
      district_id: '860300',
    },
    {
      id: '10373',
      name: 'Xã hậu mỹ phú',
      district_id: '860300',
    },
    {
      id: '10374',
      name: 'Xã thiện trí',
      district_id: '860300',
    },
    {
      id: '10375',
      name: 'Xã thiện trung',
      district_id: '860300',
    },
    {
      id: '10376',
      name: 'Xã tân hưng',
      district_id: '860300',
    },
    {
      id: '10377',
      name: 'Xã mỹ lợi b',
      district_id: '860300',
    },
    {
      id: '10222',
      name: 'Thi trấn chợ gạo',
      district_id: '860600',
    },
    {
      id: '10223',
      name: 'Xã bình phục nhứt',
      district_id: '860600',
    },
    {
      id: '10224',
      name: 'Xã thanh bình',
      district_id: '860600',
    },
    {
      id: '10225',
      name: 'Xã xuân đông',
      district_id: '860600',
    },
    {
      id: '10226',
      name: 'Xã đăng hưng phước',
      district_id: '860600',
    },
    {
      id: '10227',
      name: 'Xã an thạnh thủy',
      district_id: '860600',
    },
    {
      id: '10228',
      name: 'Xã bình phan',
      district_id: '860600',
    },
    {
      id: '10229',
      name: 'Xã hòa định',
      district_id: '860600',
    },
    {
      id: '10230',
      name: 'Xã bình ninh',
      district_id: '860600',
    },
    {
      id: '10231',
      name: 'Xã phú kiết',
      district_id: '860600',
    },
    {
      id: '10232',
      name: 'Xã quơn long',
      district_id: '860600',
    },
    {
      id: '10233',
      name: 'Xã song bình',
      district_id: '860600',
    },
    {
      id: '10234',
      name: 'Xã tân bình thạnh',
      district_id: '860600',
    },
    {
      id: '10235',
      name: 'Xã tân thuận bình',
      district_id: '860600',
    },
    {
      id: '10236',
      name: 'Xã trung hòa',
      district_id: '860600',
    },
    {
      id: '10237',
      name: 'Xã mỹ tịnh an',
      district_id: '860600',
    },
    {
      id: '10238',
      name: 'Xã long bình điền',
      district_id: '860600',
    },
    {
      id: '10239',
      name: 'Xã lương hòa lạc',
      district_id: '860600',
    },
    {
      id: '10240',
      name: 'Xã hòa tịnh',
      district_id: '860600',
    },
    {
      id: '10254',
      name: 'Phường 1',
      district_id: '860200',
    },
    {
      id: '10255',
      name: 'Phường 2',
      district_id: '860200',
    },
    {
      id: '10256',
      name: 'Phường 3',
      district_id: '860200',
    },
    {
      id: '10257',
      name: 'Phường 4',
      district_id: '860200',
    },
    {
      id: '10258',
      name: 'Phường 5',
      district_id: '860200',
    },
    {
      id: '10259',
      name: 'Xã long chánh',
      district_id: '860200',
    },
    {
      id: '10260',
      name: 'Xã long thuận',
      district_id: '860200',
    },
    {
      id: '10261',
      name: 'Xã long hòa',
      district_id: '860200',
    },
    {
      id: '10262',
      name: 'Xã long hưng',
      district_id: '860200',
    },
    {
      id: '10263',
      name: 'Xã tân trung',
      district_id: '860200',
    },
    {
      id: '10264',
      name: 'Xã bình đông',
      district_id: '860200',
    },
    {
      id: '10265',
      name: 'Xã bình xuân',
      district_id: '860200',
    },
    {
      id: '10208',
      name: 'Phường 2',
      district_id: '860100',
    },
    {
      id: '10209',
      name: 'Phường 3',
      district_id: '860100',
    },
    {
      id: '10210',
      name: 'Phường 4',
      district_id: '860100',
    },
    {
      id: '10211',
      name: 'Phường 5',
      district_id: '860100',
    },
    {
      id: '10212',
      name: 'Phường 6',
      district_id: '860100',
    },
    {
      id: '10213',
      name: 'Phường 7',
      district_id: '860100',
    },
    {
      id: '10214',
      name: 'Phường 8',
      district_id: '860100',
    },
    {
      id: '10215',
      name: 'Phường 9',
      district_id: '860100',
    },
    {
      id: '10216',
      name: 'Phường 10',
      district_id: '860100',
    },
    {
      id: '10217',
      name: 'Phường tân long',
      district_id: '860100',
    },
    {
      id: '10218',
      name: 'Xã tân mỹ chánh',
      district_id: '860100',
    },
    {
      id: '10219',
      name: 'Xã mỹ phong',
      district_id: '860100',
    },
    {
      id: '10220',
      name: 'Xã đạo thạnh',
      district_id: '860100',
    },
    {
      id: '10221',
      name: 'Xã trung an',
      district_id: '860100',
    },
    {
      id: '12340',
      name: 'Phường 1',
      district_id: '860100',
    },
    {
      id: '12341',
      name: 'Xã phước thạnh',
      district_id: '860100',
    },
    {
      id: '12342',
      name: 'Xã thới sơn',
      district_id: '860100',
    },
    {
      id: '10307',
      name: 'Thị trấn mỹ phước',
      district_id: '860900',
    },
    {
      id: '10308',
      name: 'Xã phú mỹ',
      district_id: '860900',
    },
    {
      id: '10309',
      name: 'Xã mỹ phước',
      district_id: '860900',
    },
    {
      id: '10310',
      name: 'Xã hưng thạnh',
      district_id: '860900',
    },
    {
      id: '10311',
      name: 'Xã phước lập',
      district_id: '860900',
    },
    {
      id: '10312',
      name: 'Xã tân hòa tây',
      district_id: '860900',
    },
    {
      id: '10313',
      name: 'Xã tân hòa thành',
      district_id: '860900',
    },
    {
      id: '10314',
      name: 'Xã tân lập 1',
      district_id: '860900',
    },
    {
      id: '10315',
      name: 'Xã tân lập 2',
      district_id: '860900',
    },
    {
      id: '10316',
      name: 'Xã thạnh hòa',
      district_id: '860900',
    },
    {
      id: '10317',
      name: 'Xã thạnh mỹ',
      district_id: '860900',
    },
    {
      id: '10318',
      name: 'Xã thạnh tân',
      district_id: '860900',
    },
    {
      id: '10319',
      name: 'Xã tân hòa đông',
      district_id: '860900',
    },
    {
      id: '10282',
      name: 'Thị trấn tân hiệp',
      district_id: '860500',
    },
    {
      id: '10283',
      name: 'Xã dưỡng điểm',
      district_id: '860500',
    },
    {
      id: '10284',
      name: 'Xã vĩnh kim',
      district_id: '860500',
    },
    {
      id: '10285',
      name: 'Xã kim sơn',
      district_id: '860500',
    },
    {
      id: '10286',
      name: 'Xã điềm hy',
      district_id: '860500',
    },
    {
      id: '10287',
      name: 'Xã nhị bình',
      district_id: '860500',
    },
    {
      id: '10288',
      name: 'Xã tam hiệp',
      district_id: '860500',
    },
    {
      id: '10289',
      name: 'Xã thân cửu nghĩa',
      district_id: '860500',
    },
    {
      id: '10290',
      name: 'Xã long định',
      district_id: '860500',
    },
    {
      id: '10292',
      name: 'Xã bàn long',
      district_id: '860500',
    },
    {
      id: '10293',
      name: 'Xã song thuận',
      district_id: '860500',
    },
    {
      id: '10294',
      name: 'Xã tân lý đông',
      district_id: '860500',
    },
    {
      id: '10295',
      name: 'Xã tân lý tây',
      district_id: '860500',
    },
    {
      id: '10296',
      name: 'Xã long an',
      district_id: '860500',
    },
    {
      id: '10297',
      name: 'Xã tân hương',
      district_id: '860500',
    },
    {
      id: '10298',
      name: 'Xã thạnh phú',
      district_id: '860500',
    },
    {
      id: '10299',
      name: 'Xã bình đức',
      district_id: '860500',
    },
    {
      id: '10300',
      name: 'Xã đông hòa',
      district_id: '860500',
    },
    {
      id: '10302',
      name: 'Xã bình trưng',
      district_id: '860500',
    },
    {
      id: '10303',
      name: 'Xã tân hội đông',
      district_id: '860500',
    },
    {
      id: '10304',
      name: 'Xã hữu đạo',
      district_id: '860500',
    },
    {
      id: '10305',
      name: 'Xã long hưng',
      district_id: '860500',
    },
    {
      id: '10306',
      name: 'Xã phú phong',
      district_id: '860500',
    },
    {
      id: '10266',
      name: 'Thị trấn tân hòa',
      district_id: '860800',
    },
    {
      id: '10267',
      name: 'Xã tân tây',
      district_id: '860800',
    },
    {
      id: '10270',
      name: 'Xã tân phước',
      district_id: '860800',
    },
    {
      id: '10271',
      name: 'Xã bình ân',
      district_id: '860800',
    },
    {
      id: '10272',
      name: 'Xã bình nghị',
      district_id: '860800',
    },
    {
      id: '10273',
      name: 'Xã kiểng phước',
      district_id: '860800',
    },
    {
      id: '10274',
      name: 'Xã gia thuận',
      district_id: '860800',
    },
    {
      id: '10275',
      name: 'Xã tân điền',
      district_id: '860800',
    },
    {
      id: '10276',
      name: 'Xã tân thành',
      district_id: '860800',
    },
    {
      id: '10277',
      name: 'Xã tân đông',
      district_id: '860800',
    },
    {
      id: '10278',
      name: 'Xã phước trung',
      district_id: '860800',
    },
    {
      id: '10281',
      name: 'Xã tăng hòa',
      district_id: '860800',
    },
    {
      id: '12339',
      name: 'Thị trấn vàm láng',
      district_id: '860800',
    },
    {
      id: '10241',
      name: 'Thị trấn vĩnh bình',
      district_id: '860700',
    },
    {
      id: '10242',
      name: 'Xã đồng sơn',
      district_id: '860700',
    },
    {
      id: '10243',
      name: 'Xã long bình',
      district_id: '860700',
    },
    {
      id: '10244',
      name: 'Xã thạnh nhựt',
      district_id: '860700',
    },
    {
      id: '10245',
      name: 'Xã bình phú',
      district_id: '860700',
    },
    {
      id: '10246',
      name: 'Xã bình tân',
      district_id: '860700',
    },
    {
      id: '10247',
      name: 'Xã đồng thạnh',
      district_id: '860700',
    },
    {
      id: '10248',
      name: 'Xã long vĩnh',
      district_id: '860700',
    },
    {
      id: '10249',
      name: 'Xã thành công',
      district_id: '860700',
    },
    {
      id: '10250',
      name: 'Xã thạnh trị',
      district_id: '860700',
    },
    {
      id: '10251',
      name: 'Xã vĩnh hựu',
      district_id: '860700',
    },
    {
      id: '10252',
      name: 'Xã yên luông',
      district_id: '860700',
    },
    {
      id: '10253',
      name: 'Xã bình nhì',
      district_id: '860700',
    },
    {
      id: '11309',
      name: 'Xã đức mỹ',
      district_id: '940200',
    },
    {
      id: '12365',
      name: 'Thị trấn càng long',
      district_id: '940200',
    },
    {
      id: '12366',
      name: 'Xã an trường',
      district_id: '940200',
    },
    {
      id: '12367',
      name: 'Xã an trường a',
      district_id: '940200',
    },
    {
      id: '12368',
      name: 'Xã bình phú',
      district_id: '940200',
    },
    {
      id: '12369',
      name: 'Xã đại phúc',
      district_id: '940200',
    },
    {
      id: '12370',
      name: 'Xã đại phước',
      district_id: '940200',
    },
    {
      id: '12371',
      name: 'Xã huyền hội',
      district_id: '940200',
    },
    {
      id: '12372',
      name: 'Xã mỹ cẩm',
      district_id: '940200',
    },
    {
      id: '12373',
      name: 'Xã nhị long',
      district_id: '940200',
    },
    {
      id: '12374',
      name: 'Xã nhị long phú',
      district_id: '940200',
    },
    {
      id: '12375',
      name: 'Xã phương thạnh',
      district_id: '940200',
    },
    {
      id: '12376',
      name: 'Xã tân an',
      district_id: '940200',
    },
    {
      id: '12377',
      name: 'Xã tân bình',
      district_id: '940200',
    },
    {
      id: '12354',
      name: 'Thị trấn cầu kè',
      district_id: '940300',
    },
    {
      id: '12355',
      name: 'Xã an phú tân',
      district_id: '940300',
    },
    {
      id: '12356',
      name: 'Xã châu điền',
      district_id: '940300',
    },
    {
      id: '12357',
      name: 'Xã hòa ân',
      district_id: '940300',
    },
    {
      id: '12358',
      name: 'Xã hoà tân',
      district_id: '940300',
    },
    {
      id: '12359',
      name: 'Xã ninh thới',
      district_id: '940300',
    },
    {
      id: '12360',
      name: 'Xã phong phú',
      district_id: '940300',
    },
    {
      id: '12361',
      name: 'Xã phong thạnh',
      district_id: '940300',
    },
    {
      id: '12362',
      name: 'Xã tam ngãi',
      district_id: '940300',
    },
    {
      id: '12363',
      name: 'Xã thạnh phú',
      district_id: '940300',
    },
    {
      id: '12364',
      name: 'Xã thông hòa',
      district_id: '940300',
    },
    {
      id: '11378',
      name: 'Xã vĩnh kim',
      district_id: '940700',
    },
    {
      id: '11379',
      name: 'Xã mỹ long nam',
      district_id: '940700',
    },
    {
      id: '11380',
      name: 'Xã mỹ long bắc',
      district_id: '940700',
    },
    {
      id: '11381',
      name: 'Xã hiệp mỹ đông',
      district_id: '940700',
    },
    {
      id: '12378',
      name: 'Thị trấn cầu ngang',
      district_id: '940700',
    },
    {
      id: '12379',
      name: 'Thị trấn mỹ long',
      district_id: '940700',
    },
    {
      id: '12380',
      name: 'Xã hiệp hòa',
      district_id: '940700',
    },
    {
      id: '12381',
      name: 'Xã hiệp mỹ tây',
      district_id: '940700',
    },
    {
      id: '12382',
      name: 'Xã kim hòa',
      district_id: '940700',
    },
    {
      id: '12383',
      name: 'Xã long sơn',
      district_id: '940700',
    },
    {
      id: '12384',
      name: 'Xã mỹ hòa',
      district_id: '940700',
    },
    {
      id: '12385',
      name: 'Xã nhị trường',
      district_id: '940700',
    },
    {
      id: '12386',
      name: 'Xã thạnh hòa sơn',
      district_id: '940700',
    },
    {
      id: '12387',
      name: 'Xã thuận hòa',
      district_id: '940700',
    },
    {
      id: '12388',
      name: 'Xã trường thọ',
      district_id: '940700',
    },
    {
      id: '11344',
      name: 'Xã lương hoà',
      district_id: '940500',
    },
    {
      id: '11345',
      name: 'Xã hưng mỹ',
      district_id: '940500',
    },
    {
      id: '11347',
      name: 'Xã lương hòa a',
      district_id: '940500',
    },
    {
      id: '12343',
      name: 'Thị trấn châu thành',
      district_id: '940500',
    },
    {
      id: '12344',
      name: 'Xã đa lộc',
      district_id: '940500',
    },
    {
      id: '12345',
      name: 'Xã hòa lợi',
      district_id: '940500',
    },
    {
      id: '12346',
      name: 'Xã hòa minh',
      district_id: '940500',
    },
    {
      id: '12347',
      name: 'Xã hòa thuận',
      district_id: '940500',
    },
    {
      id: '12348',
      name: 'Xã long hòa',
      district_id: '940500',
    },
    {
      id: '12349',
      name: 'Xã mỹ chánh',
      district_id: '940500',
    },
    {
      id: '12350',
      name: 'Xã nguyệt hóa',
      district_id: '940500',
    },
    {
      id: '12351',
      name: 'Xã phước hảo',
      district_id: '940500',
    },
    {
      id: '12352',
      name: 'Xã song lộc',
      district_id: '940500',
    },
    {
      id: '12353',
      name: 'Xã thanh mỹ',
      district_id: '940500',
    },
    {
      id: '12515',
      name: 'Phường 1',
      district_id: '940900',
    },
    {
      id: '12516',
      name: 'Phường 2',
      district_id: '940900',
    },
    {
      id: '12517',
      name: 'Xã dân thành',
      district_id: '940900',
    },
    {
      id: '12518',
      name: 'Xã hiệp thạnh',
      district_id: '940900',
    },
    {
      id: '12519',
      name: 'Xã long hữu',
      district_id: '940900',
    },
    {
      id: '12520',
      name: 'Xã long toàn',
      district_id: '940900',
    },
    {
      id: '12521',
      name: 'Xã trường long hòa',
      district_id: '940900',
    },
    {
      id: '12389',
      name: 'Thị trấn cầu quan',
      district_id: '940400',
    },
    {
      id: '12390',
      name: 'Thị trấn tiểu cần',
      district_id: '940400',
    },
    {
      id: '12391',
      name: 'Xã hiếu trung',
      district_id: '940400',
    },
    {
      id: '12392',
      name: 'Xã hiếu tử',
      district_id: '940400',
    },
    {
      id: '12393',
      name: 'Xã hùng hòa',
      district_id: '940400',
    },
    {
      id: '12394',
      name: 'Xã long thới',
      district_id: '940400',
    },
    {
      id: '12395',
      name: 'Xã ngãi hùng',
      district_id: '940400',
    },
    {
      id: '12396',
      name: 'Xã phú cần',
      district_id: '940400',
    },
    {
      id: '12397',
      name: 'Xã tân hòa',
      district_id: '940400',
    },
    {
      id: '12398',
      name: 'Xã tân hùng',
      district_id: '940400',
    },
    {
      id: '12399',
      name: 'Xã tập ngãi',
      district_id: '940400',
    },
    {
      id: '11348',
      name: 'Xã Tập Sơn',
      district_id: '940600',
    },
    {
      id: '11349',
      name: 'Xã Thanh Sơn',
      district_id: '940600',
    },
    {
      id: '11352',
      name: 'Xã Ngãi Xuyên',
      district_id: '940600',
    },
    {
      id: '11353',
      name: 'Xã Lưu Nghiệp Anh',
      district_id: '940600',
    },
    {
      id: '11354',
      name: 'Xã Phước Hưng',
      district_id: '940600',
    },
    {
      id: '11355',
      name: 'Xã Hàm Giang',
      district_id: '940600',
    },
    {
      id: '11356',
      name: 'Xã Hàm Tân',
      district_id: '940600',
    },
    {
      id: '11357',
      name: 'Thị Trấn Trà Cú',
      district_id: '940600',
    },
    {
      id: '11358',
      name: 'Xã An Quảng Hữu',
      district_id: '940600',
    },
    {
      id: '11359',
      name: 'Xã Tân Hiệp',
      district_id: '940600',
    },
    {
      id: '11360',
      name: 'Xã Ngọc Biên',
      district_id: '940600',
    },
    {
      id: '11361',
      name: 'Xã Long Hiệp',
      district_id: '940600',
    },
    {
      id: '11362',
      name: 'Xã Kim Sơn',
      district_id: '940600',
    },
    {
      id: '11363',
      name: 'Xã Tân Sơn',
      district_id: '940600',
    },
    {
      id: '11364',
      name: 'Xã đại an',
      district_id: '940600',
    },
    {
      id: '11365',
      name: 'Xã định an',
      district_id: '940600',
    },
    {
      id: '12400',
      name: 'Thị trấn định an',
      district_id: '940600',
    },
    {
      id: '11285',
      name: 'Phường 1',
      district_id: '940100',
    },
    {
      id: '11286',
      name: 'Phường 2',
      district_id: '940100',
    },
    {
      id: '11287',
      name: 'Phường 3',
      district_id: '940100',
    },
    {
      id: '11288',
      name: 'Phường 4',
      district_id: '940100',
    },
    {
      id: '11289',
      name: 'Phường 5',
      district_id: '940100',
    },
    {
      id: '11290',
      name: 'Phường 6',
      district_id: '940100',
    },
    {
      id: '11291',
      name: 'Phường 7',
      district_id: '940100',
    },
    {
      id: '11292',
      name: 'Phường 8',
      district_id: '940100',
    },
    {
      id: '11293',
      name: 'Phường 9',
      district_id: '940100',
    },
    {
      id: '11294',
      name: 'Xã long đức',
      district_id: '940100',
    },
    {
      id: '3128',
      name: 'Xã bình nhân',
      district_id: '300400',
    },
    {
      id: '3129',
      name: 'Xã bình phú',
      district_id: '300400',
    },
    {
      id: '3130',
      name: 'Xã hà lang',
      district_id: '300400',
    },
    {
      id: '3131',
      name: 'Xã hòa an',
      district_id: '300400',
    },
    {
      id: '3132',
      name: 'Xã hòa phú',
      district_id: '300400',
    },
    {
      id: '3134',
      name: 'Xã hùng mỹ',
      district_id: '300400',
    },
    {
      id: '3135',
      name: 'Xã kiên đài',
      district_id: '300400',
    },
    {
      id: '3136',
      name: 'Xã kim bình',
      district_id: '300400',
    },
    {
      id: '3137',
      name: 'Xã linh phú',
      district_id: '300400',
    },
    {
      id: '3138',
      name: 'Xã minh quang',
      district_id: '300400',
    },
    {
      id: '3139',
      name: 'Xã ngọc hội',
      district_id: '300400',
    },
    {
      id: '3140',
      name: 'Xã nhân lý',
      district_id: '300400',
    },
    {
      id: '3141',
      name: 'Xã phú bình',
      district_id: '300400',
    },
    {
      id: '3142',
      name: 'Xã phúc sơn',
      district_id: '300400',
    },
    {
      id: '3143',
      name: 'Xã phúc thịnh',
      district_id: '300400',
    },
    {
      id: '3144',
      name: 'Xã tân an',
      district_id: '300400',
    },
    {
      id: '3145',
      name: 'Xã tân mỹ',
      district_id: '300400',
    },
    {
      id: '3146',
      name: 'Xã tân thịnh',
      district_id: '300400',
    },
    {
      id: '3148',
      name: 'Xã tri phú',
      district_id: '300400',
    },
    {
      id: '3149',
      name: 'Xã trung hà',
      district_id: '300400',
    },
    {
      id: '3150',
      name: 'Xã trung hòa',
      district_id: '300400',
    },
    {
      id: '3151',
      name: 'Thị trấn vĩnh lộc',
      district_id: '300400',
    },
    {
      id: '3152',
      name: 'Xã vinh quang',
      district_id: '300400',
    },
    {
      id: '3153',
      name: 'Xã xuân quang',
      district_id: '300400',
    },
    {
      id: '3154',
      name: 'Xã yên lập',
      district_id: '300400',
    },
    {
      id: '3155',
      name: 'Xã yên nguyên',
      district_id: '300400',
    },
    {
      id: '3178',
      name: 'Xã thành long',
      district_id: '300500',
    },
    {
      id: '3180',
      name: 'Thị trấn tân yên',
      district_id: '300500',
    },
    {
      id: '3183',
      name: 'Xã yên lâm',
      district_id: '300500',
    },
    {
      id: '3184',
      name: 'Xã yên phú',
      district_id: '300500',
    },
    {
      id: '3185',
      name: 'Xã yên thuận',
      district_id: '300500',
    },
    {
      id: '3186',
      name: 'Xã bạch xa',
      district_id: '300500',
    },
    {
      id: '3187',
      name: 'Xã bằng cốc',
      district_id: '300500',
    },
    {
      id: '3189',
      name: 'Xã hùng đức',
      district_id: '300500',
    },
    {
      id: '3190',
      name: 'Xã minh dân',
      district_id: '300500',
    },
    {
      id: '3191',
      name: 'Xã minh hương',
      district_id: '300500',
    },
    {
      id: '3192',
      name: 'Xã minh khương',
      district_id: '300500',
    },
    {
      id: '3193',
      name: 'Xã nhân mục',
      district_id: '300500',
    },
    {
      id: '3194',
      name: 'Xã phù lưu',
      district_id: '300500',
    },
    {
      id: '3195',
      name: 'Xã tân thành',
      district_id: '300500',
    },
    {
      id: '3196',
      name: 'Xã thái hòa',
      district_id: '300500',
    },
    {
      id: '3197',
      name: 'Xã thái sơn',
      district_id: '300500',
    },
    {
      id: '3198',
      name: 'Xã đức ninh',
      district_id: '300500',
    },
    {
      id: '3199',
      name: 'Xã bình xa',
      district_id: '300500',
    },
    {
      id: '3156',
      name: 'Xã côn lôn',
      district_id: '300300',
    },
    {
      id: '3157',
      name: 'Xã đà vị',
      district_id: '300300',
    },
    {
      id: '3158',
      name: 'Xã hồng thái',
      district_id: '300300',
    },
    {
      id: '3159',
      name: 'Xã khâu tinh',
      district_id: '300300',
    },
    {
      id: '3162',
      name: 'Xã năng khả',
      district_id: '300300',
    },
    {
      id: '3164',
      name: 'Xã sinh long',
      district_id: '300300',
    },
    {
      id: '3165',
      name: 'Xã sơn phú',
      district_id: '300300',
    },
    {
      id: '3166',
      name: 'Xã thanh tương',
      district_id: '300300',
    },
    {
      id: '3167',
      name: 'Xã thượng giáp',
      district_id: '300300',
    },
    {
      id: '3169',
      name: 'Xã thượng nông',
      district_id: '300300',
    },
    {
      id: '3172',
      name: 'Thị trấn nà hang',
      district_id: '300300',
    },
    {
      id: '3177',
      name: 'Xã yên hoa',
      district_id: '300300',
    },
    {
      id: '3090',
      name: 'Xã đồng quý',
      district_id: '300700',
    },
    {
      id: '3091',
      name: 'Xã thanh phát',
      district_id: '300700',
    },
    {
      id: '3092',
      name: 'Xã kháng nhật',
      district_id: '300700',
    },
    {
      id: '3094',
      name: 'Xã sơn nam',
      district_id: '300700',
    },
    {
      id: '3095',
      name: 'Xã đông thọ',
      district_id: '300700',
    },
    {
      id: '3096',
      name: 'Xã văn phú',
      district_id: '300700',
    },
    {
      id: '3097',
      name: 'Xã chi thiết',
      district_id: '300700',
    },
    {
      id: '3098',
      name: 'Xã tam đa',
      district_id: '300700',
    },
    {
      id: '3100',
      name: 'Thị trấn sơn dương',
      district_id: '300700',
    },
    {
      id: '3101',
      name: 'Xã phúc ứng',
      district_id: '300700',
    },
    {
      id: '3102',
      name: 'Xã thiện kế',
      district_id: '300700',
    },
    {
      id: '3103',
      name: 'Xã lâm xuyên',
      district_id: '300700',
    },
    {
      id: '3104',
      name: 'Xã trung yên',
      district_id: '300700',
    },
    {
      id: '3105',
      name: 'Xã lương thiện',
      district_id: '300700',
    },
    {
      id: '3106',
      name: 'Xã hợp thành',
      district_id: '300700',
    },
    {
      id: '3107',
      name: 'Xã tân trào',
      district_id: '300700',
    },
    {
      id: '3108',
      name: 'Xã minh thanh',
      district_id: '300700',
    },
    {
      id: '3109',
      name: 'Xã hào phú',
      district_id: '300700',
    },
    {
      id: '3110',
      name: 'Xã hồng lạc',
      district_id: '300700',
    },
    {
      id: '3111',
      name: 'Xã hợp hòa',
      district_id: '300700',
    },
    {
      id: '3113',
      name: 'Xã tú thịnh',
      district_id: '300700',
    },
    {
      id: '3114',
      name: 'Xã đại phú',
      district_id: '300700',
    },
    {
      id: '3115',
      name: 'Xã tuân lộ',
      district_id: '300700',
    },
    {
      id: '3116',
      name: 'Xã ninh lai',
      district_id: '300700',
    },
    {
      id: '3117',
      name: 'Xã sầm dương',
      district_id: '300700',
    },
    {
      id: '3118',
      name: 'Xã đông lợi',
      district_id: '300700',
    },
    {
      id: '3119',
      name: 'Xã vân sơn',
      district_id: '300700',
    },
    {
      id: '3120',
      name: 'Xã quyết thắng',
      district_id: '300700',
    },
    {
      id: '3121',
      name: 'Xã vĩnh lợi',
      district_id: '300700',
    },
    {
      id: '3123',
      name: 'Xã phú lương',
      district_id: '300700',
    },
    {
      id: '3124',
      name: 'Xã thượng ấm',
      district_id: '300700',
    },
    {
      id: '3125',
      name: 'Xã cấp tiến',
      district_id: '300700',
    },
    {
      id: '3126',
      name: 'Xã bình yên',
      district_id: '300700',
    },
    {
      id: '3039',
      name: 'Phường tân quang',
      district_id: '300100',
    },
    {
      id: '3040',
      name: 'Phường minh xuân',
      district_id: '300100',
    },
    {
      id: '3041',
      name: 'Phường phan thiết',
      district_id: '300100',
    },
    {
      id: '3042',
      name: 'Phường tân hà',
      district_id: '300100',
    },
    {
      id: '3043',
      name: 'Phường ỷ la',
      district_id: '300100',
    },
    {
      id: '3044',
      name: 'Phường hưng thành',
      district_id: '300100',
    },
    {
      id: '3045',
      name: 'Phường nông tiến',
      district_id: '300100',
    },
    {
      id: '3046',
      name: 'Xã an tường',
      district_id: '300100',
    },
    {
      id: '3047',
      name: 'Xã tràng đà',
      district_id: '300100',
    },
    {
      id: '3048',
      name: 'Xã lưỡng vượng',
      district_id: '300100',
    },
    {
      id: '3049',
      name: 'Xã an khang',
      district_id: '300100',
    },
    {
      id: '3050',
      name: 'Xã đội cấn',
      district_id: '300100',
    },
    {
      id: '3051',
      name: 'Xã thái long',
      district_id: '300100',
    },
    {
      id: '12681',
      name: 'Phường Mỹ Lâm',
      district_id: '300100',
    },
    {
      id: '3053',
      name: 'Xã chân sơn',
      district_id: '300600',
    },
    {
      id: '3054',
      name: 'Xã chiêu yên',
      district_id: '300600',
    },
    {
      id: '3055',
      name: 'Xã công đa',
      district_id: '300600',
    },
    {
      id: '3056',
      name: 'Xã đạo viện',
      district_id: '300600',
    },
    {
      id: '3057',
      name: 'Xã đội bình',
      district_id: '300600',
    },
    {
      id: '3059',
      name: 'Xã hoàng khai',
      district_id: '300600',
    },
    {
      id: '3060',
      name: 'Xã hùng lợi',
      district_id: '300600',
    },
    {
      id: '3061',
      name: 'Xã kiến thiết',
      district_id: '300600',
    },
    {
      id: '3062',
      name: 'Xã kim phú',
      district_id: '300600',
    },
    {
      id: '3063',
      name: 'Xã tân tiến',
      district_id: '300600',
    },
    {
      id: '3064',
      name: 'Xã kim quan',
      district_id: '300600',
    },
    {
      id: '3065',
      name: 'Xã lăng quán',
      district_id: '300600',
    },
    {
      id: '3066',
      name: 'Xã lực hành',
      district_id: '300600',
    },
    {
      id: '3067',
      name: 'Xã mỹ bằng',
      district_id: '300600',
    },
    {
      id: '3068',
      name: 'Xã nhữ hán',
      district_id: '300600',
    },
    {
      id: '3069',
      name: 'Xã nhữ khê',
      district_id: '300600',
    },
    {
      id: '3070',
      name: 'Xã phú lâm',
      district_id: '300600',
    },
    {
      id: '3071',
      name: 'Xã phú thịnh',
      district_id: '300600',
    },
    {
      id: '3072',
      name: 'Xã phúc ninh',
      district_id: '300600',
    },
    {
      id: '3074',
      name: 'Thị trấn tân bình',
      district_id: '300600',
    },
    {
      id: '3075',
      name: 'Xã tân long',
      district_id: '300600',
    },
    {
      id: '3076',
      name: 'Xã thái bình',
      district_id: '300600',
    },
    {
      id: '3078',
      name: 'Xã thắng quân',
      district_id: '300600',
    },
    {
      id: '3080',
      name: 'Xã tiến bộ',
      district_id: '300600',
    },
    {
      id: '3081',
      name: 'Xã trung minh',
      district_id: '300600',
    },
    {
      id: '3082',
      name: 'Xã trung môn',
      district_id: '300600',
    },
    {
      id: '3084',
      name: 'Xã trung sơn',
      district_id: '300600',
    },
    {
      id: '3085',
      name: 'Xã trung trực',
      district_id: '300600',
    },
    {
      id: '3087',
      name: 'Xã tứ quận',
      district_id: '300600',
    },
    {
      id: '3089',
      name: 'Xã xuân vân',
      district_id: '300600',
    },
    {
      id: '11785',
      name: 'Xã quí quân',
      district_id: '300600',
    },
    {
      id: '3200',
      name: 'Xã lăng can',
      district_id: '300200',
    },
    {
      id: '3201',
      name: 'Xã xuân lập',
      district_id: '300200',
    },
    {
      id: '3202',
      name: 'Xã thượng lâm',
      district_id: '300200',
    },
    {
      id: '3203',
      name: 'Xã thổ bình',
      district_id: '300200',
    },
    {
      id: '3204',
      name: 'Xã phúc yên',
      district_id: '300200',
    },
    {
      id: '3205',
      name: 'Xã khuôn hà',
      district_id: '300200',
    },
    {
      id: '3206',
      name: 'Xã hồng quang',
      district_id: '300200',
    },
    {
      id: '3207',
      name: 'Xã bình an',
      district_id: '300200',
    },
    {
      id: '10736',
      name: 'Xã đông thành',
      district_id: '890400',
    },
    {
      id: '10737',
      name: 'Xã đông bình',
      district_id: '890400',
    },
    {
      id: '10738',
      name: 'Xã thuận an',
      district_id: '890400',
    },
    {
      id: '12257',
      name: 'Phường cái vồn',
      district_id: '890400',
    },
    {
      id: '12258',
      name: 'Xã mỹ hòa',
      district_id: '890400',
    },
    {
      id: '12259',
      name: 'Phường đông thuận',
      district_id: '890400',
    },
    {
      id: '12260',
      name: 'Phường thành phước',
      district_id: '890400',
    },
    {
      id: '10792',
      name: 'Xã thành lợi',
      district_id: '890800',
    },
    {
      id: '10793',
      name: 'Xã tân lược',
      district_id: '890800',
    },
    {
      id: '10794',
      name: 'Xã tân hưng',
      district_id: '890800',
    },
    {
      id: '12289',
      name: 'Xã mỹ thuận',
      district_id: '890800',
    },
    {
      id: '12290',
      name: 'Xã nguyễn văn thảnh',
      district_id: '890800',
    },
    {
      id: '12291',
      name: 'Xã tân an thạnh',
      district_id: '890800',
    },
    {
      id: '12292',
      name: 'Xã tân bình',
      district_id: '890800',
    },
    {
      id: '12293',
      name: 'Xã tân quới',
      district_id: '890800',
    },
    {
      id: '12294',
      name: 'Xã tân thành',
      district_id: '890800',
    },
    {
      id: '12295',
      name: 'Xã thành đông',
      district_id: '890800',
    },
    {
      id: '12296',
      name: 'Xã thành trung',
      district_id: '890800',
    },
    {
      id: '10702',
      name: 'Xã hòa phú',
      district_id: '890200',
    },
    {
      id: '12275',
      name: 'Thị trấn long hồ',
      district_id: '890200',
    },
    {
      id: '12276',
      name: 'Xã an bình',
      district_id: '890200',
    },
    {
      id: '12277',
      name: 'Xã bình hòa phước',
      district_id: '890200',
    },
    {
      id: '12278',
      name: 'Xã đồng phú',
      district_id: '890200',
    },
    {
      id: '12279',
      name: 'Xã hòa ninh',
      district_id: '890200',
    },
    {
      id: '12280',
      name: 'Xã lộc hòa',
      district_id: '890200',
    },
    {
      id: '12281',
      name: 'Xã long an',
      district_id: '890200',
    },
    {
      id: '12282',
      name: 'Xã long phước',
      district_id: '890200',
    },
    {
      id: '12283',
      name: 'Xã phú đức',
      district_id: '890200',
    },
    {
      id: '12284',
      name: 'Xã phú quới',
      district_id: '890200',
    },
    {
      id: '12285',
      name: 'Xã phước hậu',
      district_id: '890200',
    },
    {
      id: '12286',
      name: 'Xã tân hạnh',
      district_id: '890200',
    },
    {
      id: '12287',
      name: 'Xã thanh đức',
      district_id: '890200',
    },
    {
      id: '12288',
      name: 'Xã thạnh quới',
      district_id: '890200',
    },
    {
      id: '10788',
      name: 'Xã tân long',
      district_id: '890300',
    },
    {
      id: '10789',
      name: 'Xã long mỹ',
      district_id: '890300',
    },
    {
      id: '10790',
      name: 'Xã hoà tịnh',
      district_id: '890300',
    },
    {
      id: '12228',
      name: 'Thị trấn cái nhum',
      district_id: '890300',
    },
    {
      id: '12229',
      name: 'Xã an phước',
      district_id: '890300',
    },
    {
      id: '12230',
      name: 'Xã bình phước',
      district_id: '890300',
    },
    {
      id: '12231',
      name: 'Xã chánh an',
      district_id: '890300',
    },
    {
      id: '12232',
      name: 'Xã chánh hội',
      district_id: '890300',
    },
    {
      id: '12233',
      name: 'Xã mỹ an',
      district_id: '890300',
    },
    {
      id: '12234',
      name: 'Xã mỹ phước',
      district_id: '890300',
    },
    {
      id: '12235',
      name: 'Xã nhơn phú',
      district_id: '890300',
    },
    {
      id: '12236',
      name: 'Xã tân an hội',
      district_id: '890300',
    },
    {
      id: '12237',
      name: 'Xã tân long hội',
      district_id: '890300',
    },
    {
      id: '10722',
      name: 'Xã bình ninh',
      district_id: '890500',
    },
    {
      id: '10731',
      name: 'Xã tân phú',
      district_id: '890500',
    },
    {
      id: '10732',
      name: 'Xã hậu lộc',
      district_id: '890500',
    },
    {
      id: '12261',
      name: 'Thị trấn tam bình',
      district_id: '890500',
    },
    {
      id: '12262',
      name: 'Xã hòa hiệp',
      district_id: '890500',
    },
    {
      id: '12263',
      name: 'Xã hoà lộc',
      district_id: '890500',
    },
    {
      id: '12264',
      name: 'Xã hòa thạnh',
      district_id: '890500',
    },
    {
      id: '12265',
      name: 'Xã loan mỹ',
      district_id: '890500',
    },
    {
      id: '12266',
      name: 'Xã long phú',
      district_id: '890500',
    },
    {
      id: '12267',
      name: 'Xã mỹ lộc',
      district_id: '890500',
    },
    {
      id: '12268',
      name: 'Xã mỹ thạnh trung',
      district_id: '890500',
    },
    {
      id: '12269',
      name: 'Xã ngãi tứ',
      district_id: '890500',
    },
    {
      id: '12270',
      name: 'Xã phú lộc',
      district_id: '890500',
    },
    {
      id: '12271',
      name: 'Xã phú thịnh',
      district_id: '890500',
    },
    {
      id: '12272',
      name: 'Xã song phú',
      district_id: '890500',
    },
    {
      id: '12273',
      name: 'Xã tân lộc',
      district_id: '890500',
    },
    {
      id: '12274',
      name: 'Xã tường lộc',
      district_id: '890500',
    },
    {
      id: '10742',
      name: 'Xã xuân hiệp',
      district_id: '890600',
    },
    {
      id: '10755',
      name: 'Xã lục sỹ thành',
      district_id: '890600',
    },
    {
      id: '12297',
      name: 'Thị trấn trà ôn',
      district_id: '890600',
    },
    {
      id: '12298',
      name: 'Xã hòa bình',
      district_id: '890600',
    },
    {
      id: '12299',
      name: 'Xã hựu thành',
      district_id: '890600',
    },
    {
      id: '12300',
      name: 'Xã nhơn bình',
      district_id: '890600',
    },
    {
      id: '12301',
      name: 'Xã phú thành',
      district_id: '890600',
    },
    {
      id: '12302',
      name: 'Xã tân mỹ',
      district_id: '890600',
    },
    {
      id: '12303',
      name: 'Xã thiện mỹ',
      district_id: '890600',
    },
    {
      id: '12304',
      name: 'Xã thới hòa',
      district_id: '890600',
    },
    {
      id: '12305',
      name: 'Xã thuận thới',
      district_id: '890600',
    },
    {
      id: '12306',
      name: 'Xã tích thiện',
      district_id: '890600',
    },
    {
      id: '12307',
      name: 'Xã trà côn',
      district_id: '890600',
    },
    {
      id: '12308',
      name: 'Xã vĩnh xuân',
      district_id: '890600',
    },
    {
      id: '10690',
      name: 'Phường 1',
      district_id: '890100',
    },
    {
      id: '10691',
      name: 'Phường 2',
      district_id: '890100',
    },
    {
      id: '10692',
      name: 'Phường 3',
      district_id: '890100',
    },
    {
      id: '10693',
      name: 'Phường 4',
      district_id: '890100',
    },
    {
      id: '10694',
      name: 'Phường 5',
      district_id: '890100',
    },
    {
      id: '10695',
      name: 'Phường 8',
      district_id: '890100',
    },
    {
      id: '10696',
      name: 'Phường 9',
      district_id: '890100',
    },
    {
      id: '10697',
      name: 'Xã trường an',
      district_id: '890100',
    },
    {
      id: '10698',
      name: 'Xã tân ngãi',
      district_id: '890100',
    },
    {
      id: '10699',
      name: 'Xã tân hòa',
      district_id: '890100',
    },
    {
      id: '10700',
      name: 'Phường Tân Hội',
      district_id: '890100',
    },
    {
      id: '10762',
      name: 'Xã qưới an',
      district_id: '890700',
    },
    {
      id: '12238',
      name: 'Thị trấn vũng liêm',
      district_id: '890700',
    },
    {
      id: '12239',
      name: 'Xã hiếu nghĩa',
      district_id: '890700',
    },
    {
      id: '12240',
      name: 'Xã hiếu nhơn',
      district_id: '890700',
    },
    {
      id: '12241',
      name: 'Xã hiếu phụng',
      district_id: '890700',
    },
    {
      id: '12242',
      name: 'Xã hiếu thành',
      district_id: '890700',
    },
    {
      id: '12243',
      name: 'Xã hiếu thuận',
      district_id: '890700',
    },
    {
      id: '12244',
      name: 'Xã quới thiện',
      district_id: '890700',
    },
    {
      id: '12245',
      name: 'Xã tân an luông',
      district_id: '890700',
    },
    {
      id: '12246',
      name: 'Xã tân quới trung',
      district_id: '890700',
    },
    {
      id: '12247',
      name: 'Xã thanh bình',
      district_id: '890700',
    },
    {
      id: '12248',
      name: 'Xã trung an',
      district_id: '890700',
    },
    {
      id: '12249',
      name: 'Xã trung chánh',
      district_id: '890700',
    },
    {
      id: '12250',
      name: 'Xã trung hiệp',
      district_id: '890700',
    },
    {
      id: '12251',
      name: 'Xã trung hiếu',
      district_id: '890700',
    },
    {
      id: '12252',
      name: 'Xã trung ngãi',
      district_id: '890700',
    },
    {
      id: '12253',
      name: 'Xã trung nghĩa',
      district_id: '890700',
    },
    {
      id: '12254',
      name: 'Xã trung thành',
      district_id: '890700',
    },
    {
      id: '12255',
      name: 'Xã trung thành đông',
      district_id: '890700',
    },
    {
      id: '12256',
      name: 'Xã trung thành tây',
      district_id: '890700',
    },
    {
      id: '2619',
      name: 'Thị trấn hương canh',
      district_id: '280600',
    },
    {
      id: '2620',
      name: 'Thị trấn thanh lãng',
      district_id: '280600',
    },
    {
      id: '2621',
      name: 'Thị trấn gia khánh',
      district_id: '280600',
    },
    {
      id: '2622',
      name: 'Thị Trấn Bá Hiến',
      district_id: '280600',
    },
    {
      id: '2623',
      name: 'Xã đạo đức',
      district_id: '280600',
    },
    {
      id: '2624',
      name: 'Xã hương sơn',
      district_id: '280600',
    },
    {
      id: '2625',
      name: 'Xã phú xuân',
      district_id: '280600',
    },
    {
      id: '2626',
      name: 'Xã quất lưu',
      district_id: '280600',
    },
    {
      id: '2627',
      name: 'Xã sơn lôi',
      district_id: '280600',
    },
    {
      id: '2628',
      name: 'Xã tam hợp',
      district_id: '280600',
    },
    {
      id: '2629',
      name: 'Xã tân phong',
      district_id: '280600',
    },
    {
      id: '2630',
      name: 'Xã thiện kế',
      district_id: '280600',
    },
    {
      id: '2631',
      name: 'Xã trung mỹ',
      district_id: '280600',
    },
    {
      id: '2632',
      name: 'Xã đạo đức',
      district_id: '280600',
    },
    {
      id: '2646',
      name: 'Thị trấn lập thạch',
      district_id: '280300',
    },
    {
      id: '2647',
      name: 'Thị trấn hoa sơn',
      district_id: '280300',
    },
    {
      id: '2648',
      name: 'Xã quang sơn',
      district_id: '280300',
    },
    {
      id: '2649',
      name: 'Xã ngọc mỹ',
      district_id: '280300',
    },
    {
      id: '2650',
      name: 'Xã hợp lý',
      district_id: '280300',
    },
    {
      id: '2651',
      name: 'Xã bắc bình',
      district_id: '280300',
    },
    {
      id: '2652',
      name: 'Xã thái hòa',
      district_id: '280300',
    },
    {
      id: '2653',
      name: 'Xã liễn sơn',
      district_id: '280300',
    },
    {
      id: '2654',
      name: 'Xã xuân hòa',
      district_id: '280300',
    },
    {
      id: '2655',
      name: 'Xã vân trục',
      district_id: '280300',
    },
    {
      id: '2656',
      name: 'Xã liên hòa',
      district_id: '280300',
    },
    {
      id: '2657',
      name: 'Xã tử du',
      district_id: '280300',
    },
    {
      id: '2658',
      name: 'Xã bàn giản',
      district_id: '280300',
    },
    {
      id: '2659',
      name: 'Xã xuân lôi',
      district_id: '280300',
    },
    {
      id: '2660',
      name: 'Xã đồng ích',
      district_id: '280300',
    },
    {
      id: '2661',
      name: 'Xã tiên lữ',
      district_id: '280300',
    },
    {
      id: '2662',
      name: 'Xã văn quán',
      district_id: '280300',
    },
    {
      id: '2663',
      name: 'Xã đình chu',
      district_id: '280300',
    },
    {
      id: '2664',
      name: 'Xã triệu đề',
      district_id: '280300',
    },
    {
      id: '2665',
      name: 'Xã sơn đông',
      district_id: '280300',
    },
    {
      id: '2712',
      name: 'Phường hùng vương',
      district_id: '280800',
    },
    {
      id: '2713',
      name: 'Phường trưng trắc',
      district_id: '280800',
    },
    {
      id: '2714',
      name: 'Phường trưng nhị',
      district_id: '280800',
    },
    {
      id: '2715',
      name: 'Phường phúc thắng',
      district_id: '280800',
    },
    {
      id: '2716',
      name: 'Phường xuân hoà',
      district_id: '280800',
    },
    {
      id: '2717',
      name: 'Phường đồng xuân',
      district_id: '280800',
    },
    {
      id: '2718',
      name: 'Xã cao minh',
      district_id: '280800',
    },
    {
      id: '2719',
      name: 'Xã nam viêm',
      district_id: '280800',
    },
    {
      id: '2720',
      name: 'Xã tiền châu',
      district_id: '280800',
    },
    {
      id: '2721',
      name: 'Xã ngọc thanh',
      district_id: '280800',
    },
    {
      id: '2666',
      name: 'Xã cao đại',
      district_id: '280400',
    },
    {
      id: '2667',
      name: 'Xã chấn hưng',
      district_id: '280400',
    },
    {
      id: '2668',
      name: 'Xã việt xuân',
      district_id: '280400',
    },
    {
      id: '2669',
      name: 'Xã đại đồng',
      district_id: '280400',
    },
    {
      id: '2670',
      name: 'Xã vĩnh ninh',
      district_id: '280400',
    },
    {
      id: '2671',
      name: 'Xã kim xá',
      district_id: '280400',
    },
    {
      id: '2672',
      name: 'Xã lũng hòa',
      district_id: '280400',
    },
    {
      id: '2673',
      name: 'Xã lý nhân',
      district_id: '280400',
    },
    {
      id: '2674',
      name: 'Xã nghĩa hưng',
      district_id: '280400',
    },
    {
      id: '2675',
      name: 'Xã ngũ kiên',
      district_id: '280400',
    },
    {
      id: '2676',
      name: 'Xã phú đa',
      district_id: '280400',
    },
    {
      id: '2677',
      name: 'Xã phú thịnh',
      district_id: '280400',
    },
    {
      id: '2678',
      name: 'Xã tam phúc',
      district_id: '280400',
    },
    {
      id: '2679',
      name: 'Xã tân cương',
      district_id: '280400',
    },
    {
      id: '2680',
      name: 'Xã tân tiến',
      district_id: '280400',
    },
    {
      id: '2681',
      name: 'Xã thượng trưng',
      district_id: '280400',
    },
    {
      id: '2682',
      name: 'Xã tuân chính',
      district_id: '280400',
    },
    {
      id: '2684',
      name: 'Xã vân xuân',
      district_id: '280400',
    },
    {
      id: '2685',
      name: 'Xã vĩnh thịnh',
      district_id: '280400',
    },
    {
      id: '2686',
      name: 'Xã vũ di',
      district_id: '280400',
    },
    {
      id: '2687',
      name: 'Xã yên bình',
      district_id: '280400',
    },
    {
      id: '2688',
      name: 'Xã yên lập',
      district_id: '280400',
    },
    {
      id: '2689',
      name: 'Thị trấn vĩnh tường',
      district_id: '280400',
    },
    {
      id: '2690',
      name: 'Thị trấn thổ tang',
      district_id: '280400',
    },
    {
      id: '2691',
      name: 'Xã an tường',
      district_id: '280400',
    },
    {
      id: '2692',
      name: 'Xã bình dương',
      district_id: '280400',
    },
    {
      id: '2693',
      name: 'Xã bồ sao',
      district_id: '280400',
    },
    {
      id: '2694',
      name: 'Xã vĩnh sơn',
      district_id: '280400',
    },
    {
      id: '11717',
      name: 'Thị trấn tứ trưng',
      district_id: '280400',
    },
    {
      id: '12820',
      name: 'Xã Tân Phú',
      district_id: '280400',
    },
    {
      id: '2609',
      name: 'Phường hội hợp',
      district_id: '280100',
    },
    {
      id: '2610',
      name: 'Phường đồng tâm',
      district_id: '280100',
    },
    {
      id: '2611',
      name: 'Phường khai quang',
      district_id: '280100',
    },
    {
      id: '2612',
      name: 'Phường Đống Đa',
      district_id: '280100',
    },
    {
      id: '2613',
      name: 'Phường liên bảo',
      district_id: '280100',
    },
    {
      id: '2614',
      name: 'Phường ngô quyền',
      district_id: '280100',
    },
    {
      id: '2615',
      name: 'Phường tích sơn',
      district_id: '280100',
    },
    {
      id: '2617',
      name: 'Xã thanh trù',
      district_id: '280100',
    },
    {
      id: '2618',
      name: 'Xã định trung',
      district_id: '280100',
    },
    {
      id: '2695',
      name: 'Thị trấn yên lạc',
      district_id: '280500',
    },
    {
      id: '2696',
      name: 'Xã bình định',
      district_id: '280500',
    },
    {
      id: '2697',
      name: 'Xã đại tự',
      district_id: '280500',
    },
    {
      id: '2698',
      name: 'Xã đồng cương',
      district_id: '280500',
    },
    {
      id: '2699',
      name: 'Xã đồng văn',
      district_id: '280500',
    },
    {
      id: '2700',
      name: 'Xã hồng châu',
      district_id: '280500',
    },
    {
      id: '2701',
      name: 'Xã hồng phương',
      district_id: '280500',
    },
    {
      id: '2702',
      name: 'Xã liên châu',
      district_id: '280500',
    },
    {
      id: '2703',
      name: 'Xã nguyệt đức',
      district_id: '280500',
    },
    {
      id: '2704',
      name: 'Xã tề lỗ',
      district_id: '280500',
    },
    {
      id: '2705',
      name: 'Xã trung hà',
      district_id: '280500',
    },
    {
      id: '2706',
      name: 'Xã trung kiên',
      district_id: '280500',
    },
    {
      id: '2707',
      name: 'Xã trung nguyên',
      district_id: '280500',
    },
    {
      id: '2708',
      name: 'Xã văn tiến',
      district_id: '280500',
    },
    {
      id: '2709',
      name: 'Xã yên đồng',
      district_id: '280500',
    },
    {
      id: '2710',
      name: 'Xã yên phương',
      district_id: '280500',
    },
    {
      id: '2711',
      name: 'Xã tam hồng',
      district_id: '280500',
    },
    {
      id: '2731',
      name: 'Thị trấn tam sơn',
      district_id: '280700',
    },
    {
      id: '2732',
      name: 'Xã lãng công',
      district_id: '280700',
    },
    {
      id: '2733',
      name: 'Xã quang yên',
      district_id: '280700',
    },
    {
      id: '2734',
      name: 'Xã bạch lưu',
      district_id: '280700',
    },
    {
      id: '2735',
      name: 'Xã hải lựu',
      district_id: '280700',
    },
    {
      id: '2736',
      name: 'Xã đồng quế',
      district_id: '280700',
    },
    {
      id: '2737',
      name: 'Xã nhân đạo',
      district_id: '280700',
    },
    {
      id: '2738',
      name: 'Xã đôn nhân',
      district_id: '280700',
    },
    {
      id: '2739',
      name: 'Xã phương khoan',
      district_id: '280700',
    },
    {
      id: '2740',
      name: 'Xã tân lập',
      district_id: '280700',
    },
    {
      id: '2741',
      name: 'Xã nhạo sơn',
      district_id: '280700',
    },
    {
      id: '2742',
      name: 'Xã như thụy',
      district_id: '280700',
    },
    {
      id: '2743',
      name: 'Xã yên thạch',
      district_id: '280700',
    },
    {
      id: '2744',
      name: 'Xã đồng thịnh',
      district_id: '280700',
    },
    {
      id: '2745',
      name: 'Xã tứ yên',
      district_id: '280700',
    },
    {
      id: '2746',
      name: 'Xã đức bác',
      district_id: '280700',
    },
    {
      id: '2747',
      name: 'Xã cao phong',
      district_id: '280700',
    },
    {
      id: '2633',
      name: 'Thị trấn hợp hòa',
      district_id: '280200',
    },
    {
      id: '2634',
      name: 'Xã hoàng hoa',
      district_id: '280200',
    },
    {
      id: '2635',
      name: 'Xã đồng tĩnh',
      district_id: '280200',
    },
    {
      id: '2636',
      name: 'Xã kim long',
      district_id: '280200',
    },
    {
      id: '2637',
      name: 'Xã hướng đạo',
      district_id: '280200',
    },
    {
      id: '2638',
      name: 'Xã đạo tú',
      district_id: '280200',
    },
    {
      id: '2639',
      name: 'Xã an hòa',
      district_id: '280200',
    },
    {
      id: '2640',
      name: 'Xã thanh vân',
      district_id: '280200',
    },
    {
      id: '2641',
      name: 'Xã duy phiên',
      district_id: '280200',
    },
    {
      id: '2642',
      name: 'Xã hoàng đan',
      district_id: '280200',
    },
    {
      id: '2643',
      name: 'Xã hoàng lâu',
      district_id: '280200',
    },
    {
      id: '2644',
      name: 'Xã vân hội',
      district_id: '280200',
    },
    {
      id: '2645',
      name: 'Xã hợp thịnh',
      district_id: '280200',
    },
    {
      id: '3614',
      name: 'Xã chế cu nha',
      district_id: '320500',
    },
    {
      id: '3615',
      name: 'Xã chế tạo',
      district_id: '320500',
    },
    {
      id: '3616',
      name: 'Xã dế su phình',
      district_id: '320500',
    },
    {
      id: '3617',
      name: 'Xã hồ bốn',
      district_id: '320500',
    },
    {
      id: '3618',
      name: 'Xã khao mang',
      district_id: '320500',
    },
    {
      id: '3619',
      name: 'Xã kim nọi',
      district_id: '320500',
    },
    {
      id: '3620',
      name: 'Xã la pán tẩn',
      district_id: '320500',
    },
    {
      id: '3621',
      name: 'Xã lao chải',
      district_id: '320500',
    },
    {
      id: '3622',
      name: 'Xã mồ dề',
      district_id: '320500',
    },
    {
      id: '3623',
      name: 'Thị trấn mù căng chải',
      district_id: '320500',
    },
    {
      id: '3624',
      name: 'Xã cao phạ',
      district_id: '320500',
    },
    {
      id: '3625',
      name: 'Xã nậm có',
      district_id: '320500',
    },
    {
      id: '3626',
      name: 'Xã nậm khắt',
      district_id: '320500',
    },
    {
      id: '3627',
      name: 'Xã púng luông',
      district_id: '320500',
    },
    {
      id: '3595',
      name: 'Phường pú trạng',
      district_id: '320200',
    },
    {
      id: '3596',
      name: 'Phường tân an',
      district_id: '320200',
    },
    {
      id: '3597',
      name: 'Phường cầu thia',
      district_id: '320200',
    },
    {
      id: '3598',
      name: 'Phường trung tâm',
      district_id: '320200',
    },
    {
      id: '3599',
      name: 'Xã nghĩa lợi',
      district_id: '320200',
    },
    {
      id: '3600',
      name: 'Xã nghĩa phúc',
      district_id: '320200',
    },
    {
      id: '3601',
      name: 'Xã nghĩa an',
      district_id: '320200',
    },
    {
      id: '12765',
      name: 'Xã Nghĩa Lộ',
      district_id: '320200',
    },
    {
      id: '12766',
      name: 'Xã Thạch Lương',
      district_id: '320200',
    },
    {
      id: '12767',
      name: 'Xã Phúc Sơn',
      district_id: '320200',
    },
    {
      id: '12768',
      name: 'Xã Hạnh Sơn',
      district_id: '320200',
    },
    {
      id: '12769',
      name: 'Xã Thanh Lương',
      district_id: '320200',
    },
    {
      id: '12770',
      name: 'Xã Phù Nham',
      district_id: '320200',
    },
    {
      id: '12771',
      name: 'Xã Sơn A',
      district_id: '320200',
    },
    {
      id: '3602',
      name: 'Xã pá hu',
      district_id: '320800',
    },
    {
      id: '3603',
      name: 'Xã bản mù',
      district_id: '320800',
    },
    {
      id: '3604',
      name: 'Xã pá lau',
      district_id: '320800',
    },
    {
      id: '3605',
      name: 'Xã trạm tấu',
      district_id: '320800',
    },
    {
      id: '3606',
      name: 'Xã hát lìu',
      district_id: '320800',
    },
    {
      id: '3607',
      name: 'Xã phình hồ',
      district_id: '320800',
    },
    {
      id: '3608',
      name: 'Xã túc đán',
      district_id: '320800',
    },
    {
      id: '3610',
      name: 'Xã bản công',
      district_id: '320800',
    },
    {
      id: '3611',
      name: 'Xã tà si láng',
      district_id: '320800',
    },
    {
      id: '3612',
      name: 'Thị trấn trạm tấu',
      district_id: '320800',
    },
    {
      id: '3613',
      name: 'Xã làng nhì',
      district_id: '320800',
    },
    {
      id: '11802',
      name: 'Xã xà hồ',
      district_id: '320800',
    },
    {
      id: '3415',
      name: 'Xã minh bảo',
      district_id: '320100',
    },
    {
      id: '3416',
      name: 'Xã phúc lộc',
      district_id: '320100',
    },
    {
      id: '3417',
      name: 'Xã tân thịnh',
      district_id: '320100',
    },
    {
      id: '3418',
      name: 'Xã tuy lộc',
      district_id: '320100',
    },
    {
      id: '3419',
      name: 'Phường đồng tâm',
      district_id: '320100',
    },
    {
      id: '3420',
      name: 'Phường yên ninh',
      district_id: '320100',
    },
    {
      id: '3421',
      name: 'Phường yên thịnh',
      district_id: '320100',
    },
    {
      id: '3422',
      name: 'Phường hồng hà',
      district_id: '320100',
    },
    {
      id: '3423',
      name: 'Phường nguyễn phúc',
      district_id: '320100',
    },
    {
      id: '3424',
      name: 'Phường nguyễn thái học',
      district_id: '320100',
    },
    {
      id: '3426',
      name: 'Phường minh tân',
      district_id: '320100',
    },
    {
      id: '3427',
      name: 'Xã âu lâu',
      district_id: '320100',
    },
    {
      id: '3428',
      name: 'Xã giới phiên',
      district_id: '320100',
    },
    {
      id: '3429',
      name: 'Xã văn phú',
      district_id: '320100',
    },
    {
      id: '3430',
      name: 'Xã văn tiến',
      district_id: '320100',
    },
    {
      id: '11803',
      name: 'Phường hợp minh',
      district_id: '320100',
    },
    {
      id: '11804',
      name: 'Phường nam cường',
      district_id: '320100',
    },
    {
      id: '3431',
      name: 'Xã bảo ái',
      district_id: '320400',
    },
    {
      id: '3432',
      name: 'Xã cẩm ân',
      district_id: '320400',
    },
    {
      id: '3433',
      name: 'Xã mỹ gia',
      district_id: '320400',
    },
    {
      id: '3434',
      name: 'Xã tân nguyên',
      district_id: '320400',
    },
    {
      id: '3435',
      name: 'Xã thịnh hưng',
      district_id: '320400',
    },
    {
      id: '3436',
      name: 'Xã vĩnh kiên',
      district_id: '320400',
    },
    {
      id: '3437',
      name: 'Thị trấn yên bình',
      district_id: '320400',
    },
    {
      id: '3438',
      name: 'Xã bạch hà',
      district_id: '320400',
    },
    {
      id: '3439',
      name: 'Xã đại đồng',
      district_id: '320400',
    },
    {
      id: '3440',
      name: 'Xã đại minh',
      district_id: '320400',
    },
    {
      id: '3441',
      name: 'Xã hán đà',
      district_id: '320400',
    },
    {
      id: '3442',
      name: 'Xã mông sơn',
      district_id: '320400',
    },
    {
      id: '3443',
      name: 'Thị trấn thác bà',
      district_id: '320400',
    },
    {
      id: '3444',
      name: 'Xã vũ linh',
      district_id: '320400',
    },
    {
      id: '3445',
      name: 'Xã xuân lai',
      district_id: '320400',
    },
    {
      id: '3446',
      name: 'Xã yên bình',
      district_id: '320400',
    },
    {
      id: '3447',
      name: 'Xã yên thành',
      district_id: '320400',
    },
    {
      id: '3448',
      name: 'Xã phúc an',
      district_id: '320400',
    },
    {
      id: '3449',
      name: 'Xã phúc ninh',
      district_id: '320400',
    },
    {
      id: '3450',
      name: 'Xã cẩm nhân',
      district_id: '320400',
    },
    {
      id: '3451',
      name: 'Xã ngọc chấn',
      district_id: '320400',
    },
    {
      id: '3452',
      name: 'Xã phú thịnh',
      district_id: '320400',
    },
    {
      id: '3453',
      name: 'Xã tân hương',
      district_id: '320400',
    },
    {
      id: '3454',
      name: 'Xã tích cốc',
      district_id: '320400',
    },
    {
      id: '3455',
      name: 'Xã xuân long',
      district_id: '320400',
    },
    {
      id: '3456',
      name: 'Xã văn lãng',
      district_id: '320400',
    },
    {
      id: '3457',
      name: 'Xã minh tiến',
      district_id: '320900',
    },
    {
      id: '3458',
      name: 'Xã minh xuân',
      district_id: '320900',
    },
    {
      id: '3459',
      name: 'Xã mường lai',
      district_id: '320900',
    },
    {
      id: '3463',
      name: 'Thị trấn yên thế',
      district_id: '320900',
    },
    {
      id: '3464',
      name: 'Xã an lạc',
      district_id: '320900',
    },
    {
      id: '3465',
      name: 'Xã động quan',
      district_id: '320900',
    },
    {
      id: '3467',
      name: 'Xã khánh thiện',
      district_id: '320900',
    },
    {
      id: '3468',
      name: 'Xã lâm thượng',
      district_id: '320900',
    },
    {
      id: '3469',
      name: 'Xã liếu đô',
      district_id: '320900',
    },
    {
      id: '3471',
      name: 'Xã an phú',
      district_id: '320900',
    },
    {
      id: '3472',
      name: 'Xã khánh hòa',
      district_id: '320900',
    },
    {
      id: '3473',
      name: 'Xã mai sơn',
      district_id: '320900',
    },
    {
      id: '3477',
      name: 'Xã an phú',
      district_id: '320900',
    },
    {
      id: '3478',
      name: 'Xã an lạc',
      district_id: '320900',
    },
    {
      id: '3479',
      name: 'Xã động quan',
      district_id: '320900',
    },
    {
      id: '3480',
      name: 'Xã khai trung',
      district_id: '320900',
    },
    {
      id: '3481',
      name: 'Xã khánh hòa',
      district_id: '320900',
    },
    {
      id: '3482',
      name: 'Xã lâm thượng',
      district_id: '320900',
    },
    {
      id: '3483',
      name: 'Xã tân lĩnh',
      district_id: '320900',
    },
    {
      id: '3484',
      name: 'Xã tô mậu',
      district_id: '320900',
    },
    {
      id: '3485',
      name: 'Xã minh chuẩn',
      district_id: '320900',
    },
    {
      id: '3486',
      name: 'Xã phan thanh',
      district_id: '320900',
    },
    {
      id: '3487',
      name: 'Xã phúc lợi',
      district_id: '320900',
    },
    {
      id: '3488',
      name: 'Xã tân lập',
      district_id: '320900',
    },
    {
      id: '3489',
      name: 'Xã tân phượng',
      district_id: '320900',
    },
    {
      id: '3490',
      name: 'Xã trúc lâu',
      district_id: '320900',
    },
    {
      id: '3491',
      name: 'Xã trung tâm',
      district_id: '320900',
    },
    {
      id: '3492',
      name: 'Xã phan thanh',
      district_id: '320900',
    },
    {
      id: '3493',
      name: 'Xã phúc lợi',
      district_id: '320900',
    },
    {
      id: '3494',
      name: 'Xã tân lập',
      district_id: '320900',
    },
    {
      id: '3495',
      name: 'Xã tân lĩnh',
      district_id: '320900',
    },
    {
      id: '3496',
      name: 'Xã tân phượng',
      district_id: '320900',
    },
    {
      id: '3497',
      name: 'Xã tô mậu',
      district_id: '320900',
    },
    {
      id: '3498',
      name: 'Xã trúc lâu',
      district_id: '320900',
    },
    {
      id: '3499',
      name: 'Xã trung tâm',
      district_id: '320900',
    },
    {
      id: '3500',
      name: 'Xã vĩnh lạc',
      district_id: '320900',
    },
    {
      id: '3501',
      name: 'Xã yên thắng',
      district_id: '320900',
    },
    {
      id: '3502',
      name: 'Xã bảo hưng',
      district_id: '320700',
    },
    {
      id: '3503',
      name: 'Xã hòa cuông',
      district_id: '320700',
    },
    {
      id: '3504',
      name: 'Xã hồng ca',
      district_id: '320700',
    },
    {
      id: '3506',
      name: 'Xã hưng khánh',
      district_id: '320700',
    },
    {
      id: '3507',
      name: 'Xã hưng thịnh',
      district_id: '320700',
    },
    {
      id: '3508',
      name: 'Xã minh tiến',
      district_id: '320700',
    },
    {
      id: '3510',
      name: 'Xã lương thịnh',
      district_id: '320700',
    },
    {
      id: '3511',
      name: 'Xã Minh Quán',
      district_id: '320700',
    },
    {
      id: '3512',
      name: 'Xã minh quân',
      district_id: '320700',
    },
    {
      id: '3513',
      name: 'Xã nga quán',
      district_id: '320700',
    },
    {
      id: '3514',
      name: 'Xã việt cường',
      district_id: '320700',
    },
    {
      id: '3515',
      name: 'Xã việt hồng',
      district_id: '320700',
    },
    {
      id: '3516',
      name: 'Xã việt thành',
      district_id: '320700',
    },
    {
      id: '3517',
      name: 'Thị trấn cổ phúc',
      district_id: '320700',
    },
    {
      id: '3519',
      name: 'Xã báo đáp',
      district_id: '320700',
    },
    {
      id: '3520',
      name: 'Xã quy mông',
      district_id: '320700',
    },
    {
      id: '3521',
      name: 'Xã tân đồng',
      district_id: '320700',
    },
    {
      id: '3522',
      name: 'Xã vân hội',
      district_id: '320700',
    },
    {
      id: '3525',
      name: 'Xã y can',
      district_id: '320700',
    },
    {
      id: '3526',
      name: 'Xã cường thịnh',
      district_id: '320700',
    },
    {
      id: '3527',
      name: 'Xã đào thịnh',
      district_id: '320700',
    },
    {
      id: '3528',
      name: 'Xã kiên thành',
      district_id: '320700',
    },
    {
      id: '3557',
      name: 'Thị trấn nt nghĩa lộ',
      district_id: '320600',
    },
    {
      id: '3558',
      name: 'Xã bình thuận',
      district_id: '320600',
    },
    {
      id: '3560',
      name: 'Xã phù nham',
      district_id: '320600',
    },
    {
      id: '3561',
      name: 'Xã phúc sơn',
      district_id: '320600',
    },
    {
      id: '3562',
      name: 'Xã tân thịnh',
      district_id: '320600',
    },
    {
      id: '3563',
      name: 'Xã thượng bằng la',
      district_id: '320600',
    },
    {
      id: '3564',
      name: 'Xã sơn thịnh',
      district_id: '320600',
    },
    {
      id: '3568',
      name: 'Thị trấn nt liên sơn',
      district_id: '320600',
    },
    {
      id: '3570',
      name: 'Xã gia hội',
      district_id: '320600',
    },
    {
      id: '3571',
      name: 'Xã cát thịnh',
      district_id: '320600',
    },
    {
      id: '3572',
      name: 'Xã chấn thịnh',
      district_id: '320600',
    },
    {
      id: '3573',
      name: 'Xã hạnh sơn',
      district_id: '320600',
    },
    {
      id: '3574',
      name: 'Xã minh an',
      district_id: '320600',
    },
    {
      id: '3575',
      name: 'Xã nậm búng',
      district_id: '320600',
    },
    {
      id: '3576',
      name: 'Xã nậm lành',
      district_id: '320600',
    },
    {
      id: '3577',
      name: 'Xã nậm mười',
      district_id: '320600',
    },
    {
      id: '3578',
      name: 'Xã an lương',
      district_id: '320600',
    },
    {
      id: '3582',
      name: 'Xã nghĩa tâm',
      district_id: '320600',
    },
    {
      id: '3583',
      name: 'Xã sơn lương',
      district_id: '320600',
    },
    {
      id: '3584',
      name: 'Xã sùng đô',
      district_id: '320600',
    },
    {
      id: '3585',
      name: 'Xã suối bu',
      district_id: '320600',
    },
    {
      id: '3586',
      name: 'Xã suối giàng',
      district_id: '320600',
    },
    {
      id: '3587',
      name: 'Xã suối quyền',
      district_id: '320600',
    },
    {
      id: '3588',
      name: 'Xã thanh lương',
      district_id: '320600',
    },
    {
      id: '3589',
      name: 'Thị trấn nt trần phú',
      district_id: '320600',
    },
    {
      id: '3590',
      name: 'Xã tú lệ',
      district_id: '320600',
    },
    {
      id: '3591',
      name: 'Xã nghĩa sơn',
      district_id: '320600',
    },
    {
      id: '3592',
      name: 'Xã sơn a',
      district_id: '320600',
    },
    {
      id: '3593',
      name: 'Xã thách lương',
      district_id: '320600',
    },
    {
      id: '3594',
      name: 'Xã thạch lương',
      district_id: '320600',
    },
    {
      id: '11800',
      name: 'Xã đại lịch',
      district_id: '320600',
    },
    {
      id: '11801',
      name: 'Xã đồng khê',
      district_id: '320600',
    },
    {
      id: '3529',
      name: 'Xã yên thái',
      district_id: '320300',
    },
    {
      id: '3530',
      name: 'Xã hoàng thắng',
      district_id: '320300',
    },
    {
      id: '3531',
      name: 'Xã lang thíp',
      district_id: '320300',
    },
    {
      id: '3532',
      name: 'Xã mậu đông',
      district_id: '320300',
    },
    {
      id: '3533',
      name: 'Xã mỏ vàng',
      district_id: '320300',
    },
    {
      id: '3534',
      name: 'Xã nà hẩu',
      district_id: '320300',
    },
    {
      id: '3535',
      name: 'Thị trấn mậu a',
      district_id: '320300',
    },
    {
      id: '3536',
      name: 'Xã châu quế thượng',
      district_id: '320300',
    },
    {
      id: '3537',
      name: 'Xã đông cuông',
      district_id: '320300',
    },
    {
      id: '3538',
      name: 'Xã lâm giang',
      district_id: '320300',
    },
    {
      id: '3539',
      name: 'Xã ngòi a',
      district_id: '320300',
    },
    {
      id: '3540',
      name: 'Xã phong dụ hạ',
      district_id: '320300',
    },
    {
      id: '3541',
      name: 'Xã phong dụ thượng',
      district_id: '320300',
    },
    {
      id: '3542',
      name: 'Xã quang minh',
      district_id: '320300',
    },
    {
      id: '3543',
      name: 'Xã tân hợp',
      district_id: '320300',
    },
    {
      id: '3544',
      name: 'Xã viễn sơn',
      district_id: '320300',
    },
    {
      id: '3545',
      name: 'Xã xuân ái',
      district_id: '320300',
    },
    {
      id: '3546',
      name: 'Xã xuân tầm',
      district_id: '320300',
    },
    {
      id: '3547',
      name: 'Xã yên hợp',
      district_id: '320300',
    },
    {
      id: '3548',
      name: 'Xã yên phú',
      district_id: '320300',
    },
    {
      id: '3549',
      name: 'Xã viễn sơn',
      district_id: '320300',
    },
    {
      id: '3550',
      name: 'Xã an bình',
      district_id: '320300',
    },
    {
      id: '3551',
      name: 'Xã an thịnh',
      district_id: '320300',
    },
    {
      id: '3552',
      name: 'Xã châu quế hạ',
      district_id: '320300',
    },
    {
      id: '3553',
      name: 'Xã đại phác',
      district_id: '320300',
    },
    {
      id: '3554',
      name: 'Xã đại sơn',
      district_id: '320300',
    },
    {
      id: '3555',
      name: 'Xã đông an',
      district_id: '320300',
    },
    {
      id: '3556',
      name: 'Xã yên hưng',
      district_id: '320300',
    },
    {
      id: '8335',
      name: 'Phường tân hoà',
      district_id: '630100',
    },
    {
      id: '8336',
      name: 'Phường tân lập',
      district_id: '630100',
    },
    {
      id: '8337',
      name: 'Phường Eatam',
      district_id: '630100',
    },
    {
      id: '8338',
      name: 'Phường tân thành',
      district_id: '630100',
    },
    {
      id: '8339',
      name: 'Phường tân an',
      district_id: '630100',
    },
    {
      id: '8340',
      name: 'Phường khánh xuân',
      district_id: '630100',
    },
    {
      id: '8341',
      name: 'Xã Hòa Thắng',
      district_id: '630100',
    },
    {
      id: '8342',
      name: 'Xã Hòa Thuận',
      district_id: '630100',
    },
    {
      id: '8343',
      name: 'Phường thống nhất',
      district_id: '630100',
    },
    {
      id: '8344',
      name: 'Phường thành nhất',
      district_id: '630100',
    },
    {
      id: '8345',
      name: 'Phường tự an',
      district_id: '630100',
    },
    {
      id: '8347',
      name: 'Xã hoà phú',
      district_id: '630100',
    },
    {
      id: '8348',
      name: 'Xã Hòa Xuân',
      district_id: '630100',
    },
    {
      id: '8350',
      name: 'Xã hoà khánh',
      district_id: '630100',
    },
    {
      id: '8351',
      name: 'Phường tân lợi',
      district_id: '630100',
    },
    {
      id: '8352',
      name: 'Phường thắng lợi',
      district_id: '630100',
    },
    {
      id: '8353',
      name: 'Phường tân tiến',
      district_id: '630100',
    },
    {
      id: '8354',
      name: 'Phường thành công',
      district_id: '630100',
    },
    {
      id: '11950',
      name: 'Xã cư êbur',
      district_id: '630100',
    },
    {
      id: '11951',
      name: 'Xã ea kao',
      district_id: '630100',
    },
    {
      id: '11952',
      name: 'Xã ea tu',
      district_id: '630100',
    },
    {
      id: '8505',
      name: 'Xã ea ning',
      district_id: '631400',
    },
    {
      id: '8506',
      name: 'Xã ea tiêu',
      district_id: '631400',
    },
    {
      id: '8507',
      name: 'Xã ea ktur',
      district_id: '631400',
    },
    {
      id: '8508',
      name: 'Xã ea bhốk',
      district_id: '631400',
    },
    {
      id: '8509',
      name: 'Xã hoà hiệp',
      district_id: '631400',
    },
    {
      id: '8510',
      name: 'Xã dray bhăng',
      district_id: '631400',
    },
    {
      id: '8511',
      name: 'Xã ea hu',
      district_id: '631400',
    },
    {
      id: '8512',
      name: 'Xã cư ê wi',
      district_id: '631400',
    },
    {
      id: '8374',
      name: 'Xã cư huê',
      district_id: '630800',
    },
    {
      id: '8376',
      name: 'Xã cư prông',
      district_id: '630800',
    },
    {
      id: '8378',
      name: 'Xã ea đar',
      district_id: '630800',
    },
    {
      id: '8379',
      name: 'Xã ea kmút',
      district_id: '630800',
    },
    {
      id: '8380',
      name: 'Xã ea păl',
      district_id: '630800',
    },
    {
      id: '8383',
      name: 'Xã xuân phú',
      district_id: '630800',
    },
    {
      id: '8384',
      name: 'Thị trấn ea kar',
      district_id: '630800',
    },
    {
      id: '8385',
      name: 'Thị trấn ea knốp',
      district_id: '630800',
    },
    {
      id: '8386',
      name: 'Xã cư bông',
      district_id: '630800',
    },
    {
      id: '8387',
      name: 'Xã ea ô',
      district_id: '630800',
    },
    {
      id: '8388',
      name: 'Xã ea sar',
      district_id: '630800',
    },
    {
      id: '8389',
      name: 'Xã cư jang',
      district_id: '630800',
    },
    {
      id: '11961',
      name: 'Xã cư elang',
      district_id: '630800',
    },
    {
      id: '11962',
      name: 'Xã cư ni',
      district_id: '630800',
    },
    {
      id: '11963',
      name: 'Xã ea sô',
      district_id: '630800',
    },
    {
      id: '11964',
      name: 'Xã ea tih',
      district_id: '630800',
    },
    {
      id: '8463',
      name: "Xã cư m'lan",
      district_id: '630500',
    },
    {
      id: '8464',
      name: 'Xã ea bung',
      district_id: '630500',
    },
    {
      id: '8465',
      name: 'Xã ea lê',
      district_id: '630500',
    },
    {
      id: '8466',
      name: 'Xã ea rok',
      district_id: '630500',
    },
    {
      id: '8467',
      name: 'Xã ia jlơi',
      district_id: '630500',
    },
    {
      id: '8468',
      name: 'Xã ia rvê',
      district_id: '630500',
    },
    {
      id: '8469',
      name: 'Xã ia lốp',
      district_id: '630500',
    },
    {
      id: '8470',
      name: 'Xã ya tờ mốt',
      district_id: '630500',
    },
    {
      id: '8471',
      name: 'Thị trấn ea súp',
      district_id: '630500',
    },
    {
      id: '11956',
      name: 'Xã cư kbang',
      district_id: '630500',
    },
    {
      id: '8472',
      name: 'Xã dray sáp',
      district_id: '631000',
    },
    {
      id: '8473',
      name: 'Xã dur kmăl',
      district_id: '631000',
    },
    {
      id: '8474',
      name: 'Xã Ea Bông',
      district_id: '631000',
    },
    {
      id: '8475',
      name: 'Xã ea na',
      district_id: '631000',
    },
    {
      id: '8476',
      name: 'Xã quảng điền',
      district_id: '631000',
    },
    {
      id: '8477',
      name: 'Thị trấn buôn trấp',
      district_id: '631000',
    },
    {
      id: '8478',
      name: 'Xã băng a drênh',
      district_id: '631000',
    },
    {
      id: '8479',
      name: 'Xã bình hoà',
      district_id: '631000',
    },
    {
      id: '8480',
      name: 'Xã cư drăm',
      district_id: '631100',
    },
    {
      id: '8481',
      name: 'Xã cư kty',
      district_id: '631100',
    },
    {
      id: '8482',
      name: 'Xã cư pui',
      district_id: '631100',
    },
    {
      id: '8483',
      name: 'Xã dang kang',
      district_id: '631100',
    },
    {
      id: '8484',
      name: 'Xã ea trul',
      district_id: '631100',
    },
    {
      id: '8485',
      name: 'Xã hòa lễ',
      district_id: '631100',
    },
    {
      id: '8486',
      name: 'Xã hòa phong',
      district_id: '631100',
    },
    {
      id: '8487',
      name: 'Thị trấn krông kmar',
      district_id: '631100',
    },
    {
      id: '8488',
      name: 'Xã hòa sơn',
      district_id: '631100',
    },
    {
      id: '8489',
      name: 'Xã hòa tân',
      district_id: '631100',
    },
    {
      id: '8490',
      name: 'Xã hòa thành',
      district_id: '631100',
    },
    {
      id: '8491',
      name: 'Xã khuê ngọc điền',
      district_id: '631100',
    },
    {
      id: '8492',
      name: 'Xã yang mao',
      district_id: '631100',
    },
    {
      id: '8493',
      name: 'Xã yang reh',
      district_id: '631100',
    },
    {
      id: '8421',
      name: 'Xã chư kbô',
      district_id: '630300',
    },
    {
      id: '8422',
      name: 'Xã cư né',
      district_id: '630300',
    },
    {
      id: '8424',
      name: 'Xã cư pơng',
      district_id: '630300',
    },
    {
      id: '8426',
      name: 'Xã ea ngai',
      district_id: '630300',
    },
    {
      id: '8428',
      name: 'Xã ea sin',
      district_id: '630300',
    },
    {
      id: '8429',
      name: 'Xã tân lập',
      district_id: '630300',
    },
    {
      id: '11958',
      name: 'Xã pơng drang',
      district_id: '630300',
    },
    {
      id: '8430',
      name: 'Xã cư klông',
      district_id: '630400',
    },
    {
      id: '8431',
      name: 'Xã đliê ya',
      district_id: '630400',
    },
    {
      id: '8432',
      name: 'Xã ea dăh',
      district_id: '630400',
    },
    {
      id: '8433',
      name: 'Xã ea hồ',
      district_id: '630400',
    },
    {
      id: '8434',
      name: 'Xã ea puk',
      district_id: '630400',
    },
    {
      id: '8435',
      name: 'Xã ea tam',
      district_id: '630400',
    },
    {
      id: '8436',
      name: 'Xã ea tân',
      district_id: '630400',
    },
    {
      id: '8437',
      name: 'Xã ea toh',
      district_id: '630400',
    },
    {
      id: '8438',
      name: 'Xã phú lộc',
      district_id: '630400',
    },
    {
      id: '8439',
      name: 'Xã phú xuân',
      district_id: '630400',
    },
    {
      id: '8440',
      name: 'Xã tam giang',
      district_id: '630400',
    },
    {
      id: '8441',
      name: 'Thị trấn krông năng',
      district_id: '630400',
    },
    {
      id: '8357',
      name: 'Xã ea kênh',
      district_id: '630700',
    },
    {
      id: '8358',
      name: 'Xã ea kly',
      district_id: '630700',
    },
    {
      id: '8361',
      name: 'Xã ea phê',
      district_id: '630700',
    },
    {
      id: '8362',
      name: 'Xã hoà tiến',
      district_id: '630700',
    },
    {
      id: '8363',
      name: 'Xã krông buk',
      district_id: '630700',
    },
    {
      id: '8364',
      name: 'Xã tân tiến',
      district_id: '630700',
    },
    {
      id: '8365',
      name: 'Thị trấn phước an',
      district_id: '630700',
    },
    {
      id: '8366',
      name: 'Xã vụ bổn',
      district_id: '630700',
    },
    {
      id: '8367',
      name: 'Xã ea hiu',
      district_id: '630700',
    },
    {
      id: '8368',
      name: 'Xã ea uy',
      district_id: '630700',
    },
    {
      id: '8369',
      name: 'Xã ea yiêng',
      district_id: '630700',
    },
    {
      id: '8370',
      name: 'Xã ea yông',
      district_id: '630700',
    },
    {
      id: '8371',
      name: 'Xã Hoà An',
      district_id: '630700',
    },
    {
      id: '8372',
      name: 'Xã hoà đông',
      district_id: '630700',
    },
    {
      id: '11959',
      name: 'Xã ea knuec',
      district_id: '630700',
    },
    {
      id: '11960',
      name: 'Xã ea kuăng',
      district_id: '630700',
    },
    {
      id: '8514',
      name: 'Phường an lạc',
      district_id: '631500',
    },
    {
      id: '8515',
      name: 'Phường đoàn kết',
      district_id: '631500',
    },
    {
      id: '8516',
      name: 'Phường an bình',
      district_id: '631500',
    },
    {
      id: '8517',
      name: 'Xã ea drông',
      district_id: '631500',
    },
    {
      id: '8518',
      name: 'Xã bình thuận',
      district_id: '631500',
    },
    {
      id: '8519',
      name: 'Xã cư bao',
      district_id: '631500',
    },
    {
      id: '8520',
      name: 'Xã ea siên',
      district_id: '631500',
    },
    {
      id: '8521',
      name: 'Xã ea blang',
      district_id: '631500',
    },
    {
      id: '8522',
      name: 'Phường thiện an',
      district_id: '631500',
    },
    {
      id: '8523',
      name: 'Phường thống nhất',
      district_id: '631500',
    },
    {
      id: '8524',
      name: 'Phường đạt hiếu',
      district_id: '631500',
    },
    {
      id: '8525',
      name: 'Phường bình tân',
      district_id: '631500',
    },
    {
      id: '8404',
      name: 'Thị trấn quảng phú',
      district_id: '630600',
    },
    {
      id: '8405',
      name: 'Thị trấn ea pốk',
      district_id: '630600',
    },
    {
      id: '8406',
      name: 'Xã quảng tiến',
      district_id: '630600',
    },
    {
      id: '8407',
      name: "Xã ea m'nang",
      district_id: '630600',
    },
    {
      id: '8408',
      name: 'Xã ea kpam',
      district_id: '630600',
    },
    {
      id: '8409',
      name: 'Xã cư suê',
      district_id: '630600',
    },
    {
      id: '8410',
      name: 'Xã cuôr dăng',
      district_id: '630600',
    },
    {
      id: '8411',
      name: "Xã ea d'rơng",
      district_id: '630600',
    },
    {
      id: '8412',
      name: 'Xã ea tul',
      district_id: '630600',
    },
    {
      id: '8413',
      name: 'Xã ea tar',
      district_id: '630600',
    },
    {
      id: '8414',
      name: 'Xã quảng hiệp',
      district_id: '630600',
    },
    {
      id: '8416',
      name: "Xã cư dliê m'nông",
      district_id: '630600',
    },
    {
      id: '8417',
      name: 'Xã ea kuêh',
      district_id: '630600',
    },
    {
      id: '8418',
      name: 'Xã ea kiết',
      district_id: '630600',
    },
    {
      id: '11954',
      name: "Xã cư m'gar",
      district_id: '630600',
    },
    {
      id: '11955',
      name: "Xã ea h'đinh",
      district_id: '630600',
    },
    {
      id: '8494',
      name: 'Xã yang tao',
      district_id: '631200',
    },
    {
      id: '8495',
      name: 'Thị Trấn Liên Sơn',
      district_id: '631200',
    },
    {
      id: '8496',
      name: 'Xã bông krang',
      district_id: '631200',
    },
    {
      id: '8497',
      name: 'Xã buôn tría',
      district_id: '631200',
    },
    {
      id: '8498',
      name: 'Xã buôn triết',
      district_id: '631200',
    },
    {
      id: '8499',
      name: 'Xã đắk nuê',
      district_id: '631200',
    },
    {
      id: '8500',
      name: 'Xã đắk phơi',
      district_id: '631200',
    },
    {
      id: '8501',
      name: 'Xã đắk liêng',
      district_id: '631200',
    },
    {
      id: '8502',
      name: "Xã ea r'bin",
      district_id: '631200',
    },
    {
      id: '8503',
      name: 'Xã krông nô',
      district_id: '631200',
    },
    {
      id: '8504',
      name: 'Xã nam ka',
      district_id: '631200',
    },
    {
      id: '10384',
      name: 'Phường 11',
      district_id: '870100',
    },
    {
      id: '10385',
      name: 'Phường 1',
      district_id: '870100',
    },
    {
      id: '10386',
      name: 'Phường 2',
      district_id: '870100',
    },
    {
      id: '10387',
      name: 'Xã tịnh thới',
      district_id: '870100',
    },
    {
      id: '10388',
      name: 'Phường 3',
      district_id: '870100',
    },
    {
      id: '10389',
      name: 'Phường 4',
      district_id: '870100',
    },
    {
      id: '10390',
      name: 'Phường 6',
      district_id: '870100',
    },
    {
      id: '10391',
      name: 'Phường mỹ phú',
      district_id: '870100',
    },
    {
      id: '10392',
      name: 'Phường hòa thuận',
      district_id: '870100',
    },
    {
      id: '10393',
      name: 'Xã mỹ ngãi',
      district_id: '870100',
    },
    {
      id: '10394',
      name: 'Xã mỹ tân',
      district_id: '870100',
    },
    {
      id: '10395',
      name: 'Xã mỹ trà',
      district_id: '870100',
    },
    {
      id: '10396',
      name: 'Xã tân thuận tây',
      district_id: '870100',
    },
    {
      id: '10397',
      name: 'Xã tân thuận đông',
      district_id: '870100',
    },
    {
      id: '10398',
      name: 'Xã hòa an',
      district_id: '870100',
    },
    {
      id: '10508',
      name: 'Xã phương thịnh',
      district_id: '870700',
    },
    {
      id: '10509',
      name: 'Xã ba sao',
      district_id: '870700',
    },
    {
      id: '10510',
      name: 'Xã phong mỹ',
      district_id: '870700',
    },
    {
      id: '10511',
      name: 'Xã tân nghĩa',
      district_id: '870700',
    },
    {
      id: '10512',
      name: 'Xã phương trà',
      district_id: '870700',
    },
    {
      id: '10513',
      name: 'Xã nhị mỹ',
      district_id: '870700',
    },
    {
      id: '10514',
      name: 'Xã mỹ thọ',
      district_id: '870700',
    },
    {
      id: '10515',
      name: 'Xã tân hội trung',
      district_id: '870700',
    },
    {
      id: '10516',
      name: 'Xã an bình',
      district_id: '870700',
    },
    {
      id: '10517',
      name: 'Xã mỹ hội',
      district_id: '870700',
    },
    {
      id: '10518',
      name: 'Xã mỹ hiệp',
      district_id: '870700',
    },
    {
      id: '10519',
      name: 'Xã mỹ long',
      district_id: '870700',
    },
    {
      id: '10520',
      name: 'Xã bình hàng trung',
      district_id: '870700',
    },
    {
      id: '10521',
      name: 'Xã mỹ xương',
      district_id: '870700',
    },
    {
      id: '10522',
      name: 'Xã bình hàng tây',
      district_id: '870700',
    },
    {
      id: '10523',
      name: 'Xã bình thạnh',
      district_id: '870700',
    },
    {
      id: '10525',
      name: 'Xã gáo giồng',
      district_id: '870700',
    },
    {
      id: '12223',
      name: 'Thị trấn mỹ thọ',
      district_id: '870700',
    },
    {
      id: '10497',
      name: 'Xã an hiệp',
      district_id: '871100',
    },
    {
      id: '10498',
      name: 'Xã an nhơn',
      district_id: '871100',
    },
    {
      id: '10499',
      name: 'Xã tân nhuận đông',
      district_id: '871100',
    },
    {
      id: '10500',
      name: 'Xã tân bình',
      district_id: '871100',
    },
    {
      id: '10502',
      name: 'Xã phú long',
      district_id: '871100',
    },
    {
      id: '10504',
      name: 'Xã phú hựu',
      district_id: '871100',
    },
    {
      id: '10505',
      name: 'Xã an khánh',
      district_id: '871100',
    },
    {
      id: '10506',
      name: 'Xã tân phú',
      district_id: '871100',
    },
    {
      id: '10507',
      name: 'Xã hòa tân',
      district_id: '871100',
    },
    {
      id: '12219',
      name: 'Thị trấn cái tàu hạ',
      district_id: '871100',
    },
    {
      id: '12220',
      name: 'Xã an phú thuận',
      district_id: '871100',
    },
    {
      id: '12221',
      name: 'Xã tân phú trung',
      district_id: '871100',
    },
    {
      id: '10476',
      name: 'Xã tân dương',
      district_id: '871000',
    },
    {
      id: '10477',
      name: 'Xã hòa thành',
      district_id: '871000',
    },
    {
      id: '10478',
      name: 'Xã long hậu',
      district_id: '871000',
    },
    {
      id: '10479',
      name: 'Xã tân phước',
      district_id: '871000',
    },
    {
      id: '10480',
      name: 'Xã hòa long',
      district_id: '871000',
    },
    {
      id: '10481',
      name: 'Xã tân thành',
      district_id: '871000',
    },
    {
      id: '10482',
      name: 'Xã long thắng',
      district_id: '871000',
    },
    {
      id: '10483',
      name: 'Xã vĩnh thới',
      district_id: '871000',
    },
    {
      id: '10484',
      name: 'Xã tân hòa',
      district_id: '871000',
    },
    {
      id: '10485',
      name: 'Xã định hòa',
      district_id: '871000',
    },
    {
      id: '10486',
      name: 'Xã phong hòa',
      district_id: '871000',
    },
    {
      id: '12218',
      name: 'Thị trấn lai vung',
      district_id: '871000',
    },
    {
      id: '10526',
      name: 'Phường an lộc',
      district_id: '871200',
    },
    {
      id: '10527',
      name: 'Phường an thạnh',
      district_id: '871200',
    },
    {
      id: '10528',
      name: 'Xã tân hội',
      district_id: '871200',
    },
    {
      id: '10529',
      name: 'Xã bình thạnh',
      district_id: '871200',
    },
    {
      id: '10530',
      name: 'Xã an bình b',
      district_id: '871200',
    },
    {
      id: '10531',
      name: 'Phường an lạc',
      district_id: '871200',
    },
    {
      id: '10532',
      name: 'Xã an bình a',
      district_id: '871200',
    },
    {
      id: '10463',
      name: 'Xã mỹ an hưng a',
      district_id: '870800',
    },
    {
      id: '10464',
      name: 'Xã mỹ an hưng b',
      district_id: '870800',
    },
    {
      id: '10465',
      name: 'Xã tân mỹ',
      district_id: '870800',
    },
    {
      id: '10466',
      name: 'Xã Tân Khánh Trung',
      district_id: '870800',
    },
    {
      id: '10467',
      name: 'Xã long hưng a',
      district_id: '870800',
    },
    {
      id: '10468',
      name: 'Xã long hưng b',
      district_id: '870800',
    },
    {
      id: '10469',
      name: 'Xã vĩnh thạnh',
      district_id: '870800',
    },
    {
      id: '10470',
      name: 'Xã bình thành',
      district_id: '870800',
    },
    {
      id: '10471',
      name: 'Xã định an',
      district_id: '870800',
    },
    {
      id: '10472',
      name: 'Xã định yên',
      district_id: '870800',
    },
    {
      id: '10473',
      name: 'Xã Hội An đông',
      district_id: '870800',
    },
    {
      id: '10474',
      name: 'Xã bình thạnh trung',
      district_id: '870800',
    },
    {
      id: '12222',
      name: 'Thị trấn lấp vò',
      district_id: '870800',
    },
    {
      id: '10487',
      name: 'Phường 1',
      district_id: '870200',
    },
    {
      id: '10488',
      name: 'Phường 2',
      district_id: '870200',
    },
    {
      id: '10489',
      name: 'Phường 3',
      district_id: '870200',
    },
    {
      id: '10490',
      name: 'Phường 4',
      district_id: '870200',
    },
    {
      id: '10491',
      name: 'Phường tân quy đông',
      district_id: '870200',
    },
    {
      id: '10492',
      name: 'Phường an hòa',
      district_id: '870200',
    },
    {
      id: '10493',
      name: 'Xã tân khánh đông',
      district_id: '870200',
    },
    {
      id: '10494',
      name: 'Xã tân quy tây',
      district_id: '870200',
    },
    {
      id: '10495',
      name: 'Xã tân phú đông',
      district_id: '870200',
    },
    {
      id: '10412',
      name: 'Xã phú hiệp',
      district_id: '870500',
    },
    {
      id: '10414',
      name: 'Xã hòa bình',
      district_id: '870500',
    },
    {
      id: '10415',
      name: 'Xã tân công sính',
      district_id: '870500',
    },
    {
      id: '10416',
      name: 'Xã phú đức',
      district_id: '870500',
    },
    {
      id: '10417',
      name: 'Xã phú thành b',
      district_id: '870500',
    },
    {
      id: '10418',
      name: 'Xã phú thành a',
      district_id: '870500',
    },
    {
      id: '10419',
      name: 'Xã an hòa',
      district_id: '870500',
    },
    {
      id: '10420',
      name: 'Xã an long',
      district_id: '870500',
    },
    {
      id: '10421',
      name: 'Xã phú cường',
      district_id: '870500',
    },
    {
      id: '10422',
      name: 'Xã phú ninh',
      district_id: '870500',
    },
    {
      id: '10423',
      name: 'Xã phú thọ',
      district_id: '870500',
    },
    {
      id: '12227',
      name: 'Thị trấn tràm chim',
      district_id: '870500',
    },
    {
      id: '10424',
      name: 'Xã thông bình',
      district_id: '870300',
    },
    {
      id: '10425',
      name: 'Xã bình phú',
      district_id: '870300',
    },
    {
      id: '10426',
      name: 'Xã tân thành a',
      district_id: '870300',
    },
    {
      id: '10427',
      name: 'Xã tân thành b',
      district_id: '870300',
    },
    {
      id: '10430',
      name: 'Xã tân phước',
      district_id: '870300',
    },
    {
      id: '10431',
      name: 'Xã tân công chí',
      district_id: '870300',
    },
    {
      id: '10432',
      name: 'Xã an phước',
      district_id: '870300',
    },
    {
      id: '12216',
      name: 'Thị trấn sa rài',
      district_id: '870300',
    },
    {
      id: '12217',
      name: 'Xã tân hộ cơ',
      district_id: '870300',
    },
    {
      id: '10450',
      name: 'Xã tân quới',
      district_id: '870600',
    },
    {
      id: '10451',
      name: 'Xã tân hòa',
      district_id: '870600',
    },
    {
      id: '10452',
      name: 'Xã an phong',
      district_id: '870600',
    },
    {
      id: '10453',
      name: 'Xã phú lợi',
      district_id: '870600',
    },
    {
      id: '10454',
      name: 'Xã tân mỹ',
      district_id: '870600',
    },
    {
      id: '10455',
      name: 'Xã bình tấn',
      district_id: '870600',
    },
    {
      id: '10456',
      name: 'Xã tân huề',
      district_id: '870600',
    },
    {
      id: '10457',
      name: 'Xã tân bình',
      district_id: '870600',
    },
    {
      id: '10458',
      name: 'Xã tân thạnh',
      district_id: '870600',
    },
    {
      id: '10460',
      name: 'Xã tân long',
      district_id: '870600',
    },
    {
      id: '10461',
      name: 'Xã bình thành',
      district_id: '870600',
    },
    {
      id: '12225',
      name: 'Thị trấn thanh bình',
      district_id: '870600',
    },
    {
      id: '12226',
      name: 'Xã tân phú',
      district_id: '870600',
    },
    {
      id: '10399',
      name: 'Xã thạnh lợi',
      district_id: '870900',
    },
    {
      id: '10400',
      name: 'Xã hưng thạnh',
      district_id: '870900',
    },
    {
      id: '10401',
      name: 'Xã trường xuân',
      district_id: '870900',
    },
    {
      id: '10402',
      name: 'Xã tân kiều',
      district_id: '870900',
    },
    {
      id: '10403',
      name: 'Xã mỹ hòa',
      district_id: '870900',
    },
    {
      id: '10404',
      name: 'Xã mỹ quý',
      district_id: '870900',
    },
    {
      id: '10405',
      name: 'Xã mỹ đông',
      district_id: '870900',
    },
    {
      id: '10406',
      name: 'Xã đốc binh kiều',
      district_id: '870900',
    },
    {
      id: '10408',
      name: 'Xã phú điền',
      district_id: '870900',
    },
    {
      id: '10409',
      name: 'Xã láng biển',
      district_id: '870900',
    },
    {
      id: '10410',
      name: 'Xã thanh mỹ',
      district_id: '870900',
    },
    {
      id: '10411',
      name: 'Xã mỹ an',
      district_id: '870900',
    },
    {
      id: '12224',
      name: 'Thị trấn mỹ an',
      district_id: '870900',
    },
    {
      id: '9125',
      name: 'Xã vĩnh lộc a',
      district_id: '702000',
    },
    {
      id: '9126',
      name: 'Xã vĩnh lộc b',
      district_id: '702000',
    },
    {
      id: '9127',
      name: 'Xã lê minh xuân',
      district_id: '702000',
    },
    {
      id: '9128',
      name: 'Xã tân kiên',
      district_id: '702000',
    },
    {
      id: '9130',
      name: 'Xã bình chánh',
      district_id: '702000',
    },
    {
      id: '9131',
      name: 'Xã tân nhựt',
      district_id: '702000',
    },
    {
      id: '9132',
      name: 'Xã an phú tây',
      district_id: '702000',
    },
    {
      id: '9133',
      name: 'Xã tân quý tây',
      district_id: '702000',
    },
    {
      id: '9134',
      name: 'Xã bình hưng',
      district_id: '702000',
    },
    {
      id: '9135',
      name: 'Xã bình lợi',
      district_id: '702000',
    },
    {
      id: '9136',
      name: 'Xã đa phước',
      district_id: '702000',
    },
    {
      id: '9137',
      name: 'Xã phong phú',
      district_id: '702000',
    },
    {
      id: '9138',
      name: 'Xã phạm văn hai',
      district_id: '702000',
    },
    {
      id: '9139',
      name: 'Xã hưng long',
      district_id: '702000',
    },
    {
      id: '9140',
      name: 'Xã quy đức',
      district_id: '702000',
    },
    {
      id: '9141',
      name: 'Thị trấn tân túc',
      district_id: '702000',
    },
    {
      id: '8527',
      name: 'Phường nghĩa tân',
      district_id: '640100',
    },
    {
      id: '8528',
      name: 'Phường nghĩa phú',
      district_id: '640100',
    },
    {
      id: '8529',
      name: 'Phường nghĩa thành',
      district_id: '640100',
    },
    {
      id: '8530',
      name: 'Phường nghĩa trung',
      district_id: '640100',
    },
    {
      id: '8531',
      name: 'Phường nghĩa đức',
      district_id: '640100',
    },
    {
      id: '8532',
      name: 'Xã đăk nia',
      district_id: '640100',
    },
    {
      id: '8533',
      name: "Xã đăk r'moan",
      district_id: '640100',
    },
    {
      id: '8534',
      name: 'Xã quảng thành',
      district_id: '640100',
    },
    {
      id: '8577',
      name: 'Xã nam dong',
      district_id: '640400',
    },
    {
      id: '8578',
      name: 'Xã tâm thắng',
      district_id: '640400',
    },
    {
      id: '8580',
      name: 'Xã đăk wil',
      district_id: '640400',
    },
    {
      id: '8581',
      name: 'Xã đăk drong',
      district_id: '640400',
    },
    {
      id: '8582',
      name: 'Xã cư knia',
      district_id: '640400',
    },
    {
      id: '8583',
      name: 'Xã trúc sơn',
      district_id: '640400',
    },
    {
      id: '11967',
      name: "Thị trấn ea t'ling",
      district_id: '640400',
    },
    {
      id: '11968',
      name: 'Xã ea pô',
      district_id: '640400',
    },
    {
      id: '8565',
      name: 'Xã nam xuân',
      district_id: '640600',
    },
    {
      id: '8566',
      name: 'Thị trấn đắk mâm',
      district_id: '640600',
    },
    {
      id: '8567',
      name: 'Xã đắk sôr',
      district_id: '640600',
    },
    {
      id: '8569',
      name: 'Xã nam nung',
      district_id: '640600',
    },
    {
      id: '8570',
      name: 'Xã đức xuyên',
      district_id: '640600',
    },
    {
      id: '8571',
      name: 'Xã đắk nang',
      district_id: '640600',
    },
    {
      id: '8572',
      name: 'Xá quảng phú',
      district_id: '640600',
    },
    {
      id: '8574',
      name: 'Xã nam đà',
      district_id: '640600',
    },
    {
      id: '8575',
      name: 'Xã tân thành',
      district_id: '640600',
    },
    {
      id: '8576',
      name: 'Xã Nâm Nđir',
      district_id: '640600',
    },
    {
      id: '11969',
      name: 'Xã buôn choah',
      district_id: '640600',
    },
    {
      id: '11970',
      name: 'Xã đắk drô',
      district_id: '640600',
    },
    {
      id: '10934',
      name: 'Xã đông phước',
      district_id: '910500',
    },
    {
      id: '10935',
      name: 'Xã đông phước a',
      district_id: '910500',
    },
    {
      id: '10936',
      name: 'Xã phú hữu',
      district_id: '910500',
    },
    {
      id: '10937',
      name: 'Xã phú tân',
      district_id: '910500',
    },
    {
      id: '10939',
      name: 'Xã phú an',
      district_id: '910500',
    },
    {
      id: '10940',
      name: 'Xã đông phú',
      district_id: '910500',
    },
    {
      id: '10941',
      name: 'Xã đông thạnh',
      district_id: '910500',
    },
    {
      id: '12314',
      name: 'Thị trấn ngã sáu',
      district_id: '910500',
    },
    {
      id: '12315',
      name: 'Thị trấn mái dầm',
      district_id: '910500',
    },
    {
      id: '10924',
      name: 'Xã thạnh xuân',
      district_id: '910600',
    },
    {
      id: '10925',
      name: 'Xã tân hòa',
      district_id: '910600',
    },
    {
      id: '10926',
      name: 'Xã trường long tây',
      district_id: '910600',
    },
    {
      id: '10927',
      name: 'Xã trường long a',
      district_id: '910600',
    },
    {
      id: '10928',
      name: 'Xã nhơn nghĩa a',
      district_id: '910600',
    },
    {
      id: '10931',
      name: 'Xã tân phú thạnh',
      district_id: '910600',
    },
    {
      id: '10932',
      name: 'Tt cái tắc',
      district_id: '910600',
    },
    {
      id: '10933',
      name: 'Tt một ngàn',
      district_id: '910600',
    },
    {
      id: '12309',
      name: 'Thị trấn cái tắc',
      district_id: '910600',
    },
    {
      id: '12310',
      name: 'Thị trấn một ngàn',
      district_id: '910600',
    },
    {
      id: '12311',
      name: 'Thị trấn rạch gòi',
      district_id: '910600',
    },
    {
      id: '12312',
      name: 'Thị trấn bảy ngàn',
      district_id: '910600',
    },
    {
      id: '10950',
      name: 'Xã tân phú',
      district_id: '910300',
    },
    {
      id: '10951',
      name: 'Xã long bình',
      district_id: '910300',
    },
    {
      id: '10952',
      name: 'Xã long trị a',
      district_id: '910300',
    },
    {
      id: '10953',
      name: 'Phường thuận an',
      district_id: '910300',
    },
    {
      id: '10954',
      name: 'Phường trà lồng',
      district_id: '910300',
    },
    {
      id: '10955',
      name: 'Xã long phú',
      district_id: '910300',
    },
    {
      id: '10956',
      name: 'Xã long trị',
      district_id: '910300',
    },
    {
      id: '10957',
      name: 'Phường vĩnh tường',
      district_id: '910300',
    },
    {
      id: '10958',
      name: 'Phường bình thạnh',
      district_id: '910300',
    },
    {
      id: '10899',
      name: 'Thị trấn kinh cùng',
      district_id: '910400',
    },
    {
      id: '10900',
      name: 'Xã hiệp hưng',
      district_id: '910400',
    },
    {
      id: '10901',
      name: 'Xã thạnh hòa',
      district_id: '910400',
    },
    {
      id: '10902',
      name: 'Xã bình thành',
      district_id: '910400',
    },
    {
      id: '10903',
      name: 'Xã tân long',
      district_id: '910400',
    },
    {
      id: '10904',
      name: 'Thị trấn cây dương',
      district_id: '910400',
    },
    {
      id: '10905',
      name: 'Xã tân phước hưng',
      district_id: '910400',
    },
    {
      id: '10906',
      name: 'Xã tân bình',
      district_id: '910400',
    },
    {
      id: '10907',
      name: 'Xã hòa an',
      district_id: '910400',
    },
    {
      id: '10908',
      name: 'Xã phương bình',
      district_id: '910400',
    },
    {
      id: '10909',
      name: 'Xã phương phú',
      district_id: '910400',
    },
    {
      id: '10910',
      name: 'Xã hòa mỹ',
      district_id: '910400',
    },
    {
      id: '10911',
      name: 'Xã phụng hiệp',
      district_id: '910400',
    },
    {
      id: '10912',
      name: 'Xã long thạnh',
      district_id: '910400',
    },
    {
      id: '10913',
      name: 'Thị trấn búng tàu',
      district_id: '910400',
    },
    {
      id: '10944',
      name: 'Phường ngã bảy',
      district_id: '910700',
    },
    {
      id: '10945',
      name: 'Phường lái hiếu',
      district_id: '910700',
    },
    {
      id: '10946',
      name: 'Phường hiệp thành',
      district_id: '910700',
    },
    {
      id: '10947',
      name: 'Xã Hiệp Lợi',
      district_id: '910700',
    },
    {
      id: '10948',
      name: 'Xã đại thành',
      district_id: '910700',
    },
    {
      id: '10949',
      name: 'Xã tân thành',
      district_id: '910700',
    },
    {
      id: '10890',
      name: 'Phường 3',
      district_id: '910100',
    },
    {
      id: '10891',
      name: 'Phường 4',
      district_id: '910100',
    },
    {
      id: '10892',
      name: 'Phường 5',
      district_id: '910100',
    },
    {
      id: '10893',
      name: 'Phường 7',
      district_id: '910100',
    },
    {
      id: '10894',
      name: 'Xã hỏa lựu',
      district_id: '910100',
    },
    {
      id: '10895',
      name: 'Xã tân tiến',
      district_id: '910100',
    },
    {
      id: '10896',
      name: 'Xã hỏa tiến',
      district_id: '910100',
    },
    {
      id: '10897',
      name: 'Xã vị tân',
      district_id: '910100',
    },
    {
      id: '10898',
      name: 'Phường 1',
      district_id: '910100',
    },
    {
      id: '10914',
      name: 'Xã vị thủy',
      district_id: '910200',
    },
    {
      id: '10915',
      name: 'Xã vĩnh thuận tây',
      district_id: '910200',
    },
    {
      id: '10916',
      name: 'Xã vị đông',
      district_id: '910200',
    },
    {
      id: '10917',
      name: 'Xã vị thắng',
      district_id: '910200',
    },
    {
      id: '10918',
      name: 'Xã vị trung',
      district_id: '910200',
    },
    {
      id: '10919',
      name: 'Xã vĩnh tường',
      district_id: '910200',
    },
    {
      id: '10920',
      name: 'Xã vĩnh trung',
      district_id: '910200',
    },
    {
      id: '10921',
      name: 'Xã vị thanh',
      district_id: '910200',
    },
    {
      id: '10922',
      name: 'Xã vị bình',
      district_id: '910200',
    },
    {
      id: '12313',
      name: 'Thị trấn nàng mau',
      district_id: '910200',
    },
    {
      id: '11561',
      name: 'Xã long điền',
      district_id: '960600',
    },
    {
      id: '11562',
      name: 'Xã long điền tây',
      district_id: '960600',
    },
    {
      id: '11563',
      name: 'Xã an trạch a',
      district_id: '960600',
    },
    {
      id: '11564',
      name: 'Xã an phúc',
      district_id: '960600',
    },
    {
      id: '11565',
      name: 'Xã định thành',
      district_id: '960600',
    },
    {
      id: '11566',
      name: 'Xã định thành a',
      district_id: '960600',
    },
    {
      id: '11567',
      name: 'Xã long điền đông a',
      district_id: '960600',
    },
    {
      id: '11568',
      name: 'Xã điền hải',
      district_id: '960600',
    },
    {
      id: '11569',
      name: 'Xã an trạch',
      district_id: '960600',
    },
    {
      id: '11570',
      name: 'Xã long điền đông',
      district_id: '960600',
    },
    {
      id: '12449',
      name: 'Thị trấn gành hào',
      district_id: '960600',
    },
    {
      id: '11514',
      name: 'Phường 7',
      district_id: '960100',
    },
    {
      id: '11515',
      name: 'Phường 1',
      district_id: '960100',
    },
    {
      id: '11516',
      name: 'Phường 8',
      district_id: '960100',
    },
    {
      id: '11517',
      name: 'Phường 2',
      district_id: '960100',
    },
    {
      id: '11518',
      name: 'Phường 3',
      district_id: '960100',
    },
    {
      id: '11519',
      name: 'Phường 5',
      district_id: '960100',
    },
    {
      id: '11520',
      name: 'Phường nhà mát',
      district_id: '960100',
    },
    {
      id: '11521',
      name: 'Xã hiệp thành',
      district_id: '960100',
    },
    {
      id: '11522',
      name: 'Xã vĩnh trạch',
      district_id: '960100',
    },
    {
      id: '11523',
      name: 'Xã vĩnh trạch đông',
      district_id: '960100',
    },
    {
      id: '11550',
      name: 'Xã phong thạnh',
      district_id: '960400',
    },
    {
      id: '11551',
      name: 'Xã phong thạnh đông',
      district_id: '960400',
    },
    {
      id: '11552',
      name: 'Xã phong tân',
      district_id: '960400',
    },
    {
      id: '11553',
      name: 'Xã tân thạnh',
      district_id: '960400',
    },
    {
      id: '11554',
      name: 'Xã phong thạnh tây',
      district_id: '960400',
    },
    {
      id: '11557',
      name: 'Xã tân phong',
      district_id: '960400',
    },
    {
      id: '11558',
      name: 'Xã phong thạnh a',
      district_id: '960400',
    },
    {
      id: '12444',
      name: 'Phường hộ phòng',
      district_id: '960400',
    },
    {
      id: '12445',
      name: 'Phường 1',
      district_id: '960400',
    },
    {
      id: '12446',
      name: 'Phường láng tròn',
      district_id: '960400',
    },
    {
      id: '11571',
      name: 'Xã vĩnh hậu a',
      district_id: '960700',
    },
    {
      id: '11573',
      name: 'Xã vĩnh bình',
      district_id: '960700',
    },
    {
      id: '11574',
      name: 'Xã vĩnh mỹ a',
      district_id: '960700',
    },
    {
      id: '11575',
      name: 'Xã vĩnh mỹ b',
      district_id: '960700',
    },
    {
      id: '11576',
      name: 'Xã vĩnh thịnh',
      district_id: '960700',
    },
    {
      id: '11577',
      name: 'Xã vĩnh hậu',
      district_id: '960700',
    },
    {
      id: '11578',
      name: 'Xã minh diệu',
      district_id: '960700',
    },
    {
      id: '12450',
      name: 'Thị Trấn Hòa Bình',
      district_id: '960700',
    },
    {
      id: '11542',
      name: 'Xã vĩnh lộc',
      district_id: '960300',
    },
    {
      id: '11543',
      name: 'Xã ninh thạnh lợi',
      district_id: '960300',
    },
    {
      id: '11544',
      name: 'Xã ninh quới',
      district_id: '960300',
    },
    {
      id: '11545',
      name: 'Xã lộc ninh',
      district_id: '960300',
    },
    {
      id: '11546',
      name: 'Xã ninh quới a',
      district_id: '960300',
    },
    {
      id: '11547',
      name: 'Xã ninh hòa',
      district_id: '960300',
    },
    {
      id: '11548',
      name: 'Xã vĩnh lộc a',
      district_id: '960300',
    },
    {
      id: '11549',
      name: 'Xã ninh thạnh lợi a',
      district_id: '960300',
    },
    {
      id: '12447',
      name: 'Thị trấn ngan dừa',
      district_id: '960300',
    },
    {
      id: '11533',
      name: 'Xã vĩnh thanh',
      district_id: '960500',
    },
    {
      id: '11534',
      name: 'Xã vĩnh phú đông',
      district_id: '960500',
    },
    {
      id: '11535',
      name: 'Xã vĩnh phú tây',
      district_id: '960500',
    },
    {
      id: '11537',
      name: 'Xã phong thạnh tây a',
      district_id: '960500',
    },
    {
      id: '11538',
      name: 'Xã phong thạnh tây b',
      district_id: '960500',
    },
    {
      id: '11539',
      name: 'Xã phước long',
      district_id: '960500',
    },
    {
      id: '11540',
      name: 'Xã hưng phú',
      district_id: '960500',
    },
    {
      id: '12448',
      name: 'Thị trấn phước long',
      district_id: '960500',
    },
    {
      id: '11525',
      name: 'Xã châu hưng a',
      district_id: '960200',
    },
    {
      id: '11526',
      name: 'Xã hưng thành',
      district_id: '960200',
    },
    {
      id: '11527',
      name: 'Xã hưng hội',
      district_id: '960200',
    },
    {
      id: '11528',
      name: 'Xã châu thới',
      district_id: '960200',
    },
    {
      id: '11529',
      name: 'Xã vĩnh hưng',
      district_id: '960200',
    },
    {
      id: '11530',
      name: 'Xã vĩnh hưng a',
      district_id: '960200',
    },
    {
      id: '11531',
      name: 'Xã long thạnh',
      district_id: '960200',
    },
    {
      id: '11532',
      name: 'Thị trấn châu hưng',
      district_id: '960200',
    },
    {
      id: '4255',
      name: 'Xã thanh luông',
      district_id: '380300',
    },
    {
      id: '4256',
      name: 'Xã thanh hưng',
      district_id: '380300',
    },
    {
      id: '4257',
      name: 'Xã thanh chăn',
      district_id: '380300',
    },
    {
      id: '4258',
      name: 'Xã thanh xương',
      district_id: '380300',
    },
    {
      id: '4259',
      name: 'Xã thanh an',
      district_id: '380300',
    },
    {
      id: '4260',
      name: 'Xã Thanh  Yên',
      district_id: '380300',
    },
    {
      id: '4261',
      name: 'Xã núa ngam',
      district_id: '380300',
    },
    {
      id: '4262',
      name: 'Xã sam mứn',
      district_id: '380300',
    },
    {
      id: '4263',
      name: 'Xã noong hẹt',
      district_id: '380300',
    },
    {
      id: '4264',
      name: 'Xã nà tấu',
      district_id: '380300',
    },
    {
      id: '4265',
      name: 'Xã mường pồn',
      district_id: '380300',
    },
    {
      id: '4266',
      name: 'Xã thanh nưa',
      district_id: '380300',
    },
    {
      id: '4267',
      name: 'Xã nà nhạn',
      district_id: '380300',
    },
    {
      id: '4268',
      name: 'Xã mường phăng',
      district_id: '380300',
    },
    {
      id: '4269',
      name: 'Xã noong luống',
      district_id: '380300',
    },
    {
      id: '4270',
      name: 'Xã pa thơm',
      district_id: '380300',
    },
    {
      id: '4271',
      name: 'Xã na ư',
      district_id: '380300',
    },
    {
      id: '4272',
      name: 'Xã mường nhà',
      district_id: '380300',
    },
    {
      id: '4273',
      name: 'Xã mường lói',
      district_id: '380300',
    },
    {
      id: '4274',
      name: 'Xã pom lót',
      district_id: '380300',
    },
    {
      id: '4275',
      name: 'Xã hẹ muông',
      district_id: '380300',
    },
    {
      id: '4276',
      name: 'Xã hua thanh',
      district_id: '380300',
    },
    {
      id: '4277',
      name: 'Xã na tông',
      district_id: '380300',
    },
    {
      id: '4278',
      name: 'Xã phu luông',
      district_id: '380300',
    },
    {
      id: '4279',
      name: 'Xã pá khoang',
      district_id: '380300',
    },
    {
      id: '11751',
      name: 'Xã thanh yên',
      district_id: '380300',
    },
    {
      id: '4280',
      name: 'Xã luân giói',
      district_id: '380700',
    },
    {
      id: '4281',
      name: 'Xã pú nhi',
      district_id: '380700',
    },
    {
      id: '4282',
      name: 'Xã phình giàng',
      district_id: '380700',
    },
    {
      id: '4283',
      name: 'Xã pú hồng',
      district_id: '380700',
    },
    {
      id: '4284',
      name: 'Xã chiềng sơ',
      district_id: '380700',
    },
    {
      id: '4285',
      name: 'Thị trấn điện biên đông',
      district_id: '380700',
    },
    {
      id: '4286',
      name: 'Xã na son',
      district_id: '380700',
    },
    {
      id: '4287',
      name: 'Xã mường luân',
      district_id: '380700',
    },
    {
      id: '4289',
      name: 'Xã tia dình',
      district_id: '380700',
    },
    {
      id: '4290',
      name: 'Xã háng lìa',
      district_id: '380700',
    },
    {
      id: '4291',
      name: 'Xã keo lôm',
      district_id: '380700',
    },
    {
      id: '4292',
      name: 'Xã phì nhừ',
      district_id: '380700',
    },
    {
      id: '4293',
      name: 'Xã xa dung',
      district_id: '380700',
    },
    {
      id: '11748',
      name: 'Xã nong u',
      district_id: '380700',
    },
    {
      id: '4246',
      name: 'Xã thanh minh',
      district_id: '380100',
    },
    {
      id: '4247',
      name: 'Phường tân thanh',
      district_id: '380100',
    },
    {
      id: '4248',
      name: 'Phường mường thanh',
      district_id: '380100',
    },
    {
      id: '4249',
      name: 'Phường him lam',
      district_id: '380100',
    },
    {
      id: '4250',
      name: 'Phường thanh bình',
      district_id: '380100',
    },
    {
      id: '4251',
      name: 'Phường thanh trường',
      district_id: '380100',
    },
    {
      id: '4252',
      name: 'Phường nam thanh',
      district_id: '380100',
    },
    {
      id: '4253',
      name: 'Phường noong bua',
      district_id: '380100',
    },
    {
      id: '4254',
      name: 'Xã tà lèng',
      district_id: '380100',
    },
    {
      id: '4383',
      name: 'Thị Trấn Mường áng',
      district_id: '380900',
    },
    {
      id: '4384',
      name: 'Xã ẳng nưa',
      district_id: '380900',
    },
    {
      id: '4385',
      name: 'Xã mường đăng',
      district_id: '380900',
    },
    {
      id: '4386',
      name: 'Xã búng lao',
      district_id: '380900',
    },
    {
      id: '4387',
      name: 'Xã mường lạn',
      district_id: '380900',
    },
    {
      id: '4388',
      name: 'Xã ẳng tở',
      district_id: '380900',
    },
    {
      id: '4389',
      name: 'Xã ẳng cang',
      district_id: '380900',
    },
    {
      id: '4390',
      name: 'Xã xuân lao',
      district_id: '380900',
    },
    {
      id: '4391',
      name: 'Xã nặm lịch',
      district_id: '380900',
    },
    {
      id: '4392',
      name: 'Xã ngối cáy',
      district_id: '380900',
    },
    {
      id: '4313',
      name: 'Thị trấn mường chà',
      district_id: '380500',
    },
    {
      id: '4315',
      name: 'Xã mường tùng',
      district_id: '380500',
    },
    {
      id: '4316',
      name: 'Xã pa ham',
      district_id: '380500',
    },
    {
      id: '4319',
      name: 'Xã hứa ngài',
      district_id: '380500',
    },
    {
      id: '4320',
      name: 'Xã huổi lèng',
      district_id: '380500',
    },
    {
      id: '4322',
      name: 'Xã mường mươn',
      district_id: '380500',
    },
    {
      id: '4323',
      name: 'Xã na sang',
      district_id: '380500',
    },
    {
      id: '4324',
      name: 'Xã ma thi hồ',
      district_id: '380500',
    },
    {
      id: '4327',
      name: 'Xã nậm nèn',
      district_id: '380500',
    },
    {
      id: '4328',
      name: 'Xã huổi mí',
      district_id: '380500',
    },
    {
      id: '4329',
      name: 'Xã xá tổng',
      district_id: '380500',
    },
    {
      id: '11752',
      name: 'Xã sa lông',
      district_id: '380500',
    },
    {
      id: '4348',
      name: 'Phường na lay',
      district_id: '380200',
    },
    {
      id: '4349',
      name: 'Phường sông đà',
      district_id: '380200',
    },
    {
      id: '11745',
      name: 'Xã lay nưa',
      district_id: '380200',
    },
    {
      id: '4353',
      name: 'Xã mường toong',
      district_id: '380800',
    },
    {
      id: '4354',
      name: 'Xã quảng lâm',
      district_id: '380800',
    },
    {
      id: '4355',
      name: 'Xã nậm kè',
      district_id: '380800',
    },
    {
      id: '4356',
      name: 'Xã chung chải',
      district_id: '380800',
    },
    {
      id: '4357',
      name: 'Xã sín thầu',
      district_id: '380800',
    },
    {
      id: '4363',
      name: 'Xã sen thượng',
      district_id: '380800',
    },
    {
      id: '4364',
      name: 'Xã nậm vi',
      district_id: '380800',
    },
    {
      id: '4365',
      name: 'Xã pá mỳ',
      district_id: '380800',
    },
    {
      id: '4366',
      name: 'Xã leng su sìn',
      district_id: '380800',
    },
    {
      id: '11749',
      name: 'Xã mường nhé',
      district_id: '380800',
    },
    {
      id: '11750',
      name: 'Xã huổi lếnh',
      district_id: '380800',
    },
    {
      id: '4334',
      name: 'Xã huổi só',
      district_id: '380600',
    },
    {
      id: '4335',
      name: 'Thị trấn tủa chùa',
      district_id: '380600',
    },
    {
      id: '4337',
      name: 'Xã mường báng',
      district_id: '380600',
    },
    {
      id: '4338',
      name: 'Xã mường đun',
      district_id: '380600',
    },
    {
      id: '4339',
      name: 'Xã sáng nhé',
      district_id: '380600',
    },
    {
      id: '4341',
      name: 'Xã sính phình',
      district_id: '380600',
    },
    {
      id: '4342',
      name: 'Xã tả phìn',
      district_id: '380600',
    },
    {
      id: '4344',
      name: 'Xã trung thu',
      district_id: '380600',
    },
    {
      id: '4345',
      name: 'Xã tủa thàng',
      district_id: '380600',
    },
    {
      id: '4347',
      name: 'Xã lao xả phình',
      district_id: '380600',
    },
    {
      id: '11746',
      name: 'Xã tả sìn thàng',
      district_id: '380600',
    },
    {
      id: '11747',
      name: 'Xã xín chải',
      district_id: '380600',
    },
    {
      id: '4294',
      name: 'Xã tỏa tình',
      district_id: '380400',
    },
    {
      id: '4295',
      name: 'Xã mường thín',
      district_id: '380400',
    },
    {
      id: '4296',
      name: 'Xã ta ma',
      district_id: '380400',
    },
    {
      id: '4297',
      name: 'Xã chiềng sinh',
      district_id: '380400',
    },
    {
      id: '4298',
      name: 'Xã mường mun',
      district_id: '380400',
    },
    {
      id: '4299',
      name: 'Xã phình sáng',
      district_id: '380400',
    },
    {
      id: '4300',
      name: 'Xã pú nhung',
      district_id: '380400',
    },
    {
      id: '4301',
      name: 'Xã tênh phông',
      district_id: '380400',
    },
    {
      id: '4302',
      name: 'Thị trấn tuần giáo',
      district_id: '380400',
    },
    {
      id: '4303',
      name: 'Xã quài cang',
      district_id: '380400',
    },
    {
      id: '4304',
      name: 'Xã quài nưa',
      district_id: '380400',
    },
    {
      id: '4305',
      name: 'Xã quài tở',
      district_id: '380400',
    },
    {
      id: '4306',
      name: 'Xã mùn chung',
      district_id: '380400',
    },
    {
      id: '4307',
      name: 'Xã nà sáy',
      district_id: '380400',
    },
    {
      id: '4308',
      name: 'Xã chiềng đông',
      district_id: '380400',
    },
    {
      id: '4309',
      name: 'Xã mường khong',
      district_id: '380400',
    },
    {
      id: '4310',
      name: 'Xã pú xi',
      district_id: '380400',
    },
    {
      id: '4311',
      name: 'Xã rạng đông',
      district_id: '380400',
    },
    {
      id: '4312',
      name: 'Xã nà tòng',
      district_id: '380400',
    },
    {
      id: '276',
      name: 'Phường quang trung',
      district_id: '101500',
    },
    {
      id: '277',
      name: 'Phường Hà Cầu',
      district_id: '101500',
    },
    {
      id: '278',
      name: 'Phường Mộ Lao',
      district_id: '101500',
    },
    {
      id: '279',
      name: 'Phường văn quán',
      district_id: '101500',
    },
    {
      id: '280',
      name: 'Phường yết kiêu',
      district_id: '101500',
    },
    {
      id: '281',
      name: 'Phường phúc la',
      district_id: '101500',
    },
    {
      id: '282',
      name: 'Phường biên giang',
      district_id: '101500',
    },
    {
      id: '283',
      name: 'Phường la khê',
      district_id: '101500',
    },
    {
      id: '288',
      name: 'Phường vạn phúc',
      district_id: '101500',
    },
    {
      id: '291',
      name: 'Phường phú la',
      district_id: '101500',
    },
    {
      id: '292',
      name: 'Phường nguyễn trãi',
      district_id: '101500',
    },
    {
      id: '12475',
      name: 'Phường đồng mai',
      district_id: '101500',
    },
    {
      id: '12476',
      name: 'Phường dương nội',
      district_id: '101500',
    },
    {
      id: '12477',
      name: 'Phường kiến hưng',
      district_id: '101500',
    },
    {
      id: '12478',
      name: 'Phường phú lãm',
      district_id: '101500',
    },
    {
      id: '12479',
      name: 'Phường phú lương',
      district_id: '101500',
    },
    {
      id: '12480',
      name: 'Phường yên nghĩa',
      district_id: '101500',
    },
    {
      id: '314',
      name: 'Xã hạ mỗ',
      district_id: '102200',
    },
    {
      id: '315',
      name: 'Xã liên hà',
      district_id: '102200',
    },
    {
      id: '316',
      name: 'Xã liên trung',
      district_id: '102200',
    },
    {
      id: '317',
      name: 'Xã tân hội',
      district_id: '102200',
    },
    {
      id: '318',
      name: 'Xã tân lập',
      district_id: '102200',
    },
    {
      id: '319',
      name: 'Thị trấn phùng',
      district_id: '102200',
    },
    {
      id: '320',
      name: 'Xã phương đình',
      district_id: '102200',
    },
    {
      id: '321',
      name: 'Xã thượng mỗ',
      district_id: '102200',
    },
    {
      id: '322',
      name: 'Xã trung châu',
      district_id: '102200',
    },
    {
      id: '323',
      name: 'Xã thọ an',
      district_id: '102200',
    },
    {
      id: '324',
      name: 'Xã thọ xuân',
      district_id: '102200',
    },
    {
      id: '325',
      name: 'Xã đan phượng',
      district_id: '102200',
    },
    {
      id: '326',
      name: 'Xã đồng tháp',
      district_id: '102200',
    },
    {
      id: '327',
      name: 'Xã hồng hà',
      district_id: '102200',
    },
    {
      id: '328',
      name: 'Xã liên hồng',
      district_id: '102200',
    },
    {
      id: '329',
      name: 'Xã song phượng',
      district_id: '102200',
    },
    {
      id: '293',
      name: 'Xã lại yên',
      district_id: '102300',
    },
    {
      id: '294',
      name: 'Xã cát quế',
      district_id: '102300',
    },
    {
      id: '295',
      name: 'Xã kim chung',
      district_id: '102300',
    },
    {
      id: '296',
      name: 'Xã song phương',
      district_id: '102300',
    },
    {
      id: '297',
      name: 'Xã tiền yên',
      district_id: '102300',
    },
    {
      id: '298',
      name: 'Xã dương liễu',
      district_id: '102300',
    },
    {
      id: '299',
      name: 'Xã an khánh',
      district_id: '102300',
    },
    {
      id: '300',
      name: 'Xã yên sở',
      district_id: '102300',
    },
    {
      id: '301',
      name: 'Thị trấn trạm trôi',
      district_id: '102300',
    },
    {
      id: '302',
      name: 'Xã đức giang',
      district_id: '102300',
    },
    {
      id: '303',
      name: 'Xã sơn đồng',
      district_id: '102300',
    },
    {
      id: '304',
      name: 'Xã vân canh',
      district_id: '102300',
    },
    {
      id: '305',
      name: 'Xã vân côn',
      district_id: '102300',
    },
    {
      id: '306',
      name: 'Xã la phù',
      district_id: '102300',
    },
    {
      id: '307',
      name: 'Xã di trạch',
      district_id: '102300',
    },
    {
      id: '308',
      name: 'Xã đông la',
      district_id: '102300',
    },
    {
      id: '309',
      name: 'Xã đức thượng',
      district_id: '102300',
    },
    {
      id: '310',
      name: 'Xã minh khai',
      district_id: '102300',
    },
    {
      id: '311',
      name: 'Xã an thượng',
      district_id: '102300',
    },
    {
      id: '312',
      name: 'Xã đắc sở',
      district_id: '102300',
    },
    {
      id: '532',
      name: 'Xã an mỹ',
      district_id: '102500',
    },
    {
      id: '533',
      name: 'Xã bột xuyên',
      district_id: '102500',
    },
    {
      id: '534',
      name: 'Xã phúc lâm',
      district_id: '102500',
    },
    {
      id: '535',
      name: 'Xã an phú',
      district_id: '102500',
    },
    {
      id: '536',
      name: 'Xã hợp thanh',
      district_id: '102500',
    },
    {
      id: '537',
      name: 'Xã mỹ thành',
      district_id: '102500',
    },
    {
      id: '538',
      name: 'Xã đồng tâm',
      district_id: '102500',
    },
    {
      id: '539',
      name: 'Xã hương sơn',
      district_id: '102500',
    },
    {
      id: '540',
      name: 'Xã đốc tín',
      district_id: '102500',
    },
    {
      id: '541',
      name: 'Xã vạn kim',
      district_id: '102500',
    },
    {
      id: '542',
      name: 'Xã hùng tiến',
      district_id: '102500',
    },
    {
      id: '543',
      name: 'Xã an tiến',
      district_id: '102500',
    },
    {
      id: '544',
      name: 'Xã đại hưng',
      district_id: '102500',
    },
    {
      id: '545',
      name: 'Xã hợp tiến',
      district_id: '102500',
    },
    {
      id: '546',
      name: 'Xã phù lưu tế',
      district_id: '102500',
    },
    {
      id: '547',
      name: 'Xã phùng xá',
      district_id: '102500',
    },
    {
      id: '548',
      name: 'Xã xuy xá',
      district_id: '102500',
    },
    {
      id: '549',
      name: 'Xã lê thanh',
      district_id: '102500',
    },
    {
      id: '550',
      name: 'Xã hồng sơn',
      district_id: '102500',
    },
    {
      id: '551',
      name: 'Xã tuy lai',
      district_id: '102500',
    },
    {
      id: '552',
      name: 'Xã thượng lâm',
      district_id: '102500',
    },
    {
      id: '553',
      name: 'Thị trấn đại nghĩa',
      district_id: '102500',
    },
    {
      id: '330',
      name: 'Xã tam thuấn',
      district_id: '101800',
    },
    {
      id: '331',
      name: 'Xã thanh đa',
      district_id: '101800',
    },
    {
      id: '333',
      name: 'Xã  thọ Lộc',
      district_id: '101800',
    },
    {
      id: '334',
      name: 'Thị trấn phúc thọ',
      district_id: '101800',
    },
    {
      id: '335',
      name: 'Xã phúc hòa',
      district_id: '101800',
    },
    {
      id: '336',
      name: 'Xã trạch mỹ lộc',
      district_id: '101800',
    },
    {
      id: '337',
      name: 'Xã tích giang',
      district_id: '101800',
    },
    {
      id: '338',
      name: 'Xã sen chiểu',
      district_id: '101800',
    },
    {
      id: '339',
      name: 'Xã phương độ',
      district_id: '101800',
    },
    {
      id: '340',
      name: 'Xã cẩm đình',
      district_id: '101800',
    },
    {
      id: '341',
      name: 'Xã võng xuyên',
      district_id: '101800',
    },
    {
      id: '342',
      name: 'Xã long xuyên',
      district_id: '101800',
    },
    {
      id: '343',
      name: 'Xã thượng cốc',
      district_id: '101800',
    },
    {
      id: '344',
      name: 'Xã xuân phú',
      district_id: '101800',
    },
    {
      id: '345',
      name: 'Xã vân phúc',
      district_id: '101800',
    },
    {
      id: '346',
      name: 'Xã  vân Nam',
      district_id: '101800',
    },
    {
      id: '347',
      name: 'Xã vân hà',
      district_id: '101800',
    },
    {
      id: '348',
      name: 'Xã  hát Môn',
      district_id: '101800',
    },
    {
      id: '349',
      name: 'Xã hiệp thuận',
      district_id: '101800',
    },
    {
      id: '350',
      name: 'Xã tam hiệp',
      district_id: '101800',
    },
    {
      id: '351',
      name: 'Xã ngọc tảo',
      district_id: '101800',
    },
    {
      id: '352',
      name: 'Xã phụng thượng',
      district_id: '101800',
    },
    {
      id: '353',
      name: 'Xã hát môn',
      district_id: '101800',
    },
    {
      id: '354',
      name: 'Xã Thọ Lộc',
      district_id: '101800',
    },
    {
      id: '12586',
      name: 'Xã Xuân Đình',
      district_id: '101800',
    },
    {
      id: '12793',
      name: 'Xã Liên Hiệp',
      district_id: '101800',
    },
    {
      id: '427',
      name: 'Xã đồng quang',
      district_id: '102000',
    },
    {
      id: '428',
      name: 'Xã tân phú',
      district_id: '102000',
    },
    {
      id: '429',
      name: 'Xã đông xuân',
      district_id: '102000',
    },
    {
      id: '430',
      name: 'Thị trấn quốc oai',
      district_id: '102000',
    },
    {
      id: '431',
      name: 'Xã sài sơn',
      district_id: '102000',
    },
    {
      id: '432',
      name: 'Xã phượng cách',
      district_id: '102000',
    },
    {
      id: '433',
      name: 'Xã yên sơn',
      district_id: '102000',
    },
    {
      id: '434',
      name: 'Xã thạch thán',
      district_id: '102000',
    },
    {
      id: '435',
      name: 'Xã ngọc mỹ',
      district_id: '102000',
    },
    {
      id: '436',
      name: 'Xã nghĩa hương',
      district_id: '102000',
    },
    {
      id: '437',
      name: 'Xã cấn hữu',
      district_id: '102000',
    },
    {
      id: '438',
      name: 'Xã ngọc liệp',
      district_id: '102000',
    },
    {
      id: '439',
      name: 'Xã liệp tuyết',
      district_id: '102000',
    },
    {
      id: '440',
      name: 'Xã tuyết nghĩa',
      district_id: '102000',
    },
    {
      id: '441',
      name: 'Xã đông yên',
      district_id: '102000',
    },
    {
      id: '442',
      name: 'Xã hòa thạch',
      district_id: '102000',
    },
    {
      id: '443',
      name: 'Xã phú cát',
      district_id: '102000',
    },
    {
      id: '444',
      name: 'Xã phú mãn',
      district_id: '102000',
    },
    {
      id: '445',
      name: 'Xã cộng hòa',
      district_id: '102000',
    },
    {
      id: '446',
      name: 'Xã đại thành',
      district_id: '102000',
    },
    {
      id: '447',
      name: 'Xã tân hòa',
      district_id: '102000',
    },
    {
      id: '404',
      name: 'Xã canh nậu',
      district_id: '101900',
    },
    {
      id: '405',
      name: 'Xã cẩm yên',
      district_id: '101900',
    },
    {
      id: '406',
      name: 'Xã cần kiệm',
      district_id: '101900',
    },
    {
      id: '407',
      name: 'Xã chàng sơn',
      district_id: '101900',
    },
    {
      id: '408',
      name: 'Xã dị nậu',
      district_id: '101900',
    },
    {
      id: '409',
      name: 'Xã đại đồng',
      district_id: '101900',
    },
    {
      id: '410',
      name: 'Xã đồng trúc',
      district_id: '101900',
    },
    {
      id: '411',
      name: 'Xã hạ bằng',
      district_id: '101900',
    },
    {
      id: '412',
      name: 'Xã hương ngải',
      district_id: '101900',
    },
    {
      id: '413',
      name: 'Thị trấn liên quan',
      district_id: '101900',
    },
    {
      id: '414',
      name: 'Xã tiến xuân',
      district_id: '101900',
    },
    {
      id: '415',
      name: 'Xã thạch xá',
      district_id: '101900',
    },
    {
      id: '416',
      name: 'Xã yên bình',
      district_id: '101900',
    },
    {
      id: '417',
      name: 'Xã yên trung',
      district_id: '101900',
    },
    {
      id: '418',
      name: 'Xã bình phú',
      district_id: '101900',
    },
    {
      id: '419',
      name: 'Xã bình yên',
      district_id: '101900',
    },
    {
      id: '420',
      name: 'Xã hữu bằng',
      district_id: '101900',
    },
    {
      id: '421',
      name: 'Xã kim quan',
      district_id: '101900',
    },
    {
      id: '422',
      name: 'Xã lại thượng',
      district_id: '101900',
    },
    {
      id: '423',
      name: 'Xã phú kim',
      district_id: '101900',
    },
    {
      id: '424',
      name: 'Xã phùng xá',
      district_id: '101900',
    },
    {
      id: '425',
      name: 'Xã tân xã',
      district_id: '101900',
    },
    {
      id: '426',
      name: 'Xã thạch hòa',
      district_id: '101900',
    },
    {
      id: '582',
      name: 'Thị trấn thường tín',
      district_id: '102700',
    },
    {
      id: '583',
      name: 'Xã dũng tiến',
      district_id: '102700',
    },
    {
      id: '584',
      name: 'Xã nguyễn trãi',
      district_id: '102700',
    },
    {
      id: '585',
      name: 'Xã tiền phong',
      district_id: '102700',
    },
    {
      id: '586',
      name: 'Xã văn phú',
      district_id: '102700',
    },
    {
      id: '587',
      name: 'Xã ninh sở',
      district_id: '102700',
    },
    {
      id: '588',
      name: 'Xã tự nhiên',
      district_id: '102700',
    },
    {
      id: '589',
      name: 'Xã thư phú',
      district_id: '102700',
    },
    {
      id: '590',
      name: 'Xã liên phương',
      district_id: '102700',
    },
    {
      id: '591',
      name: 'Xã quất động',
      district_id: '102700',
    },
    {
      id: '592',
      name: 'Xã lê lợi',
      district_id: '102700',
    },
    {
      id: '593',
      name: 'Xã thắng lợi',
      district_id: '102700',
    },
    {
      id: '594',
      name: 'Xã tô hiệu',
      district_id: '102700',
    },
    {
      id: '595',
      name: 'Xã minh cường',
      district_id: '102700',
    },
    {
      id: '596',
      name: 'Xã tân minh',
      district_id: '102700',
    },
    {
      id: '597',
      name: 'Xã hiền giang',
      district_id: '102700',
    },
    {
      id: '598',
      name: 'Xã hòa bình',
      district_id: '102700',
    },
    {
      id: '599',
      name: 'Xã khánh hà',
      district_id: '102700',
    },
    {
      id: '600',
      name: 'Xã nhị khê',
      district_id: '102700',
    },
    {
      id: '601',
      name: 'Xã duyên thái',
      district_id: '102700',
    },
    {
      id: '602',
      name: 'Xã hồng vân',
      district_id: '102700',
    },
    {
      id: '603',
      name: 'Xã vân tảo',
      district_id: '102700',
    },
    {
      id: '604',
      name: 'Xã văn bình',
      district_id: '102700',
    },
    {
      id: '605',
      name: 'Xã hà hồi',
      district_id: '102700',
    },
    {
      id: '606',
      name: 'Xã chương dương',
      district_id: '102700',
    },
    {
      id: '607',
      name: 'Xã văn tự',
      district_id: '102700',
    },
    {
      id: '608',
      name: 'Xã thống nhất',
      district_id: '102700',
    },
    {
      id: '609',
      name: 'Xã vạn điểm',
      district_id: '102700',
    },
    {
      id: '610',
      name: 'Xã nghiêm xuyên',
      district_id: '102700',
    },
    {
      id: '502',
      name: 'Xã cao thành',
      district_id: '102600',
    },
    {
      id: '503',
      name: 'Xã đại cường',
      district_id: '102600',
    },
    {
      id: '504',
      name: 'Xã đại hùng',
      district_id: '102600',
    },
    {
      id: '505',
      name: 'Xã đội bình',
      district_id: '102600',
    },
    {
      id: '506',
      name: 'Xã đông lỗ',
      district_id: '102600',
    },
    {
      id: '507',
      name: 'Xã đồng tân',
      district_id: '102600',
    },
    {
      id: '508',
      name: 'Xã hòa lâm',
      district_id: '102600',
    },
    {
      id: '509',
      name: 'Xã hòa phú',
      district_id: '102600',
    },
    {
      id: '510',
      name: 'Xã hòa xá',
      district_id: '102600',
    },
    {
      id: '511',
      name: 'Xã trung tú',
      district_id: '102600',
    },
    {
      id: '512',
      name: 'Xã trường thịnh',
      district_id: '102600',
    },
    {
      id: '513',
      name: 'Xã viên an',
      district_id: '102600',
    },
    {
      id: '514',
      name: 'Thị trấn vân đình',
      district_id: '102600',
    },
    {
      id: '515',
      name: 'Xã đồng tiến',
      district_id: '102600',
    },
    {
      id: '516',
      name: 'Xã hoa sơn',
      district_id: '102600',
    },
    {
      id: '517',
      name: 'Xã hòa nam',
      district_id: '102600',
    },
    {
      id: '518',
      name: 'Xã hồng quang',
      district_id: '102600',
    },
    {
      id: '519',
      name: 'Xã kim đường',
      district_id: '102600',
    },
    {
      id: '520',
      name: 'Xã liên bạt',
      district_id: '102600',
    },
    {
      id: '521',
      name: 'Xã lưu hoàng',
      district_id: '102600',
    },
    {
      id: '522',
      name: 'Xã minh đức',
      district_id: '102600',
    },
    {
      id: '523',
      name: 'Xã phù lưu',
      district_id: '102600',
    },
    {
      id: '524',
      name: 'Xã phương tú',
      district_id: '102600',
    },
    {
      id: '525',
      name: 'Xã quảng phú cầu',
      district_id: '102600',
    },
    {
      id: '526',
      name: 'Xã sơn công',
      district_id: '102600',
    },
    {
      id: '527',
      name: 'Xã tảo dương văn',
      district_id: '102600',
    },
    {
      id: '528',
      name: 'Xã trầm lộng',
      district_id: '102600',
    },
    {
      id: '529',
      name: 'Xã vạn thái',
      district_id: '102600',
    },
    {
      id: '530',
      name: 'Xã viên nội',
      district_id: '102600',
    },
    {
      id: '554',
      name: 'Xã quang lãng',
      district_id: '102800',
    },
    {
      id: '555',
      name: 'Xã tân dân',
      district_id: '102800',
    },
    {
      id: '556',
      name: 'Xã sơn hà',
      district_id: '102800',
    },
    {
      id: '557',
      name: 'Xã phúc tiến',
      district_id: '102800',
    },
    {
      id: '558',
      name: 'Xã phú yên',
      district_id: '102800',
    },
    {
      id: '559',
      name: 'Xã hồng thái',
      district_id: '102800',
    },
    {
      id: '560',
      name: 'Xã khai thái',
      district_id: '102800',
    },
    {
      id: '561',
      name: 'Xã văn nhân',
      district_id: '102800',
    },
    {
      id: '562',
      name: 'Xã tri thủy',
      district_id: '102800',
    },
    {
      id: '563',
      name: 'Xã minh tân',
      district_id: '102800',
    },
    {
      id: '564',
      name: 'Xã hồng minh',
      district_id: '102800',
    },
    {
      id: '565',
      name: 'Xã phượng dực',
      district_id: '102800',
    },
    {
      id: '566',
      name: 'Xã đại thắng',
      district_id: '102800',
    },
    {
      id: '567',
      name: 'Xã tri trung',
      district_id: '102800',
    },
    {
      id: '568',
      name: 'Xã văn hoàng',
      district_id: '102800',
    },
    {
      id: '569',
      name: 'Xã phú túc',
      district_id: '102800',
    },
    {
      id: '570',
      name: 'Xã quang trung',
      district_id: '102800',
    },
    {
      id: '571',
      name: 'Xã nam triều',
      district_id: '102800',
    },
    {
      id: '572',
      name: 'Xã vân từ',
      district_id: '102800',
    },
    {
      id: '573',
      name: 'Xã châu can',
      district_id: '102800',
    },
    {
      id: '574',
      name: 'Xã bạch hạ',
      district_id: '102800',
    },
    {
      id: '575',
      name: 'Xã hoàng long',
      district_id: '102800',
    },
    {
      id: '576',
      name: 'Xã chuyên mỹ',
      district_id: '102800',
    },
    {
      id: '577',
      name: 'Xã đại xuyên',
      district_id: '102800',
    },
    {
      id: '578',
      name: 'Xã thụy phú',
      district_id: '102800',
    },
    {
      id: '579',
      name: 'Xã nam phong',
      district_id: '102800',
    },
    {
      id: '580',
      name: 'Thị trấn phú minh',
      district_id: '102800',
    },
    {
      id: '581',
      name: 'Thị trấn phú xuyên',
      district_id: '102800',
    },
    {
      id: '12737',
      name: 'Xã Nam Tiến',
      district_id: '102800',
    },
    {
      id: '9250',
      name: 'Thị trấn cần thạnh',
      district_id: '702400',
    },
    {
      id: '9251',
      name: 'Xã an thới đông',
      district_id: '702400',
    },
    {
      id: '9252',
      name: 'Xã lý nhơn',
      district_id: '702400',
    },
    {
      id: '9253',
      name: 'Xã tam thôn hiệp',
      district_id: '702400',
    },
    {
      id: '9254',
      name: 'Xã bình khánh',
      district_id: '702400',
    },
    {
      id: '9255',
      name: 'Xã long hòa',
      district_id: '702400',
    },
    {
      id: '9256',
      name: 'Xã thạnh an',
      district_id: '702400',
    },
    {
      id: '9243',
      name: 'Xã phú xuân',
      district_id: '702300',
    },
    {
      id: '9244',
      name: 'Xã long thới',
      district_id: '702300',
    },
    {
      id: '9245',
      name: 'Xã hiệp phước',
      district_id: '702300',
    },
    {
      id: '9246',
      name: 'Xã phước lộc',
      district_id: '702300',
    },
    {
      id: '9247',
      name: 'Thị trấn nhà bè',
      district_id: '702300',
    },
    {
      id: '9248',
      name: 'Xã nhơn đức',
      district_id: '702300',
    },
    {
      id: '12197',
      name: 'Xã phước kiển',
      district_id: '702300',
    },
    {
      id: '10577',
      name: 'Xã long hoà',
      district_id: '880500',
    },
    {
      id: '10578',
      name: 'Xã phú hiệp',
      district_id: '880500',
    },
    {
      id: '10579',
      name: 'Thị trấn phú mỹ',
      district_id: '880500',
    },
    {
      id: '10580',
      name: 'Thị trấn chợ vàm',
      district_id: '880500',
    },
    {
      id: '10581',
      name: 'Xã phú long',
      district_id: '880500',
    },
    {
      id: '10582',
      name: 'Xã phú lâm',
      district_id: '880500',
    },
    {
      id: '10583',
      name: 'Xã phú thạnh',
      district_id: '880500',
    },
    {
      id: '10584',
      name: 'Xã phú an',
      district_id: '880500',
    },
    {
      id: '10585',
      name: 'Xã phú xuân',
      district_id: '880500',
    },
    {
      id: '10586',
      name: 'Xã hiệp xương',
      district_id: '880500',
    },
    {
      id: '10587',
      name: 'Xã phú bình',
      district_id: '880500',
    },
    {
      id: '10588',
      name: 'Xã phú hưng',
      district_id: '880500',
    },
    {
      id: '10589',
      name: 'Xã bình thạnh đông',
      district_id: '880500',
    },
    {
      id: '10590',
      name: 'Xã tân hoà',
      district_id: '880500',
    },
    {
      id: '10591',
      name: 'Xã tân trung',
      district_id: '880500',
    },
    {
      id: '10592',
      name: 'Xã phú thọ',
      district_id: '880500',
    },
    {
      id: '10593',
      name: 'Xã phú thành',
      district_id: '880500',
    },
    {
      id: '10594',
      name: 'Xã hòa lạc',
      district_id: '880500',
    },
    {
      id: '3881',
      name: 'Xã phong phú',
      district_id: '350400',
    },
    {
      id: '3882',
      name: 'Xã tử nê',
      district_id: '350400',
    },
    {
      id: '3884',
      name: 'Xã bắc sơn',
      district_id: '350400',
    },
    {
      id: '3885',
      name: 'Xã quy mỹ',
      district_id: '350400',
    },
    {
      id: '3886',
      name: 'Xã do nhân',
      district_id: '350400',
    },
    {
      id: '3887',
      name: 'Xã nam sơn',
      district_id: '350400',
    },
    {
      id: '3888',
      name: 'Xã lỗ sơn',
      district_id: '350400',
    },
    {
      id: '3889',
      name: 'Xã ngổ luông',
      district_id: '350400',
    },
    {
      id: '3890',
      name: 'Xã gia mô',
      district_id: '350400',
    },
    {
      id: '3891',
      name: 'Thị trấn mường khến',
      district_id: '350400',
    },
    {
      id: '3895',
      name: 'Xã phú vinh',
      district_id: '350400',
    },
    {
      id: '3896',
      name: 'Xã phú cường',
      district_id: '350400',
    },
    {
      id: '3897',
      name: 'Xã mỹ hòa',
      district_id: '350400',
    },
    {
      id: '3899',
      name: 'Xã quyết chiến',
      district_id: '350400',
    },
    {
      id: '3900',
      name: 'Xã địch giáo',
      district_id: '350400',
    },
    {
      id: '3901',
      name: 'Xã tuân lộ',
      district_id: '350400',
    },
    {
      id: '3902',
      name: 'Xã ngọc mỹ',
      district_id: '350400',
    },
    {
      id: '3903',
      name: 'Xã thanh hối',
      district_id: '350400',
    },
    {
      id: '3904',
      name: 'Xã đông lai',
      district_id: '350400',
    },
    {
      id: '11680',
      name: 'Xã lũng vân',
      district_id: '350400',
    },
    {
      id: '12741',
      name: 'Thị Trấn Mãn Đức',
      district_id: '350400',
    },
    {
      id: '12801',
      name: 'Xã Suối Hoa',
      district_id: '350400',
    },
    {
      id: '4471',
      name: 'Xã nậm pì',
      district_id: '390800',
    },
    {
      id: '4472',
      name: 'Xã lê lợi',
      district_id: '390800',
    },
    {
      id: '4474',
      name: 'Xã nậm chà',
      district_id: '390800',
    },
    {
      id: '4475',
      name: 'Xã pú đao',
      district_id: '390800',
    },
    {
      id: '4476',
      name: 'Xã nậm manh',
      district_id: '390800',
    },
    {
      id: '4477',
      name: 'Xã mường mô',
      district_id: '390800',
    },
    {
      id: '4478',
      name: 'Xã nậm ban',
      district_id: '390800',
    },
    {
      id: '4479',
      name: 'Xã trung chải',
      district_id: '390800',
    },
    {
      id: '4480',
      name: 'Thị trấn nậm nhùn',
      district_id: '390800',
    },
    {
      id: '4481',
      name: 'Xã nậm hàng',
      district_id: '390800',
    },
    {
      id: '12484',
      name: 'Xã hua bun',
      district_id: '390800',
    },
    {
      id: '7716',
      name: 'Thị trấn la hà',
      district_id: '570700',
    },
    {
      id: '7718',
      name: 'Xã nghĩa điền',
      district_id: '570700',
    },
    {
      id: '7720',
      name: 'Xã nghĩa hiệp',
      district_id: '570700',
    },
    {
      id: '7721',
      name: 'Xã nghĩa hòa',
      district_id: '570700',
    },
    {
      id: '7722',
      name: 'Xã nghĩa kỳ',
      district_id: '570700',
    },
    {
      id: '7723',
      name: 'Xã nghĩa lâm',
      district_id: '570700',
    },
    {
      id: '7724',
      name: 'Xã nghĩa mỹ',
      district_id: '570700',
    },
    {
      id: '7726',
      name: 'Xã nghĩa phương',
      district_id: '570700',
    },
    {
      id: '7727',
      name: 'Xã nghĩa sơn',
      district_id: '570700',
    },
    {
      id: '7728',
      name: 'Xã nghĩa thắng',
      district_id: '570700',
    },
    {
      id: '7729',
      name: 'Xã nghĩa thọ',
      district_id: '570700',
    },
    {
      id: '7730',
      name: 'Xã nghĩa thuận',
      district_id: '570700',
    },
    {
      id: '7731',
      name: 'Xã nghĩa thương',
      district_id: '570700',
    },
    {
      id: '7732',
      name: 'Xã nghĩa trung',
      district_id: '570700',
    },
    {
      id: '12000',
      name: 'Thị trấn sông vệ',
      district_id: '570700',
    },
    {
      id: '7142',
      name: 'Xã hương vinh',
      district_id: '530400',
    },
    {
      id: '7143',
      name: 'Xã bình thành',
      district_id: '530400',
    },
    {
      id: '7146',
      name: 'Xã hồng tiến',
      district_id: '530400',
    },
    {
      id: '7148',
      name: 'Xã hương bình',
      district_id: '530400',
    },
    {
      id: '7149',
      name: 'Xã hương toàn',
      district_id: '530400',
    },
    {
      id: '7150',
      name: 'Xã hương thọ',
      district_id: '530400',
    },
    {
      id: '7153',
      name: 'Xã bình điền',
      district_id: '530400',
    },
    {
      id: '7156',
      name: 'Xã hương phong',
      district_id: '530400',
    },
    {
      id: '11879',
      name: 'Phường tứ hạ',
      district_id: '530400',
    },
    {
      id: '11880',
      name: 'Xã hải dương',
      district_id: '530400',
    },
    {
      id: '11881',
      name: 'Phường hương an',
      district_id: '530400',
    },
    {
      id: '11882',
      name: 'Phường hương chữ',
      district_id: '530400',
    },
    {
      id: '11883',
      name: 'Phường hương hồ',
      district_id: '530400',
    },
    {
      id: '11884',
      name: 'Phường hương vân',
      district_id: '530400',
    },
    {
      id: '11885',
      name: 'Phường hương văn',
      district_id: '530400',
    },
    {
      id: '11886',
      name: 'Phường hương xuân',
      district_id: '530400',
    },
    {
      id: '12802',
      name: 'Xã Bình Tiến',
      district_id: '530400',
    },
    {
      id: '4043',
      name: 'Xã tô múa',
      district_id: '361200',
    },
    {
      id: '4044',
      name: 'Xã lóng luông',
      district_id: '361200',
    },
    {
      id: '4045',
      name: 'Xã suối bàng',
      district_id: '361200',
    },
    {
      id: '4046',
      name: 'Xã chiềng khoa',
      district_id: '361200',
    },
    {
      id: '4047',
      name: 'Xã liên hòa',
      district_id: '361200',
    },
    {
      id: '4048',
      name: 'Xã mường men',
      district_id: '361200',
    },
    {
      id: '4049',
      name: 'Xã mường tè',
      district_id: '361200',
    },
    {
      id: '4050',
      name: 'Xã xuân nha',
      district_id: '361200',
    },
    {
      id: '4051',
      name: 'Xã chiềng xuân',
      district_id: '361200',
    },
    {
      id: '4052',
      name: 'Xã vân hồ',
      district_id: '361200',
    },
    {
      id: '4053',
      name: 'Xã tân xuân',
      district_id: '361200',
    },
    {
      id: '4054',
      name: 'Xã chiềng yên',
      district_id: '361200',
    },
    {
      id: '4055',
      name: 'Xã quang minh',
      district_id: '361200',
    },
    {
      id: '4056',
      name: 'Xã song khủa',
      district_id: '361200',
    },
    {
      id: '6491',
      name: 'Phường quỳnh dị',
      district_id: '462100',
    },
    {
      id: '6492',
      name: 'Phường quỳnh thiện',
      district_id: '462100',
    },
    {
      id: '6493',
      name: 'Phường mai hùng',
      district_id: '462100',
    },
    {
      id: '6494',
      name: 'Phường quỳnh phương',
      district_id: '462100',
    },
    {
      id: '6495',
      name: 'Phường quỳnh xuân',
      district_id: '462100',
    },
    {
      id: '6496',
      name: 'Xã quỳnh lập',
      district_id: '462100',
    },
    {
      id: '6497',
      name: 'Xã quỳnh trang',
      district_id: '462100',
    },
    {
      id: '6498',
      name: 'Xã quỳnh lộc',
      district_id: '462100',
    },
    {
      id: '6499',
      name: 'Xã quỳnh vinh',
      district_id: '462100',
    },
    {
      id: '6500',
      name: 'Xã quỳnh liên',
      district_id: '462100',
    },
    {
      id: '10199',
      name: 'Xã bình hiệp',
      district_id: '851500',
    },
    {
      id: '10200',
      name: 'Phường 2',
      district_id: '851500',
    },
    {
      id: '10201',
      name: 'Phường 3',
      district_id: '851500',
    },
    {
      id: '10202',
      name: 'Xã thạnh hưng',
      district_id: '851500',
    },
    {
      id: '10203',
      name: 'Xã thạnh trị',
      district_id: '851500',
    },
    {
      id: '10204',
      name: 'Phường 1',
      district_id: '851500',
    },
    {
      id: '10205',
      name: 'Xã tuyên thạnh',
      district_id: '851500',
    },
    {
      id: '10206',
      name: 'Xã bình tân',
      district_id: '851500',
    },
    {
      id: '12511',
      name: 'Xã ia dal',
      district_id: '581000',
    },
    {
      id: '12512',
      name: 'Xã ia dom',
      district_id: '581000',
    },
    {
      id: '12513',
      name: 'Xã ia tơi',
      district_id: '581000',
    },
    {
      id: '4368',
      name: 'Xã chà cang',
      district_id: '381000',
    },
    {
      id: '4369',
      name: 'Xã nà khoa',
      district_id: '381000',
    },
    {
      id: '4370',
      name: 'Xã nà bùng',
      district_id: '381000',
    },
    {
      id: '4371',
      name: 'Xã nà hỳ',
      district_id: '381000',
    },
    {
      id: '4372',
      name: 'Xã na cô sa',
      district_id: '381000',
    },
    {
      id: '4373',
      name: 'Xã nậm nhừ',
      district_id: '381000',
    },
    {
      id: '4374',
      name: 'Xã nậm chua',
      district_id: '381000',
    },
    {
      id: '4375',
      name: 'Xã vàng đán',
      district_id: '381000',
    },
    {
      id: '4376',
      name: 'Xã chà tở',
      district_id: '381000',
    },
    {
      id: '4377',
      name: 'Xã nậm khăn',
      district_id: '381000',
    },
    {
      id: '4378',
      name: 'Xã chà nưa',
      district_id: '381000',
    },
    {
      id: '4379',
      name: 'Xã phìn hồ',
      district_id: '381000',
    },
    {
      id: '4380',
      name: 'Xã si pa phìn',
      district_id: '381000',
    },
    {
      id: '4381',
      name: 'Xã nậm tin',
      district_id: '381000',
    },
    {
      id: '4382',
      name: 'Xã pa tần',
      district_id: '381000',
    },
    {
      id: '9788',
      name: 'Xã trừ văn thố',
      district_id: '823100',
    },
    {
      id: '9790',
      name: 'Thị Trấn Lai Uyên',
      district_id: '823100',
    },
    {
      id: '9791',
      name: 'Xã tân hưng',
      district_id: '823100',
    },
    {
      id: '9792',
      name: 'Xã long nguyên',
      district_id: '823100',
    },
    {
      id: '9793',
      name: 'Xã hưng hòa',
      district_id: '823100',
    },
    {
      id: '9794',
      name: 'Xã lai hưng',
      district_id: '823100',
    },
    {
      id: '12505',
      name: 'Xã Cây Trường II',
      district_id: '823100',
    },
    {
      id: '9778',
      name: 'Xã tân định',
      district_id: '820300',
    },
    {
      id: '9779',
      name: 'Xã bình mỹ',
      district_id: '820300',
    },
    {
      id: '9780',
      name: 'Xã tân bình',
      district_id: '820300',
    },
    {
      id: '9781',
      name: 'Xã tân lập',
      district_id: '820300',
    },
    {
      id: '9782',
      name: 'Thị  Trấn Tân Thành',
      district_id: '820300',
    },
    {
      id: '9784',
      name: 'Xã hiếu liêm',
      district_id: '820300',
    },
    {
      id: '9785',
      name: 'Xã lạc an',
      district_id: '820300',
    },
    {
      id: '9786',
      name: 'Xã tân mỹ',
      district_id: '820300',
    },
    {
      id: '9787',
      name: 'Xã thường tân',
      district_id: '820300',
    },
    {
      id: '12522',
      name: 'Xã đất Cuốc',
      district_id: '820300',
    },
    {
      id: '6927',
      name: 'Phường quảng phúc',
      district_id: '510800',
    },
    {
      id: '6928',
      name: 'Xã quảng tiên',
      district_id: '510800',
    },
    {
      id: '6929',
      name: 'Xã quảng hải',
      district_id: '510800',
    },
    {
      id: '6930',
      name: 'Phường ba đồn',
      district_id: '510800',
    },
    {
      id: '6931',
      name: 'Xã quảng sơn',
      district_id: '510800',
    },
    {
      id: '6932',
      name: 'Xã quảng thuỷ',
      district_id: '510800',
    },
    {
      id: '6933',
      name: 'Xã quảng văn',
      district_id: '510800',
    },
    {
      id: '6934',
      name: 'Phường quảng phong',
      district_id: '510800',
    },
    {
      id: '6935',
      name: 'Xã quảng trung',
      district_id: '510800',
    },
    {
      id: '6936',
      name: 'Xã quảng hoà',
      district_id: '510800',
    },
    {
      id: '6937',
      name: 'Phường quảng thuận',
      district_id: '510800',
    },
    {
      id: '6938',
      name: 'Phường quảng thọ',
      district_id: '510800',
    },
    {
      id: '6939',
      name: 'Phường quảng long',
      district_id: '510800',
    },
    {
      id: '6940',
      name: 'Xã quảng lộc',
      district_id: '510800',
    },
    {
      id: '6941',
      name: 'Xã quảng minh',
      district_id: '510800',
    },
    {
      id: '6942',
      name: 'Xã quảng tân',
      district_id: '510800',
    },
    {
      id: '1442',
      name: 'Xã hiệp hòa',
      district_id: '201100',
    },
    {
      id: '1445',
      name: 'Xã liên hòa',
      district_id: '201100',
    },
    {
      id: '1446',
      name: 'Xã cẩm la',
      district_id: '201100',
    },
    {
      id: '1448',
      name: 'Xã tiền an',
      district_id: '201100',
    },
    {
      id: '1450',
      name: 'Xã hoàng tân',
      district_id: '201100',
    },
    {
      id: '1453',
      name: 'Xã liên vị',
      district_id: '201100',
    },
    {
      id: '1456',
      name: 'Xã sông khoai',
      district_id: '201100',
    },
    {
      id: '1457',
      name: 'Xã tiền phong',
      district_id: '201100',
    },
    {
      id: '12489',
      name: 'Phường quảng yên',
      district_id: '201100',
    },
    {
      id: '12490',
      name: 'Phường tân an',
      district_id: '201100',
    },
    {
      id: '12491',
      name: 'Phường cộng hòa',
      district_id: '201100',
    },
    {
      id: '12492',
      name: 'Phường minh thành',
      district_id: '201100',
    },
    {
      id: '12493',
      name: 'Phường đông mai',
      district_id: '201100',
    },
    {
      id: '12494',
      name: 'Phường yên giang',
      district_id: '201100',
    },
    {
      id: '12495',
      name: 'Phường nam hoà',
      district_id: '201100',
    },
    {
      id: '12496',
      name: 'Phường phong hải',
      district_id: '201100',
    },
    {
      id: '12497',
      name: 'Phường hà an',
      district_id: '201100',
    },
    {
      id: '12498',
      name: 'Phường yên hải',
      district_id: '201100',
    },
    {
      id: '12499',
      name: 'Phường phong cốc',
      district_id: '201100',
    },
    {
      id: '2355',
      name: 'Thị trấn bằng lũng',
      district_id: '260200',
    },
    {
      id: '2356',
      name: 'Xã ngọc phái',
      district_id: '260200',
    },
    {
      id: '2359',
      name: 'Xã bình trung',
      district_id: '260200',
    },
    {
      id: '2361',
      name: 'Xã đồng lạc',
      district_id: '260200',
    },
    {
      id: '2362',
      name: 'Xã lương bằng',
      district_id: '260200',
    },
    {
      id: '2363',
      name: 'Xã nam cường',
      district_id: '260200',
    },
    {
      id: '2364',
      name: 'Xã nghĩa tá',
      district_id: '260200',
    },
    {
      id: '2365',
      name: 'Xã phong huân',
      district_id: '260200',
    },
    {
      id: '2366',
      name: 'Xa quảng bạch',
      district_id: '260200',
    },
    {
      id: '2367',
      name: 'Xã rã bản',
      district_id: '260200',
    },
    {
      id: '2368',
      name: 'Xã tân lập',
      district_id: '260200',
    },
    {
      id: '2369',
      name: 'Xã xuân lạc',
      district_id: '260200',
    },
    {
      id: '2370',
      name: 'Xã yên nhuận',
      district_id: '260200',
    },
    {
      id: '2371',
      name: 'Xã yên thịnh',
      district_id: '260200',
    },
    {
      id: '2372',
      name: 'Xã yên thượng',
      district_id: '260200',
    },
    {
      id: '2373',
      name: 'Xã yên mỹ',
      district_id: '260200',
    },
    {
      id: '2374',
      name: 'Xã bản thi',
      district_id: '260200',
    },
    {
      id: '2375',
      name: 'Xã đông viên',
      district_id: '260200',
    },
    {
      id: '2376',
      name: 'Xã bằng phúc',
      district_id: '260200',
    },
    {
      id: '2377',
      name: 'Xã phương viên',
      district_id: '260200',
    },
    {
      id: '2378',
      name: 'Xã ngọc phái',
      district_id: '260200',
    },
    {
      id: '2379',
      name: 'Xã bằng lãng',
      district_id: '260200',
    },
    {
      id: '11794',
      name: 'Xã đại sảo',
      district_id: '260200',
    },
    {
      id: '12772',
      name: 'Xã Yên Phong',
      district_id: '260200',
    },
    {
      id: '8585',
      name: 'Xã quảng hòa',
      district_id: '640700',
    },
    {
      id: '8586',
      name: 'Xã quảng sơn',
      district_id: '640700',
    },
    {
      id: '8587',
      name: 'Xã đắk ha',
      district_id: '640700',
    },
    {
      id: '8588',
      name: "Xã đắk R'măng",
      district_id: '640700',
    },
    {
      id: '8589',
      name: 'Xã quảng khê',
      district_id: '640700',
    },
    {
      id: '8590',
      name: 'Xã đắk plao',
      district_id: '640700',
    },
    {
      id: '8591',
      name: 'Xã đắk som',
      district_id: '640700',
    },
    {
      id: '8555',
      name: 'Thị trấn đăk mil',
      district_id: '640300',
    },
    {
      id: '8556',
      name: 'Xã đắk lao',
      district_id: '640300',
    },
    {
      id: '8557',
      name: "Xã đắk R'la",
      district_id: '640300',
    },
    {
      id: '8558',
      name: 'Xã đắk gằn',
      district_id: '640300',
    },
    {
      id: '8559',
      name: 'Xã Đức Mạnh',
      district_id: '640300',
    },
    {
      id: '8560',
      name: "Xã đăk N'drót",
      district_id: '640300',
    },
    {
      id: '8561',
      name: 'Xã đắk sắk',
      district_id: '640300',
    },
    {
      id: '8562',
      name: 'Xã thuận an',
      district_id: '640300',
    },
    {
      id: '8563',
      name: 'Xã long sơn',
      district_id: '640300',
    },
    {
      id: '8564',
      name: 'Xã đức minh',
      district_id: '640300',
    },
    {
      id: '8535',
      name: 'Xã đạo nghĩa',
      district_id: '640200',
    },
    {
      id: '8536',
      name: 'Xã đắk sin',
      district_id: '640200',
    },
    {
      id: '8537',
      name: 'Xã hưng bình',
      district_id: '640200',
    },
    {
      id: '8538',
      name: 'Xã đắk ru',
      district_id: '640200',
    },
    {
      id: '8539',
      name: 'Xã nhân đạo',
      district_id: '640200',
    },
    {
      id: '8540',
      name: 'Thị Trấn Kiến Đức',
      district_id: '640200',
    },
    {
      id: '8541',
      name: 'Xã quảng tín',
      district_id: '640200',
    },
    {
      id: '8542',
      name: 'Xã đắk wer',
      district_id: '640200',
    },
    {
      id: '8543',
      name: 'Xã nhân cơ',
      district_id: '640200',
    },
    {
      id: '8544',
      name: 'Xã kiến thành',
      district_id: '640200',
    },
    {
      id: '8545',
      name: 'Xã nghĩa thắng',
      district_id: '640200',
    },
    {
      id: '8546',
      name: 'Xã nam bình',
      district_id: '640500',
    },
    {
      id: '8547',
      name: 'Thị trấn đức an',
      district_id: '640500',
    },
    {
      id: '8548',
      name: 'Xã đăk hòa',
      district_id: '640500',
    },
    {
      id: '8550',
      name: 'Xã thuận hạnh',
      district_id: '640500',
    },
    {
      id: '8553',
      name: 'Xã trường xuân',
      district_id: '640500',
    },
    {
      id: '8554',
      name: 'Xã thuận hà',
      district_id: '640500',
    },
    {
      id: '11971',
      name: 'Xã đắk môl',
      district_id: '640500',
    },
    {
      id: '11972',
      name: "Xã Đắk N'dung",
      district_id: '640500',
    },
    {
      id: '11973',
      name: "Xã nâm n'jang",
      district_id: '640500',
    },
    {
      id: '8592',
      name: "Xã đắk R'tih",
      district_id: '640800',
    },
    {
      id: '8593',
      name: 'Xã đắk ngo',
      district_id: '640800',
    },
    {
      id: '8594',
      name: 'Xã quảng trực',
      district_id: '640800',
    },
    {
      id: '8595',
      name: 'Xã đắk búk so',
      district_id: '640800',
    },
    {
      id: '8596',
      name: 'Xã quảng tâm',
      district_id: '640800',
    },
    {
      id: '8597',
      name: 'Xã quảng tân',
      district_id: '640800',
    },
    {
      id: '8454',
      name: 'Xã ea bar',
      district_id: '631300',
    },
    {
      id: '8455',
      name: 'Xã ea nuôl',
      district_id: '631300',
    },
    {
      id: '8456',
      name: 'Xã ea wer',
      district_id: '631300',
    },
    {
      id: '8457',
      name: 'Xã krông na',
      district_id: '631300',
    },
    {
      id: '8458',
      name: 'Xã Tân Hoà',
      district_id: '631300',
    },
    {
      id: '8459',
      name: 'Xã ea huar',
      district_id: '631300',
    },
    {
      id: '8460',
      name: 'Xã cuôr knia',
      district_id: '631300',
    },
    {
      id: '8442',
      name: 'Thị trấn ea drăng',
      district_id: '630200',
    },
    {
      id: '8443',
      name: 'Xã cư a mung',
      district_id: '630200',
    },
    {
      id: '8444',
      name: "Xã ea h'leo",
      district_id: '630200',
    },
    {
      id: '8445',
      name: 'Xã ea tir',
      district_id: '630200',
    },
    {
      id: '8446',
      name: 'Xã ea nam',
      district_id: '630200',
    },
    {
      id: '8447',
      name: 'Xã ea khal',
      district_id: '630200',
    },
    {
      id: '8448',
      name: 'Xã ea ral',
      district_id: '630200',
    },
    {
      id: '8449',
      name: 'Xã ea sol',
      district_id: '630200',
    },
    {
      id: '8450',
      name: 'Xã cư mốt',
      district_id: '630200',
    },
    {
      id: '8451',
      name: 'Xã ea hiao',
      district_id: '630200',
    },
    {
      id: '8453',
      name: 'Xã ea wy',
      district_id: '630200',
    },
    {
      id: '11957',
      name: 'Xã dlê yang',
      district_id: '630200',
    },
    {
      id: '8391',
      name: "Xã cư m'ta",
      district_id: '630900',
    },
    {
      id: '8392',
      name: 'Xã cư prao',
      district_id: '630900',
    },
    {
      id: '8394',
      name: 'Xã ea lai',
      district_id: '630900',
    },
    {
      id: '8395',
      name: "Xã ea h'mlay",
      district_id: '630900',
    },
    {
      id: '8397',
      name: 'Xã krông á',
      district_id: '630900',
    },
    {
      id: '8398',
      name: 'Xã krông jing',
      district_id: '630900',
    },
    {
      id: '8399',
      name: "Thị Trấn M'Đrắk",
      district_id: '630900',
    },
    {
      id: '8400',
      name: 'Xã ea pil',
      district_id: '630900',
    },
    {
      id: '8401',
      name: 'Xã ea trang',
      district_id: '630900',
    },
    {
      id: '8402',
      name: 'Xã ea riêng',
      district_id: '630900',
    },
    {
      id: '8403',
      name: 'Xã cư san',
      district_id: '630900',
    },
    {
      id: '11965',
      name: 'Xã cư k róa',
      district_id: '630900',
    },
    {
      id: '11966',
      name: "Xã ea m' doal",
      district_id: '630900',
    },
    {
      id: '8100',
      name: 'Thị trấn chư ty',
      district_id: '600700',
    },
    {
      id: '8101',
      name: 'Xã ia dơk',
      district_id: '600700',
    },
    {
      id: '8102',
      name: 'Xã ia kla',
      district_id: '600700',
    },
    {
      id: '8103',
      name: 'Xã ia nan',
      district_id: '600700',
    },
    {
      id: '8104',
      name: 'Xã ia krêl',
      district_id: '600700',
    },
    {
      id: '8106',
      name: 'Xã ia dom',
      district_id: '600700',
    },
    {
      id: '8107',
      name: 'Xã ia kriêng',
      district_id: '600700',
    },
    {
      id: '8108',
      name: 'Xã ia pnôn',
      district_id: '600700',
    },
    {
      id: '8109',
      name: 'Xã ia lang',
      district_id: '600700',
    },
    {
      id: '12066',
      name: 'Xã ia din',
      district_id: '600700',
    },
    {
      id: '8018',
      name: 'Xã hà đông',
      district_id: '601300',
    },
    {
      id: '8020',
      name: 'Xã Nam  Yang',
      district_id: '601300',
    },
    {
      id: '8022',
      name: 'Xã tân bình',
      district_id: '601300',
    },
    {
      id: '8024',
      name: 'Xã glar',
      district_id: '601300',
    },
    {
      id: '8025',
      name: 'Xã ia băng',
      district_id: '601300',
    },
    {
      id: '8026',
      name: 'Xã ia pết',
      district_id: '601300',
    },
    {
      id: '8027',
      name: 'Xã đăk krong',
      district_id: '601300',
    },
    {
      id: '8029',
      name: 'Xã hà bầu',
      district_id: '601300',
    },
    {
      id: '8030',
      name: 'Xã trang',
      district_id: '601300',
    },
    {
      id: '8031',
      name: 'Xã kon gang',
      district_id: '601300',
    },
    {
      id: '8032',
      name: "Xã H'nol",
      district_id: '601300',
    },
    {
      id: '8033',
      name: 'Xã hải yang',
      district_id: '601300',
    },
    {
      id: '8034',
      name: 'Thị trấn đăk đoa',
      district_id: '601300',
    },
    {
      id: '12073',
      name: 'Xã a dơk',
      district_id: '601300',
    },
    {
      id: '12074',
      name: 'Xã đăk sơmei',
      district_id: '601300',
    },
    {
      id: '12075',
      name: "Xã h' neng",
      district_id: '601300',
    },
    {
      id: '12076',
      name: "Xã k' dang",
      district_id: '601300',
    },
    {
      id: '8182',
      name: 'Xã cư an',
      district_id: '601500',
    },
    {
      id: '8183',
      name: 'Xã tân an',
      district_id: '601500',
    },
    {
      id: '8184',
      name: 'Xã hà tam',
      district_id: '601500',
    },
    {
      id: '8185',
      name: 'Xã phú an',
      district_id: '601500',
    },
    {
      id: '8186',
      name: 'Xã an thành',
      district_id: '601500',
    },
    {
      id: '8187',
      name: 'Xã ya hội',
      district_id: '601500',
    },
    {
      id: '8188',
      name: 'Xã yang bắc',
      district_id: '601500',
    },
    {
      id: '12045',
      name: 'Thị trấn đak pơ',
      district_id: '601500',
    },
    {
      id: '8989',
      name: 'Phường 26',
      district_id: '701600',
    },
    {
      id: '8990',
      name: 'Phường 15',
      district_id: '701600',
    },
    {
      id: '8991',
      name: 'Phường 24',
      district_id: '701600',
    },
    {
      id: '8992',
      name: 'Phường 3',
      district_id: '701600',
    },
    {
      id: '8993',
      name: 'Phường 17',
      district_id: '701600',
    },
    {
      id: '8994',
      name: 'Phường 21',
      district_id: '701600',
    },
    {
      id: '8995',
      name: 'Phường 19',
      district_id: '701600',
    },
    {
      id: '8996',
      name: 'Phường 22',
      district_id: '701600',
    },
    {
      id: '8997',
      name: 'Phường 5',
      district_id: '701600',
    },
    {
      id: '8998',
      name: 'Phường 6',
      district_id: '701600',
    },
    {
      id: '8999',
      name: 'Phường 7',
      district_id: '701600',
    },
    {
      id: '9000',
      name: 'Phường 11',
      district_id: '701600',
    },
    {
      id: '9001',
      name: 'Phường 12',
      district_id: '701600',
    },
    {
      id: '9002',
      name: 'Phường 13',
      district_id: '701600',
    },
    {
      id: '9003',
      name: 'Phường 14',
      district_id: '701600',
    },
    {
      id: '9004',
      name: 'Phường 25',
      district_id: '701600',
    },
    {
      id: '9005',
      name: 'Phường 27',
      district_id: '701600',
    },
    {
      id: '9006',
      name: 'Phường 1',
      district_id: '701600',
    },
    {
      id: '9007',
      name: 'Phường 2',
      district_id: '701600',
    },
    {
      id: '12174',
      name: 'Phường 28',
      district_id: '701600',
    },
    {
      id: '9268',
      name: 'Phường An Lạc',
      district_id: '701900',
    },
    {
      id: '9269',
      name: 'Phường bình trị đông',
      district_id: '701900',
    },
    {
      id: '9270',
      name: 'Phường bình trị đông a',
      district_id: '701900',
    },
    {
      id: '9271',
      name: 'Phường bình trị đông b',
      district_id: '701900',
    },
    {
      id: '9272',
      name: 'Phường bình hưng hòa',
      district_id: '701900',
    },
    {
      id: '9273',
      name: 'Phường bình hưng hòa a',
      district_id: '701900',
    },
    {
      id: '9274',
      name: 'Phường bình hưng hòa b',
      district_id: '701900',
    },
    {
      id: '9275',
      name: 'Phường tân tạo',
      district_id: '701900',
    },
    {
      id: '9276',
      name: 'Phường tân tạo a',
      district_id: '701900',
    },
    {
      id: '9277',
      name: 'Phường an lạc a',
      district_id: '701900',
    },
    {
      id: '9088',
      name: 'Thị trấn củ chi',
      district_id: '702100',
    },
    {
      id: '9089',
      name: 'Xã tân phú trung',
      district_id: '702100',
    },
    {
      id: '9090',
      name: 'Xã tân thông hội',
      district_id: '702100',
    },
    {
      id: '9091',
      name: 'Xã phước vĩnh an',
      district_id: '702100',
    },
    {
      id: '9092',
      name: 'Xã tân an hội',
      district_id: '702100',
    },
    {
      id: '9094',
      name: 'Xã trung lập hạ',
      district_id: '702100',
    },
    {
      id: '9095',
      name: 'Xã phạm văn cội',
      district_id: '702100',
    },
    {
      id: '9096',
      name: 'Xã nhuận đức',
      district_id: '702100',
    },
    {
      id: '9097',
      name: 'Xã tân thạnh đông',
      district_id: '702100',
    },
    {
      id: '9098',
      name: 'Xã tân thạnh tây',
      district_id: '702100',
    },
    {
      id: '9099',
      name: 'Xã hoà phú',
      district_id: '702100',
    },
    {
      id: '9100',
      name: 'Xã trung an',
      district_id: '702100',
    },
    {
      id: '9101',
      name: 'Xã Phú Hòa Đông',
      district_id: '702100',
    },
    {
      id: '9102',
      name: 'Xã phước hiệp',
      district_id: '702100',
    },
    {
      id: '9103',
      name: 'Xã phước thạnh',
      district_id: '702100',
    },
    {
      id: '9104',
      name: 'Xã thái mỹ',
      district_id: '702100',
    },
    {
      id: '9105',
      name: 'Xã bình mỹ',
      district_id: '702100',
    },
    {
      id: '9106',
      name: 'Xã an phú',
      district_id: '702100',
    },
    {
      id: '9107',
      name: 'Xã trung lập thượng',
      district_id: '702100',
    },
    {
      id: '9108',
      name: 'Xã an nhơn tây',
      district_id: '702100',
    },
    {
      id: '9109',
      name: 'Xã phú mỹ hưng',
      district_id: '702100',
    },
    {
      id: '9049',
      name: 'Phường 03',
      district_id: '701300',
    },
    {
      id: '9050',
      name: 'Phường 4',
      district_id: '701300',
    },
    {
      id: '9051',
      name: 'Phường 5',
      district_id: '701300',
    },
    {
      id: '9052',
      name: 'Phường 11',
      district_id: '701300',
    },
    {
      id: '9053',
      name: 'Phường 12',
      district_id: '701300',
    },
    {
      id: '9054',
      name: 'Phường 13',
      district_id: '701300',
    },
    {
      id: '9055',
      name: 'Phường 14',
      district_id: '701300',
    },
    {
      id: '9056',
      name: 'Phường 15',
      district_id: '701300',
    },
    {
      id: '9057',
      name: 'Phường 16',
      district_id: '701300',
    },
    {
      id: '9058',
      name: 'Phường 17',
      district_id: '701300',
    },
    {
      id: '9059',
      name: 'Phường 1',
      district_id: '701300',
    },
    {
      id: '9060',
      name: 'Phường 6',
      district_id: '701300',
    },
    {
      id: '9061',
      name: 'Phường 7',
      district_id: '701300',
    },
    {
      id: '9062',
      name: 'Phường 8',
      district_id: '701300',
    },
    {
      id: '9063',
      name: 'Phường 9',
      district_id: '701300',
    },
    {
      id: '9064',
      name: 'Phường 10',
      district_id: '701300',
    },
    {
      id: '9076',
      name: 'Xã tân thới nhì',
      district_id: '702200',
    },
    {
      id: '9077',
      name: 'Xã nhị bình',
      district_id: '702200',
    },
    {
      id: '9078',
      name: 'Xã xuân thới sơn',
      district_id: '702200',
    },
    {
      id: '9079',
      name: 'Xã bà điểm',
      district_id: '702200',
    },
    {
      id: '9080',
      name: 'Xã tân hiệp',
      district_id: '702200',
    },
    {
      id: '9081',
      name: 'Xã đông thạnh',
      district_id: '702200',
    },
    {
      id: '9082',
      name: 'Xã xuân thới đông',
      district_id: '702200',
    },
    {
      id: '9083',
      name: 'Xã xuân thới thượng',
      district_id: '702200',
    },
    {
      id: '9084',
      name: 'Xã thới tam thôn',
      district_id: '702200',
    },
    {
      id: '9085',
      name: 'Xã trung chánh',
      district_id: '702200',
    },
    {
      id: '9086',
      name: 'Xã tân xuân',
      district_id: '702200',
    },
    {
      id: '9087',
      name: 'Thị trấn hóc môn',
      district_id: '702200',
    },
    {
      id: '9034',
      name: 'Phường 1',
      district_id: '701700',
    },
    {
      id: '9035',
      name: 'Phường 2',
      district_id: '701700',
    },
    {
      id: '9036',
      name: 'Phường 3',
      district_id: '701700',
    },
    {
      id: '9037',
      name: 'Phường 4',
      district_id: '701700',
    },
    {
      id: '9038',
      name: 'Phường 5',
      district_id: '701700',
    },
    {
      id: '9039',
      name: 'Phường 9',
      district_id: '701700',
    },
    {
      id: '9040',
      name: 'Phường 7',
      district_id: '701700',
    },
    {
      id: '9041',
      name: 'Phường 8',
      district_id: '701700',
    },
    {
      id: '9042',
      name: 'Phường 10',
      district_id: '701700',
    },
    {
      id: '9043',
      name: 'Phường 11',
      district_id: '701700',
    },
    {
      id: '9044',
      name: 'Phường 12',
      district_id: '701700',
    },
    {
      id: '9045',
      name: 'Phường 13',
      district_id: '701700',
    },
    {
      id: '9046',
      name: 'Phường 14',
      district_id: '701700',
    },
    {
      id: '9047',
      name: 'Phường 15',
      district_id: '701700',
    },
    {
      id: '9048',
      name: 'Phường 17',
      district_id: '701700',
    },
    {
      id: '9110',
      name: 'Phường 14',
      district_id: '701400',
    },
    {
      id: '9111',
      name: 'Phường 9',
      district_id: '701400',
    },
    {
      id: '9112',
      name: 'Phường 10',
      district_id: '701400',
    },
    {
      id: '9113',
      name: 'Phường 11',
      district_id: '701400',
    },
    {
      id: '9114',
      name: 'Phường 12',
      district_id: '701400',
    },
    {
      id: '9115',
      name: 'Phường 13',
      district_id: '701400',
    },
    {
      id: '9116',
      name: 'Phường 7',
      district_id: '701400',
    },
    {
      id: '9117',
      name: 'Phường 8',
      district_id: '701400',
    },
    {
      id: '9118',
      name: 'Phường 6',
      district_id: '701400',
    },
    {
      id: '9119',
      name: 'Phường  1',
      district_id: '701400',
    },
    {
      id: '9120',
      name: 'Phường 2',
      district_id: '701400',
    },
    {
      id: '9121',
      name: 'Phường 3',
      district_id: '701400',
    },
    {
      id: '9122',
      name: 'Phường 4',
      district_id: '701400',
    },
    {
      id: '9123',
      name: 'Phường 5',
      district_id: '701400',
    },
    {
      id: '9124',
      name: 'Phường 15',
      district_id: '701400',
    },
    {
      id: '9257',
      name: 'Phường tân thành',
      district_id: '701500',
    },
    {
      id: '9258',
      name: 'Phường sơn kỳ',
      district_id: '701500',
    },
    {
      id: '9259',
      name: 'Phường tân sơn nhì',
      district_id: '701500',
    },
    {
      id: '9260',
      name: 'Phường tân quý',
      district_id: '701500',
    },
    {
      id: '9261',
      name: 'Phường tây thạnh',
      district_id: '701500',
    },
    {
      id: '9262',
      name: 'Phường hiệp tân',
      district_id: '701500',
    },
    {
      id: '9263',
      name: 'Phường hòa thạnh',
      district_id: '701500',
    },
    {
      id: '9264',
      name: 'Phường tân thới hòa',
      district_id: '701500',
    },
    {
      id: '9265',
      name: 'Phường phú thọ hòa',
      district_id: '701500',
    },
    {
      id: '9266',
      name: 'Phường phú trung',
      district_id: '701500',
    },
    {
      id: '9267',
      name: 'Phường phú thạnh',
      district_id: '701500',
    },
    {
      id: '63',
      name: 'Phường ngọc khánh',
      district_id: '100100',
    },
    {
      id: '64',
      name: 'Phường kim mã',
      district_id: '100100',
    },
    {
      id: '65',
      name: 'Phường đội cấn',
      district_id: '100100',
    },
    {
      id: '66',
      name: 'Phường giảng võ',
      district_id: '100100',
    },
    {
      id: '67',
      name: 'Phường ngọc hà',
      district_id: '100100',
    },
    {
      id: '68',
      name: 'Phường điện biên',
      district_id: '100100',
    },
    {
      id: '69',
      name: 'Phường cống vị',
      district_id: '100100',
    },
    {
      id: '70',
      name: 'Phường nguyễn trung trực',
      district_id: '100100',
    },
    {
      id: '71',
      name: 'Phường phúc xá',
      district_id: '100100',
    },
    {
      id: '72',
      name: 'Phường quán thánh',
      district_id: '100100',
    },
    {
      id: '73',
      name: 'Phường trúc bạch',
      district_id: '100100',
    },
    {
      id: '75',
      name: 'Phường thành công',
      district_id: '100100',
    },
    {
      id: '76',
      name: 'Phường liễu giai',
      district_id: '100100',
    },
    {
      id: '77',
      name: 'Phường vĩnh phúc',
      district_id: '100100',
    },
    {
      id: '149',
      name: 'Phường xuân đỉnh',
      district_id: '101000',
    },
    {
      id: '150',
      name: 'Phường cổ nhuế 1',
      district_id: '101000',
    },
    {
      id: '151',
      name: 'Phường thượng cát',
      district_id: '101000',
    },
    {
      id: '152',
      name: 'Phường tây tựu',
      district_id: '101000',
    },
    {
      id: '153',
      name: 'Phường phúc diễn',
      district_id: '101000',
    },
    {
      id: '154',
      name: 'Phường phú diễn',
      district_id: '101000',
    },
    {
      id: '155',
      name: 'Phường liên mạc',
      district_id: '101000',
    },
    {
      id: '156',
      name: 'Phường minh khai',
      district_id: '101000',
    },
    {
      id: '157',
      name: 'Phường thụy phương',
      district_id: '101000',
    },
    {
      id: '158',
      name: 'Phường đức thắng',
      district_id: '101000',
    },
    {
      id: '159',
      name: 'Phường đông ngạc',
      district_id: '101000',
    },
    {
      id: '160',
      name: 'Phường cổ nhuế 2',
      district_id: '101000',
    },
    {
      id: '161',
      name: 'Phường xuân tảo',
      district_id: '101000',
    },
    {
      id: '373',
      name: 'Xã tiên phong',
      district_id: '101700',
    },
    {
      id: '374',
      name: 'Xã ba trại',
      district_id: '101700',
    },
    {
      id: '375',
      name: 'Xã yên bài',
      district_id: '101700',
    },
    {
      id: '376',
      name: 'Xã khánh thượng',
      district_id: '101700',
    },
    {
      id: '377',
      name: 'Xã ba vì',
      district_id: '101700',
    },
    {
      id: '378',
      name: 'Thị trấn tây đằng',
      district_id: '101700',
    },
    {
      id: '379',
      name: 'Xã phú cường',
      district_id: '101700',
    },
    {
      id: '380',
      name: 'Xã cổ đô',
      district_id: '101700',
    },
    {
      id: '381',
      name: 'Xã tản hồng',
      district_id: '101700',
    },
    {
      id: '382',
      name: 'Xã vạn thắng',
      district_id: '101700',
    },
    {
      id: '383',
      name: 'Xã phong vân',
      district_id: '101700',
    },
    {
      id: '384',
      name: 'Xã phú đông',
      district_id: '101700',
    },
    {
      id: '385',
      name: 'Xã phú phương',
      district_id: '101700',
    },
    {
      id: '386',
      name: 'Xã phú châu',
      district_id: '101700',
    },
    {
      id: '387',
      name: 'Xã thái hòa',
      district_id: '101700',
    },
    {
      id: '388',
      name: 'Xã đồng thái',
      district_id: '101700',
    },
    {
      id: '389',
      name: 'Xã phú sơn',
      district_id: '101700',
    },
    {
      id: '390',
      name: 'Xã minh châu',
      district_id: '101700',
    },
    {
      id: '391',
      name: 'Xã vật lại',
      district_id: '101700',
    },
    {
      id: '392',
      name: 'Xã chu minh',
      district_id: '101700',
    },
    {
      id: '393',
      name: 'Xã tòng bạt',
      district_id: '101700',
    },
    {
      id: '394',
      name: 'Xã cẩm lĩnh',
      district_id: '101700',
    },
    {
      id: '395',
      name: 'Xã sơn đà',
      district_id: '101700',
    },
    {
      id: '396',
      name: 'Xã đông quang',
      district_id: '101700',
    },
    {
      id: '397',
      name: 'Xã thụy an',
      district_id: '101700',
    },
    {
      id: '398',
      name: 'Xã cam thượng',
      district_id: '101700',
    },
    {
      id: '399',
      name: 'Xã thuần mỹ',
      district_id: '101700',
    },
    {
      id: '400',
      name: 'Xã tản lĩnh',
      district_id: '101700',
    },
    {
      id: '401',
      name: 'Xã vân hòa',
      district_id: '101700',
    },
    {
      id: '402',
      name: 'Xã châu sơn',
      district_id: '101700',
    },
    {
      id: '403',
      name: 'Xã minh quang',
      district_id: '101700',
    },
    {
      id: '90',
      name: 'Phường nghĩa đô',
      district_id: '100600',
    },
    {
      id: '91',
      name: 'Phường nghĩa tân',
      district_id: '100600',
    },
    {
      id: '92',
      name: 'Phường Dịch Vọng Hậu',
      district_id: '100600',
    },
    {
      id: '93',
      name: 'Phường dịch vọng',
      district_id: '100600',
    },
    {
      id: '94',
      name: 'Phường quan hoa',
      district_id: '100600',
    },
    {
      id: '95',
      name: 'Phường yên hòa',
      district_id: '100600',
    },
    {
      id: '96',
      name: 'Phường trung hòa',
      district_id: '100600',
    },
    {
      id: '97',
      name: 'Phường mai dịch',
      district_id: '100600',
    },
    {
      id: '202',
      name: 'Xã vân nội',
      district_id: '101300',
    },
    {
      id: '203',
      name: 'Xã uy nỗ',
      district_id: '101300',
    },
    {
      id: '204',
      name: 'Xã liên hà',
      district_id: '101300',
    },
    {
      id: '205',
      name: 'Xã kim chung',
      district_id: '101300',
    },
    {
      id: '206',
      name: 'Xã mai lâm',
      district_id: '101300',
    },
    {
      id: '207',
      name: 'Xã xuân canh',
      district_id: '101300',
    },
    {
      id: '208',
      name: 'Xã đông hội',
      district_id: '101300',
    },
    {
      id: '209',
      name: 'Xã kim nỗ',
      district_id: '101300',
    },
    {
      id: '210',
      name: 'Xã Dục Tú',
      district_id: '101300',
    },
    {
      id: '211',
      name: 'Xã võng la',
      district_id: '101300',
    },
    {
      id: '212',
      name: 'Xã hải bối',
      district_id: '101300',
    },
    {
      id: '213',
      name: 'Xã nguyên khê',
      district_id: '101300',
    },
    {
      id: '214',
      name: 'Thị trấn đông anh',
      district_id: '101300',
    },
    {
      id: '216',
      name: 'Xã bắc hồng',
      district_id: '101300',
    },
    {
      id: '217',
      name: 'Xã tàm xá',
      district_id: '101300',
    },
    {
      id: '218',
      name: 'Xã việt hùng',
      district_id: '101300',
    },
    {
      id: '219',
      name: 'Xã tiên dương',
      district_id: '101300',
    },
    {
      id: '220',
      name: 'Xã vân hà',
      district_id: '101300',
    },
    {
      id: '221',
      name: 'Xã vĩnh ngọc',
      district_id: '101300',
    },
    {
      id: '222',
      name: 'Xã đại mạch',
      district_id: '101300',
    },
    {
      id: '223',
      name: 'Xã nam hồng',
      district_id: '101300',
    },
    {
      id: '224',
      name: 'Xã cổ loa',
      district_id: '101300',
    },
    {
      id: '225',
      name: 'Xã Thụy Lâm',
      district_id: '101300',
    },
    {
      id: '226',
      name: 'Xã xuân nộn',
      district_id: '101300',
    },
    {
      id: '42',
      name: 'Phường ô chợ dừa',
      district_id: '100400',
    },
    {
      id: '43',
      name: 'Phường văn chương',
      district_id: '100400',
    },
    {
      id: '44',
      name: 'Phường trung phụng',
      district_id: '100400',
    },
    {
      id: '45',
      name: 'Phường khâm thiên',
      district_id: '100400',
    },
    {
      id: '46',
      name: 'Phường hàng bột',
      district_id: '100400',
    },
    {
      id: '47',
      name: 'Phường thổ quan',
      district_id: '100400',
    },
    {
      id: '48',
      name: 'Phường cát linh',
      district_id: '100400',
    },
    {
      id: '49',
      name: 'Phường quốc tử giám',
      district_id: '100400',
    },
    {
      id: '50',
      name: 'Phường khương thượng',
      district_id: '100400',
    },
    {
      id: '51',
      name: 'Phường phương mai',
      district_id: '100400',
    },
    {
      id: '52',
      name: 'Phường ngã tư sở',
      district_id: '100400',
    },
    {
      id: '53',
      name: 'Phường láng hạ',
      district_id: '100400',
    },
    {
      id: '54',
      name: 'Phường thịnh quang',
      district_id: '100400',
    },
    {
      id: '55',
      name: 'Phường Láng Thượng',
      district_id: '100400',
    },
    {
      id: '56',
      name: 'Phường trung liệt',
      district_id: '100400',
    },
    {
      id: '57',
      name: 'Phường trung tự',
      district_id: '100400',
    },
    {
      id: '58',
      name: 'Phường kim liên',
      district_id: '100400',
    },
    {
      id: '59',
      name: 'Phường nam đồng',
      district_id: '100400',
    },
    {
      id: '60',
      name: 'Phường phương liên',
      district_id: '100400',
    },
    {
      id: '61',
      name: 'Phường văn miếu',
      district_id: '100400',
    },
    {
      id: '62',
      name: 'Phường quang trung',
      district_id: '100400',
    },
    {
      id: '162',
      name: 'Thị trấn yên viên',
      district_id: '101200',
    },
    {
      id: '163',
      name: 'Xã dương xá',
      district_id: '101200',
    },
    {
      id: '164',
      name: 'Thị trấn trâu quỳ',
      district_id: '101200',
    },
    {
      id: '165',
      name: 'Xã bát tràng',
      district_id: '101200',
    },
    {
      id: '166',
      name: 'Xã trung mầu',
      district_id: '101200',
    },
    {
      id: '167',
      name: 'Xã yên thường',
      district_id: '101200',
    },
    {
      id: '169',
      name: 'Xã phù đổng',
      district_id: '101200',
    },
    {
      id: '170',
      name: 'Xã yên viên',
      district_id: '101200',
    },
    {
      id: '171',
      name: 'Xã đông dư',
      district_id: '101200',
    },
    {
      id: '172',
      name: 'Xã dương hà',
      district_id: '101200',
    },
    {
      id: '173',
      name: 'Xã ninh hiệp',
      district_id: '101200',
    },
    {
      id: '174',
      name: 'Xã dương quang',
      district_id: '101200',
    },
    {
      id: '175',
      name: 'Xã lệ chi',
      district_id: '101200',
    },
    {
      id: '176',
      name: 'Xã kiêu kỵ',
      district_id: '101200',
    },
    {
      id: '177',
      name: 'Xã cổ bi',
      district_id: '101200',
    },
    {
      id: '178',
      name: 'Xã văn đức',
      district_id: '101200',
    },
    {
      id: '179',
      name: 'Xã kim lan',
      district_id: '101200',
    },
    {
      id: '180',
      name: 'Xã kim sơn',
      district_id: '101200',
    },
    {
      id: '181',
      name: 'Xã phú thị',
      district_id: '101200',
    },
    {
      id: '182',
      name: 'Xã đặng xá',
      district_id: '101200',
    },
    {
      id: '183',
      name: 'Xã đa tốn',
      district_id: '101200',
    },
    {
      id: '184',
      name: 'Xã đình xuyên',
      district_id: '101200',
    },
    {
      id: '1',
      name: 'Phường hàng buồm',
      district_id: '100200',
    },
    {
      id: '2',
      name: 'Phường hàng đào',
      district_id: '100200',
    },
    {
      id: '3',
      name: 'Phường hàng gai',
      district_id: '100200',
    },
    {
      id: '4',
      name: 'Phường hàng mã',
      district_id: '100200',
    },
    {
      id: '5',
      name: 'Phường lý thái tổ',
      district_id: '100200',
    },
    {
      id: '6',
      name: 'Phường phúc tân',
      district_id: '100200',
    },
    {
      id: '7',
      name: 'Phường hàng bài',
      district_id: '100200',
    },
    {
      id: '8',
      name: 'Phường hàng bông',
      district_id: '100200',
    },
    {
      id: '9',
      name: 'Phường tràng tiền',
      district_id: '100200',
    },
    {
      id: '10',
      name: 'Phường phan chu trinh',
      district_id: '100200',
    },
    {
      id: '11',
      name: 'Phường Chương Dương',
      district_id: '100200',
    },
    {
      id: '12',
      name: 'Phường cửa nam',
      district_id: '100200',
    },
    {
      id: '13',
      name: 'Phường trần hưng đạo',
      district_id: '100200',
    },
    {
      id: '14',
      name: 'Phường cửa đông',
      district_id: '100200',
    },
    {
      id: '15',
      name: 'Phường đồng xuân',
      district_id: '100200',
    },
    {
      id: '16',
      name: 'Phường hàng bạc',
      district_id: '100200',
    },
    {
      id: '17',
      name: 'Phường hàng bồ',
      district_id: '100200',
    },
    {
      id: '18',
      name: 'Phường hàng trống',
      district_id: '100200',
    },
    {
      id: '133',
      name: 'Phường yên sở',
      district_id: '100800',
    },
    {
      id: '134',
      name: 'Phường vĩnh hưng',
      district_id: '100800',
    },
    {
      id: '135',
      name: 'Phường Thịnh Liệt',
      district_id: '100800',
    },
    {
      id: '136',
      name: 'Phường định công',
      district_id: '100800',
    },
    {
      id: '137',
      name: 'Phường đại kim',
      district_id: '100800',
    },
    {
      id: '138',
      name: 'Phường Hoàng Liệt',
      district_id: '100800',
    },
    {
      id: '139',
      name: 'Phường tân mai',
      district_id: '100800',
    },
    {
      id: '140',
      name: 'Phường thanh trì',
      district_id: '100800',
    },
    {
      id: '142',
      name: 'Phường giáp bát',
      district_id: '100800',
    },
    {
      id: '143',
      name: 'Phường hoàng văn thụ',
      district_id: '100800',
    },
    {
      id: '144',
      name: 'Phường Tương Mai',
      district_id: '100800',
    },
    {
      id: '145',
      name: 'Phường lĩnh nam',
      district_id: '100800',
    },
    {
      id: '146',
      name: 'Phường mai động',
      district_id: '100800',
    },
    {
      id: '147',
      name: 'Phường trần phú',
      district_id: '100800',
    },
    {
      id: '108',
      name: 'Phường thạch bàn',
      district_id: '100900',
    },
    {
      id: '109',
      name: 'Phường phúc đồng',
      district_id: '100900',
    },
    {
      id: '110',
      name: 'Phường phúc lợi',
      district_id: '100900',
    },
    {
      id: '111',
      name: 'Phường ngọc thụy',
      district_id: '100900',
    },
    {
      id: '112',
      name: 'Phường bồ đề',
      district_id: '100900',
    },
    {
      id: '113',
      name: 'Phường long biên',
      district_id: '100900',
    },
    {
      id: '114',
      name: 'Phường ngọc lâm',
      district_id: '100900',
    },
    {
      id: '115',
      name: 'Phường đức giang',
    },
    {
    },