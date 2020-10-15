
package com.vo.location;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


@Entity
@Table(name = "LOCATION_TYPE")
public class LocationTypeVo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "LOCATION_TYPE_VALUE")
    private String locationTypeValue;
    @Basic(optional = false)
    @Column(name = "LOCATION_TYPE_ID")
    private String locationTypeId;

    public LocationTypeVo() {
    }

    public LocationTypeVo(Integer id) {
        this.id = id;
    }

    public LocationTypeVo(Integer id, String locationTypeValue, String locationTypeId) {
        this.id = id;
        this.locationTypeValue = locationTypeValue;
        this.locationTypeId = locationTypeId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLocationTypeValue() {
        return locationTypeValue;
    }

    public void setLocationTypeValue(String locationTypeValue) {
        this.locationTypeValue = locationTypeValue;
    }

    public String getLocationTypeId() {
        return locationTypeId;
    }

    public void setLocationTypeId(String locationTypeId) {
        this.locationTypeId = locationTypeId;
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
        if (!(object instanceof LocationTypeVo)) {
            return false;
        }
        LocationTypeVo other = (LocationTypeVo) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.vo.LocationTypeVo[ id=" + id + " ]";
    }
    
}
