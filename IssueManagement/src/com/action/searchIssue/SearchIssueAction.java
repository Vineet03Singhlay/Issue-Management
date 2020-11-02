package com.action.searchIssue;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.BaseAction;
import com.dao.searchIssue.SearchIssueDao;
import com.vo.searchIssue.IssueTransactVo;

public class SearchIssueAction extends BaseAction {

	static Logger log = Logger.getLogger(SearchIssueAction.class.getName());  

	public String getIssueTransact()
	{	
		List<IssueTransactVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=SearchIssueDao.getIssueTransact();
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
