package com.dao;

import java.math.BigDecimal;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.query.NativeQuery;


public class BaseDao {

	private static SessionFactory sessionFactory;
	static Logger log = Logger.getLogger(BaseDao.class.getName());  
	
	public static SessionFactory getSessionFactory() {
	        if (sessionFactory == null) {
	            StandardServiceRegistry standardRegistry = new StandardServiceRegistryBuilder().configure().build();
	            Metadata metadata = new MetadataSources(standardRegistry).getMetadataBuilder().build();
	            sessionFactory = metadata.getSessionFactoryBuilder().build();
	        }
	        return sessionFactory;
	    }

	public static Session getSession()
	
	{
		return getSessionFactory().getCurrentSession();
	}
	
	public static BigDecimal getNextSequencevalue(String sequence_name)
	{
		BigDecimal val = null;
		
		String sql="SELECT "+sequence_name+".NEXTVAL AS SEQ FROM DUAL";
		
		Session session = null;
		Transaction tx=null;
		try
		{
			session = getSession();
			tx=session.beginTransaction();
			NativeQuery nq=session.createSQLQuery(sql);
			nq.executeUpdate();
			val=(BigDecimal)nq.uniqueResult();
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
		
		return val;
	}

}
