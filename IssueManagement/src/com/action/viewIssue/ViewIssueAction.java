package com.action.viewIssue;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.BaseAction;
import com.dao.viewIssue.ViewIssueDao;
import com.vo.searchIssue.IssueTransactVo;


public class ViewIssueAction extends BaseAction {

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
		System.out.println(mapper.writeValueAsString(res));
		out.print(mapper.writeValueAsString(res));
		out.flush();
		}
		catch(Exception e)
		{
			System.out.println("Exception occured in method getLocation()");
			System.out.println(e);
		}
		return "";
		
	}
	
	
}