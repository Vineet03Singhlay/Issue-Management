package com.dao.viewIssue;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.product.ProductVo;
import com.vo.viewIssue.ResponseInfoVo;

public class ResponseInfoDao extends BaseDao {
	
	public static void addResponse(ResponseInfoVo ri)
	{
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			
			
			session.save(ri);
			
			tx.commit();
		}
		catch(Exception e)
		{
			System.out.println(e);
			if(tx !=null)
			{
				tx.rollback();
			}
		}
		
		
		
	}
	
	public static List<ResponseInfoVo> getResponse()
	{
		List<ResponseInfoVo> res = null;
		Session session = null;
		Transaction tx = null;
		try {
			session = getSession();
			tx = session.beginTransaction();
			String hql = "FROM ResponseInfoVo";
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

