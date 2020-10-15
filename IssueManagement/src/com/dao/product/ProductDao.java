package com.dao.product;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.common.CommonIssueDao;
import com.vo.product.ProductVo;

public class ProductDao extends CommonIssueDao {
	
	public static List<ProductVo> getProduct()
	{
		List<ProductVo> res = null;
		Session session = null;
		Transaction tx = null;
		try {
			session = getSession();
			tx = session.beginTransaction();
			String hql = "FROM ProductVo";
			Query query = session.createQuery(hql);
			res = query.getResultList();
			tx.commit();
		}
		catch(Exception e)
		{
			System.out.println(e);
			if(tx != null) {
				tx.rollback();
			}
			
		}
		return res;
	}

}
