package com.vo.searchIssue;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.PostLoad;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.hibernate.annotations.Formula;


@Entity
@Table(name = "ISSUE_TRANSACT")
public class IssueTransactVo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "ISSUE_NUMBER")
    private String issueNumber;
    @Basic(optional = false)
    @Column(name = "ISSUE_TYPE")
    private String issueType;
    
    @Formula("(select ddc.DROPDOWN_CHILD_VALUE from  DROPDOWN_CHILD ddc where ddc.DROPDOWN_CHILD_KEY=ISSUE_TYPE)" )
    private String issueTypeValue;
    
    @Basic(optional = false)
    @Column(name = "ISSUE_SUBTYPE")
    private String issueSubtype;
    
   @Formula("(select ddc.DROPDOWN_CHILD_VALUE from  DROPDOWN_CHILD ddc where ddc.DROPDOWN_CHILD_KEY=ISSUE_SUBTYPE)" )
    private String issueSubtypeValue;
    
    
    @Basic(optional = false)
    @Column(name = "REPORTED_BY")
    private String reportedBy;
    @Basic(optional = false)
    @Column(name = "ISSUE_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date issueDate;
    @Basic(optional = false)
    @Column(name = "ISSUE_DESCRIPTION")
    private String issueDescription;
    @Basic(optional = false)
    @Column(name = "HOW_RECEIVED")
    private String howReceived;
    
    @Formula("(select ddc.DROPDOWN_CHILD_VALUE from  DROPDOWN_CHILD ddc where ddc.DROPDOWN_CHILD_KEY=HOW_RECEIVED)" )
    
    private String howReceivedValue;
    
    
    @Column(name = "CONDITION")
    private String condition;
    
    @Formula("(select ddc.DROPDOWN_CHILD_VALUE from  DROPDOWN_CHILD ddc where ddc.DROPDOWN_CHILD_KEY=CONDITION)" )
    
    private String conditionValue;
    
    
    @Column(name = "DURATION")
    private String duration;
    @Column(name = "DURATION_UNIT")
    private String durationUnit;
    
    @Formula("(select ddc.DROPDOWN_CHILD_VALUE from  DROPDOWN_CHILD ddc where ddc.DROPDOWN_CHILD_KEY=DURATION_UNIT)" )
    
    private String durationUnitValue;
    
    
    @Column(name = "STORAGE_TEMPERATURE")
    private String storageTemperature;
    @Column(name = "HUMIDITY")
    private String humidity;
    @Column(name = "TEXTURE")
    private String texture;
    @Column(name = "PRODUCT_SIZE")
    private String productSize;
    @Column(name = "AROMA")
    private String aroma;
    @Column(name = "FLAVOR")
    private String flavor;
    @Column(name = "TASTE")
    private String taste;
    @Column(name = "ACTUAL_COLOR")
    private String actualColor;
    @Column(name = "EXPECTED_COLOR")
    private String expectedColor;
    @Column(name = "NOTES")
    private String notes;
    @Basic(optional = false)
    @Column(name = "CREATED_BY")
    private String createdBy;
    @Basic(optional = false)
    @Column(name = "CREATED_TIME")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdTime;
    @Column(name = "MODIFIED_BY")
    private String modifiedBy;
    @Column(name = "MODIFIED_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date modifiedDate;
    @Basic(optional = false)
    @Column(name = "PRODUCT")
    private String product;
    
    @Formula("(select p.PRODUCT_NAME from  PRODUCT p where p.PRODUCT_ID=PRODUCT)" )
    private String productValue;
    
    
    @Basic(optional = false)
    @Column(name = "SUPPLIER")
    private String supplier;
    
    @Formula("(select s.SUPPLIER_NAME from  SUPPLIER s where s.SUPPLIER_ID=SUPPLIER)" )
    private String supplierValue;
    
    
    @Basic(optional = false)
    @Column(name = "LOCATION")
    private String location;
   
    
    @Formula("(select l.LOCATION_VALUE from  LOCATION l where l.LOCATION_ID=LOCATION)" )
    private String locationValue;
    

    
    @Column(name = "LOCATION_TYPE")
    private String locationType;
    
    @Formula("(select lt.LOCATION_TYPE_VALUE from  LOCATION_TYPE lt where lt.LOCATION_TYPE_ID=LOCATION_TYPE)" )
    private String locationTypeValue;
    
    
   
	public IssueTransactVo() {
    }

    public IssueTransactVo(Integer id) {
        this.id = id;
    }

    
    public IssueTransactVo(Integer id, String issueNumber, String issueType, String issueSubtype, String reportedBy, Date issueDate, String issueDescription, String howReceived, String createdBy, Date createdTime, String product, String supplier, String location, String locationType) {
        this.id = id;
        this.issueNumber = issueNumber;
        this.issueType = issueType;
        this.issueSubtype = issueSubtype;
        this.reportedBy = reportedBy;
        this.issueDate = issueDate;
        this.issueDescription = issueDescription;
        this.howReceived = howReceived;
        this.createdBy = createdBy;
        this.createdTime = createdTime;
        this.product = product;
        this.supplier = supplier;
        this.location = location;
        this.locationType = locationType;
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

    public String getReportedBy() {
        return reportedBy;
    }

    public void setReportedBy(String reportedBy) {
        this.reportedBy = reportedBy;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public String getIssueDescription() {
        return issueDescription;
    }

    public void setIssueDescription(String issueDescription) {
        this.issueDescription = issueDescription;
    }

    public String getHowReceived() {
        return howReceived;
    }

    public void setHowReceived(String howReceived) {
        this.howReceived = howReceived;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDurationUnit() {
        return durationUnit;
    }

    public void setDurationUnit(String durationUnit) {
        this.durationUnit = durationUnit;
    }

    public String getStorageTemperature() {
        return storageTemperature;
    }

    public void setStorageTemperature(String storageTemperature) {
        this.storageTemperature = storageTemperature;
    }

    public String getHumidity() {
        return humidity;
    }

    public void setHumidity(String humidity) {
        this.humidity = humidity;
    }

    public String getTexture() {
        return texture;
    }

    public void setTexture(String texture) {
        this.texture = texture;
    }

    public String getProductSize() {
        return productSize;
    }

    public void setProductSize(String productSize) {
        this.productSize = productSize;
    }

    public String getAroma() {
        return aroma;
    }

    public void setAroma(String aroma) {
        this.aroma = aroma;
    }

    public String getFlavor() {
        return flavor;
    }

    public void setFlavor(String flavor) {
        this.flavor = flavor;
    }

    public String getTaste() {
        return taste;
    }

    public void setTaste(String taste) {
        this.taste = taste;
    }

    public String getActualColor() {
        return actualColor;
    }

    public void setActualColor(String actualColor) {
        this.actualColor = actualColor;
    }

    public String getExpectedColor() {
        return expectedColor;
    }

    public void setExpectedColor(String expectedColor) {
        this.expectedColor = expectedColor;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLocationType() {
        return locationType;
    }

    public void setLocationType(String locationType) {
        this.locationType = locationType;
    }
    
    
	public String getIssueTypeValue() {
		return issueTypeValue;
	}

	public void setIssueTypeValue(String issueTypeValue) {
		this.issueTypeValue = issueTypeValue;
	}

	public String getIssueSubtypeValue() {
		return issueSubtypeValue;
	}

	public void setIssueSubtypeValue(String issueSubtypeValue) {
		this.issueSubtypeValue = issueSubtypeValue;
	}

	public String getHowReceivedValue() {
		return howReceivedValue;
	}

	public void setHowReceivedValue(String howReceivedValue) {
		this.howReceivedValue = howReceivedValue;
	}

	public String getConditionValue() {
		return conditionValue;
	}

	public void setConditionValue(String conditionValue) {
		this.conditionValue = conditionValue;
	}

	public String getDurationUnitValue() {
		return durationUnitValue;
	}

	public void setDurationUnitValue(String durationUnitValue) {
		this.durationUnitValue = durationUnitValue;
	}

	public String getProductValue() {
		return productValue;
	}

	public void setProductValue(String productValue) {
		this.productValue = productValue;
	}

	public String getSupplierValue() {
		return supplierValue;
	}

	public void setSupplierValue(String supplierValue) {
		this.supplierValue = supplierValue;
	}

	
	public String getLocationTypeValue() {
		return locationTypeValue;
	}

	public void setLocationTypeValue(String locationTypeValue) {
		this.locationTypeValue = locationTypeValue;
	}

	
	public String getLocationValue() {
		return locationValue;
	}

	public void setLocationValue(String locationValue) {
		this.locationValue = locationValue;
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
        if (!(object instanceof IssueTransactVo)) {
            return false;
        }
        IssueTransactVo other = (IssueTransactVo) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "IssueTransactVo [id=" + id + ", issueNumber=" + issueNumber + ", issueType=" + issueType
				+ ", issueTypeValue=" + issueTypeValue + ", issueSubtype=" + issueSubtype + ", issueSubtypeValue="
				+ issueSubtypeValue + ", reportedBy=" + reportedBy + ", issueDate=" + issueDate + ", issueDescription="
				+ issueDescription + ", howReceived=" + howReceived + ", howReceivedValue=" + howReceivedValue
				+ ", condition=" + condition + ", conditionValue="
				+ conditionValue + ", duration=" + duration + ", durationUnit=" + durationUnit + ", durationUnitValue="
				+ durationUnitValue + ", storageTemperature=" + storageTemperature + ", humidity=" + humidity
				+ ", texture=" + texture + ", productSize=" + productSize + ", aroma=" + aroma + ", flavor=" + flavor
				+ ", taste=" + taste + ", actualColor=" + actualColor + ", expectedColor=" + expectedColor + ", notes="
				+ notes + ", createdBy=" + createdBy + ", createdTime=" + createdTime + ", modifiedBy=" + modifiedBy
				+ ", modifiedDate=" + modifiedDate + ", product=" + product + ", productValue=" + productValue
				+ ", supplier=" + supplier + ", supplierValue=" + supplierValue + ", location=" + location
				+ ", locationValue=" + locationValue + ", locationType=" + locationType + ", locationTypeValue="
				+ locationTypeValue + "]";
	}

	
	
   
}

