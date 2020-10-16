package com.vo.createIssue;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;


@Entity
@Table(name = "ISSUE_FILE")
public class IssueFileVo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "ISSUE_NUMBER")
    private String issueNumber;
    @Basic(optional = false)
    @Column(name = "FILE_NAME")
    private String fileName;
    @Basic(optional = false)
    @Column(name = "FILE_TYPE")
    private String fileType;
    @Basic(optional = false)
    @Lob
    @Column(name = "ISSUE_FILE")
    private byte[] issueFile;

    public IssueFileVo() {
    }

    public IssueFileVo(Integer id) {
        this.id = id;
    }

    public IssueFileVo(Integer id, String issueNumber, byte[] issueFile) {
        this.id = id;
        this.issueNumber = issueNumber;
        this.issueFile = issueFile;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getIssueNumber() {
        return issueNumber;
    }

    public void setIssueNumber(String issueNumber) {
        this.issueNumber = issueNumber;
    }

    public byte[] getIssueFile() {
        return issueFile;
    }

    public void setIssueFile(byte[] issueFile) {
        this.issueFile = issueFile;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof IssueFileVo)) {
            return false;
        }
        IssueFileVo other = (IssueFileVo) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.vo.createIssue.IssueFileVo[ id=" + id + " ]";
    }
    
}
