using Ecommerce.Models;

namespace Ecommerce.DataAccess.Repository.IRepository
{
    public interface IUserProductViewRepository : IRepository<UserProductView>
    {

        void Update(UserProductView obj);


        Product GetProductById(int productId);

    }
}
