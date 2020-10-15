package com.dao.dropdown;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dao.common.CommonIssueDao;
import com.vo.dropdown.DropdownChildVo;

public class DropdownChildDao extends CommonIssueDao {
	
	public static List<DropdownChildVo> getDropdownChild()
	{
		List<DropdownChildVo> res=null;
		Session session=null;
		Transaction tx = null;
		try
		{
			session = getSession();
			tx = session.beginTransaction();
			String hql = "FROM DropdownChildVo";
			Query query = session.createQuery(hql);
			
			res= query.getResultList();
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
		
		return res;
	}

	public static List<DropdownChildVo> getDropdownChildByParentId(int dropdownParent)
	{
		List<DropdownChildVo> res=null;
		Session session=null;
		Transaction tx = null;
		try
		{
			session = getSession();
			tx = session.beginTransaction();
			String hql = "FROM DropdownChildVo dc WHERE dc.dropdownParent = :dropdownParent order by dc.id asc";
			Query query = session.createQuery(hql);
			query.setParameter("dropdownParent",dropdownParent);
			res= query.getResultList();
			tx.commit();	
			
		}
		catch(Exception e)
		{
			System.out.println(e);
			if(tx != null)
			{
				tx.rollback();
			}
			
		}
		
		
		return res;
	}
}
