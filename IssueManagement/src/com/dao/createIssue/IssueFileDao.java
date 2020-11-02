package com.dao.createIssue;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.createIssue.IssueFileVo;

public class IssueFileDao extends BaseDao {

	static Logger log = Logger.getLogger(IssueFileDao.class.getName());  
	public static void addIssueFile(IssueFileVo ifv)
	{
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			
			session.save(ifv);
			
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
	
	public static List<IssueFileVo> getIssueFile(String issueNumber)
	{
		List<IssueFileVo> res=null;
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			String hql = "FROM IssueFileVo i WHERE i.issueNumber = :issueNumber order by i.id asc";
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
	
	public static IssueFileVo getIssueFileById(Integer id)
	{
		IssueFileVo res=null;
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			String hql = "FROM IssueFileVo i WHERE i.id = :id";
			Query query = session.createQuery(hql);
			query.setParameter("id",id);
			res= (IssueFileVo)query.getResultList().get(0);
			
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
