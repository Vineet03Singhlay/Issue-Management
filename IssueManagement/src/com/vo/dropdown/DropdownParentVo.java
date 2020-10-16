
package com.vo.dropdown;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


@Entity
@Table(name = "DROPDOWN_PARENT")
public class DropdownParentVo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "DROPDOWN_PARENT_VALUE")
    private String dropdownParentValue;

    public DropdownParentVo() {
    }

    public DropdownParentVo(Integer id) {
        this.id = id;
    }

    public DropdownParentVo(Integer id, String dropdownParentValue) {
        this.id = id;
        this.dropdownParentValue = dropdownParentValue;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDropdownParentValue() {
        return dropdownParentValue;
    }

    public void setDropdownParentValue(String dropdownParentValue) {
        this.dropdownParentValue = dropdownParentValue;
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
        if (!(object instanceof DropdownParentVo)) {
            return false;
        }
        DropdownParentVo other = (DropdownParentVo) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.vo.dropdown.DropdownParentVo[ id=" + id + " ]";
    }
    
}
