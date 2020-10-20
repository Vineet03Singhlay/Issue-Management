package com.action.searchIssue;

import java.io.PrintWriter;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.action.BaseAction;
import com.dao.BaseDao;
import com.dao.searchIssue.SavedSearchesDao;
import com.vo.searchIssue.SavedSearchesVo;

public class SavedSearchesAction extends BaseAction{
	
	private Integer id;
    private String issueNumber;
    private String issueType;
    private String issueSubtype;
    private String locationType;
    private String location;
    private String justified;
    private String product;
    private String supplier;
    private String issueStatus;
    private String responsibleParty;
    private Date issueCreated;
    private Date issueClosed;
    private String searchName;
    private int userId;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIssueNumber() {
        return issueNumber;
    }

    public void setIssueNumber(String issueNumber) {
        this.issueNumber = issueNumber;
    }

    public String getIssueType() {
        return issueType;
    }

    public void setIssueType(String issueType) {
        this.issueType = issueType;
    }

    public String getIssueSubtype() {
        return issueSubtype;
    }

    public void setIssueSubtype(String issueSubtype) {
        this.issueSubtype = issueSubtype;
    }

    public String getLocationType() {
        return locationType;
    }

    public void setLocationType(String locationType) {
        this.locationType = locationType;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getJustified() {
        return justified;
    }

    public void setJustified(String justified) {
        this.justified = justified;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public String getIssueStatus() {
        return issueStatus;
    }

    public void setIssueStatus(String issueStatus) {
        this.issueStatus = issueStatus;
    }

    public String getResponsibleParty() {
        return responsibleParty;
    }

    public void setResponsibleParty(String responsibleParty) {
        this.responsibleParty = responsibleParty;
    }

    public Date getIssueCreated() {
        return issueCreated;
    }

    public void setIssueCreated(Date issueCreated) {
        this.issueCreated = issueCreated;
    }

    public Date getIssueClosed() {
        return issueClosed;
    }

    public void setIssueClosed(Date issueClosed) {
        this.issueClosed = issueClosed;
    }

    public String getSearchName() {
        return searchName;
    }

    public void setSearchName(String searchName) {
        this.searchName = searchName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

	public void addSearchDetail() {
		SavedSearchesVo ssv = new SavedSearchesVo();
		
		Integer savedSearchesSequence = BaseDao.getNextSequencevalue("saved_searches_seq").intValue();
		
		ssv.setId(savedSearchesSequence);
		ssv.setIssueNumber(issueNumber);
		ssv.setIssueType(issueType);
		ssv.setIssueSubtype(issueSubtype);
		ssv.setLocationType(locationType);
		ssv.setLocation(location);
		ssv.setJustified(justified);
		ssv.setProduct(product);
		ssv.setSupplier(supplier);
		ssv.setIssueStatus(issueStatus);
		ssv.setResponsibleParty(responsibleParty);
		ssv.setIssueCreated(issueCreated);
		ssv.setIssueClosed(issueClosed);
		ssv.setSearchName(searchName);
		ssv.setUserId(userId);
		
		SavedSearchesDao.addSearchDetail(ssv);
		
	}
	
	public String getSearchDetailByUserId()
	{	
		
		List<SavedSearchesVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=SavedSearchesDao.getSearchDetailByUserId(userId);
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
	
	public String getSearchDetailBySearchName()
	{	
		
		SavedSearchesVo res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=SavedSearchesDao.getSearchDetailBySearchName(searchName, userId);
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
