package com.action.product;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.common.CommonIssueAction;
import com.dao.product.ProductDao;
import com.vo.product.ProductVo;


public class ProductAction extends CommonIssueAction {

        	
	public String getProduct()
	{	
		List<ProductVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=ProductDao.getProduct();
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setContentType("application/json");
		PrintWriter out=response.getWriter();
		System.out.println(mapper.writeValueAsString(res));
		out.print(mapper.writeValueAsString(res));
		out.flush();
		}
		catch(Exception e)
		{
			System.out.println("Exception occured in method gethow received()");
			System.out.println(e);
		}
		return "";
		
	}
    
    
}
