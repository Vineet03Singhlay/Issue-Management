package com.action.createIssue;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Date;

import org.hibernate.SessionFactory;

import com.action.BaseAction;
import com.dao.BaseDao;
import com.dao.createIssue.CreateIssueDao;
import com.dao.createIssue.IssueFileDao;
import com.vo.createIssue.IssueFileVo;
import com.vo.searchIssue.IssueTransactVo;

public class CreateIssueAction extends BaseAction{
	
	public static SessionFactory sf= BaseDao.getSessionFactory();
    
	private Integer id;
    
    private String issueNumber;
    
    private String issueType;
    
    private String issueSubtype;
    
    private String reportedBy;
    
    private Date issueDate;
    
    private String issueDescription;
    
    private String howReceived;
    
    private String justified;
    
    private String status;
    
    private String responsibleParty;
    
    private String justifiedReason;
    
    private String condition;
    
    private String duration;
    
    private String durationUnit;
    
    private String storageTemperature;
    
    private String humidity;
   
    private String texture;
    
    private String productSize;
    
    private String aroma;
    
    private String flavor;
    
    private String taste;
   
    private String actualColor;
    
    private String expectedColor;
    
    private String notes;
    
    private String createdBy;
    
    private Date createdTime;
    
    private String modifiedBy;
   
    private Date modifiedDate;
    
    private String product;
    
    private String supplier;
    
    private String location;
    
    private String locationType;

    
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

    public String getJustified() {
        return justified;
    }

    public void setJustified(String justified) {
        this.justified = justified;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getResponsibleParty() {
        return responsibleParty;
    }

    public void setResponsibleParty(String responsibleParty) {
        this.responsibleParty = responsibleParty;
    }

    public String getJustifiedReason() {
        return justifiedReason;
    }

    public void setJustifiedReason(String justifiedReason) {
        this.justifiedReason = justifiedReason;
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
	
    public void createIssue() throws IOException
	{	
		
		IssueTransactVo it=new IssueTransactVo();
		
		
		Integer issueTransactSequence = BaseDao.getNextSequencevalue("issue_transact_seq").intValue();
		it.setId(issueTransactSequence);
		String issueNumFormat = issueNumberFormat(issueTransactSequence);
		it.setIssueNumber(issueNumFormat);
		
		it.setIssueDate(issueDate);
		it.setCreatedTime(new Date());
		it.setCreatedBy("admin");
		it.setIssueType(issueType);
		it.setIssueSubtype(issueSubtype);
		it.setProduct(product);
		it.setSupplier(supplier);
		it.setIssueDescription(issueDescription);
		it.setLocation(location);
		it.setLocationType(locationType);
		it.setReportedBy(reportedBy);
		it.setHowReceived(howReceived);
		it.setCondition(condition);
		it.setDurationUnit(durationUnit);
		it.setDuration(duration);
		it.setStorageTemperature(storageTemperature);
		it.setHumidity(humidity);
		it.setNotes(notes);
		it.setTaste(taste);
		it.setFlavor(flavor);
		it.setActualColor(actualColor);
		it.setExpectedColor(expectedColor);
		it.setTexture(texture);
		it.setProductSize(productSize);
		it.setAroma(aroma);
		
		CreateIssueDao.createIssue(it);
		
		for(int i=0;i<uploadedFile.length;i++)
		{
			if(uploadedFile[i]==null)
			{
				System.out.println("upladed file is null ");
			}
		
			else
			{
				Integer issueFileSequence = BaseDao.getNextSequencevalue("issue_file_seq").intValue();
				FileInputStream inputStream = new FileInputStream(uploadedFile[i]);
				byte[] fileInBytes=new byte[(int)uploadedFile[i].length()];
				inputStream.read(fileInBytes);
				
				System.out.println("uploaded file content is "+uploadedFileContentType[i]);
				System.out.println("uploaded filename is "+uploadedFileFileName[i]);
				
				IssueFileVo ifv = new IssueFileVo();
				
				ifv.setId(issueFileSequence);
				ifv.setFileName(uploadedFileFileName[i]);
				ifv.setFileType(uploadedFileContentType[i]);
				ifv.setIssueFile(fileInBytes);
				ifv.setIssueNumber(issueNumFormat);
				IssueFileDao.addIssueFile(ifv);
				
			
			}
		
		}
		
		System.out.println(it);
		
	}
    
    public String issueNumberFormat(Integer sequenceNum) {
    	
    	String[] isList = {"ISM000000","ISM00000","ISM0000","ISM000","ISM00","ISM0","ISM" };
    	String str = String.valueOf(sequenceNum);
    	int len = str.length();
    	String issueNumber = isList[(len-1)].concat(str);
    	return issueNumber;
    }
    
}
