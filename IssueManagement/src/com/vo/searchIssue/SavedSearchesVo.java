package com.vo.searchIssue;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "SAVED_SEARCHES")
public class SavedSearchesVo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Column(name = "ISSUE_NUMBER")
    private String issueNumber;
    @Column(name = "ISSUE_TYPE")
    private String issueType;
    @Column(name = "ISSUE_SUBTYPE")
    private String issueSubtype;
    @Column(name = "LOCATION_TYPE")
    private String locationType;
    @Column(name = "LOCATION")
    private String location;
    @Column(name = "JUSTIFIED")
    private String justified;
    @Column(name = "PRODUCT")
    private String product;
    @Column(name = "SUPPLIER")
    private String supplier;
    @Column(name = "ISSUE_STATUS")
    private String issueStatus;
    @Column(name = "RESPONSIBLE_PARTY")
    private String responsibleParty;
    @Column(name = "ISSUE_CREATED")
    @Temporal(TemporalType.TIMESTAMP)
    private Date issueCreated;
    @Column(name = "ISSUE_CLOSED")
    @Temporal(TemporalType.TIMESTAMP)
    private Date issueClosed;
    @Basic(optional = false)
    @Column(name = "SEARCH_NAME")
    private String searchName;
    @Basic(optional = false)
    @Column(name = "USER_ID")
    private int userId;

    public SavedSearchesVo() {
    }

    public SavedSearchesVo(Integer id) {
        this.id = id;
    }

    public SavedSearchesVo(Integer id, String searchName, int userId) {
        this.id = id;
        this.searchName = searchName;
        this.userId = userId;
    }

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

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof SavedSearchesVo)) {
            return false;
        }
        SavedSearchesVo other = (SavedSearchesVo) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.vo.searchIssue.SavedSearchesVo[ id=" + id + " ]";
    }
    
}
