using Infrastucture.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastucture.Repositories.Abstraction
{
    public interface IRepository<T> where T : class
    {
        Task<T?> Find(int uId);

        IQueryable<T> Query(Expression<Func<T, bool>>? expression = null);

        Task Store(T document);

        void WithDbContext(DatabaseContext dbContext);

        //todo remove in future
        Task CommitChanges();

    }
}
