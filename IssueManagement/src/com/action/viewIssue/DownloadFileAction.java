package com.action.viewIssue;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import com.dao.createIssue.IssueFileDao;
import com.vo.createIssue.IssueFileVo;

public class DownloadFileAction {
	
	private Integer fileId;

	private InputStream inputStream;
    private String fileName;
    private long contentLength;
 
	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public long getContentLength() {
		return contentLength;
	}

	public void setContentLength(long contentLength) {
		this.contentLength = contentLength;
	}

	public Integer getFileId() {
		return fileId;
	}

	public void setFileId(Integer fileId) {
		this.fileId = fileId;
	}
	
	public String downloadIssueFile()
	{	
		
		System.out.println(fileId);
		IssueFileVo ifv = IssueFileDao.getIssueFileById(fileId);
		contentLength = ifv.getIssueFile().length;
		fileName = ifv.getFileName();
		inputStream = new ByteArrayInputStream(ifv.getIssueFile());
        
		System.out.println(ifv.getFileName());
		System.out.println(ifv.getIssueFile().length);
		return "success";
		
	}

}
