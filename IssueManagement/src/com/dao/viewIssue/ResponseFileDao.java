package com.dao.viewIssue;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.viewIssue.ResponseFileVo;

public class ResponseFileDao extends BaseDao{
	
	static Logger log = Logger.getLogger(ResponseFileDao.class.getName());  
	public static void addResponseFile(ResponseFileVo rfv)
	{
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			
			session.save(rfv);
			
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
	
	public static List<ResponseFileVo> getResponseFile(String issueNumber)
	{
		List<ResponseFileVo> res=null;
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			String hql = "FROM ResponseFileVo i WHERE i.responseId in (select j.id FROM ResponseInfoVo j where j.issueNumber =: issueNumber) order by i.id asc";
			Query query = session.createQuery(hql);
			query.setParameter("issueNumber",issueNumber);
			res= query.getResultList();
			
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
