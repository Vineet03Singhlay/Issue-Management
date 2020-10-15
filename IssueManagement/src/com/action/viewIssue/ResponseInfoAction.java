package com.action.viewIssue;

import java.io.PrintWriter;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;
import org.hibernate.SessionFactory;

import com.action.BaseAction;
import com.dao.BaseDao;
import com.dao.product.ProductDao;
import com.dao.viewIssue.ResponseInfoDao;
import com.vo.product.ProductVo;
import com.vo.viewIssue.ResponseInfoVo;


public class ResponseInfoAction extends BaseAction {
	
	public static SessionFactory sf= BaseDao.getSessionFactory();
	
	private Integer id;
    private String userName;
    private String responseInfo;
    private Date responseTime;
    private String justified;
    private String responsibleParty;
    private String status;
    private String document;
    private String issueNumber;

        public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getResponseInfo() {
        return responseInfo;
    }

    public void setResponseInfo(String responseInfo) {
        this.responseInfo = responseInfo;
    }

    public Date getResponseTime() {
        return responseTime;
    }

    public void setResponseTime(Date responseTime) {
        this.responseTime = responseTime;
    }

    public String getJustified() {
        return justified;
    }

    public void setJustified(String justified) {
        this.justified = justified;
    }

    public String getResponsibleParty() {
        return responsibleParty;
    }

    public void setResponsibleParty(String responsibleParty) {
        this.responsibleParty = responsibleParty;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getIssueNumber() {
        return issueNumber;
    }

    public void setIssueNumber(String issueNumber) {
        this.issueNumber = issueNumber;
    }
    
    public void addResponse()
	{	
		
		ResponseInfoVo ri = new ResponseInfoVo();
		
		
		Integer responseInfoSequence = BaseDao.getNextSequencevalue("response_info_seq").intValue();
		ri.setId(responseInfoSequence);
		ri.setIssueNumber(issueNumber);
		ri.setUserName("Admin");
		ri.setResponseInfo(responseInfo);
		ri.setResponseTime(new Date());
		ri.setJustified(justified);
		ri.setStatus(status);
		ri.setDocument(document);
		ri.setResponsibleParty(responsibleParty);
		System.out.println(issueNumber+" "+responseInfo+" "+justified+" "+status+" "+document+" "+responsibleParty);
		
		ResponseInfoDao.addResponse(ri);
		
		
		
	}
    
    public String getResponse()
	{	
		List<ResponseInfoVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=ResponseInfoDao.getResponse();
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
