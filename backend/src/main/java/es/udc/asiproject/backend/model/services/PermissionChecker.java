package es.udc.asiproject.backend.model.services;

import es.udc.asiproject.backend.model.exceptions.InstanceNotFoundException;
import es.udc.asiproject.backend.model.entities.user.User;

public interface PermissionChecker {

    void checkUserExists(Long userId) throws InstanceNotFoundException;

    User checkUser(Long userId) throws InstanceNotFoundException;

}
