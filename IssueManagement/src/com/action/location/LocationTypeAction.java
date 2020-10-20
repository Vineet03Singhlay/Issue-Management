package com.action.location;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.common.CommonIssueAction;
import com.dao.location.LocationTypeDao;
import com.vo.location.LocationTypeVo;


public class LocationTypeAction extends CommonIssueAction {

	
	public String getLocationType()
	{	
		List<LocationTypeVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=LocationTypeDao.getLocationType();
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
