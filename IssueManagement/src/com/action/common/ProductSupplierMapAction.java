package com.action.common;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.dao.common.ProductSupplierMapDao;
import com.vo.common.ProductSupplierMapVo;
import org.apache.log4j.Logger;


public class ProductSupplierMapAction extends CommonIssueAction {

	static Logger log = Logger.getLogger(ProductSupplierMapAction.class.getName());  

	public String getProductSupplierMap()
	{	
		List<ProductSupplierMapVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=ProductSupplierMapDao.getProductSupplierMap();
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setContentType("application/json");
		PrintWriter out=response.getWriter();
		log.info(mapper.writeValueAsString(res));
		out.print(mapper.writeValueAsString(res));
		out.flush();
		}
		catch(Exception e)
		{
			log.info(e);
		}
		return "";
		
	}
	
    
}
