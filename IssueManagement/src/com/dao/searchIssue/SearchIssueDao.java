package com.dao.searchIssue;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.searchIssue.IssueTransactVo;

public class SearchIssueDao extends BaseDao {
	
	static Logger log = Logger.getLogger(SearchIssueDao.class.getName());  
	public static List<IssueTransactVo> getIssueTransact()
	{
		List<IssueTransactVo> res=null;
		Session session=null;
		Transaction tx = null;
		try
		{
			session = getSession();
			tx = session.beginTransaction();
			String hql = "FROM IssueTransactVo";
			Query query = session.createQuery(hql);
			
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
