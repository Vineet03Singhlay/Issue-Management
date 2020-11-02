package com.action.viewIssue;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.apache.log4j.Logger;

import com.dao.createIssue.IssueFileDao;
import com.vo.createIssue.IssueFileVo;

public class DownloadFileAction {
	
	static Logger log = Logger.getLogger(DownloadFileAction.class.getName());  
	
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
		
		log.info(fileId);
		IssueFileVo ifv = IssueFileDao.getIssueFileById(fileId);
		contentLength = ifv.getIssueFile().length;
		fileName = ifv.getFileName();
		inputStream = new ByteArrayInputStream(ifv.getIssueFile());
        
		log.info(ifv.getFileName());
		log.info(ifv.getIssueFile().length);
		return "success";
		
	}

}
