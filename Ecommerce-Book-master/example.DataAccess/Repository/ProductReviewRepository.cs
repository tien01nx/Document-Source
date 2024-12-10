using Ecommerce.DataAccess.Repository.IRepository;
using Ecommerce.Models;
using example_web_mvc.DataAccess.Data;

namespace Ecommerce.DataAccess.Repository
{
    public class ProductReviewRepository : Repository<ProductReview>, IProductReviewRepository
    {
        private ApplicationDbContext _db;
        public ProductReviewRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }



        public void Update(ProductReview obj)
        {
            _db.ProductReviews.Update(obj);
        }
    }
}
