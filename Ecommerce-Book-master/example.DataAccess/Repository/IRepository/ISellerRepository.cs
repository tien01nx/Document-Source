using Ecommerce.Models;

namespace Ecommerce.DataAccess.Repository.IRepository
{
    public interface ISellerRepository : IRepository<Seller>
    {

        void Update(Seller obj);

    }
}
