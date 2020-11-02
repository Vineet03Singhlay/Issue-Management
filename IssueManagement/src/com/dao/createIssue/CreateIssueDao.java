package com.dao.createIssue;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.searchIssue.IssueTransactVo;

public class CreateIssueDao extends BaseDao {

	static Logger log = Logger.getLogger(CreateIssueDao.class.getName());  

	public static void createIssue(IssueTransactVo it)
	{
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			
			session.save(it);
			
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

}
