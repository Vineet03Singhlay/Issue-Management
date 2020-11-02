package com.dao.viewIssue;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.searchIssue.IssueTransactVo;

public class ViewIssueDao extends BaseDao {
	
	static Logger log = Logger.getLogger(ViewIssueDao.class.getName());  
	public static List<IssueTransactVo> getIssueListWithValues(String issueNumber)
	{
		List<IssueTransactVo> res=null;
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			String hql = "FROM IssueTransactVo i WHERE i.issueNumber = :issueNumber order by i.id asc";
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
