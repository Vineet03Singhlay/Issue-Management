package com.dao.searchIssue;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.BaseDao;
import com.vo.searchIssue.SavedSearchesVo;

public class SavedSearchesDao extends BaseDao {

	static Logger log = Logger.getLogger(SavedSearchesDao.class.getName());  
	public static void addSearchDetail(SavedSearchesVo ssv)
	{
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			
			session.save(ssv);
			
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
	
	public static List<SavedSearchesVo> getSearchDetailByUserId(Integer userId)
	{
		List<SavedSearchesVo> res=null;
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			String hql = "FROM SavedSearchesVo i WHERE i.userId = :userId order by i.id asc";
			Query query = session.createQuery(hql);
			query.setParameter("userId",userId);
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
	
	public static SavedSearchesVo getSearchDetailBySearchName(String searchName, Integer userId)
	{
		SavedSearchesVo res=null;
		
		Session session= null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			String hql = "FROM SavedSearchesVo i WHERE i.userId = :userId and i.searchName = :searchName order by i.id asc";
			Query query = session.createQuery(hql);
			query.setParameter("userId",userId);
			query.setParameter("searchName", searchName);
			res= (SavedSearchesVo)query.getResultList().get(0);
			
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
