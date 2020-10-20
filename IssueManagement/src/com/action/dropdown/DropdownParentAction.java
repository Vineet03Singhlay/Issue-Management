package com.action.dropdown;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.common.CommonIssueAction;
import com.dao.dropdown.DropdownParentDao;
import com.vo.dropdown.DropdownParentVo;


public class DropdownParentAction extends CommonIssueAction {

    
	public String getDropdownParent()
	{	
		List<DropdownParentVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=DropdownParentDao.getDropdownParent();
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
