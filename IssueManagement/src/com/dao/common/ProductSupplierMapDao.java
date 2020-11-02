package com.dao.common;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.vo.common.ProductSupplierMapVo;

public class ProductSupplierMapDao extends CommonIssueDao {
	
	static Logger log = Logger.getLogger(ProductSupplierMapDao.class.getName());  
	public static List<ProductSupplierMapVo> getProductSupplierMap()
	{
		List<ProductSupplierMapVo> res = null;
		Session session = null;
		Transaction tx = null;
		try {
			session = getSession();
			tx = session.beginTransaction();
			String hql = "FROM ProductSupplierMapVo";
			Query query = session.createQuery(hql);
			res = query.getResultList();
			tx.commit();
		}
		catch(Exception e)
		{
			log.info(e);
			if(tx != null) {
				tx.rollback();
			}
		}
		return res;
	}

}
