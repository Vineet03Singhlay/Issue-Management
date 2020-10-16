package com.dao.createIssue;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.searchIssue.IssueTransactVo;

public class CreateIssueDao extends BaseDao {
	
	public static void createIssue(IssueTransactVo it)
	{
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			
			System.out.println("create dao"+it);
			session.save(it);
			
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

}
