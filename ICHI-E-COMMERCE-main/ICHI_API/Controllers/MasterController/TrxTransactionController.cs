﻿namespace ICHI_API.Controllers.MasterController
{
    using ICHI_API.Data;
    using ICHI_API.Model;
    using ICHI_API.Service.IService;
    using ICHI_CORE.Domain.MasterModel;
    using ICHI_CORE.Helpers;
    using ICHI_CORE.Model;
    using ICHI_CORE.NlogConfig;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;
    using RestSharp;
    using System.Collections.Generic;

    [ApiController]
    [Route("api/[controller]")]
    public class TrxTransactionController : Controller
    {
        private readonly ITrxTransactionService _trxTransactionService;
        private readonly IVnPayService _vnPayService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public TrxTransactionController(PcsApiContext context, ITrxTransactionService trxTransactionService, IVnPayService vnPayService, IHttpContextAccessor httpContextAccessor, IConfiguration configuration = null)
        {
            _trxTransactionService = trxTransactionService;
            _httpContextAccessor = httpContextAccessor;
            _vnPayService = vnPayService;
        }
        [HttpGet("FindAllPaged")]
        public async Task<ActionResult<ApiResponse<ICHI_API.Helpers.PagedResult<TrxTransaction>>>> GetAll(
                [FromQuery(Name = "search")] string name = "",
                [FromQuery(Name = "order-status")] string orderStatus = "",
                [FromQuery(Name = "payment-status")] string paymentStatus = "",
                [FromQuery(Name = "page-size")] int pageSize = 10,
                [FromQuery(Name = "page-number")] int pageNumber = 1,
                [FromQuery(Name = "sort-direction")] string sortDir = "desc",
                [FromQuery(Name = "sort-by")] string sortBy = "Id")
        {
            ApiResponse<ICHI_API.Helpers.PagedResult<TrxTransaction>> result;
            string strMessage = "";
            try
            {
                var data = _trxTransactionService.GetAll(name, orderStatus, paymentStatus, pageSize, pageNumber, sortDir, sortBy, out strMessage);
                result = new ApiResponse<ICHI_API.Helpers.PagedResult<TrxTransaction>>(
                     System.Net.HttpStatusCode.OK,
                     "Retrieved successfully",
                     data
                 );

            }
            catch (Exception ex)
            {
                strMessage = "Có lỗi xảy ra";
                NLogger.log.Error(ex.ToString());
                result = new ApiResponse<ICHI_API.Helpers.PagedResult<TrxTransaction>>(System.Net.HttpStatusCode.ExpectationFailed, strMessage, null);
            }
            return result;
        }

        [HttpPost("Create")]
        public async Task<ApiResponse<TrxTransactionDTO>> Create([FromBody] TrxTransactionDTO trxTransactionDTO)
        {
            ApiResponse<TrxTransactionDTO> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.Create(trxTransactionDTO, out strMessage);
                return new ApiResponse<TrxTransactionDTO>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                strMessage = "Có lỗi xảy ra";
                NLogger.log.Error(ex.ToString());
                result = new ApiResponse<TrxTransactionDTO>(System.Net.HttpStatusCode.ExpectationFailed, strMessage, null);
            }
            return result;
        }
        [HttpPut("Update")]
        public async Task<ApiResponse<ShoppingCartVM>> Update([FromBody] UpdateTrxTransaction model)
        {
            ApiResponse<ShoppingCartVM> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.Update(model, out strMessage);
                return new ApiResponse<ShoppingCartVM>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<ShoppingCartVM>(ex);
            }
            return result;
        }
        [HttpGet("GetTrxTransactionFindById")]
        public async Task<ApiResponse<ShoppingCartVM>> GetTrxTransactionFindById(int id)
        {
            ApiResponse<ShoppingCartVM> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.GetTrxTransactionFindById(id, out strMessage);
                return new ApiResponse<ShoppingCartVM>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<ShoppingCartVM>(ex);
            }
        }
        [HttpPost("CreatePaymentUrl")]
        public async Task<ApiResponse<string>> CreatePaymentUrl([FromBody] VnPaymentRequestModel model)
        {
            ApiResponse<string> result;
            string strMessage = string.Empty;
            try
            {
                var data = _vnPayService.CreatePaymentUrl(HttpContext, model);
                return new ApiResponse<string>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<string>(ex);
            }
        }

        // vnpay hoàn tiền
        [HttpGet("refundVNPAY")]
        public async Task<ApiResponse<string>> CreateRèundVNPAY()
        {
            ApiResponse<string> result;
            string strMessage = string.Empty;
            try
            {
                string data = await _vnPayService.btnRefund_Click(HttpContext);
                return new ApiResponse<string>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<string>(ex);
            }
        }

        [HttpGet("PaymentExecute")]
        public async Task<ApiResponse<VnPaymentResponseModel>> PaymentExecute([FromQuery] IQueryCollection collections)
        {
            ApiResponse<VnPaymentResponseModel> result;
            string strMessage = string.Empty;
            try
            {
                var data = _vnPayService.PaymentExecute(collections);
                return new ApiResponse<VnPaymentResponseModel>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<VnPaymentResponseModel>(ex);
            }
            return result;
        }
        [HttpGet("GetTransaction")]
        public async Task<ApiResponse<string>> GetTransaction()
        {
            ApiResponse<string> result;
            string strMessage = string.Empty;
            try
            {
                var request = _httpContextAccessor.HttpContext.Request;
                var data = _vnPayService.PaymentCallBack(request, out strMessage);
                return new ApiResponse<string>(System.Net.HttpStatusCode.OK, strMessage, null);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<string>(ex);
            }
            return result;
        }
        // viết url khi thanh toán thành công
        [HttpGet("CheckPayment")]
        public async Task<IActionResult> CheckPayment()
        {
            string strMessage = string.Empty;
            var request = _httpContextAccessor.HttpContext.Request;
            var data = _vnPayService.PaymentCallBack(request, out strMessage);
            return Redirect($"http://localhost:4200/order-notification/{data.OrderId}");
        }
        // viết url khi thanh toán thành công
        [HttpGet("CheckPaymentOrder")]
        public async Task<IActionResult> CheckPaymentOrder()
        {
            string strMessage = string.Empty;
            var request = _httpContextAccessor.HttpContext.Request;
            var data = _vnPayService.PaymentCallBack(request, out strMessage);
            return Redirect($"http://localhost:4200/admin/list_order");
        }
        [HttpGet("GetCustomerTransaction")]
        public async Task<ApiResponse<CustomerTransactionDTO>> GetTransactionByOrderId(string email)
        {
            ApiResponse<CustomerTransactionDTO> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.GetCustomerTransaction(email, out strMessage);
                return new ApiResponse<CustomerTransactionDTO>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<CustomerTransactionDTO>(ex);
            }
        }

        [HttpPost("PriceGoShip")]
        public async Task<ApiResponseGoShip<List<ShipmentData>>> PriceGoShip([FromBody] ShipmentRequest goShip)
        {
            ApiResponseGoShip<List<ShipmentData>> result;
            string strMessage = string.Empty;
            try
            {
                string bodyInput = JsonConvert.SerializeObject(goShip);
                var dataResponse = await AppSettings.CallPcsApi_NotRetry<List<ShipmentData>>("/v2/rates", Method.Post, null, bodyInput);

                // Kiểm tra dữ liệu trả về và xử lý
                if (dataResponse != null && dataResponse.Code == System.Net.HttpStatusCode.OK)
                {
                    // Trả về kết quả thành công với dữ liệu
                    return new ApiResponseGoShip<List<ShipmentData>>(System.Net.HttpStatusCode.OK, dataResponse.Status, dataResponse.Data);
                }
                else
                {
                    // Xử lý trường hợp có lỗi xảy ra
                    strMessage = dataResponse.Status ?? "Có lỗi xảy ra";
                    result = new ApiResponseGoShip<List<ShipmentData>>(System.Net.HttpStatusCode.ExpectationFailed, strMessage, null);
                }
                result = new ApiResponseGoShip<List<ShipmentData>>(System.Net.HttpStatusCode.ExpectationFailed, strMessage, null);

            }
            catch (Exception ex)
            {
                // Xử lý ngoại lệ
                strMessage = "Có lỗi xảy ra";
                NLogger.log.Error(ex.ToString());
                result = new ApiResponseGoShip<List<ShipmentData>>(System.Net.HttpStatusCode.ExpectationFailed, strMessage, null);
            }
            return result;
        }

        [HttpGet("GetOrderStatus")]
        public async Task<ApiResponse<OrderStatusVM>> GetOrderStatus()
        {
            ApiResponse<OrderStatusVM> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.GetOrderStatus(out strMessage);
                return new ApiResponse<OrderStatusVM>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<OrderStatusVM>(ex);
            }
        }

        [HttpGet("GetMonneyTotal")]
        public async Task<ApiResponse<MoneyTotal>> GetMonneyTotal()
        {
            ApiResponse<MoneyTotal> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.getMonneyTotal(out strMessage);
                return new ApiResponse<MoneyTotal>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<MoneyTotal>(ex);
            }
        }

        [HttpGet("GetMonneyTotalByMonth")]
        public async Task<ApiResponse<List<MoneyMonth>>> GetMonneyTotalByMonth(int year)
        {
            ApiResponse<List<MoneyMonth>> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.getMonneyTotalByMonth(year, out strMessage);
                return new ApiResponse<List<MoneyMonth>>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<List<MoneyMonth>>(ex);
            }
        }


        [HttpGet("GetMonneyRevenue")]
        public async Task<ApiResponse<List<MoneyMonth>>> GetMonneyRevenue(int year)
        {
            ApiResponse<List<MoneyMonth>> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.getProfitByMonth(year, out strMessage);
                return new ApiResponse<List<MoneyMonth>>(System.Net.HttpStatusCode.OK, strMessage, data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<List<MoneyMonth>>(ex);
            }
        }

        [HttpGet("GenerateExcelReport")]
        public IActionResult DownloadExcelReport(int year)
        {
            var fileContents = _trxTransactionService.GenerateExcelReport(year);
            var contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            var fileName = "Updated_Report.xlsx";
            return File(fileContents, contentType, fileName);
        }


        [HttpGet("GetOrderDelivered")]
        public async Task<ApiResponse<List<OrderResponse>>> GetOrderDelivered()
        {
            ApiResponse<List<OrderResponse>> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.GetOrderDelivered(out strMessage);
                return new ApiResponse<List<OrderResponse>>(System.Net.HttpStatusCode.OK, "hheheheh", data);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<List<OrderResponse>>(ex);
            }
        }


        // Hủy đơn hàng khi đơn hàng có trạng thái là PENDING hoặc ONHOLD còn lại thì không thể hủy
        [HttpPut("CancelOrderId")]
        public async Task<ApiResponse<ShoppingCartVM>> CancelOrder(UpdateOrderStatus model)
        {
            ApiResponse<ShoppingCartVM> result;
            string strMessage = string.Empty;
            try
            {
                var data = _trxTransactionService.CancelOrder(model, out strMessage);
                return new ApiResponse<ShoppingCartVM>(System.Net.HttpStatusCode.OK, strMessage, null);
            }
            catch (Exception ex)
            {
                var handler = new GlobalExceptionHandler();
                return handler.HandleException<ShoppingCartVM>(ex);
            }
            return result;
        }
    }
}
