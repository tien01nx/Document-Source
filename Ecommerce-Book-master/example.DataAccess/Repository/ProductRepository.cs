using Ecommerce.DataAccess.Repository.IRepository;
using Ecommerce.Models;
using Ecommerce.Models;
using Ecommerce.Models.DTO;
using example_web_mvc.DataAccess.Data;
using Microsoft.EntityFrameworkCore;


namespace Ecommerce.DataAccess.Repository
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        private ApplicationDbContext _db;

        public ProductRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public List<ProductWithTotalCount> GetProductCountAll()
        {
            return _db.OrderDetails
            .GroupBy(od => od.ProductId)
            .Select(group => new
            {
                ProductId = group.Key,
                TotalCount = group.Sum(x => x.Count)
            })
            .Join(
                _db.Products.Include(p => p.ProductImages),
                od => od.ProductId,
                p => p.Id,
                (od, p) => new ProductWithTotalCount
                {
                    ProductDTO = new ProductDTO
                    {
                        Id = p.Id,
                        Title = p.Title,
                        Author = p.Author,
                        Price100 = p.Price100,
                        // Copy other properties
                        ProductImages = p.ProductImages.Select(pi => new ProductImage
                        {
                            Id = pi.Id,
                            ImageUrl = pi.ImageUrl
                            // Copy other properties
                        }).ToList()
                    },
                    TotalCount = od.TotalCount
                }).ToList();

        }

        public List<ProductDTO> GetProductsByCategoryName(string categoryName)
        {
            IQueryable<Product> query = _db.Products
                                             .Include(p => p.Category)
                                             .Include(p => p.ProductImages);

            if (!string.IsNullOrEmpty(categoryName))
            {
                query = query.Where(p => p.Category.Name == categoryName);
            }
            var products =  query.OrderByDescending(p => p.PublishDate).ToList();

            return products.Select(p => new ProductDTO
            {
                Id = p.Id,
                Title = p.Title,
          
                Author = p.Author,
                PublishDate = p.PublishDate,
              
                ListPrice = p.ListPrice,
             
                Price100 = p.Price100,
                CategoryName = p.Category?.Name,
                ProductImages = p.ProductImages.Select(pi => new ProductImage
                {
                    Id = pi.Id,
                    ImageUrl = pi.ImageUrl
                }).ToList()
            }).ToList();
        }

        public List<ProductDTO> GetProductsByPublishDateAndCategoryName(string ?categoryName)
        {
            var query = _db.Products
        .Include(p => p.ProductImages)
        .Include(p => p.Category)
        .Include(p => p.Seller)
        .OrderByDescending(p => p.PublishDate)
        .Select(p => new ProductDTO
        {
            Id = p.Id,
            Title = p.Title,
            Author = p.Author,
            PublishDate = p.PublishDate,
            ListPrice = p.ListPrice,
            Price100 = p.Price100,
            CategoryName = p.Category.Name,
            ProductImages = p.ProductImages.Select(pi => new ProductImage
            {
                Id = pi.Id,
                ImageUrl = pi.ImageUrl
            }).ToList()
        });

            if (categoryName != null)
            {
                query = query.Where(p => p.CategoryName == categoryName);
            }

            var products = query.ToList();

            return products;
        }

        public IEnumerable<Product> GetProductsBySellerApplicationUserId(string applicationUserId)
        {
            return _db.Products.Where(p => p.Seller.ApplicationUserId == applicationUserId).ToList();
        }

        public List<ProductDTO> GetSoldProductsInLastMonth()
        {
            var oneMonthAgo = DateTime.Now.AddMonths(-1);

            var orderDetailsList = _db.OrderDetails
         .Include(od => od.Product)
         .ThenInclude(p => p.ProductImages)
         .Include(od => od.Product)
         .ThenInclude(p => p.Seller)
         .Where(od => od.OrderHeader.OrderDate >= oneMonthAgo)
         .ToList();

            var soldProducts = orderDetailsList
                    .Select(od => new ProductDTO
                    {
                        Id = od.Product.Id,
                        Title = od.Product.Title,
                        Author = od.Product.Author,
                        ListPrice = od.Product.ListPrice,
                        Price100 = od.Product.Price100,
                        StoreName = od.Product.Seller.StoreName,
                        PublishDate = od.Product.PublishDate,
                        ISBN = od.Product.ISBN,
                        Description = od.Product.Description,
                        //CategoryName = od.Product.Category.Name,
                        ImageUrls = od.Product.ProductImages.Select(pi => pi.ImageUrl).ToList(),
                        Price = od.Product.Price,
                        Price50 = od.Product.Price50,
                    })
                    .GroupBy(p => p.Id)
                    .Select(g => g.First())
                    .ToList();

            return soldProducts;



        }

        public List<ProductWithTotalCount> GetTopOrderedProducts()
        {
            return _db.OrderDetails
            .GroupBy(od => od.ProductId)
            .Select(group => new
            {
                ProductId = group.Key,
                TotalCount = group.Sum(x => x.Count)
            })
            .OrderByDescending(x => x.TotalCount)
            .Join(
                _db.Products.Include(p => p.ProductImages),
                od => od.ProductId,
                p => p.Id,
                (od, p) => new ProductWithTotalCount
                {
                    ProductDTO = new ProductDTO
                    {
                        Id = p.Id,
                        Title = p.Title,
                        Author = p.Author,
                        Price100 = p.Price100,
                        // Copy other properties
                        ProductImages = p.ProductImages.Select(pi => new ProductImage
                        {
                            Id = pi.Id,
                            ImageUrl = pi.ImageUrl
                            // Copy other properties
                        }).ToList()
                    },
                    TotalCount = od.TotalCount
                }
    )
    .ToList();
        }

        public void Update(Product obj)
        {
            var objFormdb = _db.Products.FirstOrDefault(u => u.Id == obj.Id);
            if (objFormdb != null)
            {
                objFormdb.Title = obj.Title;
                objFormdb.ISBN = obj.ISBN;
                objFormdb.Price = obj.Price;
                objFormdb.Price50 = obj.Price50;

                objFormdb.ListPrice = obj.ListPrice;
                objFormdb.Price100 = obj.Price100;
                objFormdb.Description = obj.Description;
                objFormdb.CategoryId = obj.CategoryId;
                objFormdb.Author = obj.Author;
                objFormdb.Quantity = obj.Quantity;
                objFormdb.ProductImages = obj.ProductImages;
                //objFormdb.ImageUrl = obj.ImageUrl;
                //if (obj.ImageUrl != null)
                //{
                //    objFormdb.ImageUrl = obj.ImageUrl;
                //}
            }
        }
    }
}