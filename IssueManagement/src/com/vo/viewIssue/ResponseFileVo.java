package com.vo.viewIssue;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "RESPONSE_FILE")
public class ResponseFileVo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "RESPONSE_ID")
    private int responseId;
    @Basic(optional = false)
    @Lob
    @Column(name = "INFO_FILE")
    private byte[] infoFile;
    @Column(name = "FILE_NAME")
    private String fileName;
    @Column(name = "FILE_TYPE")
    private String fileType;

    public ResponseFileVo() {
    }

    public ResponseFileVo(Integer id) {
        this.id = id;
    }

    public ResponseFileVo(Integer id, int responseId, byte[] infoFile) {
        this.id = id;
        this.responseId = responseId;
        this.infoFile = infoFile;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ResponseFileVo)) {
            return false;
        }
        ResponseFileVo other = (ResponseFileVo) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.vo.viewIssue.ResponseFileVo[ id=" + id + " ]";
    }
    
}
