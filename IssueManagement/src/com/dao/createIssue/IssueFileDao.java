package com.dao.createIssue;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.createIssue.IssueFileVo;
import com.vo.searchIssue.IssueTransactVo;

public class IssueFileDao extends BaseDao {

	public static void addIssueFile(IssueFileVo ifv)
	{
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			
			System.out.println("dao file"+ifv);
			
			session.save(ifv);
			
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
			System.out.println(e);
			if(tx != null) {
				tx.rollback();
			}
			
		}
		
		return res;
	}
	
}
