package com.action.location;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.common.CommonIssueAction;
import com.dao.location.LocationDao;
import com.vo.location.LocationVo;


public class LocationAction extends CommonIssueAction {

	static Logger log = Logger.getLogger(LocationAction.class.getName());
	public String getLocation()
	{	
		List<LocationVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=LocationDao.getLocation();
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
