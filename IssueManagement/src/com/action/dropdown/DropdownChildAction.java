package com.action.dropdown;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.common.CommonIssueAction;
import com.dao.dropdown.DropdownChildDao;
import com.vo.dropdown.DropdownChildVo;
import org.apache.log4j.Logger;

public class DropdownChildAction extends CommonIssueAction {
	
	static Logger log = Logger.getLogger(DropdownChildAction.class.getName());  

	public String getDropdownChild()
	{	
		List<DropdownChildVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=DropdownChildDao.getDropdownChild();
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
	
	public String getIssueType()
	{	
		List<DropdownChildVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=DropdownChildDao.getDropdownChildByParentId(1);
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
	
	public String getIssueSubtype()
	{	
		List<DropdownChildVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=DropdownChildDao.getDropdownChildByParentId(2);
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
	
	public String getHowReceived()
	{	
		List<DropdownChildVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=DropdownChildDao.getDropdownChildByParentId(3);
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
	
	public String getCondition()
	{	
		List<DropdownChildVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=DropdownChildDao.getDropdownChildByParentId(4);
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
	
	public String getDurationUnit()
	{	
		List<DropdownChildVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=DropdownChildDao.getDropdownChildByParentId(5);
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
