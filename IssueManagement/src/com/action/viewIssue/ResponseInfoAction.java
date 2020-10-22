package com.action.viewIssue;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Lob;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;
import org.hibernate.SessionFactory;

import com.action.BaseAction;
import com.dao.BaseDao;
import com.dao.viewIssue.ResponseFileDao;
import com.dao.viewIssue.ResponseInfoDao;
import com.vo.viewIssue.ResponseFileVo;
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
    
    private int responseId;
    private byte[] infoFile;
    private String fileName;
    private String fileType;

    
    private File[] uploadedFile;
	private String[] uploadedFileFileName;
	private String[] uploadedFileContentType;
	
	public File[] getUploadedFile() {
		return uploadedFile;
	}


	public void setUploadedFile(File[] uploadedFile) {
		this.uploadedFile = uploadedFile;
	}


	public String[] getUploadedFileFileName() {
		return uploadedFileFileName;
	}


	public void setUploadedFileFileName(String[] uploadedFileFileName) {
		this.uploadedFileFileName = uploadedFileFileName;
	}


	public String[] getUploadedFileContentType() {
		return uploadedFileContentType;
	}


	public void setUploadedFileContentType(String[] uploadedFileContentType) {
		this.uploadedFileContentType = uploadedFileContentType;
	}


	public int getResponseId() {
        return responseId;
    }

    public void setResponseId(int responseId) {
        this.responseId = responseId;
    }

    public byte[] getInfoFile() {
        return infoFile;
    }

    public void setInfoFile(byte[] infoFile) {
        this.infoFile = infoFile;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

	
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
    
    public void addResponse() throws IOException
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
		
		for(int i=0;i<uploadedFile.length;i++)
		{
			if(uploadedFile[i]==null)
			{
				System.out.println("upladed file is null ");
			}
		
			else
			{
				Integer responseFileSequence = BaseDao.getNextSequencevalue("response_file_seq").intValue();
				FileInputStream inputStream = new FileInputStream(uploadedFile[i]);
				byte[] fileInBytes=new byte[(int)uploadedFile[i].length()];
				inputStream.read(fileInBytes);
				
				System.out.println("uploaded file content is "+uploadedFileContentType[i]);
				System.out.println("uploaded filename is "+uploadedFileFileName[i]);
				
				ResponseFileVo rfv = new ResponseFileVo();
				
				rfv.setId(responseFileSequence);
				rfv.setFileName(uploadedFileFileName[i]);
				rfv.setFileType(uploadedFileContentType[i]);
				rfv.setInfoFile(fileInBytes);
				rfv.setResponseId(responseInfoSequence);
				ResponseFileDao.addResponseFile(rfv);
				
			}
		
		}
		
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
			System.out.println(e);
		}
		return "";
		
	}
    
    public String getResponseById()
	{	
		List<ResponseInfoVo> res=null;
		ObjectMapper mapper = new ObjectMapper();
		try
		{
		res=ResponseInfoDao.getResponseById(issueNumber);
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
