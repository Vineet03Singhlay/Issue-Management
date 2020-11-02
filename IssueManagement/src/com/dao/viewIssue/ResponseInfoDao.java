package com.dao.viewIssue;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.viewIssue.ResponseInfoVo;

public class ResponseInfoDao extends BaseDao {
	
	static Logger log = Logger.getLogger(ResponseInfoDao.class.getName());  
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
			log.info(e);
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
			log.info(e);
			if(tx != null) {
				tx.rollback();
			}
			
		}
		return res;
	}
	
	public static List<ResponseInfoVo> getResponseById(String issueNumber)
	{
		List<ResponseInfoVo> res = null;
		Session session = null;
		Transaction tx = null;
		try {
			session = getSession();
			tx = session.beginTransaction();
			String hql = "FROM ResponseInfoVo i WHERE i.issueNumber = :issueNumber order by i.id asc";
			Query query = session.createQuery(hql);
			query.setParameter("issueNumber",issueNumber);
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

