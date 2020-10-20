package com.action.viewIssue;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.BaseAction;
import com.dao.createIssue.IssueFileDao;
import com.dao.viewIssue.ResponseFileDao;
import com.vo.createIssue.IssueFileVo;
import com.vo.viewIssue.ResponseFileVo;

public class ResponseFileAction extends BaseAction {

	private String issueNumber;
	private int responseId;
    
	public String getIssueNumber() {
        return issueNumber;
    }

    public void setIssueNumber(String issueNumber) {
        this.issueNumber = issueNumber;
    }
    public int getResponseId() {
        return responseId;
    }

    public void setResponseId(int responseId) {
        this.responseId = responseId;
    }
    
	public String getIssueFile()
	{	
		
		List<IssueFileVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=IssueFileDao.getIssueFile(issueNumber);
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
	
	public String getResponseFile() {
		
		List<ResponseFileVo> res = null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
			res = ResponseFileDao.getResponseFile(issueNumber);
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
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
