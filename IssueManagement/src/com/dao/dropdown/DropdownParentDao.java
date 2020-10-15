package com.dao.dropdown;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.common.CommonIssueDao;
import com.vo.dropdown.DropdownParentVo;

public class DropdownParentDao extends CommonIssueDao {
	
	public static List<DropdownParentVo> getDropdownParent()
	{
		List<DropdownParentVo> res=null;
		Session session=null;
		Transaction tx = null;
		try
		{
			session = getSession();
			tx = session.beginTransaction();
			String hql = "FROM DropdownParentVo";
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
