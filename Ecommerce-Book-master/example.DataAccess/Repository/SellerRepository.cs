using Ecommerce.DataAccess.Repository.IRepository;
using Ecommerce.Models;
using example_web_mvc.DataAccess.Data;

namespace Ecommerce.DataAccess.Repository
{
    public class SellerRepository : Repository<Seller>, ISellerRepository
    {
        private ApplicationDbContext _db;
        public SellerRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Update(Seller obj)
        {
            _db.Sellers.Update(obj);
        }
    }
}
