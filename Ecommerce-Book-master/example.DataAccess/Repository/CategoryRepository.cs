
using Ecommerce.DataAccess.Repository.IRepository;
using Ecommerce.Models;
using example_web_mvc.DataAccess.Data;
using System.Linq.Expressions;

namespace Ecommerce.DataAccess.Repository
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        private ApplicationDbContext _db;
        public CategoryRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public bool ExistsBy(Expression<Func<Category, bool>> filter)
        {
            return dbSet.Any(filter);
        }

        public void Update(Category obj)
        {
            _db.Categories.Update(obj);
        }
    }
}
