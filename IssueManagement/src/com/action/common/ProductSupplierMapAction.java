package com.action.common;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.dao.common.ProductSupplierMapDao;
import com.vo.common.ProductSupplierMapVo;


public class ProductSupplierMapAction extends CommonIssueAction {

    
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
		System.out.println(mapper.writeValueAsString(res));
		out.print(mapper.writeValueAsString(res));
		out.flush();
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		return "";
		
	}
	
    
}
