package com.action.viewIssue;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.BaseAction;
import com.dao.viewIssue.ViewIssueDao;
import com.vo.searchIssue.IssueTransactVo;


public class ViewIssueAction extends BaseAction {

	static Logger log = Logger.getLogger(ViewIssueAction.class.getName());  
	private String issueNumber;
	
	public String getIssueNumber() {
        return issueNumber;
    }

    public void setIssueNumber(String issueNumber) {
        this.issueNumber = issueNumber;
    }
	
	public String getIssueListWithValues()
	{	
		
		List<IssueTransactVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=ViewIssueDao.getIssueListWithValues(issueNumber);
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