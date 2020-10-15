package com.dao.location;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.common.CommonIssueDao;
import com.vo.location.LocationVo;

public class LocationDao extends CommonIssueDao {
	
	public static List<LocationVo> getLocation()
	{
		List<LocationVo> res=null;
		Session session=null;
		Transaction tx = null;
		try
		{
			session = getSession();
			tx = session.beginTransaction();
			String hql = "FROM LocationVo";
			Query query = session.createQuery(hql);
			
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
